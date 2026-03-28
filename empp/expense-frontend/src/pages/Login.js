import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate()

const [user,setUser] = useState({
email:"",
password:""
})

const handleChange = (e)=>{
setUser({
...user,
[e.target.name]:e.target.value
})
}

const login = async(e)=>{
e.preventDefault()

const res = await axios.post("http://localhost:8080/login",user)

if(res.data){
localStorage.setItem("user",JSON.stringify(res.data))

if(res.data.role === "ADMIN"){
navigate("/admin")
}else{
navigate("/dashboard")
}

}else{
alert("Invalid Login")
}

}

return(

<div>

<h2>Login</h2>

<form onSubmit={login}>

<input name="email" placeholder="Email" onChange={handleChange}/>

<br/>

<input type="password" name="password" placeholder="Password" onChange={handleChange}/>

<br/>

<button>Login</button>

</form>

<br/>

<a href="/register">Register</a>

</div>

)

}

export default Login