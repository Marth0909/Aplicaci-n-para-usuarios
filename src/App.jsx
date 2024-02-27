import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import Alert from './components/Alert'
import Modal from './components/Modal'

function App() {

  const [userUpdate, setUserUpdate ] = useState()
  const [formClose, setFormClose] = useState(true)
  const [alertClose, setAlertClose] = useState(true)
  const [userDelete, setUserDelete] = useState()
  const [comment, setComment] = useState()
  const [modalClose, setModalClose] = useState(true)

  const url = 'https://api-rest-app-usuarios.onrender.com/persons'

  const [ users, createUser, getUsers, updateUser, deleteUser ] = useFetch({
    url,
    setModalClose,
    setComment,
    setUserDelete,
    setFormClose,
    setUserUpdate
  })

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setFormClose(false)
  }


  return (
    <div className='app'>
      <h1 className='app__h1'>Users CRUD-Api Node js</h1>
      <button className='app__button' onClick={handleOpenForm}><i className='app__button--icon bx bx-plus'></i>Add user</button>
      <div className={`app__form ${formClose && 'form__close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setFormClose={setFormClose}
        />
      </div>
      <div className={`alert__form ${alertClose && 'alert__close'}`}>
        <Alert
          setAlertClose={setAlertClose}
          userDelete={userDelete}
          deleteUser={deleteUser}
          setUserDelete={setUserDelete}
          setComment={setComment}
          setModalClose={setModalClose}
        />
      </div>
      <div className={`modal__div ${modalClose && 'modal__close'}`}>
        <Modal
          comment={comment}
        />
      </div>
      <div className='app__cards'>
        {
          users?.map(user => (
            <UserCard
             key={user.id}
             user={user}
             setUserUpdate={setUserUpdate}
             setFormClose={setFormClose}
             setAlertClose={setAlertClose}
             setUserDelete={setUserDelete}
            />
          ))
        }
      </div>
    </div>
  )

}

export default App
