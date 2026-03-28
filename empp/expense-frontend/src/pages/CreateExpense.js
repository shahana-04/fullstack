import {useState} from "react"
import axios from "axios"

function CreateExpense(){

const user = JSON.parse(localStorage.getItem("user"))

const [expense,setExpense] = useState({
title:"",
amount:"",
category:"",
userId:user.id
})

const handleChange=(e)=>{
setExpense({
...expense,
[e.target.name]:e.target.value
})
}

const submit = async(e)=>{

e.preventDefault()

await axios.post("http://localhost:8080/expenses",expense)

alert("Expense Submitted")

}

return(

<div>

<h2>Create Expense</h2>

<form onSubmit={submit}>

<input name="title" placeholder="Title" onChange={handleChange}/>

<br/>

<input name="amount" placeholder="Amount" onChange={handleChange}/>

<br/>

<input name="category" placeholder="Category" onChange={handleChange}/>

<br/>

<button>Submit</button>

</form>

</div>

)

}

export default CreateExpense