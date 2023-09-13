import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Buttons from "./components/Buttons";
import { Fragment, useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Fragment>
      <div>
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      </div>

      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <div>
          {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
              You Clicked a Button
            </Alert>
          )}
          <Buttons onClick={() => setAlertVisibility(true)}>
            Welcome to React
          </Buttons>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
