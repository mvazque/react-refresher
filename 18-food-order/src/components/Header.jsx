import logo from '../assets/logo.jpg'

export default function Header() {
    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Fancy dinner plate" />
                <h1>React Food</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}