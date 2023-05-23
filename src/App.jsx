import { Container } from "react-bootstrap";
import FormDrinks from "./components/FormDrinks";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drinks Finder</h1>
        </header>
        <Container className="mt-5">
          <FormDrinks />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
