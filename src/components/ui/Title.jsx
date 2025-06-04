export default function Title({titles,className}) {
  return (
    <h2 className={`flex uppercase  text-center flex-col text-[clamp(75px,13vw,120px)] font-bold  sm:leading-[0.8] leading-[0.8] font-greed ${className}`}>
      {titles.map((title, index) => (
        <span key={index} className="tracking-[-0.01em]">
          {title}
        </span>
      ))}
    </h2>
  )
}