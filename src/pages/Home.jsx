import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProcuts } from "../features/products/productsSlice";
import Loader from "../components/Loader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Cards = lazy(() => import("../components/Cards"));

const Home = () => {
  const { isLoading, products, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAsyncProcuts());
    }
  }, [dispatch, products]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "expensive") {
      return b.price - a.price;
    } else if (sortOption === "cheapest") {
      return a.price - b.price;
    }
  });

  return (
    <Container className="mt-4 mb-1">
      <Form className="mb-3 d-flex flex-column flex-lg-row">
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-2 mb-lg-0 me-lg-2"
          style={{ outline: "none", boxShadow: "none" }}
        />

        <Form.Select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="mb-2 mb-lg-0"
          style={{ outline: "none", boxShadow: "none" }}
        >
          <option value="" disabled>Sort by</option>
          <option value="expensive">Expensive</option>
          <option value="cheapest">Cheapest</option>
        </Form.Select>
      </Form>

      {!!error ? (
        <h3>{error}</h3>
      ) : (
        isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Row xs={1} sm={2} md={3} lg={4} xl={5}>
              {sortedProducts.map(product => (
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
