import React from "react";
import Reciepe from "./Recipe.png";
import Payment from "./Payment.png";
import Ecomerce from "./ecomerce.png";
import ProjectCard from "./ProjectCards.jsx";

const Project = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Payment Website"
          main=" This Website is based on the basic payment app in which for user information we used mongodb
and for backend express.js, zod for validation. Frontend is built by reactis and we used json web token(jwt) for
authentication. "
          link="https://paymentfrontend-git-main-kannans-projects-e56e554a.vercel.app/"
          source="https://github.com/Kannan4957/paymentfrontend"
          image={Payment}
        />
        <ProjectCard
          title="Recipe Website"
          main="Website is used for finding the recipes for any food. In this we used html, css and javascript."
          link="https://findrecipe123.netlify.app/"
          source="https://github.com/Kannan4957/findRecipes-"
          image={Reciepe}
        />
        <ProjectCard
          title="Ecomerce Website"
          main="This is basically a shopping website which shows the best shoes, outfit and accessories. In this
we used html, css and javasript."
          link="https://66994e89e2b43923610787b3--meek-horse-132537.netlify.app/"
          source="https://github.com/Kannan4957/Shoppingsite"
          image={Ecomerce}
        />
      </div>
    </div>
  );
};

export default Project;