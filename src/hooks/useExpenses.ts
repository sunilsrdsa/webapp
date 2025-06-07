import { useEffect, useState } from "react";
import type { Expense } from "../model/Expense";
import { getExpenses } from "../services/expense-service";

const  useExpenses = () => {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [error, setErrors] = useState(null);
    const[isLoading, setLoader] = useState(false);

    useEffect(() =>{
       //api call to backend System
       setLoader(true);
       getExpenses()
       .then((response) => {
        setExpenses(response.data);
       })
       .catch((error) => setErrors(error.message))
       .finally(() => setLoader(false));
    },[]);

    return {expenses,error,isLoading};
}

export default useExpenses;