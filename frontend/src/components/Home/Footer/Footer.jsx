// import { LegoLogo } from "@/components/lego-logo"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { label: "New Releases", href: "/new" },
        { label: "Exclusives", href: "/exclusives" },
        { label: "Architecture", href: "/architecture" },
        { label: "Technic", href: "/technic" },
        { label: "Ideas", href: "/ideas" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Building Instructions", href: "/instructions" },
        { label: "Replacement Parts", href: "/parts" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About LEGO", href: "/about" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Careers", href: "/careers" },
        { label: "Press Room", href: "/press" },
      ],
    },
  ]

  return (
    <footer className="bg-[#1a213b] pt-16 text-[#F6F6F6]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              {/* <LegoLogo className="h-24 w-24" /> */}
            </Link>
            <p className="mt-4 text-sm text-[#F6F6F6]/80">
              LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this
              site.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-[#F6F6F6]/10 p-2 text-[#F6F6F6] transition-colors hover:bg-[#F6F6F6]/20"
              >
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#F6F6F6]/10 p-2 text-[#F6F6F6] transition-colors hover:bg-[#F6F6F6]/20"
              >
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#F6F6F6]/10 p-2 text-[#F6F6F6] transition-colors hover:bg-[#F6F6F6]/20"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#F6F6F6]/10 p-2 text-[#F6F6F6] transition-colors hover:bg-[#F6F6F6]/20"
              >
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold">{group.title}</h4>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#F6F6F6]/80 transition-colors hover:text-[#F6F6F6]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#F6F6F6]/10 py-8 text-center text-sm text-[#F6F6F6]/60">
          <p>© {new Date().getFullYear()} LEGO Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

