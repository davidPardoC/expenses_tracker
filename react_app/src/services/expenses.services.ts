import axios from "axios";
import { Expense } from "../entities/expense";

export class ExpensesServices {
  async registerExpenses(expense: Expense) {
    const { data } = await axios.post(
      "/api/expenses/",
      expense
    );
    return data;
  }

  async getExpenses(): Promise<{ results: Expense[] }> {
    const { data } = await axios.get("/api/expenses/");
    return data;
  }

  async getTotalSpent(): Promise<{ total: number }> {
    const { data } = await axios.get("/api/expenses/total/");
    return data;
  }
}
