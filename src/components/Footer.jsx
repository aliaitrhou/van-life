const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  return (
    <div className="h-24 bg-orange-300 w-full flex justify-center items-center">
      <p className="text-sm font-light text-slate-800 ">
        Copyright © {currentYear} Ali
      </p>
    </div>
  );
};

export default Footer;
