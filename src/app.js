import './styles/app.css'



import Header from './Components/Header/Header'
import LeftMenu from './Components/LeftMenu/LeftMenu'
import EmailView from './Components/EmailView/EmailView'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
