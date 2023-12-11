import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalOrders } = useSelector((state) => state.products);
  const navigate = useNavigate();

  return (
    <div className="bg-primary text-white d-flex align-items-center justify-content-between py-2 px-5 fixed-top">
      <FaArrowLeft style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
      <Link to="/" className="text-white text-decoration-none hover-gray">
        Home
      </Link>
      <div className="position-relative">
        <span style={{left: '0.6rem', bottom: '0.6rem'}} className="badge bg-white text-primary position-absolute p-1 badge-sm">
          {totalOrders}
        </span>
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Header;
