/** @format */
import { Link } from "react-router-dom";
import wallet from "../assets/wallet.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src={wallet} alt="Logo" width={48} height={48} className="rounded-circle bg-light p-1" />
    </Link>
  );
};

export default Logo;
