import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

const Header = (course)=>{
  return(
    <div>
      <p>Nombre del curso: {course.info}</p>
    </div>
  )
}
const Content = (cont)=>{
  return(
    <ul>
      {cont.array.map(item=>(
        <li key={item.key}>Parte {item.num}: {item.info} ({item.count} ejercicios) </li>
      ))}
    </ul>
  )
}
const Total = (qty)=>{
  return(
    <div>
      <p>Total de ejercicios: {Number(qty.ex1) + Number(qty.ex2) + Number(qty.ex3)}</p>
    </div>
  )
}

const App = () => {
  const course = 'Web languages'
  const part1 = 'Introduction to React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a Component'
  const exercises3 = 14

  const content = [
    {key:'p1', num:"1", info:"Introducción a React", count:10},
    {key:'p2', num:"2", info:"Uso de props para pasar datos", count:7},
    {key:'p3', num:"3", info:"Estado de un componente", count:14}
  ]
  return (
    <div>
      <h1><Header info="Lenguajes Web"/></h1>
      <p>
        <Content array={content}/>
      </p>
      <p><Total ex1="10" ex2="7" ex3="14" /></p>
    </div>
  )
}

root.render(<App />)