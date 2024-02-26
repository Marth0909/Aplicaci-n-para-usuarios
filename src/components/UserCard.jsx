import './styles/UserCard.css'
import Tooltip from './Tooltip'



const UserCard = ( { user, setUserUpdate, setFormClose, setAlertClose, setUserDelete } ) => {

  const handleDelete = () => {
    setAlertClose(false)
    setUserDelete(user)
  }

  const handleEdit = () => {
    setUserUpdate(user)
    setFormClose(false)
  }

  return (
    <article className="usercard">
      <h2 className="usercard__h2">{user.first_name} {user.last_name}</h2>
      <div className='usercard__div__img'>
        <img className='usercard__img' src={user.image_url ? user.image_url : 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.webp'} alt="" />
      </div>
      <ul className="usercard__ul">
        <li className="usercard__li">
          <span className='usercard__li--span--tittle'>Email:</span>
          <span className='usercard__li--span--content'> {user.email}</span>
        </li>
        <li className="usercard__li">
          <span className='usercard__li--span--tittle'>Birthday:</span>
          <span className='usercard__li--span--content'> {user.birthday}</span>
        </li>
      </ul>
      <hr className="usercard__hr" />
      <footer className='usercard__footer'>
        {/* <button className="usercard__footer__botton botton--edit" onClick={handleEdit} ><i className='usercard__botton__icon bx bx-edit-alt'></i></button> */}
        <Tooltip text={"Edit user"}>
        <button className="usercard__footer__botton botton--edit" onClick={handleEdit} ><i className='usercard__botton__icon bx bx-edit-alt'></i></button>
        </Tooltip>
        <Tooltip text={"Delete user"}>
        <button className="usercard__footer__botton botton--delete" onClick={handleDelete} ><i className='usercard__botton__icon bx bx-trash'></i></button>
        </Tooltip>
        {/* <button className="usercard__footer__botton botton--tras" onClick={handleDelete} ><i className='usercard__botton__icon bx bx-trash'></i></button> */}
        
      </footer>
    </article>
  )
}

export default UserCard