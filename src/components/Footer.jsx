const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footerStyles">
      <p className="text-sm font-light text-orange-800 ">
        Copyright © {currentYear} Ali
      </p>
    </div>
  );
};

export default Footer;
