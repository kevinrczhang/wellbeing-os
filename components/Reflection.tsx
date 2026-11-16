export default function Reflection({ text, label = "My reflection" }: {
  text: string; label?: string;
}) {
  return <div className="personal-reflection">
    <span className="eyebrow">{label}</span>
    {text.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
  </div>;
}
