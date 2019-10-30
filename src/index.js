import React from 'react';
import ReactDOM from 'react-dom';

const course = {
    name: 'Half Stack Application Development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
}

// const exercises1 = 10
// const exercises2 = 7
// const exercises3 = 14

const Header = (props) => {
    let {course} = props
    return(
            <h1>{course}</h1>
    )
}

const Content = (props) => {
    const Part = (props) => {
        let { part } = props
        let { exercises } = props
        return (
            <>
            <p> {part} {exercises} </p>
            </>
        )
    }
    
    return(
        <>
            <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
            <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
            <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</p>
    )
}

const App = () => {

    return (
        <>
            <Header course= {course.name} />
            <Content parts= {course.parts} />
            <Total parts= {course.parts} />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));



// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.