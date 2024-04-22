import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const socialAccounts = [
  {
    name: "twitter",
    show: false,
    link: "https://twitter.com/dayz_compsci",
    icon: <FaTwitter />,
    onHoverText: "currently private",
  },
  {
    name: "linkedin",
    show: true,
    link: "https://www.linkedin.com/in/daisy-huang-090a7b31/",
    icon: <FaLinkedin />,
  },
  {
    name: "instagram",
    show: true,
    link: "https://www.instagram.com/daisy_compsci/",
    icon: <FaInstagram />,
  },
];
