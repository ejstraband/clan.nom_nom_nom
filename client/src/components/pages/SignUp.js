import React from "react";

const SignUp = () => (
    <div className='container col-6'>
        <h1>Create an account</h1>
        <form method="POST" action="/register">
            <label for ='Email'>Email Address</label>
            <input type="email" className='form-control' id="Email" placeholder="someone@somewhere.com" />
            <label for='Username'>Choose a Username</label>
            <input type="text" className='form-control' id="Username" placeholder="Username" />
            <label for='Name'>Full Name</label>
            <input type="text" className='form-control' id="Name" placeholder="Full Name" />
            <label for='Password'>Choose a Password</label>
            <input type="password" className='form-control' id="Password" placeholder="Enter a password" />
            <input type="password" className='form-control mt-2' name="Password Confirmation" placeholder="Confirm password" />
            <button type='submit' class='btn btn-primary m-3'>Sign Up</button>
        </form>
    </div>
);

export default SignUp;