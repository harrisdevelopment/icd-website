import { Container } from "./ui/Container";

/** Credentials row. `valueTone` white is used on the Florida page. */
export function StatStrip({
  items,
  label,
  valueTone = "gold",
  minWidth = 180,
}: {
  items: { value: string; label: string }[];
  label: string;
  valueTone?: "gold" | "white";
  minWidth?: number;
}) {
  return (
    <section
      aria-label={label}
      data-surface="dark"
      className="border-y border-line-dark bg-ink-800"
    >
      <Container className="py-7">
        <ul
          className="m-0 grid list-none gap-5 p-0"
          style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))` }}
        >
          {items.map((item) => (
            <li key={item.value} className="flex flex-col gap-1">
              <span
                className={`font-display text-[28px] font-bold leading-tight md:text-[30px] ${
                  valueTone === "gold" ? "text-gold" : "text-text-strong"
                }`}
              >
                {item.value}
              </span>
              <span className="text-sm text-text-dim">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
