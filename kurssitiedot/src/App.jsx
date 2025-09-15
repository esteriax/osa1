
const Header = (props) => {
  return (
    <div>
     <h1>Header {props.name}</h1>
    </div>
  )
}

const Content = ({course}) => {
  return (
    <div>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>
        {name}, exercises: {exercises}
      </p>
    </div>
  )
}

const Total = ({course}) => {
  return (
    <div>
      <p>Total {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
 const course = {
    name: 'Half Stack application development',
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

  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App