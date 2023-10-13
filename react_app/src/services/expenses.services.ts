import axios from "axios";
import { Expense } from "../entities/expense";

export class ExpensesServices {
  async registerExpenses(expense: Expense) {
    const { data } = await axios.post(
      "http://0.0.0.0:8000/api/expenses/",
      expense
    );
    return data;
  }

  async getExpenses(): Promise<{ results: Expense[] }> {
    const { data } = await axios.get("http://0.0.0.0:8000/api/expenses/");
    return data;
  }

  async getTotalSpent(): Promise<{ total: number }> {
    const { data } = await axios.get("http://0.0.0.0:8000/api/expenses/total/");
    return data;
  }
}
