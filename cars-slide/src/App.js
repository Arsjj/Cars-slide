import { useState } from 'react'
import Car from './Car';
import './App.css';


const cars = [
  {
    url: 'https://images.unsplash.com/photo-1609138315745-4e44ac3bbd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZlcnJhcml8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    id: 1,
    class: 'slide',
    name: 'Ferari'
  },
  {
    url: 'https://images.unsplash.com/photo-1628273148878-b9ebaec15818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    id: 3,
    class: 'slide',
    name: 'Toyota'
  },
  {
    url: 'https://images.unsplash.com/photo-1642201855395-1c8b44e6e42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
    id: 2,
    class: 'slide active',
    name: 'Aston Martin'
  },
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    id: 4,
    class: 'slide',
    name: 'Porshe'

  },
  {
    url: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    id: 5,
    class: 'slide',
    name: 'Audi'
  }
]



function Slide() {
  const [state, setState] = useState(cars)

  const slideChangeHandler = (id) => {
    setState(cars.map(item => item.id === id ? item.class = 'slide active' : item.class = 'slide'))
  }

  return (
    <div>
      <div className="container">
        {cars.map((item) => {
          return <Car
            clas={item.class}
            url={item.url} key={item.id}
            name={item.name}
            slideChangeHandler={slideChangeHandler}
            id={item.id} />
        })}
      </div>
    </div >
  )
}

export default Slide