import React, { useEffect, useState } from "react";

const footer = [
  {
    title: "карта",
    li: [
      { name: "О нас", link: "/" },
      { name: "Особенности", link: "/" },
      { name: "Цены", link: "/" }
    ]
  },
  {
    title: "контакты",
    li: [
      { name: "+38 (095) 000-00-00", link: "tel:+380000000000" },
      { name: "+7 (107) 000-00-00", link: "tel:+71076769553" },
      {
        name: "d.and.v.develpment@gmail.com",
        link: "mailto:d.and.v.develpment@gmail.com"
      }
    ]
  }
];

function Footer() {
  // FIXME: substitude plain links with their equivalent
  const [date, setDate] = useState(null);

  useEffect(() => {
    // I don't render this in jsx directly because it'd cause server to render the date
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white p-5 mt-10 lg:py-10">
      <ul className="w-full flex flex-col sm:flex-row sm:justify-center">
        {footer.map(({ title, li }) => (
          <li
            className="sm:mx-10 sm:flex sm:flex-col sm:items-center md:mx-20 lg:mx-40"
            key={title}
          >
            <h2 className="uppercase font-bold text-lg lg:text-md">{title}</h2>
            <ul className="sm:flex sm:flex-col sm:items-center">
              {li.map(({ name, link }) => (
                <li className="my-3 font-light sm:my-2" key={name}>
                  <a
                    className="text-white transition duration-200 hover:opacity-50"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <span className="mt-2 md:mt-8">Все права защищены {date} ©</span>
      </div>
    </footer>
  );
}

export default Footer;
