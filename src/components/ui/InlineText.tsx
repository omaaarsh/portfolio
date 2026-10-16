/** Renders text with `backtick` spans as <code>, without using innerHTML. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split("`");
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <code key={i}>{part}</code> : part))}
    </>
  );
}
