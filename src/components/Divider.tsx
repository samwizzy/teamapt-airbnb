const Divider = ({ spacing }: { spacing?: number }) => {
  return (
    <>
      <hr className="bg-gray-100 my-10" style={{ marginBlock: spacing }} />
    </>
  );
};

export default Divider;
