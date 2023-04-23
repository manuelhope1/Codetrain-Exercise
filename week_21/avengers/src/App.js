
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <h1>Codetrain is awesome, react works!!!</h1>
//     </div>
//   );
// }

// export default App;


// import  React from 'react';
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//           <h1>Codetrain is awesome, react works!!!</h1>
//       </div>
//     );
//   }
// }

// export default App;

import  React from 'react';



function App() {
  return (
    <WelcomeComponent name="Codetrain"/>
  );
}



class WelcomeComponent extends React.Component {
  render() {
    return (
      <>
      <h1>{this.props.name} is awesome,react works!!!</h1>
      </>
    );
  }
}

export default App;



