import { Link } from "react-router-dom";

function Apply(){

    function handleSubmit(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let city = document.getElementById("city").value;

        if(name==="" || email==="" || city===""){
            alert("Fill all fields!");
            return;
        }

        let user = {
            name:name,
            email:email,
            city:city
        };

        localStorage.setItem("userData", JSON.stringify(user));
        alert("Application Submitted!");
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

            <h2>Apply for Job</h2>

            <input type="text" id="name" placeholder="Enter Name" /><br/><br/>
            <input type="email" id="email" placeholder="Enter Email" /><br/><br/>
            <input type="text" id="city" placeholder="Enter City" /><br/><br/>

            <button onClick={handleSubmit}>Submit</button>

        </div>
    );
}

export default Apply;