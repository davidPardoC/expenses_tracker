import { Card, CardBody } from "@nextui-org/react";

const Alert = ({ message = "Error" }: { message: string }) => {
  return (
    <Card
      isBlurred
      className="fixed ml-2 mt-2 z-10 border-none bg-background/60 dark:bg-default-100/50 min-w-[50%]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex min-w-full justify-between">
          <span className="text-danger">{message}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Alert;
