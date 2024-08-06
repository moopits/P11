import { useSelector, useDispatch } from "react-redux"
import { useRef } from "react"
import { selectUser, setUser, setIsEditing, selectIsEditing, selectToken } from "../app/authSlice"
import { putUserName } from "../app/authApi"

const Welcome = () => {
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)
    const isEditing = useSelector(selectIsEditing)
    const dispatch = useDispatch()
    const babar = useRef()

    // Fonction au submit du formulaire
    const changeUsername = (e) => {
        e.preventDefault()
        // Envoie data nouveau userName et récupération auprès de l'API du nouveau userData 
        putUserName(token, babar.current[0].value).then(data => dispatch(setUser(data.body)))
        // Fermeture du formulaire
        dispatch(setIsEditing(false))
    }

    return (
        <div className="header welcome">
            <h2>
                Welcome back
                <br />
                {user?.firstName} {user?.lastName} !
            </h2>
            <button className="edit-button" onClick={() => dispatch(setIsEditing(true))}>
                Edit Name
            </button>

            {
                isEditing ?
                    <form
                        id="changeUserData"
                        ref={babar}
                        onSubmit={(e) => changeUsername(e)}
                    >
                        <div className="input-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" placeholder={user?.userName} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                disabled
                                readOnly
                                value={user?.firstName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                disabled
                                readOnly
                                value={user?.lastName}
                            />
                        </div>
                        <div className="input-wrapper">
                            <button className="sign-in-button" type="submit">
                                Save
                            </button>
                            <button
                                className="sign-in-button"
                                type="reset"
                                onClick={() => dispatch(setIsEditing(false))}
                            >
                                Cancel
                            </button>
                        </div>
                    </form> : <></>
            }

        </div>
    )
}

export default Welcome