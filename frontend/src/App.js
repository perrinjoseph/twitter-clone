import Feed from "./Components/Layout/Feed/Feed";
import News from "./Components/Layout/News/News";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Router>
          <Sidebar/>
          <Feed/>
          <News/>
        </Router>
      </div>
    </div>
  );
}

export default App;
