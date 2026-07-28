// Microprint runs along both edges of the document, the way it does on the
// real thing: legible only when you lean in.
const LINE = "VALENTIN BEJAN · GALAȚI · ROMÂNIA · ";

export default function MicroprintBand() {
  return (
    <div className="security-tint border-b border-rule bg-stock">
      <p className="microprint px-5 py-2 text-ink-3/55 sm:px-8">
        {LINE.repeat(24)}
      </p>
    </div>
  );
}
