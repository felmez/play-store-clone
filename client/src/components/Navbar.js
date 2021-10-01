import React, { useState, useContext } from 'react'
import { Input, Menu, Image, Dropdown } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth';
import AppForm from './AppForm'

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    const pathName = window.location.pathname;

    const path = pathName === '/' ? 'home' : pathName.substring(1);

    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const navItems = user ? (
        <Menu attached="top" className="borderless">
            <Menu.Item
                as={Link}
                to="/"
            >
                <Image style={{ width: '183px', height: '39px' }} src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" />
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search' />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item >
                    <AppForm></AppForm>
                </Menu.Item>
                <Menu.Item>
                    <Image style={{ borderRadius: '16px' }} src="https://lh3.googleusercontent.com/ogw/ADea4I7-WaOgeXU_60eHHEsgD2BYsPIQHaHbhC1ijUBK=s32-c-mo" />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text={user.username}>
                        <Dropdown.Menu>
                            <Dropdown.Item text='MyApps' as={Link} to={`/${user.username}/apps`} />
                            <Dropdown.Item text='Logout' onClick={logout} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu.Menu>
        </Menu >
    ) : (
        <Menu attached="top" className="borderless">
            <Menu.Item
                as={Link}
                to="/"
            >
                <Image style={{ width: '183px', height: '39px' }} src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" />
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search' />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/login"
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/register"
                />
            </Menu.Menu>
        </Menu >
    )

    return navItems;
}

export default Navbar
