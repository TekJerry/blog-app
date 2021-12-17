import '../src/services/apiCall'
import './App.css';
import {Routes , Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
     <Routes>
       <Route element={<Posts posts={posts} />}/>
     </Routes>
    </div>
  );
}

export default App;
