import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export default function SidebarAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const menuItems = [
    {
      label: "Salads",
      links: ["Salad1", "Salad2", "Salad3"],
    },
    {
      label: "Pizzas",
      links: ["Pizza1", "Pizza2", "Pizza3"],
    },
    {
      label: "Desserts",
      links: ["Dessert1", "Dessert2", "Dessert3"],
    },
  ];

  return (
    <Menu className="accordion" overlayClassName="my-custom-overlay">
      {menuItems.map((item, i) => (
        <div
          key={i}
          className={`container ${activeIndex === i ? "active" : ""}`}
        >
          <div className="label" onClick={() => toggleAccordion(i)}>
            {item.label}
          </div>
          <div className="content">
            {item.links.map((link, j) => (
              <a key={j} href="/">
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </Menu>
  );
}
