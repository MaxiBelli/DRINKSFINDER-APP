import { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Alert,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import UseOptions from "../hooks/useOptions";
import useDrinks from "../hooks/useDrinks";

const FormDrinks = () => {
  const [search, setSearch] = useState({
    ingredient: "",
    category: "",
  });
  const [alert, setAlert] = useState("");
  const { categories, ingredients } = UseOptions();
  const { fetchDrink } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("All fields are required");
      return;
    }
    setAlert("");
    fetchDrink(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="ingredient">Drink Ingredient</Form.Label>
            <InputGroup>
              <FormControl
                id="ingredient"
                type="text"
                placeholder="E.g. Vodka, Tequila, Coffee, etc"
                name="ingredient"
                value={search.ingredient}
                onChange={(e) =>
                  setSearch({
                    ...search,
                    [e.target.name]: e.target.value,
                  })
                }
                list="ingredientOptions"
              />
              <datalist id="ingredientOptions">
                {ingredients
                  .sort((a, b) =>
                    a.strIngredient1.localeCompare(b.strIngredient1, "en", {
                      sensitivity: "base",
                    })
                  )
                  .map((ingredient) => (
                    <option
                      key={ingredient.strIngredient1}
                      value={ingredient.strIngredient1}
                    />
                  ))}
              </datalist>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
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
