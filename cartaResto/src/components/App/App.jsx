import { BrowserRouter } from 'react-router-dom'
import '../Styles/App.css'
import AppRoutes from './AppRoutes.jsx'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
