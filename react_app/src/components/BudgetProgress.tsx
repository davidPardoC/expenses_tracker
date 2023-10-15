import { Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";

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
      {budget === 0 ? (
        <ConfigureBudget />
      ) : (
        <>
          <h1>
            ${spends} spent out of ${budget} 💸
          </h1>
          <div className="w-full bg-gray-600 rounded-full mt-2 transition-all">
            <div
              className="h-7 rounded-full p-1 flex items-center justify-end transition-all overflow-hidden"
              style={{
                width: `${percentageSpent}%`,
                maxWidth: "100%",
                backgroundColor: "#0070F0",
                overflow: "hidden",
              }}
            >
              <span className="min-w-max">
                {isNaN(percentageSpent) ? 0 : percentageSpent}%
                {percentageSpent >= 80 ? "🔥" : "😎"}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetProgress;

const ConfigureBudget = () => {
  return (
    <Card>
      <CardBody>
        💸 Please configure your monthly budget{" "}
        <Link to={"/profile"} className="underline text-primary">
          here.
        </Link>
      </CardBody>
    </Card>
  );
};
