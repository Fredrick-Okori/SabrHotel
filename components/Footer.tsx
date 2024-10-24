import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/Constants"
import Image from "next/image"
import Link from "next/link"

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5" style={{ color: '#E89B23'}}>
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 mt-24">
      <div className="padding-container max-container flex w-full
      flex-col gap-14">
        <div className="flex flex-col items-start justify-center 
        gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/nexthotellogo.png" alt="logo" width={200} height={120} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between
          md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4
                  text-white">
                    {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}
                    </p>
                    <p className="medium-14 whitespace-nowrap
                    text-white">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-white">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" color="white" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-white">2024 Sabr Resort Hotel | Powered by  dienacorps </p>
      </div>
    </footer>
    )
}

export default Footer