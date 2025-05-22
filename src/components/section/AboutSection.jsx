export default function About() {
  return (
    <section className="bg-dark-green">
      <div className="container">
        <div className="py-15 flex flex-col gap-8 items-center">
          <p className="flex flex-col items-center text-yellow md:text-base text-sm text-center  font-garnett">
            <span>He looked up.</span>
            <span>She smiled.</span>
          </p>
          <p className="md:flex hidden flex-col flex-wrap items-center text-yellow md:text-base text-sm text-center font-garnett">
            <span>Three tables apart, both waiting on&nbsp;wine.</span>
            <span>You've seen it happen. Maybe&nbsp;even wished for it.</span>
          </p>
          <p className="md:hidden flex  items-center text-yellow  text-sm text-center  max-w-[75%] font-garnett">
            Three tables apart, both waiting on&nbsp;wine. You've seen it
            happen. Maybe&nbsp;even wished for it.
          </p>
          <p className="flex flex-col items-center text-yellow md:text-base text-sm text-center md:max-w-full max-w-[75%] font-garnett">
            <span>
              Marmelo brings moments like that back to life — right where they
              belong:
            </span>
            <span>cafés, bars, and neighborhood corners you already love.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
