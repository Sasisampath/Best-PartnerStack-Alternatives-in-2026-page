import Link from "next/link";
import "./footer.css";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/getjazzhq/",
    icon: "/assets/footer/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/getjazzhq/",
    icon: "/assets/footer/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://x.com/getjazzhq",
    icon: "/assets/footer/x.svg",
    label: "X",
  },
  {
    href: "https://www.youtube.com/@getjazzhq",
    icon: "/assets/footer/youtube.svg",
    label: "YouTube",
  },
  {
    href: "https://in.pinterest.com/getjazzhq/",
    icon: "/assets/footer/pinterest.svg",
    label: "Pinterest",
  },
] as const;

export function Footer({ fullNavigation = true }: { fullNavigation?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer section-footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium footer-space">
            <div className="footer-main-row">
              <div className="footer-brand-col">
                <Link href="/" className="footer-logo-link" aria-label="JazzHQ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/logo/jazzhq-white.svg"
                    alt="JazzHQ"
                    width={245}
                    height={40}
                    loading="lazy"
                    className="footer-logo-img"
                  />
                </Link>

                <div className="follow-us-section">
                  <p className="footer-col-title">Follow us on</p>
                  <div className="social-icons">
                    {SOCIAL_LINKS.map(({ href, icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="social-icon-link"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={icon}
                          alt={`${label} icon`}
                          className="social-icon-img"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <address className="footer-address">
                200 Continental Drive, Suite 401, Newark, Delaware, 19713, United States of America
                </address>
              </div>
              {fullNavigation && <nav className="footer-nav-col footer-links" aria-label="Footer navigation">
                <div className="footer-col"><p className="footer-col-title">Company</p><ul className="footer-list-wrapper">
                  <li className="footer-list-item"><Link className="footer-link" href="/assets">Assets</Link></li>
                </ul></div>
                <div className="footer-col"><p className="footer-col-title">Help &amp; Support</p><ul className="footer-list-wrapper">
                  <li className="footer-list-item"><a className="footer-link" href="#">Privacy policy</a></li>
                  <li className="footer-list-item"><a className="footer-link" href="#">Terms and conditions</a></li>
                </ul></div>
              </nav>}
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                Copyright © Jazz.HQ Inc. {year}
              </p>
              {fullNavigation && <div className="footer-legal-links"><a className="footer-legal-link" href="#">Privacy Policy</a><a className="footer-legal-link" href="#">Terms of Service</a></div>}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
