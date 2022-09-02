import Balance from "./Balance/Balance";
import "./App.css";
import Transaction from "./Transaction/Transaction";
import React from "react";
import List from "./History/List";
import { v4 as randomId } from "uuid";

function App() {
  const [list, setList] = React.useState([]);
  const [amountValue, setAmountValue] = React.useState(0);
  const [textValue, setTextValue] = React.useState("");

  let income = 0;
  let expense = 0;

  list.forEach((e) => {
    if (e.amount > 0) {
      income += +e.amount;
    } else if (e.amount < 0) {
      expense += +e.amount;
    }
  });
  const balance = income + expense;

  function onSubmit(e) {
    e.preventDefault();

    if (textValue == "" || amountValue == "") {
      return alert("Please fill empty sections !");
    }

    if (+amountValue === 0) {
      return alert("Wrong value !");
    }

    const newTransaction = {
      id: randomId(),
      name: textValue,
      amount: amountValue,
    };

    setList([...list, newTransaction]);
    setTextValue("");
    setAmountValue("");
  }

  function onDeleteHandler(id) {
    const newList = [];
    list.forEach((el) => {
      if (el.id != id) {
        newList.push(el);
      }
    });
    setList(newList);
  }

  return (
    <div className="App">
      <div className="container">
        <Balance balance={balance} income={income} expense={expense} />

        <h3>History</h3>
        <List list={list} onDeleteHandler={onDeleteHandler} />

        <h3>Add new transaction</h3>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          id="form"
        >
          <div className="form-control">
            <Transaction
              onChangeHandler={(e) => setTextValue(e.target.value)}
              label="Text :"
              type="text"
              id="text"
              placeholder="Enter text..."
              value={textValue}
            />
            <Transaction
              onChangeHandler={(e) => setAmountValue(e.target.value)}
              label="Amount :"
              type="number"
              id="number"
              placeholder="Enter amount..."
              value={amountValue}
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </div>
  );
}

export default App;
