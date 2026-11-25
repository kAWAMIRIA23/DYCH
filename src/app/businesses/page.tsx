import type { Metadata } from "next";
import { CreamCards, Cta, Details, H2, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = { title: "Businesses & Workplaces" };

const places = [
  {
    title: "The front desk",
    text: "A visitor is recorded on the way in and on the way out, against the person or the department they came to see. The paper book is replaced rather than digitised alongside, so there is one place to look when somebody asks who was on site last Thursday.",
    link: { href: "/product#visitor-management", label: "Visitor Management" },
  },
  {
    title: "The workforce",
    text: "The same arrival scan that opens the day writes the attendance record, so hours come from the entrance rather than from a notebook reconciled at month end. It is attendance visibility, not payroll and not an HR platform.",
    link: { href: "/product#staff-attendance", label: "Staff Attendance" },
  },
  {
    title: "Entry that needs more care",
    text: "A server room, a cash office, a store, a site where only some people should pass. Recognition at those points is worth it where the risk justifies it, and worth questioning where it does not. We will say which we think you have.",
    link: { href: "/how-it-works", label: "How recognition works" },
  },
];

export default function BusinessesPage() {
  return (
    <>
      <PageHeader title="Who came in, who is here, and what the record says." image="/images/visitor.jpg" imageAlt="A visitor being checked in on a tablet at an office entrance">
        <p>
          Most workplaces already manage employees, contractors and visitors through separate books and habits that
          each work until the week somebody needs to check one. DYCH covers the physical moments at an entrance: a
          visitor arriving, a shift starting, a door that should only open for some people. Nothing more, and nothing
          you have to run a project to adopt.
        </p>
      </PageHeader>

      <Section tone="dark" className="border-t border-teal-line">
        <H2 tone="dark">Three places it earns its keep.</H2>
        <div className="mt-12">
          <CreamCards items={places} cols={3} />
        </div>
      </Section>

      <Section tone="light">
        <H2 className="measure-heading">Before you ask us anything, here is what we would say.</H2>
        <div className="mt-12">
          <Details
            cols={3}
            items={[
              {
                title: "What we would look at first",
                text: "How many people come through, at what times, and what currently gets written down. If the answer is that nothing gets written down and nobody has missed it, the honest recommendation may be that you do not need us yet.",
              },
              {
                title: "What this is not",
                text: "It is not payroll, leave management or a human-resources platform, and it does not replace the systems you run the business on. It covers the physical moments at an entrance and hands the record to whatever you already use.",
              },
              {
                title: "Where it is proven",
                text: "DYCH's documented deployment is a school gate. The mechanism at a reception desk is the same and the product is the same, but we are not going to show you a workplace reference we do not have. Ask us at the site visit and we will tell you exactly what is running where.",
              },
            ]}
          />
        </div>
      </Section>

      <Cta title="Show us the entrance you want to improve.">
        A site assessment is a walk around your entry points and an hour of questions. It costs nothing and it ends with
        a written scope.
      </Cta>
    </>
  );
}
