import React from "react";

const Logon = () => (
    <div>
        <h2>
            This is the Logon Page
        </h2>
        <form>
            <p>Enter your username</p>
            <input type="text" name="Username" placeholder="Username" />
            <p>Enter your password</p>
            <input type="text" placeholder="*********" />
            <p>Click here to login</p>
            <button>Log In</button>
        </form>
    </div>
);

export default Logon;