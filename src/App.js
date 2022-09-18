import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tabtital from './components/Tabtital';
import Main from './components/Main';
function App() {
  return (
    <div className='main-box'>
    <div className='left'>
    <Sidebar />
    </div>
    <div className='right'>
    <Header />
    <Tabtital title='Active Deposits' num='2' name='active'></Tabtital>
    <Main name='active'/>
    <Tabtital title='Closed Deposits' num='8'></Tabtital>
    <Main name = 'closed'/>
    </div>
    </div>
  );
}

export default App;
