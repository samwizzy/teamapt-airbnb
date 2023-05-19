type ProgressProps = {
  value: number;
  rate: number;
};

const Progress = ({ value, rate }: ProgressProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-96 h-2 bg-gray-200 rounded-full overflow-hidden">
        <span className="bg-secondary block h-full" style={{ width: `${value}%` }}></span>
      </div>

      <span className="text-sm text-gray-500">{rate?.toFixed(1)}</span>
    </div>
  );
};

export default Progress;
