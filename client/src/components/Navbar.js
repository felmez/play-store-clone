import React from 'react'
import { Input, Menu, Image } from 'semantic-ui-react'


function Navbar() {
    return (
        <Menu attached="bottom">
            <Menu.Item>
                <Image style={{ width: '183px', height: '39px' }} src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" />
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search' />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Image style={{ borderRadius: '16px' }} src="https://lh3.googleusercontent.com/ogw/ADea4I7-WaOgeXU_60eHHEsgD2BYsPIQHaHbhC1ijUBK=s32-c-mo" />
                </Menu.Item>
                <Menu.Item>
                    <Image style={{ borderRadius: '16px' }} src="https://lh3.googleusercontent.com/ogw/ADea4I7-WaOgeXU_60eHHEsgD2BYsPIQHaHbhC1ijUBK=s32-c-mo" />
                </Menu.Item>
            </Menu.Menu>
        </Menu >
    )
}

export default Navbar
