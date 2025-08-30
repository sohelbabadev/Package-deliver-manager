import MainWrapper from './components/mainWrapper'
import { PackageStateProvider } from './context/packageContext'

function App() {
  return (
    <PackageStateProvider>
      <MainWrapper/>
    </PackageStateProvider>
  )
}

export default App
