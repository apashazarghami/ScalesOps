import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../features/products/productsSlice";
import { abbreviationWords } from "../utilities/function";

const TotalOrders = ({ order }) => {
  const { id, title, image, price, count } = order;
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center mb-3 p-3 bg-light rounded" style={{ height: "150px" }}>
      <div className="me-3">
        <img src={image} alt={title} className="img-fluid" style={{ maxWidth: "80px", borderRadius: "8px" }} />
      </div>
      <div className="flex-grow-1">
        <div>{abbreviationWords(title)}</div>
        <div className="d-flex align-items-center">
          <span style={{ cursor: "pointer" }} onClick={() => dispatch(decrementProduct(id))}>
            {count === 1 ? <IoTrashOutline /> : <FaMinus />}
          </span>
          <span className="mx-2">{count}</span>
          <span style={{ cursor: "pointer" }} onClick={() => dispatch(incrementProduct(id))}>
            <FaPlus />
          </span>
        </div>
      </div>
      <div>{`${count} * ${price}$ = ${(count * price).toFixed(2)}`}</div>
    </div>
  );
};

export default TotalOrders;
