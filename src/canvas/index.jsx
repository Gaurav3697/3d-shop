import { Canvas } from "@react-three/fiber"
import {Environment, Center} from "@react-three/drei"
import Shirt from "./Shirt.jsx"

const CanvasModel = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset="city"/>
        <Center>
          {/* <Shirt/> */}
        </Center>
      </Canvas>
    </div>
  )
}

export default CanvasModel
