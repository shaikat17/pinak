import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div></div>
      <div className="flex">
        <div>
          <p>&copy; 2023, Pinak. All Right Reserved.</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">News</Link>
          <Link to="#">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
