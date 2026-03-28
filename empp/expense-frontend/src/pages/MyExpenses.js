import { useEffect, useState } from "react";
import axios from "axios";

function MyExpenses() {

const user = JSON.parse(localStorage.getItem("user"))

const [expenses, setExpenses] = useState([])

useEffect(() => {

axios
.get(`http://localhost:8080/expenses/my/${user.id}`)
.then(res => setExpenses(res.data))
.catch(err => console.log(err))

}, [user.id])

return (

<div>

<h2>My Expenses</h2>

<table border="1">

<thead>
<tr>
<th>Title</th>
<th>Amount</th>
<th>Category</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{
expenses.length > 0 ? (

expenses.map((e)=>(
<tr key={e.id}>
<td>{e.title}</td>
<td>{e.amount}</td>
<td>{e.category}</td>
<td>{e.status}</td>
</tr>
))

) : (

<tr>
<td colSpan="4">No Expenses Found</td>
</tr>

)

}

</tbody>

</table>

</div>

)

}

export default MyExpenses