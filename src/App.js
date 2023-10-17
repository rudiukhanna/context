import { MyContext } from './MyContext.js';
import BigBox from './components/BigBox.js';
import './styles.css';

function App() {
  return <>
  <MyContext.Provider value="small box:)">
  <BigBox />
  </MyContext.Provider>
  </>
}

export default App;
