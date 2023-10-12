import "./navbar.css";
import Logo from "./contents/ludo-logo.png";


function Navbar() {
    return (
        <>
            <nav>
                <div class="logo">
                    <a href="App.js">
                        <img src={Logo} width='150px' alt="logo"/>
                    </a>
                </div>
                <div class="menu">
                    <a href="App.js">Home</a>
                    <a href="login.html">Other Games</a>
                    <a href="index.html">Contact</a>
                </div>


            </nav>
        </>
    );
}

export default Navbar;
