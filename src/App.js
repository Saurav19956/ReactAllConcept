import react, {useState} from 'react'
import {validateEmail} from './utils';

function App(){
  const PasswordErrorMessage = ()=>{
    return(
     <p> password should have atleast 8 charcter</p>
    )
  }
  const EmailErrorMessage = ()=>{
    return(
      <p>please Enter valid email adress</p>
    )
  }
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState({
    value: "", isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [role, setRole] = useState('role')

  const getIsFormValid = ()=>{
    return(
      firstName.trim() !== "" && validateEmail(email) && password.value.length >= 8 && (role === 'individual' || role === 'business')
    )
  }

  // clear form
  const clearForm = ()=>{
    setfirstName('');
    setlastName('');
    setEmail('');
    setPassword({value: "", isTouched: false});
    setRole('role')
  }

  const handleSubmit= (event)=>{
    event.preventDefault();
    if(getIsFormValid()){
      alert('Account created');
      clearForm();
    }

  }
    return(
  <div>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2> SignUp</h2>
        <div>
          <label>First name <sup>*</sup></label>
          <input placeholder='First Name' value = {firstName} onChange={(e) =>setfirstName(e.target.value)} />
        </div>
        <div>
          <label>Last name </label>
          <input placeholder='Last Name' value = {lastName} onChange={(e)=> setlastName(e.target.value)} />
        </div>
        <div>
          <label> Email adress<sup>*</sup></label>
          <input placeholder='Email adress' value = {email.value} onChange={(e)=> setEmail({...email, value: e.target.value})}
          onBlur={() =>
            setEmail((prev) => ({ ...prev, isTouched: true }))
          }
           />
           {email.isTouched && !validateEmail(email.value) && (
              <EmailErrorMessage />
            )}
        </div>
        <div>
          <label> password <sup>*</sup></label>
          <input type = 'password' placeholder='password' value={password.value} onChange={(e)=>setPassword({...password, value: e.target.value})} 
              onBlur={()=>{
                setPassword((prev) =>({
                  ...prev, isTouched: true
                }))
              }}
          />
          {password.isTouched && password.value.length < 8 && (
              <PasswordErrorMessage />
          )}
        </div>
        <div>
          <label> Role <sup>*</sup></label>
          <select value={role}
              onChange={(e) => setRole(e.target.value)}>
            <option value= 'role'>Role</option>
            <option value= 'individual'>Individual</option>
            <option value= 'business'>Business</option>
          </select>
        </div>
        <button type='submit' disabled = {!getIsFormValid}>Create Account</button>
      </fieldset>

    </form>
  </div>
  )
}

export default App;
