import React from 'react';

const Footer = () => {
  return (
    <footer
      className="pt-5 px-4"
      style={{ backgroundColor: '#121212', color: '#b3b3b3', fontSize: '14px' }}
    >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-4">
        <div className="col mb-3">
          <h5 className="text-white">Company</h5>
          <ul className="nav flex-column">
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">About</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Job</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">For the record</a>
  </li>
</ul>

        </div>

        <div className="col mb-3">
          <h5 className="text-white">Communities</h5>
          <ul className="nav flex-column">
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">For Artist</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Developers</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Advertising</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Vendors</a>
  </li>
</ul>

        </div>

        <div className="col mb-3">
          <h5 className="text-white">Useful links</h5>
          <ul className="nav flex-column">
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Support</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Free Mobile app</a>
  </li>
 
</ul>

        </div>
        <div className="col mb-3">
          <h5 className="text-white">Spotify plans</h5>
          <ul className="nav flex-column">
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Premium Individual</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Premium Duo</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Premium Family</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Premium Student</a>
  </li>
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-light">Premium Free</a>
  </li>
</ul>

        </div>

        <div className="col mb-3">
          <h5 className="text-white">News letters</h5>
          <form>
            <p className="small">Get updates about new releases and features.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <input type="email" className="form-control" placeholder="Email address" />
              <button className="btn btn-outline-light">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4 border-top border-secondary">
        <p className="mb-0">© 2025 YourCompany. All rights reserved.</p>
        <ul className="list-unstyled d-flex gap-3 mb-0">
          <li><a className="text-muted" href="#"><i className="bi bi-facebook fs-5"></i></a></li>
          <li><a className="text-muted" href="#"><i className="bi bi-instagram fs-5"></i></a></li>
          <li><a className="text-muted" href="#"><i className="bi bi-twitter fs-5"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
