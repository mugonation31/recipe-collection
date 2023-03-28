import React from "react";
import recipe1 from "../assets/images/recipe-1.jpeg";
import recipe2 from "../assets/images/recipe-2.jpeg";
import recipe3 from "../assets/images/recipe-3.jpeg";
import recipe4 from "../assets/images/recipe-4.jpeg";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Main from "../components/main/Main";
import Search from "../components/search/Search";
import Hero from "../components/hero/Hero";
import Recipes from "../components/recipes/Recipes";
import Recipe from "../components/recipe/Recipe";
import Footer from "../components/footer/Footer";
import Body from "../components/body/Body";

export default function Home() {
  const recipes = [
    {
      id: 1,
      image: recipe1,
      dish: "Avocado, and Tomato Salad",
      restaurant: "dona's Kitchen",
    },

    {
      id: 2,
      image: recipe2,
      dish: "Chickpea & Butternut Squash Salad",
      restaurant: "Tasty Treat",
    },

    {
      id: 3,
      image: recipe3,
      dish: "Spicy Chicken & Salad",
      restaurant: "Yummy Foods",
    },

    {
      id: 4,
      image: recipe4,
      dish: "Chips, Avocado Creamy Sauce",
      restaurant: "Ella Olsson",
    },
  ];
  return (
    <Body>
      <Container>
        <Header>
          <Nav title1="Recipes" title2="Collection" />
        </Header>
        <Main>
          <Search />
          <Hero
            name="Recipe App"
            heading="Find the best recipes for your favorite dishes"
          />
        </Main>

        <Recipes>
          {recipes.map((recipe) => (
            <Recipe
              image={recipe.image}
              dish={recipe.dish}
              restaurant={recipe.restaurant}
            />
          ))}
        </Recipes>
        <Footer name="Recipe App" year="2023" />
      </Container>
    </Body>
  );
}
