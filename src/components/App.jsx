import Saludar from "./Saludar";
import header from "./Header";
import principal from "./Principal";
import footer from "./Footer";
import '../style/App.css';
import '../style/header.css';
function App() {
  return (
    <div className="App">
      <h1>holaa</h1>
     <Saludar></Saludar>
      < header className="header-app">este es el header header </header>
     <principal>este es el contenido principal</principal>
     <footer>este es el footer</footer>

    </div>
  )
}

export default App;
