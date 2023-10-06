import { Card, CardBody } from "@nextui-org/react";

const Alert = () => {
  return (
    <Card
      isBlurred
      className="fixed ml-2 mt-2 z-10 border-none bg-background/60 dark:bg-default-100/50 min-w-[50%]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex min-w-full justify-between">
          <span className="text-danger">Error</span>
          <span className="text-danger">X</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Alert;
