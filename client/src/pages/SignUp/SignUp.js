import React from "react";

const SignUp = () => (
    <div>
        <h2>
            This is the SignUp Page
        </h2>
        <form>
            <p>Choose a Username</p>
            <input type="text" name="Username" placeholder="Username" />
            <p>Choose a Password</p>
            <input type="text" name="Password" placeholder="*********" />
            <p>Confirm password</p>
            <input type="text" name="Password Confirmation" placeholder="*********" />
            <p>Full Name</p>
            <input type="text" name="Name" placeholder="Full Name" />
            <p>Email Address</p>
            <input type="text" name="Email Address" placeholder="someone@somewhere.com" />
            <p>Click here to complete signup</p>
            <button>Sign Up</button>
        </form>
    </div>
);

export default SignUp;