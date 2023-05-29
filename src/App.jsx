import { Container } from "react-bootstrap";
import FormDrinks from "./components/FormDrinks";
import DrinkList from "./components/DrinkList";
import DrinkModal from "./components/DrinkModal";
import { OptionsProvider } from "./context/OptionsProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
 
    <OptionsProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drinks Finder</h1>
        </header>
        <Container className="mt-5">
          <FormDrinks />
          <DrinkList/>
          <DrinkModal/>
        </Container>
      </DrinksProvider>
    </OptionsProvider>

  );
}

export default App;
