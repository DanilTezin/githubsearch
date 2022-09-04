import {GoogleLogin} from 'react-google-login'

const clientId = "782832509175-hge0ffgjnqhvh5smcb5vc2g1qi7fohef.apps.googleusercontent.com"

const Login = () =>{

    const onSuccess = (res: any) =>{
        
        console.log("LOGIN SUCCESS", res.profileObj)

        localStorage.setItem("accessTokenImage", res.profileObj.imageUrl)
        localStorage.setItem("accessTokenName", res.profileObj.name)

        console.log(localStorage.getItem("accessTokenName"))
        window.location.reload()
    }
    
    const onFailure = (res: any) =>{
        console.log("LOGIN FAILED", res)
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login