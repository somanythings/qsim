(ns figwheel.connect.build-drtsim (:require [quilcljd_sim.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "drtsim", :websocket-url "ws://localhost:3449/figwheel-ws"})

