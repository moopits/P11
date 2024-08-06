import logo from '../assets/img/argentBankLogo.webp'
import { Link } from 'react-router-dom'
import { selectUser, signout } from '../app/authSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()


    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={"/"}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>

                {user ?
                    <>
                        <Link className="main-nav-item" to={"/profile"}>
                            {user.userName}
                            &nbsp;
                            <i className="fa fa-user-circle"></i>
                        </Link>
                        <Link className="main-nav-item" to={"/"}
                            onClick={() => dispatch(signout())}>
                            Sign Out
                        </Link>
                    </>
                    : <Link className="main-nav-item" to={"/sign-in"}>
                        <i className="fa fa-user-circle"></i>
                        &nbsp;
                        Sign In
                    </Link>
                }




            </div>
        </nav>
    )
}

export default Header