import clsx from "clsx";

const Link = (props) => {
  const { children, dynamicClass, ...rest } = props;

  return (
    <a {...rest} className={clsx("ui-link", dynamicClass)}>
      {children}
    </a>
  );
};

export default Link;
