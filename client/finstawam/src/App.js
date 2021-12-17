import '../src/services/apiCall'
import './App.css';

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
