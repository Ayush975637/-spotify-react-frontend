import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate();
  return (
    <footer
      className="pt-5 px-4"
      style={{ backgroundColor: '#121212', color: '#b3b3b3', fontSize: '14px' }}
    >
                    <li>  <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/terms')} >Terms&Conditions</button></li>
              <li>  <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate('/privacy')} >Privacy Policy</button></li>
       <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
  Terms & Conditions
</Link>
<br />
<br />
<Link href="/privacy">Privacy Policy</Link>
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
          <h5 className="text-white">Sangeet plans</h5>
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
      <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
  Terms & Conditions
</Link>
<Link href="/privacy">Privacy Policy</Link>

    </footer>
  );
};

export default Footer;
