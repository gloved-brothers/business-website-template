import React from "react";
import { card, ourWork } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section} id="services">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better software solution <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Artificial intelligence solutions, Machine learning, Android and iOS
          mobile applications. We also possess strong expertise in web and
          desktop applications.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={ourWork} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
