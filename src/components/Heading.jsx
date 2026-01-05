const Heading = ({ title, subTitle }) => {
  return (
    <div>
      <div className="text-center text-big uppercase font-medium">{title}</div>
      <div className="text-small opacity-40 text-center">{subTitle}</div>
    </div>
  );
};

export default Heading;
