import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile(){

    const navigate = useNavigate();

    function handleLogout(){
        alert("Logged Out!");
        navigate("/login");
    }

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("userData"));

        if(data){
            document.getElementById("pname").innerText = "Name: " + data.name;
            document.getElementById("pemail").innerText = "Email: " + data.email;
            document.getElementById("pcity").innerText = "City: " + data.city;
        }else{
            document.getElementById("pname").innerText = "No Data Found";
        }
    },[]);

    return(
        <div>

            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/apply">Apply</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <h2>My Profile</h2>

            <p id="pname"></p>
            <p id="pemail"></p>
            <p id="pcity"></p>

            <button onClick={handleLogout}>Logout</button>

        </div>
    );
}

export default Profile;