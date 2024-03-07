import React, { FC, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContext } from './AuthContext';
// Define the shape of form data
type FormData = {
    email: string;
    password: string;
};

const LoginForm: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const { setUserId } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const login = (data: FormData) => {
        let params = {
            email: data.email,
            password: data.password,
        };

        axios
            .post('http://127.0.0.1:8741/api/login_check', params)
            .then(function (response) {
                if (response.data.success === false) {
                    toast.error(response.data.error, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: 'my_toast',
                    });
                } else {
                    toast.success(response.data.message, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: 'my_toast',
                    });
                    localStorage.setItem('auth', response.data.token);
                    setUserId(response.data.userId); // Stocker l'ID de l'utilisateur

                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="card mb-3" style={{ maxWidth: '320px' }}>
                        <div className="col-md-12">
                            <div className="card-body">
                                <h3 className="card-title text-center text-secondary mt-3">Login Form</h3>
                                <form autoComplete="off" onSubmit={handleSubmit(login)}>
                                    <div className="mb-3 mt-4">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control shadow-none"
                                            id="exampleFormControlInput1"
                                            {...register('email', { required: 'Email is required!' })}
                                        />
                                        {errors.email && (
                                            <p className="text-danger" style={{ fontSize: 14 }}>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control shadow-none"
                                            id="exampleFormControlInput2"
                                            {...register('password', {
                                                required: 'Password is required!',
                                            })}
                                        />
                                        {errors.password && (
                                            <p className="text-danger" style={{ fontSize: 14 }}>
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="text-center mt-4 ">
                                        <button className="btn btn-outline-primary text-center shadow-none mb-3" type="submit">
                                            Submit
                                        </button>
                                        <p className="card-text pb-2">
                                            Have an Account?{' '}
                                            <Link style={{ textDecoration: 'none' }} to="/register">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                limit={1}
                transition={Flip}
            />
        </>
    );
};

export default LoginForm;
