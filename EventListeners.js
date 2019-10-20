button.addEventListener("click",(event)=>{
  event.preventDefault()
  result.innerHTML = ""
  let new_list = []
data.customers.forEach(element =>{
  if(element.email.toLowerCase() === email.value.toLowerCase() && element.password === password.value){
    new_list.push("true")
  }else{
    new_list.push("false")
  }
})
new_list.includes("true")? result.insertAdjacentHTML("beforeend",`<h1 style="color:green;/">Correct Credentials</h1>`) :
 result.insertAdjacentHTML("beforeend",`<h1 style="color:red;/">Incorrect Credentials</h1>`)
 let check = prompt("Do you want to create an Account?")
 if (check == "yes" || "Yes"){
   newform.insertAdjacentHTML(

  "beforeend",`<h1 id="createaccount">Create an Account</h1>
  <form id=formaccount>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="CreateEmail" aria-describedby="emailHelp" placeholder="Enter email" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="CreatePassword" placeholder="Password">
  </div>
  <button id="button1" type="submit" class="btn btn-warning">Submit</button>
</form>`)
buttoncreate.addEventListener("click",(event)=>{
  data.customers.push({"email":`${createemail.value}`,"password":`${createpassword.value}`})
  console.log("created")
})
 }
})
