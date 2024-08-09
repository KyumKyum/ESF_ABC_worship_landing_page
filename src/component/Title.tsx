const HoveringTitle = ({
  text,
}: {
  text: string;
}) => {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={"group relative flex items-center justify-center bg-background px-2 md:px-6 md:py-4 font-Jeju"}
    >
      <div
        className={"text-5xl font-bold uppercase text-white"}
      >
        {text}
      </div>
      <div
        className={"text-4xl absolute font-bold uppercase"}
      >
        {text}
      </div>
    </div>
  );
}

export default HoveringTitle;

