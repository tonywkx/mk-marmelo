
 export const renderParagraph = (item, index, noMargin = false) => {
  return (
    <p key={index}
      className={`${noMargin ? 'pb-0 inline' : 'pb-[clamp(16px,5vw,24px)] block'} text-sm sm:text-base font-normal text-dark-green leading-[1.5625]`}>
      {item}
    </p>
  );
};
