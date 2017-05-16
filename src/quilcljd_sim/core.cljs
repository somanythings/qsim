(ns quilcljd-sim.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; (def clojure.lang.PersistentQueue )
(def PQ cljs.core.PersistentQueue )
;; (defmethod print-method cljs.core.PersistenQueue [q, w] ; Overload the print for queues
;;   (print-method '<- w)
;;   (print-method (seq q) w)
;;   (print-method '-< w))


(defonce pqe #queue [])

(defn setup []
                                        ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
                                        ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/text-font (q/create-font "Arial" 28 true))
                                        ; setup function returns initial state. It contains
                                        ; circle color and position.
  {:color 0
   :angle 5
   :queue #queue [40 10 30 100 20 10 90 200 250 10 30 40 70 ]
   :desks [4 0 0 0 0]
   })

(def max-person 100)
(def desk-width 40)
(def desk-gap 40)
(def person-scale 50)

(def desks [30 2 0 10])
(def queue #queue [99 22 30])

(defn next-please [desks
                   queue]
  (let [first-zero (.indexOf desks 0)
        qhead (peek queue)]
    (println (str "first zero: " first-zero))
    (if (neg? first-zero)
      {:desks desks :queue queue}
      {
       :desks (assoc desks first-zero qhead)
       :queue (pop queue)
       })))


(defn update-state [state]
                                        ; Update sketch state by changing circle color and position.
  (let [ticked {:color (:color state) ;;(mod (+ (:color state) 0.7) 255)
                :angle (:angle state) ;;(+ (:angle state) 0.1)
                :desks (into [] (map (fn [n]
                                       (if (neg? n)
                                         0
                                         (- n .1)))
                                     (:desks state)))
                :queue (:queue state)
                }
        moved-pax (next-please (:desks ticked) (:queue ticked))]
    (println ticked)
    (merge ticked moved-pax)))


(defn draw-desks [desks]
  (doall (map-indexed
          (fn [i n]
            (let [space (+ desk-gap desk-width)]
              (q/fill 55 n 255 )
              (q/rect (* i space) 20 desk-width desk-width)))
          desks)))

(def person-base-size 0.4)

(defn draw-queue [queue]
  (doall (map-indexed
          (fn [i n]
            (let [
                  person-pct (/ n max-person)
                  person-red (* person-pct 255)
                  person-size (* person-scale person-pct)
                  space (+ person-scale 8)
                  x (* i space)
                  ]
              (q/fill person-red 55 255)
              (q/with-translation [50 10]
                (q/ellipse x 100 person-scale person-size))
              ))
          queue)))

(let [q (conj pqe 1 2 3 4)]
  (doall (map #(+ 1 %1) q)))

(defn pq [s]
  (apply conj #queue [] s))


(== 4 (.indexOf [1 2 3 4 0] 0))
(== 3 (.indexOf [1 2 3 4 0] 4))
(== 0 (.indexOf [1 2 3 4 0] 1))
(== 0 (.indexOf [1 2 3 4 0] 9))
(.indexOf [1 2 3 4 0] 9)


(defn draw-state [state]
                                        ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
                                        ; Set circle color.
  (q/with-translation [40 400]
    (draw-desks (:desks state)))
  (draw-queue (:queue state))
  ;; (let [a 1]
  ;;   (q/fill 210 120 220)
  ;;   (q/rect 2 20 40 40))
  (q/fill (:color state) 255 255))

(q/defsketch quilcljd-sim
  :host "quilcljd-sim"
  :size [500 500]
                                        ; setup function called only once, during sketch initialization.
  :setup setup
                                        ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
                                        ; This sketch uses functional-mode middleware.
                                        ; Check quil wiki for more info about middlewares and particularly
                                        ; fun-mode.
  :middleware [m/fun-mode])
