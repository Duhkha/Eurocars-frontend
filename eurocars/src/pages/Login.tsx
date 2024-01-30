import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { login } from "../store/authSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {}

export type LoginFormData = {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  .required()

const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })

  const { loading, userToken, error } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  useEffect(() => {
    if (userToken) {
      navigate('/home')
    }
  }, [navigate, userToken])

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data))
  }

  const navigateToRegister = () => {
    navigate('/register'); // Replace '/register' with your registration route
  };

  return (
    <div className="col-12 col-md-3 m-2">
      {
        error &&
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            Something went wrong, please try again.
          </p>
        </div>
      }
      <div className="card p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" {...register("email")} />
            <div className="form-text">We'll never share your email with anyone else.</div>
            {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"  {...register("password")} />
            {errors.password && <small style={{ color: "red" }}>{errors.password.message}</small>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Log in'}
          </button>
          <button type="button" className="btn btn-secondary mt-3" onClick={navigateToRegister}>
            Don't have an account? Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login