// import React from 'react'



const NavBar = () => {
  return (
    <div>
        <div className="d-flex align-items-center justify-content-between gap-4 p-3 shadow">
            <h1>Logo</h1>

            <div className="d-flex align-items-center gap-4">
                <p>Home </p>
                <p>About </p>
                <p>Contact </p>
                <p>Services </p>
            </div>
            <div className="d-flex align-items-center gap-4">
                <button className="btn btn-primary">Sign Up</button>
                <button className="btn btn border-primary text-primary">Log In</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar