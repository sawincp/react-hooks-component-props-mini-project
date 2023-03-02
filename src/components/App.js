import React from "react";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";


import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName ={blogData.name}/>
      <About blogImg={blogData.image} about ={blogData.about}/>
      <ArticleList posts ={blogData.posts} />
    </div>
  );
}

export default App;
