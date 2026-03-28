import {useEffect,useState} from "react"
import axios from "axios"

function AdminPanel(){

const [expenses,setExpenses] = useState([])

useEffect(()=>{

axios
.get("http://localhost:8080/expenses/all")
.then(res=>setExpenses(res.data))

},[])

const approve = async(id)=>{

await axios.put(`http://localhost:8080/expenses/${id}/approve`)

window.location.reload()

}

const reject = async(id)=>{

await axios.put(`http://localhost:8080/expenses/${id}/reject`)

window.location.reload()

}

return(

<div>

<h2>Admin Panel</h2>

<table border="1">

<thead>
<tr>
<th>Title</th>
<th>Amount</th>
<th>User</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{
expenses.map((e)=>(
<tr key={e.id}>

<td>{e.title}</td>
<td>{e.amount}</td>
<td>{e.userId}</td>
<td>{e.status}</td>

<td>

<button onClick={()=>approve(e.id)}>Approve</button>

<button onClick={()=>reject(e.id)}>Reject</button>

</td>

</tr>
))
}

</tbody>

</table>

</div>

)

}

export default AdminPanel