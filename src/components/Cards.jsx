import { useDispatch } from "react-redux";
import { addProduct, decrementProduct, incrementProduct } from "../features/products/productsSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { abbreviationWords } from "../utilities/function";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

const Cards = ({ product }) => {
  const { id, title, image, price, count } = product;
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementProduct(id));
  };

  const handleIncrement = () => {
    dispatch(incrementProduct(id));
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        loading="lazy"
        className="card-img-top h-50 p-2"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h-25">{abbreviationWords(title)}</Card.Title>
        <Card.Text className="h-25">{price}$</Card.Text>
        {count ? (
          <div className="d-flex align-items-middle justify-content-between h-25">
            <span style={{cursor: 'pointer'}}
              onClick={handleDecrement}
            >
              {
                count === 1 ? <IoTrashOutline /> : <FaMinus />
              }
            </span>
            <span className="mx-2">
              <Badge variant="primary">{count}</Badge>
            </span>
            <span style={{cursor: 'pointer'}}
              onClick={handleIncrement}
            >
              <FaPlus />
            </span>
          </div>
        ) : (
          <Button variant="primary" onClick={() => dispatch(addProduct(id))}>
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cards;
