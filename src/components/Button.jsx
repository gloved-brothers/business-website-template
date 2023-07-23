import React from "react";

const Button = ({ styles }) => {
  const onReach = (e) => {
    e.preventDefault();

    const phoneNumber = "+905457396437";
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    const message =
      "Hello Intelity Tech! I have a question/issue and I need your help. Can you please message me when you're available? Thank you!";
    url += `&text=${encodeURI(message)}&app_absent=0`;

    window.open(url);
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={onReach}
    >
      Contact Now
    </button>
  );
};

export default Button;
