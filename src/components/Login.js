import { Link, useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    function handleLogin(){
        let email = document.getElementById("lemail").value;
        let password = document.getElementById("lpass").value;

        if(email==="" || password===""){
            alert("Fill all fields!");
            return;
        }

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            if(data === "Login Success"){
                navigate("/profile");
            }
        });
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

            <h2>Login</h2>

            <input type="email" id="lemail" placeholder="Enter Email" /><br/><br/>
            <input type="password" id="lpass" placeholder="Enter Password" /><br/><br/>

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;