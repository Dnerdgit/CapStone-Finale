import { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Signout() {
    const navigate = useNavigate();
    const{
      isAuthenticated,
      logout,
    } = useAuth0()
    
    
    useEffect(() => {
      const signOff = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/users', {
            method: DELETE,
          }); 
    
        } catch (err) {
          console.log(err)
        }
        signOff();
      }


      navigate("/")
    },[navigate])

    return (

      <div>
        <h2>Ready to sign out?</h2>

        <button onClick={logout} type="submit">{isAuthenticated ? "Signout" : "You're not signed in."}</button>
      </div>

    )
}
