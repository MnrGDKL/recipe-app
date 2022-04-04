import React from "react";
import {
  DetailContainer,
  DetailPart,
  ImgContainer,
  HeaderContainer,
  IngContainer,
  OtherPart,
} from "./DetailsStyles";
import { useLocation } from "react-router-dom";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  const location = useLocation();

  const recipe = location.state.recipe;
  // navigate("/details", { state: { recipe } }); recipecard da bütün data json formatında state e gömülmüştü
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>
        <IngContainer>
          {recipe.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
                {/* ingredientLines içinde bir sürü obje var tek tek yazdır, başına no ekle */}
              </p>
              <br />
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;

// import {
//   DetailContainer,
//   DetailPart,
//   ImgContainer,
//   HeaderContainer,
//   IngContainer,
//   OtherPart,
// } from "./DetailsStyle";
// import { useLocation } from "react-router-dom";
// import dietSvg from "../../assets/diet.svg";

// const Details = () => {
//   const { state } = useLocation();

//   return (
//     <DetailContainer wrap="wrap">
//       <HeaderContainer justify="space-evenly">
//         <h1>{state.label}</h1>
//         <img src={dietSvg} alt="diet" />
//       </HeaderContainer>

//       <DetailPart wrap="wrap">
//         <OtherPart>
//           <>Nutrients</>
//           <p>
//             {state.totalNutrients.CA.label} :{" "}
//             {Math.round(state.totalNutrients.CA.quantity)}
//             {state.totalNutrients.CA.unit}
//           </p>
//           <p>
//             {state.totalNutrients.CHOCDF.label} :{" "}
//             {Math.round(state.totalNutrients.CHOCDF.quantity)}
//             {state.totalNutrients.CHOCDF.unit}
//           </p>
//           <p>
//             {state.totalNutrients.CHOLE.label} :{" "}
//             {Math.round(state.totalNutrients.CHOLE.quantity)}
//             {state.totalNutrients.CHOLE.unit}
//           </p>
//           <p>
//             {state.totalNutrients.ENERC_KCAL.label} :{" "}
//             {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
//             {state.totalNutrients.ENERC_KCAL.unit}
//           </p>
//           <p>{state.totalWeight}</p>
//           <p>Calories: {Math.round(state.calories)}</p>
//           {state.digest.slice(0, 4).map((item, index) => (
//             <p key={index}>
//               {item.label} : {Math.round(item.total)}
//             </p>
//           ))}
//         </OtherPart>
//         <ImgContainer>
//           <img src={state.image} alt={state.label} />
//         </ImgContainer>
//         <IngContainer>
//           {state.ingredientLines.map((line, index) => (
//             <div key={index}>
//               <p>
//                 {index + 1} - {line}
//               </p>
//               <br />
//             </div>
//           ))}
//         </IngContainer>
//       </DetailPart>
//     </DetailContainer>
//   );
// };

// export default Details;
