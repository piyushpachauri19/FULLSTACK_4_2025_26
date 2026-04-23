import { Link } from "react-router-dom";

function Register(){

    function handleRegister(){
        let name = document.getElementById("rname").value;
        let email = document.getElementById("remail").value;
        let password = document.getElementById("rpass").value;

        if(name==="" || email==="" || password===""){
            alert("Fill all fields!");
            return;
        }

        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res => res.text())
        .then(data => alert(data));
    }

    return(
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/apply">Apply</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <h2>Register</h2>

            <input type="text" id="rname" placeholder="Enter Name" /><br/><br/>
            <input type="email" id="remail" placeholder="Enter Email" /><br/><br/>
            <input type="password" id="rpass" placeholder="Enter Password" /><br/><br/>

            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;