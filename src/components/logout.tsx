import {GoogleLogout} from 'react-google-login'

const clientId = "782832509175-hge0ffgjnqhvh5smcb5vc2g1qi7fohef.apps.googleusercontent.com"

 const Logout = () =>{

    const onSuccess = () =>{
        console.log("LOGIN SUCCESS")
        localStorage.removeItem("accessTokenImage")
        localStorage.removeItem("accessTokenName")
        window.location.reload()
    }


    return(
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout