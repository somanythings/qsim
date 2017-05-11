(ns quilcljd-sim.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/text-font (q/create-font "Arial" 28 true))
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 5
   :queue [10 30 20 10 50 60 10 1]
   :desks [200 110 50 20 0 50 20] 
   })

(def desk-width 40)
(def desk-gap 5)

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (:color state) ;;(mod (+ (:color state) 0.7) 255)
   :angle (:angle state) ;;(+ (:angle state) 0.1)
   :desks (map (fn [n] (mod (- n 0.6 ) 255)) (:desks state)) 
   })


(defn draw-desks [desks]
  (doall (map-indexed 
   (fn [i n]
     (let [space (+ desk-gap desk-width)]
        (q/fill 55 n 255)
        (q/rect (* i space) 20 desk-width desk-width)))
   desks
   )))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (let [desks (:desks state)]
    (draw-desks desks))
  ;; (let [a 1]
  ;;   (q/fill 210 120 220)
  ;;   (q/rect 2 20 40 40))
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  (let [angle (:angle state)
        x (* 150 (q/cos angle))
        y (* 150 (q/sin angle))]
    ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      ; Draw the circle.
      (q/ellipse x y 100 100))))

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
