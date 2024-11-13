import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#1A1919] py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-32">
          <div className="space-y-5 col-auto lg:col-span-2 pr-0 lg:pr-16 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white">CareerHub</h2>
            <p className="text-base text-white/70">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link className="">
                <FaFacebookF className="text-blue-600 inline-block w-10 h-10 p-2 rounded-full bg-white" />
              </Link>
              <Link className="">
                <FaTwitter className="text-blue-400 inline-block w-10 h-10 p-2 rounded-full bg-white" />
              </Link>
              <Link className="">
                <FaInstagram className="text-blue-600 inline-block w-10 h-10 p-2 rounded-full bg-white" />
              </Link>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white mb-3">Company</h2>
            <ul className="space-y-5">
              <li>
                <Link className="text-base text-white/70">About</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">Works</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">Latest News</Link>
              </li>
              <li>
                {" "}
                <Link className="text-base text-white/70">Career</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white mb-3">Products</h2>
            <ul className="space-y-5">
              <li>
                <Link className="text-base text-white/70">Prototype</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">Plan & Price</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">Customers</Link>
              </li>
              <li>
                {" "}
                <Link className="text-base text-white/70">Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white mb-3">Supports</h2>
            <ul className="space-y-5">
              <li>
                <Link className="text-base text-white/70">Help Desk</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">Sales</Link>
              </li>
              <li>
                <Link className="text-base text-white/70">
                  Become a Partner
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-base text-white/70">Developers</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <ul className="space-y-5">
              <li>
                <Link className="text-base text-white/70">
                  524 Broadway , NYC
                </Link>
              </li>
              <li>
                <Link className="text-base text-white/70">
                  +1 777 - 978 - 5570
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-12" />
        <div className="flex justify-between text-white/40">
          <p className="">@2023 CareerHub. All Rights Reserved</p>
          <p>
            Powered by <span className="font-bold">CareerHub</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
