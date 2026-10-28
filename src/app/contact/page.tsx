import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { rt } from "@/lib/text";
import { contactPage } from "@content/contact";
import { pages } from "@content/pages";
import { site } from "@content/site";

export const metadata = buildMetadata({
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  path: pages.contact.path,
});

const label = "text-[13px] uppercase tracking-[0.12em] text-text-muted";
const value = "text-[18px] font-bold text-text-strong";

export default function ContactPage() {
  return (
    <Section tone="ink-900" size="lg" innerClassName="flex flex-wrap gap-x-14 gap-y-12 md:pb-[104px] md:pt-[72px]">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[22px]">
        <Eyebrow>{contactPage.eyebrow}</Eyebrow>
        <Heading as="h1" size="h1-sm">
          {contactPage.title}
        </Heading>
        <p className="m-0 text-[19px] leading-[1.6] text-lead">{rt(contactPage.lead)}</p>

        <dl className="m-0 mt-3 flex flex-col gap-[18px] border-t border-line-dark pt-7">
          <div className="flex flex-col gap-1">
            <dt className={label}>Contact</dt>
            <dd className={`m-0 ${value}`}>{site.owner}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={label}>Phone</dt>
            <dd className="m-0">
              <a href={site.phone.href} className={`${value} no-underline hover:text-gold-hover`}>
                {site.phone.display}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={label}>Email</dt>
            <dd className="m-0">
              <a
                href={`mailto:${site.email}`}
                className={`${value} break-all no-underline hover:text-gold-hover`}
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={label}>Office</dt>
            <dd className={`m-0 ${value}`}>{site.address.oneLine}</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className={label}>Service area</dt>
            <dd className={`m-0 ${value}`}>
              {contactPage.florida.pre}
              <Link href={pages.florida.path} className="text-gold underline underline-offset-4 hover:text-gold-hover">
                {contactPage.florida.link}
              </Link>
              {contactPage.florida.post}
            </dd>
          </div>
        </dl>
      </div>

      <div className="min-w-0 flex-[1.4_1_560px]">
        <ContactForm />
      </div>
    </Section>
  );
}
