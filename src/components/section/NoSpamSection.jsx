import  Title  from "../ui/Title";

const NoSpam = () => {
  return (
    <section className="bg-dark-green">
      <div className="container">
        <div className="sm:py-21 py-14 flex items-center justify-center">
          <Title
          className="text-yellow sm:leading-[0.83]"
            titles={["NO SPAM.", "JUST ONE MESSAGE", "WHEN IT'S\u00A0REAL."]}
          />
        </div>
      </div>
    </section>
  )
}

export default NoSpam
