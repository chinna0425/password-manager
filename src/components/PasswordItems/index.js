import './index.css'

const PasswordItems = props => {
  const {each, deleteitem, status} = props
  console.log(status)
  const {id, website, username, password, backcolor} = each
  const passw = status
    ? password
    : 'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
  console.log(id)

  const deleteaccess = () => {
    deleteitem(id)
  }
  return (
    <li className="list-styleset">
      <div className="list-itemsalign">
        <h1 className={`listpara ${backcolor}`}>{website[0]}</h1>
        <div>
          <p className="listpara1">{website}</p>
          <p className="listpara1">{username}</p>
          {status && <p className="listpara1">{passw}</p>}
          {!status && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star1"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="deletebutton"
        onClick={deleteaccess}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItems
