import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { AuthProvider } from './context/auth';
import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Sidebar.Pushable as={Segment}>
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
            <Container>

              <Segment basic>
                <Route exact path='/' component={Home} />
              </Segment>
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </Router>
    </AuthProvider>
  );
}

export default App;
