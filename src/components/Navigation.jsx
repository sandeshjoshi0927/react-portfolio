import Button from "./Button";
import LinkItem from "./LinkItem";

const Navigation = () => {
  const menuItems = [
    { title: "Home", path: "#" },
    { title: "Skills", path: "#skills" },
    { title: "Porfolio", path: "#portfolio" },
    { title: "Service", path: "#service" },
  ];

  return (
    <div className="sticky top-0 bg-white opacity-95 z-99">
      <div className="flex-between py-4 px-10 container m-auto">
        <div className="logo">SJ</div>
        <ul className="flex justify-around w-1/2">
          {menuItems.map((menu, index) => (
            <LinkItem key={index} path={menu.path}>
              {menu.title}
            </LinkItem>
          ))}
        </ul>
        <Button to="#contact" color="bg-secondary" className="hover:opacity-85">
          Contact
        </Button>
      </div>
      <hr className="border-b border-gray-200" />
    </div>
  );
};

export default Navigation;
