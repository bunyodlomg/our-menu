import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Cards from './components/Cards'
import Loader from './components/Loader'
import { useFetch } from './hooks/useFetch'


function App() {
  const [url, setUrl] = useState('https://my-json-server.typicode.com/bunyodlomg/db/menu')
  const { data, error, isPanding } = useFetch(url)

  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>

      </div>
      <Buttons setUrl={setUrl} />
      {isPanding && <Loader />}
      {!isPanding && <Cards data={data} />}
    </section>
  )
}

export default App