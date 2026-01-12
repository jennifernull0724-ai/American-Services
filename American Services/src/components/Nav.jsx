import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="site-header">
      <div className="header-main">
        <Link to="/" className="header-logo">
          <img src="/MSES-Master-Logo.png" alt="American Services" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/railcar-storage">Railcar Storage</Link></li>
            <li><Link to="/service-area">Service Area</Link></li>
            <li><Link to="/safety">Safety</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-contact-block">
          <a href="tel:662-781-4481" className="header-phone">
            <span className="header-phone-label">24/7 Emergency:</span>
            <strong>662-781-4481</strong>
          </a>
          <a href="mailto:admin@amsrvcs.com" className="header-email">admin@amsrvcs.com</a>
        </div>
      </div>
      <div className="header-accent">
        <div className="accent-rule accent-rule-primary"></div>
        <div className="accent-rule accent-rule-secondary"></div>
      </div>
    </header>
  );
}

export default Nav;
