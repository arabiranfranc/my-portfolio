const SkillsCard = ({ icon, title, text, author, url }) => {
  return (
    <article>
      {icon ? <span>{icon}</span> : ""}
      <a href={url} target="__blank">
        <h4 className="mt-6 font-bold">{title}</h4>
      </a>
      {text ? (
        <p className="mt-2 text-slate-500">{text}</p>
      ) : (
        <p className="mt-2 text-slate-500">{author}</p>
      )}
    </article>
  );
};
export default SkillsCard;
