import WorldLogo from "../assets/world.png"
export default function Navbar() {
    return(
        <div className="navbar">
            <img className="navbar-logo"src={WorldLogo} alt="World logo" />
            <span className="navbar-title">my travel journal</span>
        </div>
    );
}