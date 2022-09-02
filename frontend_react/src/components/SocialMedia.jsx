import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/peter-ly1/"
          alt="LinkedIn"
          target="blank_"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.twitter.com/peterlyCFC"
          alt="Twitter"
          target="blank_"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/peter.ly1"
          alt="Facebook"
          target="blank_"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
