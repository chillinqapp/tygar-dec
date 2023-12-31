import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";
import Image from "next/image";

const footerLinks = [

  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms Of Use", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
        <div className="flex flex-wrap">
      <div className="flex items-center text-grey">
           <Image src="/logo.png" alt='/logo.png' width={150} height={100} className="mr-4 " /> 

          </div>
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
          {/* <div className="flex items-center text-grey">
            <Image src="/logo.png" alt='/logo.png' width={150} height={100} className="mr-4 " /> 

          </div> */}
        </div>
      </div>


    </Container>
  


  </footer>
);
