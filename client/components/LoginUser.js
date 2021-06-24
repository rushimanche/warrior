import React from 'react'

const LoginUser = ({ onChangeForm, loginUser }) => {

  return (
    <div className="container">
      <div className="login-main">
        <div className="">
          <h2 className="sign" align="center">Login User</h2>
          <form className="form1">
            <div>
              <div className="un ">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="username" id="username" aria-describedby="emailHelp" placeholder="Username" />
              </div>
              <div className="pass">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" placeholder="Password" />
              </div>
            </div>
            <button type="button" onClick={(e) => loginUser()} align="center" className="btn btn-danger submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;