import { Title } from "../../utils/Title";

const NoSpam = () => {
  return (
    <section className="bg-dark-green">
      <div className="container">
        <div className="py-15 flex items-center justify-center">
          <Title
          className="text-yellow"
            titles={["NO SPAM.", "JUST ONE MESSAGE", "WHEN IT'S\u00A0REAL."]}
          />
        </div>
      </div>
    </section>
  )
}

export default NoSpam
