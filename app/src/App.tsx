import { useReducer } from "react"
import Form from "./components/Form"
import { ActivityReducer, initialState } from './reducers/activity-redcer';


function App() {
  const [state, dispatch] = useReducer(ActivityReducer, initialState)

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl max-auto">
          <Form
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
