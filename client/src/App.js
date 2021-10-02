import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleApp from './pages/SingleApp'
import MyApps from './pages/MyApps'
import Movies from './pages/Movies'
import Books from './pages/Books'
import Apps from './pages/Apps'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Sidebar.Pushable attached="bottom" >
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
            className='leftSidebar'
          >
            <Menu.Item as={Link} to={`/apps`}>
              <Icon name='app store ios' />
              Apps
            </Menu.Item>
            <Menu.Item as={Link} to={`/movies`}>
              <Icon name='tv' />
              Movies
            </Menu.Item>
            <Menu.Item as={Link} to={`/books`}>
              <Icon name='book' />
              Books
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/apps/:appID' component={SingleApp} />
            <Route exact path='/:username/apps' component={MyApps} />
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/apps' component={Apps} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </AuthProvider>
  );
}

export default App;
