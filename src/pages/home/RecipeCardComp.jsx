import React from "react";
import { RecipeImage, RecipeCard, RecipeHeader, Button } from "./HomeStyles";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
const RecipeCardComp = ({ recipe }) => {
  // props.recipe si yazmış olduk
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
    // useNavigate()= bir olay işleyicide veya durumdaki bazı değişikliklere yanıt olarak programlı olarak gezinmenize izin verir. direk usenavigate i buraya yazarsak extra import yazılmalı, o yüzden dışta tanımlıyoruz
    // view more tıklandığında o yiyeceğin adıyla detaylarının old sayfaya yönlen. buraya veriler emanet geldi home dan, buradan giderken state e gömerek navigate ile yolluyoruz
  };
  // console.log(recipe.ingredientLines);
  //  console.log(recipe);
  //  console.log(recipe.recipe);
  return (
    <RecipeCard>
      {/* Home dan recipes datasından bir recipe buraya geldi */}
      <RecipeHeader>{recipe.label}</RecipeHeader>

      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
