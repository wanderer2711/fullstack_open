import React from 'react'

const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise} </p>
    </div>
  )
}
const Content = (props) => {

  return (
    <div>
      <Part part ={props.part1} exercise1 = {props.exercise1} />
      <Part part ={props.part2} exercise1 = {props.exercise2} />
      <Part part ={props.part3} exercise1 = {props.exercise3} />
    </div>
  ) 
}

const Total = (props) => {
  return (
    <p>Number of Exercises {props.exercise1 + props.exercise2 + props.exercise3} </p>
  )
}

const App = () => { 
  const course = 'Half Stack app dev';
  const part1 = 'Fundamentals of react';
  const exercise1 = 10;
  const part2 = 'Using props to pass data';
  const exercise2 = 7;
  const part3 = 'State of a component';
  const exercise3 = 14;

  return (
    <div>
      <Header course = {course} />
      <Content part1={part1} exercises1={exercise1}
        part2={part2}
        exercises2={exercise2}
        part3={part3}
        exercises3={exercise3} />

      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </div>
  )
}

export default App;
