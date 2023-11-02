import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavLinks = ({
  leftLink,
  leftTitle,
  rightLink,
  rightTitle,
}: {
  leftLink: string;
  leftTitle: string;
  rightLink: string;
  rightTitle: string;
}) => {
  return (
    <div className="nav-links">
      <div className="content-570 center-relative">
        <div className="nav-previous">
          <Link href={leftLink} rel="prev">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />

            <p>{leftTitle}</p>
          </Link>
          <div className="clear"></div>
        </div>
        <div className="nav-next">
          <Link href={rightLink} rel="prev">
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
            <p>{rightTitle}</p>
          </Link>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
