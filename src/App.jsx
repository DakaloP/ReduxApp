
import AppContext from "./store/AppContext"
import { useContext } from "react"
import Button from "./Components/Button"

function App() {
const {counter} =useContext(AppContext)

  return (
    <>
    <div>
      <h1>Counter {counter}</h1>
   <Button />
    </div>
    </>
  )
}

export default App
