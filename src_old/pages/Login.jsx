import { useRef, useState } from "react"
import { postLogin } from "../app/authApi"
import { setToken } from "../app/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const babar = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const submitForm = e => {
        e.preventDefault()

        const userInfo = {
            email: babar.current[0].value,
            password: babar.current[1].value
        }

        postLogin(userInfo)
            .then(data => {
                if (data.body) {
                    dispatch(setToken(data.body.token))
                    navigate('/profile')
                } else {
                    setError(data.message)
                }
            }).catch(error => setError(error.message || error))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={babar} onSubmit={e => submitForm(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
                <p>{error}</p>
            </section>
        </main>
    )
}

export default Login