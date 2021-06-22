import React from 'react'


const CreateUser = ({onChangeForm, createUser }) => {


    return(
    <div className="container">
        <div className="register-main">
            <div className="">
            <h2 className="sign" align="center">Register User</h2>
            <form className="form1">
                <div>
                    <div className="un ">
                        <label htmlFor="exampleInputUsername1">First Name</label>
                        <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div className="pass">
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>
                    <div className="un ">
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="username" id="username" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    <div className="pass">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="password" id="password" placeholder="Password" />
                    </div>
                </div>
                <button type="button" onClick= {(e) => createUser()} align="center" className="btn btn-danger submit">Create</button>
            </form>
            </div>
        </div>
    </div>
        
    )
}

export default CreateUser