import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import Logo from "./../assets/images/icon-star.svg";

import { useState } from "react";

import "./card.css";

export const Card = () => {
  const data = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="container">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="title">FAQs</h1>
      </header>

      {data.map((item, index) => (
        <div className="faq-card" key={index}>
          <div className="faq-head">
            <a
              href="#!"
              className={`faq-title ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </a>
            <div className="faq-button-sec">
              <div
                className={`faq-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {activeIndex === index ? <FaMinus /> : <IoIosAdd />}
              </div>
            </div>
          </div>
          <div className={`faq-body ${activeIndex === index ? "active" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </main>
  );
};
