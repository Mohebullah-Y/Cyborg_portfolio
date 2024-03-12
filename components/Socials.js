// links
import Link from "next/link";

//icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiGithubFill,
  RiComputerFill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.facebook.com/mohebullah.yousofi?mibextid=ZbWKwL"} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href={"https://www.instagram.com/mohebullahyousofi?igsh=NmJ3ZHV0bWpsbzF5"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/mohebullah-yousofi-a225ab203"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={"https://github.com/Mohebullah-Y"} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        {/* <RiComputerFill /> */}
      </Link>
    </div>
  );
};

export default Socials;
