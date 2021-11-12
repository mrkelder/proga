function Button({ children, style, onClick, type }) {
  return (
    <button
      {...{ type, onClick }}
      className={
        "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary outline focus:ring-offset-2 hover:bg-secondary md:py-4 md:text-lg md:px-10 " +
        style
      }
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: "Text",
  style: "",
  onClick: undefined,
  type: "button"
};

export default Button;
