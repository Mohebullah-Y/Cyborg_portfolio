// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] hd:px-[3rem]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            <Image src={"/logo.png"} width={220} height={48} alt="" priority={true} />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
