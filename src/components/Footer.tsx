import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" p-5">
      <div className="flex flex-col justify-center gap-4 py-4 text-xs">
        <div className="flex flex-col gap-4">
          <Link to="/">
            <img src="../logo-CF3gF4eH.svg" alt="logo" />
          </Link>
          <p className="text-[14px]">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Link
              to="/"
              className="w-8 h-8 flex justify-center items-center bg-fuchsia-50 rounded-full"
            >
              <SlSocialFacebook />
            </Link>
            <Link
              to="/"
              className="w-8 h-8 flex justify-center items-center bg-fuchsia-50 rounded-full"
            >
              <SlSocialInstagram />
            </Link>
            <Link
              to="/"
              className="w-8 h-8 flex justify-center items-center bg-fuchsia-50 rounded-full"
            >
              <SlSocialTwitter />
            </Link>
            <Link
              to="/"
              className="w-8 h-8 flex justify-center items-center bg-fuchsia-50 rounded-full"
            >
              <TfiEmail />
            </Link>
          </div>
        </div>
        

        <div
          className="flex flex-wrap justify-between w-1/2 gap-8 text-xs">
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Quick Links
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Browse Cars</a>
              </li>
              <li>
                <a href="#">List Your Car</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Resources
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-xs border-t p-5">
        <p className="mb-2">© 2026 Brand. All rights reserved.</p>
        <p>Privacy | Terms | Cookies</p>
      </div>
    </section>
  );
};
export default Footer;
