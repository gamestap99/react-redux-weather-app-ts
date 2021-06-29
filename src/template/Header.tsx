import '../styles/Header.css'
import {CaretDownOutlined} from '@ant-design/icons';
import {Menu, Dropdown} from 'antd';

const menu = (
    <Menu>
        <Menu.Item key={"submenu-1"}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item icon={<CaretDownOutlined/>} disabled key={"submenu-2"}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        </Menu.Item>
        <Menu.Item disabled key={"submenu-3"}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        </Menu.Item>
        <Menu.Item danger key={"submenu-4"}>a danger item</Menu.Item>
    </Menu>
);


const Header = () => {
    return (
        <div className={"app-header"}>

            {/*<nav className={"navbar-nav"} >*/}
            {/*    <ul className={"nav navbar-nav"}>*/}
            {/*        <li><a className="active" href="#home">Trang chủ</a></li>*/}
            {/*        <li><a href="#news">Dịch vụ</a></li>*/}
            {/*        <li><a href="#contact">Thư viện</a></li>*/}
            {/*        <li><a href="#about">Liên hệ</a></li>*/}
            {/*    </ul>*/}
            {/*    /!*<ul className={"nav navbar-nav"}>*!/*/}
            {/*    /!*    <li><a className="active" href="#home">Home</a></li>*!/*/}
            {/*    /!*    <li><a href="#news">News</a></li>*!/*/}
            {/*    /!*    <li><a href="#contact">Contact</a></li>*!/*/}
            {/*    /!*    <li><a href="#about">About</a></li>*!/*/}
            {/*    /!*</ul>*!/*/}
            {/*</nav>*/}

            <nav className="navbar">

                <h3>logo</h3>

                <div className="links">

                    <ul>

                        <li className={"nav-item"}><a className={"nav-link "} href="#">Trang chủ</a></li>

                        <li className={"nav-item dropdown"}>
                            <Dropdown overlay={menu}>


                                <a className={"nav-link dropdown-toggle"}  data-toggle={"dropdown"}>Dịch
                                    vụ <span className={"icon nav-icon-dropdown"}>

                                    </span>
                                </a>
                            </Dropdown>,
                        </li>
                        <li className={"nav-item"}><a className={"nav-link"} href="#">Thư viện</a></li>
                        <li className={"nav-item"}><a className={"nav-link"} href="#">Liên hệ</a></li>

                    </ul>

                </div>

                <div className="menubar">

                    <div className="bar bar1"></div>

                    <div className="bar bar2"></div>

                    <div className="bar bar3"></div>

                </div>

            </nav>

        </div>
    );
}

export default Header;