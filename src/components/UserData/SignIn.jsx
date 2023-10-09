import { useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
// import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/signin.css'

export default function SignInLink ({signIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { 
        error,
        getAccessTokenSilently, 
        loginWithRedirect, 
        isAuthenticated 
    } = useAuth0();
    
   

    const retrieveSignin = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type":'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                const token = await getAccessTokenSilently(result); 
                console.log(result);

                localStorage.setItem("token", token)
                
                isAuthenticated(true);
                navigate("/product-list")

                signIn()
                return(error);
            }
            
            
        } catch (error) {
            console.log(error);
        }
    };


        useEffect(() => {
            const userId = localStorage.getItem("token");
            if (userId) {
                isAuthenticated(true);
            }
        },[])

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const signInApproval = await retrieveSignin(username, password);
        console.log(signInApproval);
        
    } 
 

    return (
        <div className="sign-in-log">
            <h1 className="on-sign">Sign In</h1>
            <form onSubmit={handleSubmit} className="sign-in-form">
            <div>
                <ul>
                    <div className='line-2'>
                        <label>
                            <h3>Username</h3>
                        </label>
                        <input
                            
                            type="text"
                            name="name"
                            id="username"
                            value={username}
                            placeholder="username"
                            onChange={(event) => setUsername(event.target.value)}
                            
                            />
                    </div>
                        <br/>
                    <div className='line-2'>
                        <label>
                            <h3>Password</h3>
                        </label>
                        
                        <input

                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="********"
                            onChange={(event) => setPassword(event.target.value)}
                            
                        />
                    </div>
                        <br/>
                        <br/>

                        {!isAuthenticated && (
                        <button className='login' onClick={() => loginWithRedirect} type="submit">Sign In</button>
                        )}

                        <br/>
                        <br/>
                        <a className="make-account" href="/account/create">{!isAuthenticated ? "Don't have an account Sign up!" : 'Continue'}</a>
                    
                </ul>
            </div>
            </form>
        </div>
    )
} 


