import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text MainColorSubtext">
        © {new Date().getFullYear()} All by Althea
      </p>
    </footer>
  );
}

export default Footer;
