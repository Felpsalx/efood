import {BrowserRouter} from "react-router-dom"
import Rotas from '../routes'
import { GlobalCss } from "./styles"
import Footer from '../src/Components/Footer'
import { Provider } from "react-redux"
import { store } from "./store"
function App() {
  return (
    <>
			<Provider store={store} >
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
			</Provider>
    </>
  )
}

export default App
