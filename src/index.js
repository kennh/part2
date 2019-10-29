import React from 'react';
import ReactDOM from 'react-dom';

    const course = 'Half Stack Application Development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    // const exercises1 = 10
    // const exercises2 = 7
    // const exercises3 = 14

const Header = (props) => {
    console.log(props)
    return(
            <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    
    return (
        <>
            <p>
            {props.part} {props.exercises}
            </p>
        </>
    )
}

const Content = (props) => {
    
    return(
        <>
          <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part2.exercises}/>
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises}</p>
    )
}

const App = () => {

    return (
        <>
            <Header course={course} />
            <Content />
            <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));



// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.