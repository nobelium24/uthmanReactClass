// import React from 'react'

import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center text-primary">Contact Page</h1>
            <Link to="/about">Go to about</Link>
            <div className="row container w-100 py-5 mx-auto">
                <div className="col-12 col-md-6 p-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas exercitationem iusto corporis, dolores totam quibusdam tempore ipsum inventore voluptatum! Placeat illo iusto enim doloremque, numquam quisquam blanditiis quo reprehenderit non.
                        Perspiciatis inventore quasi ut doloribus dolores ducimus. Voluptatum ratione ea explicabo officia, aliquam, quidem adipisci neque, accusamus suscipit quos molestiae fugit alias? Itaque doloremque labore atque, iusto tenetur earum officia?</p>
                </div>
                <form action="" className="shadow p-3 rounded-3 col-12 col-md-6">
                    <input type="text" className="form-control my-2" placeholder="Enter FullName" />
                    <input type="email" className="form-control my-2" placeholder="Enter Email" />
                    <input type="password" className="form-control my-2" placeholder="Enter Password" />
                    <button className="w-100 btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact