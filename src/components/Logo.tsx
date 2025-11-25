import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="https://mychildmate.in/AdmissionForm/img/holywritlogo_512_512.png"
      alt="Holy Writ High School Logo"
      width={128}
      height={128}
      className="rounded-full bg-white p-2 shadow-md"
      priority
    />
  );
};

export default Logo;
