import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleApp from './pages/SingleApp'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Sidebar.Pushable attached="bottom">
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/apps/:appID' component={SingleApp} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    </AuthProvider>
  );
}

export default App;
