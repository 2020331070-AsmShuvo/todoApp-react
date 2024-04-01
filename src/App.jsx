import React, { useState } from "react";
import AppName from "./components/AppName";
import AddItem from "./components/AddItem";
import ItemTitie from "./components/ItemTitie";
import List from "./components/List";

const App = () => {
  const [items, setItems] = useState([]);

  const getValuesFromList = (newItems) => {
    setItems([...items, newItems]);
  };

  return (
    <center>
      <AppName />
      <ItemTitie />
      <AddItem getValuesFromList={getValuesFromList} />
      <div>{items.length > 0 && items.map((item) => <List item={item} />)}</div>
    </center>
  );
};

export default App;
