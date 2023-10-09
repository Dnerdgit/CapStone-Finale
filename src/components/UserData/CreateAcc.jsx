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
                    email: email
                }),
            });

            if (response.ok) {
                const result = await response.json();
                const token = await getAccessTokenSilently(result); 
                console.log(result);

                localStorage.setItem("token", token)
                return(error);
            }
            
            
        } catch (error) {
            console.log(error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("token");
        if (userId === isAuthenticated) {
            navigate("/product-list")
        }
    })  

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const createSignIn = await retrieveSignin(username, password, email);
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
                        <button className='login' onClick={() => loginWithRedirect} type="submit">Create Account</button>
                        <br/>
                        <br/>
                        <a className="make-account" href="/auth/login">{!isAuthenticated ? "Already have an account. Sign In" : 'Continue'}</a>
                    
                </ul>
            </div>
            </form>
        </div>
    )
} 




// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useAuth0 } from '@auth0/auth0-react';


// export default function CreateAcc({token}) {
//     const [username, setUsername] = useSessionStorage("username", "");
//         useState(() => {
//             const savedUser = localStorage.getItem("username");
//             const parsedUser = JSON.parse(savedUser);
//             return parsedUser || "";
//         });

//     const [password, setPassword] = useSessionStorage("password", "");
//         useState(() => {
//             const savedPass = localStorage.getItem("password");
//             const parsedPass = JSON.parse(savedPass);
//             return parsedPass || "";
//         });

//     const [email, setEmail] = useLocalStorage("email");
//         useState(() => {
//             const savedEmail = localStorage.getItem("email");
//             const parsedEmail = JSON.parse(savedEmail);
//             console.log(savedEmail);
//             return parsedEmail || "";
//         })

//     const {
//         register,
//         handleSubmit,
//     } = useForm();

//     const {
//         error,
//         isAuthenticated
//     } = useAuth0()

//     const navigate = useNavigate();

//     const onSubmit = async (data, event) => {
//         const response = await SignInData(data.username, data.password);
//         event.preventDefault();
//         console.log(data);
        
   
//         if (response.success) {
//             // signIn(true);
//             navigate("/");
//         } else {
//             alert("Invalid Entry");
//         }
//    }

//   return (

//     <div>
        

//     <div className="signInApp">
//         <h2>Sign In</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className='sign-up-form'>
//                 <label>
//                     Username 
//                 </label>
//                 <input 
//                 {...register("username", {
//                     required: true,
//                 })}
//                     type="text"
//                     name="name"
//                     value={username}
//                     placeholder="Username"
//                     onChange={(event) => setUsername(event.target.value)}
//                     id="name"
//                     />
//                     {error.username?.type === 'required' && <p>Invalid Username</p>}
//                     <br/>
//                     <br/>
//                 <label>
//                     Password 
//                 </label>
//                 <input
//                 {...register("password", {
//                     required: true,
//                 })}
//                     type="password"
//                     name="password"
//                     value={password}
//                     placeholder="**********"
//                     onChange={(event) => setPassword(event.target.value)}
//                     id="password"
//                     />
//                     {error.password?.type === 'required' && <p>Invalid Password</p>}
//                     <br/>
//                     <br/>

//                     <button onClick={token} type="submit">Sign In</button>
//                     <br/>
//                     <a className="make-account" href="/create">Already haven an account. Sign In</a>
//             </form>
//         </div>
//     </div>
//     )
// }




// const navigate = useNavigate();

//         useEffect(() => {
//             console.log(username);
//             localStorage.setItem('username', JSON.stringify(username));
//             localStorage.setItem('password', JSON.stringify(password));
//             // localStorage.setItem('email', JSON.stringify(email));

//             }, [username]
//         )
        
//         const onSubmit = async (data, event) => {
//             const response = await RegisterSignInData(data.username, data.password);
//             event.preventDefault();
//             console.log(data);

//             signIn({
//                 token: response.data.token,
//                 tokenType: "Bearer",
//             })
            
//             console.log(response);
//             if (response.success) {
//                 // handleAuth(true);
//                 navigate("/posts");
//             } else {
//                 alert("Invalid Entry");
//                 // handleAuth(false);
//             }