import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const footer = [
  {
    title: "карта",
    li: [
      { name: "О нас", link: null, refName: "about" },
      { name: "Особенности", link: null, refName: "skills" },
      { name: "Цены", link: null, refName: "prices" }
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
  const [date, setDate] = useState(null);
  const { links } = useSelector(store => store.links);

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
              {li.map(params => (
                <li className="my-3 font-light sm:my-2" key={params.name}>
                  <a
                    className="text-white transition duration-200 hover:opacity-50 cursor-pointer"
                    href={params.link}
                    onClick={e => {
                      if (!params.link) {
                        const top = links.find(i => i.name === params.refName)
                          .ref.current.offsetTop;

                        e.preventDefault();
                        scroll({ top, behavior: "smooth" });
                      } else return;
                    }}
                  >
                    {params.name}
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
