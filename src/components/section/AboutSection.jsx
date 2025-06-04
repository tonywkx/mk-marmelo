export default function About() {
  return (
    <section className="bg-dark-green">
      <div className="container">
        <div className="sm:py-15 py-18 flex flex-col sm:gap-6.5 gap-7 items-center">
          <p className="flex flex-col items-center text-yellow md:text-base text-sm text-center  font-garnett">
            <span>He looked up.</span>
            <span>She smiled.</span>
          </p>
          <p className="md:flex hidden flex-col flex-wrap items-center text-yellow md:text-base text-sm text-center font-garnett">
            <span>Three tables apart, both waiting on&nbsp;wine.</span>
            <span>You've seen it happen. Maybe&nbsp;even wished for it.</span>
          </p>
          <p className="md:hidden flex leading-[1.6]  items-center text-yellow  text-sm text-center  max-w-[75%] font-garnett">
            Three tables apart, both waiting on&nbsp;wine. You've seen it
            happen. Maybe&nbsp;even wished for it.
          </p>
          <p className="flex leading-[1.71429] sm:leading-[1.5625] flex-col items-center text-yellow md:text-base text-sm text-center md:max-w-full sm:max-w-[75%] max-w-[55%] font-garnett">
            <span>
              Marmelo brings moments like that back to life —&nbsp;right&nbsp;where they
              belong:
            </span>
            <span>cafés,&nbsp;bars,&nbsp;and&nbsp;neighborhood corners&nbsp;you&nbsp;already&nbsp;love.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
