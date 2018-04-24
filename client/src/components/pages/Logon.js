import React from "react";

const Logon = () => (
    <div className='container col-5'>
        <h1>Log in</h1>
        <form method="POST" action="/login">
            <label for='Username'>Enter your username</label>
            <input type="text" className='form-control' id="Username" placeholder="Username" />
            <label for='Password'>Enter your password</label>
            <input type="password" className='form-control' id="Password" placeholder="Enter your password" />
            <button type='submit' class='btn btn-primary m-3'>Log in</button>
        </form>
    </div>
);

export default Logon;