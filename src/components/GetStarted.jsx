import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const onReach = (e) => {
    e.preventDefault();

    const phoneNumber = "+905457396437";
    let url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    const message =
      "Hello Intelity Tech! I have a question/issue and I need your help. Can you please message me when you're available? Thank you!";
    url += `&text=${encodeURI(message)}&app_absent=0`;

    window.open(url);
  };

  return (
    <div
      onClick={onReach}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Now</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Contact</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
