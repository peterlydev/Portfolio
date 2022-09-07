import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";

import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "Abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        About <span>Peter Ly</span>
      </h2>
      <div className="bio">
      <p className="p-text" id="headline">
        I am a Full-Stack Developer graduate from Futureproof. Born and bred in
        London and I love creating web & mobile applications using different
        technologies.
      </p>
      <p className="p-text" id="about">
        I started my coding journey due to my love of technology. Ever since I
        owned the original Playstation console, I have always been curious how
        technology has changed our lives as well has growing rapidly. Today, I
        own the latest technologies in gaming, computing and mobile. I
        started learning SQL for 3 months before being SQL certified via
        Microsoft. This motivated me to broaden my coding knowledge.
      </p>
      <p className="p-text" id="exp1">
        I started looking for resources that would me help me learn to code. I
        enrolled myself in the Udacity: Intro to Programming nanodegree, where I
        learn the basics of front-end development using HTML5, CSS3 and
        JavaScript and having the opportunity to build some cool mini-projects
        such as the Animal Trading Card game and the Pixel Art Maker app.
      </p>
      <p className="p-text" id="exp2">
        After completing my nanodegree and created more projects such as a basic
        banking app and tic-tac-toe, I am keen to further my career in tech as I
        felt I have really enhanced my creativity and problem-solving skills and
        I am ready to take on further challenges within the tech industry. You can see more of my projects below.
      </p>
      <p className="p-text" id="footer">
        I have recently finished my 13-week coding bootcamp from Futureproof
        where I have learnt HTML, CSS, JavaScript, SQL, NoSQL, React, Redux,
        Python backend (Flask and Django), Node JS and Express API. I am
        currently open to work and ready to launch my tech career. I welcome the
        opportunity to learn new programming languages.
      </p>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
