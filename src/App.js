// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";

const App = () => {
  const num = 10;
  return (
    <div>
      <Header />
      <h1>FtonEnd Technology</h1>
      <div>
        {
          num
        }
      </div>
      <Footer />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <header>
//         SAJAL
//       </header>
//     </div>
//   );
// }

export default App;
