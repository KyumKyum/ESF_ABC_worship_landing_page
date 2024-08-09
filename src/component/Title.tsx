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
      className={"group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4"}
    >
      <div
        className={"text-4xl font-bold uppercase text-white"}
      >
        {text}
      </div>
      <div
        className={"text-2xl absolute font-bold uppercase"}
      >
        {text}
      </div>
    </div>
  );
}

export default HoveringTitle;

