import { Link } from "react-router-dom";

function Home(){
    return(
        <div>

            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/apply">Apply</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <h1>WELCOME TO JOB PORTAL</h1>
            <p>Find your dream job</p>

            <input type="text" placeholder="Search jobs..." />

            <div className="jobs">

                <div className="job">
                    <h3>Frontend Developer</h3>
                    <p>Location: Chandigarh</p>
                    <Link to="/apply">Apply</Link>
                </div>

                <div className="job">
                    <h3>Backend Developer</h3>
                    <p>Location: Delhi</p>
                    <Link to="/apply">Apply</Link>
                </div>

                <div className="job">
                    <h3>UI Designer</h3>
                    <p>Location: Remote</p>
                    <Link to="/apply">Apply</Link>
                </div>

            </div>

            <div className="footer">
                © 2026 Job Portal | Created by Piyush
            </div>

        </div>
    );
}

export default Home;