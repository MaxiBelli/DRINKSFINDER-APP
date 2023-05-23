import { Container } from "react-bootstrap";
import FormDrinks from "./components/FormDrinks";
import { CategoriesProvider } from "./context/CategoriesProvider";

function App() {
  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Drinks Finder</h1>
      </header>
      <Container className="mt-5">
        <FormDrinks />
      </Container>
    </CategoriesProvider>
  );
}

export default App;
