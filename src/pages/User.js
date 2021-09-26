import React from 'react'

const User = () => {
    return (
        <div className="user-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="login">
                            <div className="heading p-5">
                                <h1 className="text-center text-light">Welcome back!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-6 col-md-8 col-10 mx-auto">
                            <form className="">
                                <div className="form-group mb-3">
                                    <label for="email" className="form-label text-light">E-mail:</label>
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="password" className="form-label text-light">Password:</label>
                                    <input type="password" className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="login-butto mb-2">
                                    <button className="btn btn-primary col-12 mx-auto fs-6" type="submit">Log In</button>
                                </div>
                                <div className="forgot-password">
                                    <div className="text-light fs-6 fw-light">Forgot your password?</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="login">
                            <div className="heading text-center">
                                <h4 className="text-light">I am a new customer</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-10 mx-auto">
                            <form className="">
                                <div className="form-group mb-3">
                                    <label for="email" className="form-label text-light">E-mail:</label>
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="login-button mb-2">
                                    <button className="btn btn-dark col-12 mx-auto fs-6" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
