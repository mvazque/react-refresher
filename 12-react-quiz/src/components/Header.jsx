import logoImage from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImage} alt="Clipboard and pens" />
            <h1>ReactQuiz</h1>
        </header>
    )
}