import React,{ Component } from 'react';

export default class Login extends Component {
  constructor(props) {
 super(props);

 this.state = {
   email: "",
   password: ""
 };
}
    render(){
      return(

    <form className="form-horizontal" >
       <div> Sign up </div>

       <div> </div>

       <div class="form-group">
      <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
      <input type="email" className="form-control"
      id="inputEmail3" placeholder="Email"
       onChange = {(event,newValue) => this.setState({email:newValue})}

      />

      </div>
      </div>
      <div class="form-group">
      <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"
       placeholder="Password"
       onChange = {(event,newValue) => this.setState({password:newValue})}


       />
       </div>
       </div>
       <div class="form-group">
   <div class="col-sm-offset-2 col-sm-10">
     <div class="checkbox">
       <label>
         <input type="checkbox"/> I agree to the terms of service
       </label>
     </div>
   </div>
 </div>

      <span className="input-group-btn">
      <button type="submit"

      className="btn btn-default"

      > Sign in </button>
      </span>
     </form>
       );
       }


}
