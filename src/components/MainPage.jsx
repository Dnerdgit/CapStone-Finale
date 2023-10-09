import React from 'react'
import SignIn from './UserData/SignIn'
import AllProducts from './AllProducts'
// import Navbar from './Navbar'
import Home from './Home'

const MainPage = () => {
  return (
    <React.Fragment>
        {/* <section> */}
            <div className="layout">
                <div className="home-screen">
                    <Home/>
                </div>
                {/* <div className="sign-in">
                    <SignIn/>
                </div> */}
                {/* <div className="all-products">
                    <AllProducts/>
                </div> */}
            </div>
        {/* </section> */}
    </React.Fragment>
  )
}

export default MainPage