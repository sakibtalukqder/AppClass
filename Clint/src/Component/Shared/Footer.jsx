
const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className="w-24" src={'https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg'} alt="" />
                    <p> &copy; App Class .Com <br /> Providing reliable teach since 1992 </p>
                </div>
                <div>
                    <span className="footer-title">Our Success</span>
                    <a className="link link-hover">100% pass rate</a>
                    <a className="link link-hover">75% Gpa-5</a>
                    <a className="link link-hover">200+ Bord Stand</a>
                    <a className="link link-hover">Top 3 rank</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Supporting team</span>
                    <a className="link link-hover">Shakil Ahmed</a>
                    <a className="link link-hover">Readon</a>
                    <a className="link link-hover">Alamin</a>
                    <a className="link link-hover">Sakib Talukqder</a>
                </div>
            </footer>

        </div>
    );
};

export default Footer;