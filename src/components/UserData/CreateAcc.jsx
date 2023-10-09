import { useEffect, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
// import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/signin.css'
import { Navigate } from 'react-router-dom';

export default function CreateAcc ({signIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const { 
        isAuthenticated 
    } = useAuth0();
    
   

    const handleNewAccount = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type":'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                const token = result.token; 
               

                localStorage.setItem("token", token)
                

                navigate("/product-list")
               
            }
            
            
        } catch (error) {
            console.log(error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("token");
        if (userId) {
            isAuthenticated;
        }
    })  

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const createSignIn = await handleNewAccount();
        console.log(createSignIn);

        

    }
 

    return (
        <div className="sign-in-log">
            <h1 className="on-sign">Create Account</h1>
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
                        <br />
                    <div className='line-2'>
                        <label>
                            <h3>Email</h3>
                        </label>
                        <input
                            
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            placeholder="email"
                            onChange={(event) => setEmail(event.target.value)}
                            
                            />
                    </div>
                        <br/>
                        <br/>
                        <button className='login' type="submit">Create Account</button>
                        <br/>
                        <br/>
                        <a className="make-account" href="/sign_in">{!isAuthenticated ? "Already have an account. Sign In" : 'Continue'}</a>
                    
                </ul>
            </div>
            </form>
        </div>
    )
} 


// onClick={() => loginWithRedirect}

