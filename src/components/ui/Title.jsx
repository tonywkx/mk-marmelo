export default function Title({titles,className}) {
  return (
    <h2 className={`flex text-center flex-col text-[clamp(75px,13vw,120px)] font-bold  leading-[0.95833] font-greed ${className}`}>
      {titles.map((title, index) => (
        <span key={index} className="tracking-[-0.04em]">
          {title}
        </span>
      ))}
    </h2>
  )
}