import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from '../PasswordItems'
import './index.css'

const colorslist = [
  'bggreen',
  'bgblue',
  'bgred',
  'bgskyblue',
  'bglightgreen',
  'bgpink',
]

class PasswordManager extends Component {
  state = {
    lists: [],
    website: '',
    username: '',
    password: '',
    searchinput: '',
    status: false,
  }

  addwebsite = event => {
    this.setState({website: event.target.value})
  }

  addusername = event => {
    this.setState({username: event.target.value})
  }

  addpassword = event => {
    this.setState({password: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {lists, website, username, password} = this.state
    const backcolor = colorslist[Math.floor(Math.random() * 5)]
    console.log(backcolor)
    const options = {website, username, password, id: uuidv4(), backcolor}
    if (website !== '' && username !== '' && password !== '') {
      const latest = [...lists, options]
      this.setState({
        lists: latest,
        website: '',
        username: '',
        password: '',
      })
    }
  }

  deleteitem = id => {
    const {lists} = this.state
    const updated = lists.filter(each => each.id !== id)
    this.setState({lists: updated})
  }

  searchitems = event => {
    this.setState({searchinput: event.target.value})
  }

  statuschange = () => {
    const {status} = this.state
    this.setState({status: !status})
  }

  render() {
    const {website, username, password, lists, searchinput, status} = this.state
    const updated = lists.filter(items =>
      items.website.toLowerCase().includes(searchinput.toLowerCase()),
    )
    const count = updated.length
    const history = count > 0 ? 1 : 0

    return (
      <div className="background-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-setting"
          />
          <div className="imgformcontainer">
            <form className="form-container" onClick={this.addButton}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="inputypeset">
                <p className="spanelement">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="imagesetting"
                  />
                </p>
                <input
                  type="text"
                  className="inputbox"
                  onChange={this.addwebsite}
                  value={website}
                  placeholder="Enter Website"
                />
              </div>
              <div className="inputypeset">
                <p className="spanelement">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="imagesetting"
                  />
                </p>
                <input
                  type="text"
                  value={username}
                  className="inputbox excess"
                  onChange={this.addusername}
                  placeholder="Enter Username"
                />
              </div>
              <div className="inputypeset">
                <p className="spanelement">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="imagesetting"
                  />
                </p>
                <input
                  type="password"
                  className="inputbox"
                  value={password}
                  onChange={this.addpassword}
                  placeholder="Enter Password"
                />
              </div>
              <div className="buttonadjust">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <div className="image-contianer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="form-image"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="form-images"
              />
            </div>
          </div>
          <div className="imgformcontainer1">
            <div className="container2inner">
              <div className="container2passwordcount">
                <h1 className="container2paragraph">Your Passwords</h1>
                <p className="container2para1">{count}</p>
              </div>
              <div className="container2searchcontianer">
                <p className="cont2imgpara">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="cont2imgserachlogo"
                  />
                </p>
                <input
                  type="search"
                  className="cont2inputstyle"
                  placeholder="Search"
                  value={searchinput}
                  onChange={this.searchitems}
                />
              </div>
            </div>
            <div className="cont2checkcontianer">
              <input
                id="check"
                type="checkbox"
                className="cont2checkbox"
                onClick={this.statuschange}
              />
              <label htmlFor="check" className="cont2label">
                Show Passwords
              </label>
            </div>
            {history === 0 && (
              <div className="historycontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="history-img"
                  alt="no passwords"
                />
                <p className="nopasswords">No Passwords</p>
              </div>
            )}
            {history === 1 && (
              <ul className="cont2unorderlist">
                {updated.map(each => (
                  <PasswordItems
                    each={each}
                    key={each.id}
                    deleteitem={this.deleteitem}
                    status={status}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
