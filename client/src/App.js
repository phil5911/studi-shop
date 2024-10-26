/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './App.css';
import { ListArticles, TestComponent, FormDelivery, Compteur, AdviceComponent } from './Components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import margueritaimg from './img/OIP (1).jpg'
import { useEffect } from 'react'
import api from './configs/api'
import Recoil from 'recoil'

// fausses données
const fakeData = [
  { name: 'Marguerita', price: 12 },
  { name: '4 saisons', price: 13, img: margueritaimg },
  { name: 'Napolitaine', price: 15 },
  { name: 'La spéciale Luigi', price: 14 },
  { name: 'Calzone', price: 16 }
]

let point = 0

const addSomePoint = () => {
  point = point + 1
  console.log(point)
}

function App() {
  /*useEffect(() => {
    api.get('/pizzas')
      .then((response) => {
        response.status === 200
          ? console.log(response.data)
          : console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])*/

  return (
    <Recoil.RecoilRoot>
      <Router>
        <div className="App">
          <header className="App-header"> ''

            <Routes>
              <Route path='/' element={<ListArticles articles={fakeData} />} />
              <Route path='/List' element={<ListArticles articles={fakeData} />} />
              <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />} />
              <Route path='/Pommes' element={<h1>Quel idée des pommes sur une  pizza ?!</h1>} />
              <Route path='/Delivery' element={<FormDelivery />} />
              <Route path='/Compteur' element={<Compteur />} />
              <Route path='/Advice' element={<AdviceComponent />} />
            </Routes>
          </header>
        </div>
      </Router>
    </Recoil.RecoilRoot>
  )
}

export default App











