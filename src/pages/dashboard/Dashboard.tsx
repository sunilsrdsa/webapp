import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";

const Dashboard = () => {

   const{expenses,error,isLoading} = useExpenses();
  /*  const expenses: Expense[] = [
       {id: 1, name: "Water bill", amount: 200.00, date: new Date().toDateString(),category: "Utilities",note: "bills"},
       {id: 2, name: "Electricity bill", amount: 500.00, date: new Date().toDateString(),category: "Utilities",note: "bills"},
       {id: 3, name: "Wifi bill", amount: 700.00, date: new Date().toDateString(),category: "Utilities",note: "bills"}
    ]; */
   return <div className="container"> 
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    <ExpenseList expenses={expenses}/>
   </div>
};

export default Dashboard
