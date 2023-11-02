import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1170 center-relative">
        <ul className="copyright-holder">
          <li className="copyright-footer">
            <strong>{new Date(Date.now()).getFullYear()} Light Studio</strong>
            <br />
            <br />
            <span className="copyright-title">CEO</span> Kkigi Ko
            <br />
            <span className="copyright-title">Business License</span>
            000-00-00000 <br />
            <span className="copyright-title">Address</span>서울시 종로구 종로로
            12345 <br />
            <span className="copyright-title">CS</span> +82 (0)10-0000-0000
          </li>
          <br />
          <br />
          <li className="social-footer">
            <Link href="https://twitter.com/">Blog</Link>
            <Link href="https://www.facebook.com/">Facebook</Link>
            <Link href="https://www.instagram.com/">Instagram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
