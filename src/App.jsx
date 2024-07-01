const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};


const Content = (props) => {
  const info = props.course.parts.map((value, index) => (
    <div key={index}>
      <p>{value.name} {value.exercises}</p>
    </div>
  ));
  return info;
};



const Total = (props) => {
  let score = 0;
  const total = props.course.parts.map((value) => score = score + value.exercises);

  return (
    <div>
      <p>Number of exercises: {score}</p>
    </div>
  );
};




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
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
