const BudgetProgress = ({
  budget,
  spends,
}: {
  budget: number;
  spends: number;
}) => {
  const percentageSpent = (spends * 100) / budget;

  return (
    <div className="px-4">
      <h1>
        ${spends} spent out of ${budget}
      </h1>
      <div className="w-full bg-gray-600 rounded-full mt-2">
        <div
          className="h-7 rounded-full p-1 flex items-center justify-end"
          style={{
            width: `${percentageSpent}%`,
            maxWidth: "100%",
            backgroundColor: "#0070F0",
            overflow: "hidden",
          }}
        >
          {percentageSpent}%
        </div>
      </div>
    </div>
  );
};

export default BudgetProgress;
