/* One source for the sitemap and contact details, so the navbar, the footer
   and the contact page cannot drift apart. Wording matches dychtechnologies.com. */

export type MenuItem = { label: string; href: string; note: string };

export const PRODUCT_MENU: MenuItem[] = [
  { label: "Smart Vizion", href: "/product", note: "Recognition, attendance and alerts at an entry point" },
  { label: "Visitor Management", href: "/product#visitor-management", note: "A recorded visitor log in place of the paper book" },
  { label: "Staff Attendance", href: "/product#staff-attendance", note: "Clock-in and clock-out from the same entry scan" },
];

export const INDUSTRIES: MenuItem[] = [
  { label: "Schools", href: "/schools", note: "Arrival, attendance, parents and the gate" },
  { label: "Businesses & Workplaces", href: "/businesses", note: "Reception, workforce hours and controlled entry" },
  { label: "Churches & Worship Centres", href: "/churches", note: "Guests, teams and the spaces that need care" },
];

export const NAV_LINKS: { label: string; href: string; menu?: MenuItem[] }[] = [
  { label: "Product", href: "/product", menu: PRODUCT_MENU },
  { label: "Industries", href: "/schools", menu: INDUSTRIES },
  { label: "How it works", href: "/how-it-works" },
  { label: "Security", href: "/security-and-trust" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_NAV = [
  {
    heading: "Product",
    links: [
      { label: "Smart Vizion", href: "/product" },
      { label: "Visitor Management", href: "/product#visitor-management" },
      { label: "Staff Attendance", href: "/product#staff-attendance" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Schools", href: "/schools" },
      { label: "Businesses & Workplaces", href: "/businesses" },
      { label: "Churches & Worship Centres", href: "/churches" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About DYCH", href: "/about" },
      { label: "Security & trust", href: "/security-and-trust" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const CONTACT = {
  whatsapp: { display: "+256 767 870 035", href: "https://wa.me/256767870035" },
  phones: [
    { display: "+256 708 180 987", href: "tel:+256708180987" },
    { display: "+256 788 195 067", href: "tel:+256788195067" },
  ],
  email: "info@dychtechnologies.com",
  location: "Kampala, Uganda",
  linkedin: "https://www.linkedin.com/company/dychtechnologies/",
};
