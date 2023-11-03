
interface ILabelProps {
  label: string;
}

const Label = (props: ILabelProps) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <label
          className="whitespace-nowrap  text-sm font-bold leading-none"
          data-testid="text-label"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default Label;
