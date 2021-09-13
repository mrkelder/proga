import { forwardRef } from "react";

const Heading = forwardRef(({ h2, text }, ref) => (
  <div className="mb-16 text-center">
    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
      {h2}
    </h2>
    <p
      ref={ref}
      className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
    >
      {text}
    </p>
  </div>
));

export default Heading;
