import { renderParagraph } from "./renderParagraph";

export const renderList = (array) => {
  const isArrayOfObjects = array.every(item => typeof item === 'object' && item !== null && 'descr' in item);

  return (
    <ul className="list-disc list-inside flex flex-col gap-1 sm:ml-4 pb-[clamp(16px,5vw,24px)]">
      {array.map((item, index) => (
        <li key={index} className="marker:m-0 marker:p-0">
          {isArrayOfObjects
            ? renderParagraph(item.descr, index, true)
            : renderParagraph(item, index, true)
          }
          {/* Если объект содержит массив `details`, рендерим его как вложенный список */}
          {isArrayOfObjects && item.details && (
            <ul className="list-none list-inside sm:ml-4">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="before:content-['-'] before:mr-2 before:text-dark-green flex items-start">
                  <p className="text-sm font-normal text-dark-green leading-[1.5625]">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
