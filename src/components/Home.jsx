import React from "react";
import vg from "../assets/ph7.jpeg";
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h3>Kaju saikia</h3>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only Solution to the tech problems you face
            every day. We are loading tech company whose aim is to increace the
            problems solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            blanditiis explicabo porro maxime obcaecati vero ad, aut ea ut
            laborum similique enim, fugit est delectus, adipisci eos ipsum
            reiciendis libero? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis eligendi nam facere dicta libero aut
            blanditiis vitae doloremque eius maxime! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic optio repellat ab, sint
            consectetur vero architecto autem quia sapiente illum voluptas
            maxime enim sed incidunt? Reprehenderit ratione ipsa est dignissimos
            obcaecati placeat, blanditiis consequatur nostrum! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Magnam et ex iusto pariatur
            autem ullam ipsa fuga enim veniam voluptate!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">

    <div><h1>

        Brands
      </h1>
      
      <article>
        <div style={{
          animationDelay: "0.3s",
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{
          animationDelay: "0.5s",
        }}>
          <AiFillAmazonCircle/>
          <p>Amazone</p>
        </div>

        <div style={{
          animationDelay: "0.7s",
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>

        <div style={{
          animationDelay: "0.1s",
        }}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
      
      </div>



      </div>
    </>
  );
};

export default Home;
