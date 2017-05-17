(ns quilcljd-sim.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;; (def clojure.lang.PersistentQueue )
;; (def PQ cljs.core.PersistentQueue )
;; (defmethod print-method cljs.core.PersistenQueue [q, w] ; Overload the print for queues
;;   (print-method '<- w)
;;   (print-method (seq q) w)
;;   (print-method '-< w))


(defonce pqe #queue [])

(defn random-queue [] (into cljs.core.PersistentQueue/EMPTY (take 450 (repeatedly #(rand-int 250)))))

(defn ordered-queue [] (into cljs.core.PersistentQueue/EMPTY (take 400 (range 20 200 2))))

;;[40 10 30 100 20 10 90 200 250 10 30 40 70 ]

(defn setup []
                                        ; Set frame rate to 30 frames per second.
  (q/frame-rate 20)
                                        ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/text-font (q/create-font "Arial" 28 true))
                                        ; setup function returns initial state. It contains
                                        ; circle color and position.
  {
   :queue (random-queue)
   :desks (into [] (take 30 (repeat 0)))
   })

(def max-person 100)
(def desk-width 40)
(def desk-gap 40)
(def person-scale 10)

(defn next-please [desks
                   queue]
  (let [first-zero (.indexOf desks 0)
        qhead (peek queue)]
    (if (neg? first-zero)
      {:desks desks :queue queue}
      {
       :desks (assoc desks first-zero qhead)
       :queue (pop queue)
       })))


(defn update-state [state]
                                        ; Update sketch state by changing circle color and position.
  (let [
        new-desks (into [] (map (fn [n]
                                  (if (or (zero? n) (neg? n))
                                    0
                                    (- n 1)))
                                (:desks state)))
        already-complete? (:queue-complete state)
        new-tick (inc (:tickid state))
        new-complete (if already-complete?
                       already-complete?
                       (if (empty? (:queue state))
                         new-tick
                         nil))
        ticked {
                :desks new-desks
                :queue (:queue state)
                :tickid new-tick
                :queue-complete new-complete}
        moved-pax (next-please (:desks ticked) (:queue ticked))]
    (merge ticked moved-pax)))


(defn draw-desks [desks]
  (doall (map-indexed
          (fn [i n]
            (let [space (+ desk-gap desk-width)
                  offset (* i space)
                  ]
              (q/fill 20 20 20)
              (q/text (int n) offset 10)
              (q/rect offset 20 desk-width desk-width)
              (q/fill 55 n 255 )
              (q/rect offset 20 desk-width (* desk-width (/ n 255)))))
          desks)))

(def person-base-size 0.4)
(defn draw-person [i n]
  (let [
        person-pct (/ n max-person)
        person-red (* person-pct 255)
        person-size (* person-scale person-pct)
        space (+ person-scale 8)
        x (* i space)
        y 100
        ]
    ;; (println "draw-person " i n x y person-red)
    (q/fill person-red 55 255)
    (q/with-translation [50 10]
      (q/ellipse x y person-scale person-size))))

(defn draw-queue-row [queue]
  (doall (map-indexed draw-person queue)))

(def row-height 20)

(defn draw-queue-row-pos [i queue]
  (let [y (* i row-height)
        rotation-angle (if (even? i) q/PI 0)
        ]
    (println "draw-row " y rotation-angle)
    (q/with-translation [10 y]
      (draw-queue-row queue))))

(defn partition-queue [queue]
  (let [pp (partition 40 queue)]
    pp))

(defn draw-queue-rows [queue-rows]
  (doall (map-indexed draw-queue-row-pos queue-rows)))

(defn draw-queue [queue]
  (-> queue
      partition-queue
      draw-queue-rows))

(defn pq [s]
  (apply conj #queue [] s))

(defn draw-state [state]
                                        ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
                                        ; Set circle color.
  (q/with-translation [40 400]
    (draw-desks (:desks state)))
  (draw-queue (:queue state))
  ;; (let [a 1]
  (println (:tickid state))
  (q/fill 0)
  (q/text (str (:tickid state)) 40 40 )
  (q/text (str "Queue Complete in: " (:queue-complete state)) 200 40 )
  ;;   (q/fill 210 120 220)
  ;;   (q/rect 2 20 40 40))
  (q/fill (:color state) 255 255))

(q/defsketch quilcljd-sim
  :host "quilcljd-sim"
  :size [1300 500]
                                        ; setup function called only once, during sketch initialization.
  :setup setup
                                        ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
                                        ; This sketch uses functional-mode middleware.
                                        ; Check quil wiki for more info about middlewares and particularly
                                        ; fun-mode.
  :middleware [m/fun-mode])
