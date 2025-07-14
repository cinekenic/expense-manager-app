/** @format */
import wallet from "../assets/wallet.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img src={wallet} alt="Logo" width={48} height={48} className="rounded-circle bg-light p-1" />
    </a>
  );
};

export default Logo;
