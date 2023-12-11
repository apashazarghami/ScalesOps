import { useSelector } from "react-redux";
import TotalOrders from "../components/TotalOrders";

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  const orders = products.filter((product) => product.count);
  const totalCost = orders.reduce((acc, curr) => curr.count * curr.price + acc, 0);

  return (
    <div className="container mt-4 mb-4 text-center">
      <div>
        {orders.map((order) => (
          <TotalOrders key={order.id} order={order} />
        ))}
      </div>
      <div className="text-primary">
        <span>Total cost:</span>
        <span> {totalCost.toFixed(2)} $</span>
      </div>
    </div>
  );
};

export default Cart;
