import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, MainContainer, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import RecipeCardComp from "./RecipeCardComp";



const APP_ID = "bfbb3efc"; //bfbb3efc;
const APP_KEY = "43faeee790f26cd82b28050d3031619d";
// 43faeee790f26cd82b28050d3031619d

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  // query=yazdığımız sorgu kelimesi, meal=breakfast vs

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  //   Async/await i daha güzel yapan ancak işlevsellikte hiçbir değişikliği olmayan bir kod bükümüdür.crud işlemlerini kolaylaştırır. Birkaç iyi nedenden dolayı söz zinciri (then) yerine async/await kullanılması önerilir:
  // Mevcut iş parçacığına zarar vermez,
  // Söz zincirleme ile karşılaştırıldığında CPU'da fazla maliyeti yoktur ,
  // Senkronizeymiş gibi kod yazmanıza yardımcı olur,

  // await tek başına kullanılması bir sözdizimi hatası üretecektir. Bu nedenle, async işlevinin içinde await kullanın,
  //url ye bağlandığınızda then ile devam ederseniz ok, ama kısaca axios kullanacaksak, veri çekerken beklemeyip alt satıra geçer, o yüzden bekle await diyoruz
  

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      console.log(result);
      console.log(result.data);
      console.log(result.data.hits);
      
      
      //bunu yazdır önce
      //sadece result ı yazdırırsak bir sürü yabancı ifade gelecek, bizim esas istediğimiz data dizisi, result ın bir alt öğesi, dataya ulaşmak için result.data
      // data nın içinde hits ve more key i var, hits =bütün dizi toplu halde json olarak, 10 tane pie mesela. data 1 den 10 a kadar göster diyor, (daha fazla varsa bile ) more =true

      // if (result.data.more) {
      //   console.log("no food a this name");
      // }
      setRecipes(result.data.hits);

      //  setQuery("");
       
        //mealtypes i değiştirip search yaptığımda sorguyu temizle çıkan kartlar değişmesin.ama bence değişmeli, burası olmamalı

      //axios zaten json olarak alır, fetch deki gibi json a çevir demeyiz
    } else {
      console.log("Please fill the form");
    }
  };

  //js asenkron dur, api yi alırken beklemez alt satıra geçer.
  return (
    <div>
      {/* alttakileri header a oradan da form a gönderiyorum, orada setMeal ve setQuery çalışacak setter a gönderiyorum yani */}
      {/* componente gidecekse tek kelime, style a gidecekse aç kapa 2 kelime */}
      <Header
        setQuery={setQuery}
          // query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        // meal={meal}
        //meal = breakfast mesela. mealTypes= bütün hepsi, breakfast, lunch....
      />
      
      {recipes ? (
        // api den gelen datanın tümü, (bir yiyecek ismi girildiğinde)
        <MainContainer>
          {/* arama sonucu yiyecek kartlarının kutusu */}
          {recipes.map((liste, index) => (
            <RecipeCardComp key={index} recipe={liste.recipe} />
            // sadece liste yollarsak apı deki gibi  gidiyor. liste.recipe= json formatında key value. kısaca{recipe}.hits in içinde recipe var, liste hits e kadar gelir ben içindeki recipe'yi istiyorum
            // veriler direk bu sayfaya geliyor ,RecipeCardComp deki gibi navigate state e gerek yok
        
         ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />

          {/* ekrandaki aşçı resmi */}
        </ImgDiv>
      )}
    </div>
  );
};
// esas ekrana basılacak sayfa burası (header form iş yapıyor sadece                       )
export default Home;

// import {
//   HomeImg,
//   MainContainer,
//   ImgDiv,
//   RecipeImage,
//   RecipeCard,
//   RecipeHeader,
//   Button,
// } from "./HomeStyles";
// import { useState } from "react";
// import axios from "axios";
// import Header from "../../components/header/Header";
// import defaultImage from "../../assets/default-image.jpg";
// import { useNavigate } from "react-router-dom";
// import homeSvg from "../../assets/home.svg";

// const Home = () => {
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState("");
//   const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
//   const [selectedMealType, setSelectedMealType] = useState(
//     mealType[0].toLowerCase()
//   );
//   const APP_ID = "4e9f05eb";
//   const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

//   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMealType}`;

//   const getData = async () => {
//     console.log(query);
//     if (query) {
//       const { data } = await axios.get(url);
//       setRecipes(data.hits);
//     } else {
//       console.log("please enter your meal");
//     }
//   };

//   return (
//     <div>
//       <Header
//         setQuery={setQuery}
//         getData={getData}
//         setSelectedMealType={setSelectedMealType}
//         mealType={mealType}
//       />
//       {recipes ? (
//         <MainContainer wrap="wrap">
//           {recipes.map(({ recipe }, index) => (
//             <RecipeCard justify="space-evenly" key={index}>
//               <RecipeHeader>{recipe.label}</RecipeHeader>
//               <RecipeImage src={recipe.image || defaultImage} />
//               <Button onClick={() => navigate("/details", { state: recipe })}>
//                 View More
//               </Button>
//             </RecipeCard>
//           ))}
//         </MainContainer>
//       ) : (
//         <ImgDiv>
//           <HomeImg src={homeSvg} />
//         </ImgDiv>
//       )}
//     </div>
//   );
// };

// export default Home;
