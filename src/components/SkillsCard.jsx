function SkillsCard({ icons, title, text }) {
  return (
    <article>
      <div className="flex px-0 -m-1">
        {icons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>

      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
}

export default SkillsCard;
