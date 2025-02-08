
import './NewForm.css'

const NewForm = () =>{
  let theOrder ="Sign Up";
  const Action = (newOrder) =>{
    theOrder= newOrder;
  };
    return(
        <div className="container">
        <div className="header">
          <div className="text">{theOrder}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            
            <input type="text" placeholder='Name'/>
          </div>
          <div className="input">
            
            <input type="email" placeholder='Email'/>
          </div>
          <div className="input">
            
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        <div className="forget-password">Forgetten password! <span>Click Here</span></div>
        <div className="submit-container">
          <div className={theOrder==="Login"?"submit gray":"submit"} onClick ={()=>Action("Sign Up")}>Sign Up</div>
          <div className={theOrder==="Sign Up"?"submit gray":"submit"} onClick ={()=>Action("Login")}>Login</div>
        </div>
      </div>
    );
  };
  export default NewForm;