import WorldLogo from "../assets/logo3.png"
export default function Navbar() {
    return(
        <div className="navbar">
            <img className="navbar-logo"src={WorldLogo} alt="World logo" />
            <span className="navbar-title">Proyectos de Scratch</span>
        </div>
    );
}