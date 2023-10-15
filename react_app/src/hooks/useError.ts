import { hideError, showError } from "../slices/expensesSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useError = () => {
  const dispatch = useAppDispatch();

  const fireError = (message: string) => {
    dispatch(showError({ message }));
    const timeout = setTimeout(() => {
      dispatch(hideError());
      clearTimeout(timeout);
    }, 900);
  };

  return { fireError };
};
