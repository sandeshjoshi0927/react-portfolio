const LinkItem = ({ children, path }) => {
  return (
    <li className="hover:text-primary text-smaller">
      <a href={path}>{children}</a>
    </li>
  );
};

export default LinkItem;
