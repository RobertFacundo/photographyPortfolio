import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer-container">
            Designed & Developed &gt;{" "} 
            <a
                href="https://github.com/RobertFacundo"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                Robert
            </a>
        </footer>
    )
}