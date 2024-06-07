import React from "react"
import Home from "./pages/Home"
import DefautTheme from "./config/theme"
import GlobalStyled from "./config/GlobalStyled"

const App: React.FC = () => {

  return (
    <React.Fragment>
      <DefautTheme>
        <Home />
        <GlobalStyled/>
      </DefautTheme>
    </React.Fragment>
  )
}

export default App
