import { Form, Row, Col, Button } from "react-bootstrap";
import useCategories from "../hooks/useCategories";

const FormDrinks = () => {
  const { categories } = useCategories();

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Drink Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="E.g. Tequila, Vodka, etc"
              name="name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select id="category" name="category">
              <option>- Select Category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Search Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormDrinks;
