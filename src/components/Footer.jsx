const Footer = () => {
  // dont forget to change the date to fixed year.
  const date = new Date();
  const currentYear = date.getFullYear();
  console.log(currentYear);
  return (
    <div className="footerLayer">
      <p className="text-sm font-light text-slate-800 ">
        Copyright © {currentYear} Ali
      </p>
    </div>
  );
};

export default Footer;
