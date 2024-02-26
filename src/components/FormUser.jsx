import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate, setFormClose }) => {

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(userUpdate)
  }, [userUpdate])


  const submit = data => {

    if (userUpdate) {
      updateUser(userUpdate.id, data)
    } else {
      createUser(data)
    }

    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
      image_url: ''
    })

    //setFormClose(true)
  }

  const handleExit = () => {
    setFormClose(true)
    setUserUpdate()
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
      image_url: ''
    })
  }


  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="form__x" onClick={handleExit}>x</div>
      <h2 className="form__tittle"> {userUpdate ? 'Update user' : 'Create new user'}</h2>

      <label className="form__label">
        <span className="form__field__name">First name</span>
        <input className="form__field" {...register('first_name')} type="text" required />
      </label>
      <label className="form__label">
        <span className="form__field__name">Last name</span>
        <input className="form__field" {...register('last_name')} type="text" required />
      </label>
      <label className="form__label">
        <span className="form__field__name">Email</span>
        <input className="form__field" {...register('email')} type="email" required />
      </label>
      <label className="form__label">
        <span className="form__field__name">Password</span>
        <input className="form__field" {...register('password')} type="password" required />
      </label>
      <label className="form__label">
        <span className="form__field__name">Birthday</span>
        <input className="form__field" {...register('birthday')} type="date" />
      </label>
      <label className="form__label">
        <span className="form__field__name">Avatar url</span>
        <input className="form__field" {...register('image_url')} type="url" />
      </label>
      <button className="form__btn"> {userUpdate ? 'Update' : 'Create'} </button>
    </form>
  )
}

export default FormUser