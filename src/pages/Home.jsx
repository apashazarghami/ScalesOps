import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProcuts } from "../features/products/productsSlice";
import Loader from "../components/Loader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Cards = lazy(() => import("../components/Cards"));

const Home = () => {
  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProcuts());
  }, [dispatch]);

  return (
    <Container className="mt-4 mb-1">
      {!!error ? (
        <h3>{error}</h3>
      ) : (
        isLoading ? (
          <Loader />
        ) : (
            <Suspense fallback={<Loader />}>
                <Row xs={1} sm={2} md={3} lg={4} xl={5}>
                {products.map(product => (
                    <Col key={product.id} className="mb-4">
                        <Cards product={product} />
                    </Col>
                ))}
                </Row>
            </Suspense>
        )
      )}
    </Container>
  );
};

export default Home;
