import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate()

const [user,setUser] = useState({
name:"",
email:"",
password:"",
role:"USER"
})

const handleChange=(e)=>{
setUser({
...user,
[e.target.name]:e.target.value
})
}

const register = async(e)=>{

e.preventDefault()

await axios.post("http://localhost:8080/login/register",user)

alert("Registered Successfully")

navigate("/")

}

return(

<div>

<h2>Register</h2>

<form onSubmit={register}>

<input name="name" placeholder="Name" onChange={handleChange}/>

<br/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<br/>

<input name="password" placeholder="Password" onChange={handleChange}/>

<br/>

<select name="role" onChange={handleChange}>
<option value="USER">User</option>
<option value="ADMIN">Admin</option>
</select>

<br/>

<button>Register</button>

</form>

</div>

)

}

export default Register