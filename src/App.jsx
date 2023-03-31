import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AllMenu from './pages/AllMenu'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Shakes from './pages/Shakes'
import Loader from './components/Loader'
import { useFetch } from './hooks/useFetch'
import NotFound from './components/notFound'
function App() {
  const { isPanding, error } = useFetch()

  return (
    <Router>
      <Header />
      {isPanding && <Loader />}
      {!isPanding && <Routes>
        <Route path='/' element={<AllMenu />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/shakes' element={<Shakes />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>}
    </Router>
  )
}

export default App