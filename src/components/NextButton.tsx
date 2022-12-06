interface Props {
  onClick: () => void;
}

const NextButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      next
    </button>
  );
};

export default NextButton;
