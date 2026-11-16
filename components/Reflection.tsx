export default function Reflection({ text, prompt, label = "A moment from my life" }: {
  text: string | null; prompt: string; label?: string;
}) {
  return <div className={`personal-reflection ${text ? "has-reflection" : "needs-reflection"}`}>
    <span className="eyebrow">{text ? label : "PERSONAL REFLECTION TO ADD"}</span>
    <p>{text || prompt}</p>
  </div>;
}
