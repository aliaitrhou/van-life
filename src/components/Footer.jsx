const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  return (
    <div className="h-24 border-t border-slate-300 bg-orange-200 w-full flex justify-center items-center">
      <p className="text-sm font-light text-slate-800 ">
        Copyright © {currentYear} Ali
      </p>
    </div>
  );
};

export default Footer;
