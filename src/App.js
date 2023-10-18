import { MyContext } from './MyContext.js';
import Parent from './components/Parent.js';
import './styles.css';

function App() {
  return <>
  <MyContext.Provider value="42">
 <Parent/>
 </MyContext.Provider>
  </>
}

export default App;
