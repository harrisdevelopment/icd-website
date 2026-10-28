import { pastPerformance } from "@content/home";
import { Eyebrow } from "./ui/Eyebrow";
import { Heading } from "./ui/Heading";
import { Section } from "./ui/Section";

export function PastPerformance() {
  return (
    <Section tone="paper" size="lg" innerClassName="flex flex-wrap gap-x-12 gap-y-10">
      <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3.5">
        <Eyebrow>{pastPerformance.eyebrow}</Eyebrow>
        <Heading size="h2-md">{pastPerformance.title}</Heading>
        <p className="m-0 text-[17px] leading-[1.6] text-body">{pastPerformance.note}</p>
      </div>
      <ul className="m-0 flex min-w-0 flex-[2_1_560px] list-none flex-col p-0">
        {pastPerformance.sectors.map((sector) => (
          <li
            key={sector.title}
            className="flex flex-wrap gap-x-8 gap-y-1.5 border-b border-paper-rule py-5"
          >
            <h3 className="m-0 font-display text-[22px] font-bold uppercase leading-tight text-heading md:flex-[0_0_300px]">
              {sector.title}
            </h3>
            <p className="m-0 min-w-0 flex-[1_1_260px] text-base leading-[1.55] text-body">
              {sector.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
