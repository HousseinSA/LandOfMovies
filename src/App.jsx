import {AllRoutes} from "./Routes/AllRoutes"
import {Header, Footer} from "./Components"
import {useState} from "react"
import {useLocation} from "react-router-dom"
export default function App() {
  const {pathname} = useLocation()
  const [location, setLocation] = useState(pathname)
  const [changingSearch, setChangingSearch] = useState("")
  return (
    <div>
      <Header
        changing={setChangingSearch}
        changingValue={changingSearch}
        location={setLocation}
      />
      <AllRoutes location={location} />
      <Footer />
    </div>
  )
}
