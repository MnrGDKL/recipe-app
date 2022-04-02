import React from "react";
import { HeaderContainer, MainHeader } from "./HeaderStyles";
import Form from "./Form";
const Header = ({setQuery, getData, mealTypes, setMeal }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
         setQuery={setQuery}
       //  query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
       //  meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
