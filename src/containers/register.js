import React,{ Component } from 'react';

export default class Login extends Component {
  constructor(props) {
 super(props);

 this.state = {
   firstname: "",
   lastname: "",
   email: "",
   password: "",
   cpassword:"",
 };
}

 onFormSubmit(event){
  event.preventDefault();
   }

    render(){
      return(

    <form onSubmit={this.onFormSubmit}     className="form-horizontal" >
      <br/>
       <div> Register </div>

        <br/>
        <div class="form-group">
       <label for="inputName3" className="col-sm-2 control-label">First Name</label>
         <div class="col-sm-10">
       <input type="name" className="form-control"
       id="inputName3" placeholder="First Name"
        onChange = {(event,newValue) => this.setState({firstname:newValue})}
       />
       </div>
       </div>

      <br/>
       <div class="form-group">
      <label for="inputLName3" className="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-10">
      <input type="name" className="form-control"
      id="inputLName3" placeholder="Last Name"
       onChange = {(event,newValue) => this.setState({lastname:newValue})}
      />
      </div>
      </div>

        <br/>
       <div class="form-group">
      <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
      <input type="email" className="form-control"
      id="inputEmail3" placeholder="Email"
       onChange = {(event,newValue) => this.setState({email:newValue})}
      />
      </div>
      </div>
       <br/>
      <div class="form-group">
      <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"
       placeholder="Password"
       onChange = {(event,newValue) => this.setState({password:newValue})}
       />
       </div>
       </div>
        <br/>
       <div class="form-group">
       <label for="inputCPassword3" className="col-sm-2 control-label">Confirm Password</label>
         <div class="col-sm-10">
       <input type="password" className="form-control" id="inputCPassword3"
        placeholder="Confirm Password"
        onChange = {(event,newValue) => this.setState({cpassword:newValue})}
        />
        </div>
        </div>

         <br/>

       <div class="form-group">
   <div class="col-sm-offset-2 col-sm-10">
     <div class="checkbox">
       <label>
         <input type="checkbox"/> I agree to the terms of service
       </label>
     </div>
   </div>
 </div>
              <br/>
      <span className="input-group-btn">
      <button type="submit"

      className="btn btn-default"

      > Sign Me
      Up </button>
      </span>
     </form>
       );
       }


}
