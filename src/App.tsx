import './App.css'
import { Layout } from './components/Layout/Layout'
import { useInitializeGame } from './hooks/useInitializeGame'

function App() {
  useInitializeGame();

  return (
    <Layout />
  )
}

export default App
