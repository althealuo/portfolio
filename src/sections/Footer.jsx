import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text MainColorSubtext">
        © {new Date().getFullYear()} Althea Luo — All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
