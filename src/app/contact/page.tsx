import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-teal pb-20 pt-36 text-cream sm:pb-28 sm:pt-44">
      <div
        className="absolute -right-[14vw] top-[8%] hidden aspect-square w-[44vw] rounded-full bg-amber lg:block"
        aria-hidden="true"
      />
      <Container className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="min-w-0">
          <h1 className="measure-heading type-page">
            Talk to the team in Kampala.
          </h1>
          <p className="mt-7 measure-body text-lg leading-relaxed text-mist">
            Tell us the size of your roll and how attendance is taken today, and we will come back with what an
            installation would involve at your site. A site assessment costs nothing and ends with a written scope.
          </p>

          <div className="mt-12 rounded-[14px] bg-cream p-7 text-ink">
            <h2 className="type-item">Prefer WhatsApp?</h2>
            <p className="mt-2 leading-relaxed text-ink-body">
              It is the quickest way to reach us, and you will get a person rather than a ticket number.
            </p>
            <a href={CONTACT.whatsapp.href} className="btn mt-4 border-white bg-teal text-cream hover:bg-teal-raised">
              {CONTACT.whatsapp.display}
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className="font-semibold text-apricot">Call the team</dt>
              {CONTACT.phones.map((p) => (
                <dd key={p.href}>
                  <a href={p.href} className="text-mist hover:text-cream">
                    {p.display}
                  </a>
                </dd>
              ))}
            </div>
            <div>
              <dt className="font-semibold text-apricot">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="text-mist hover:text-cream">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-apricot">Where we are</dt>
              <dd className="text-mist">{CONTACT.location}</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
