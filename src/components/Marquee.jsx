const Marquee = ({
  children,
  gapClassName = "gap-10",
  duration = "32s",
  reverse = false,
  className = "",
}) => {
  return (
    <div className={`group relative min-w-0 overflow-hidden mask-fade-x ${className}`}>
      <div
        className={`flex w-max items-center ${gapClassName} ${
          reverse ? "animate-marqueeReverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        <div className={`flex shrink-0 items-center ${gapClassName}`}>
          {children}
        </div>
        <div
          className={`flex shrink-0 items-center ${gapClassName}`}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
