import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchUsers, fetchLogin } from '../actions'
import {
  Dropdown,
  DropdownItem,
  TextInput,
  Modal,
  Button,
} from 'carbon-components-react'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: null,
      userSelected: -1,
      email: '',
      emailInvalid: false,
      password: '',
      passwordInvalid: false,
      dialogOpen: false,
    }

    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.getConsent = this.getConsent.bind(this)
    this.accept = this.accept.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleUserChange(event) {
    let value = event.value

    if (value > -1) {
      this.setState({
        userSelected: value,
        email: this.props.users[value].username,
        password: this.props.users[value].password,
      })
    } else {
      this.setState({ userSelected: -1, email: '', password: '' })
    }
  }

  handleEmailChange(event) {
    let email = event.target.value
    this.setState({ email })

    if (!email.match(/^[\w.\-+%]+@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/)) {
      this.setState({ emailInvalid: true })
    } else {
      this.setState({ emailInvalid: false })
    }
  }

  handlePasswordChange(event) {
    let password = event.target.value
    this.setState({ password })

    if (!password.match(/^.+$/)) {
      this.setState({ passwordInvalid: true })
    } else {
      this.setState({ passwordInvalid: false })
    }
  }

  getConsent() {
    if (
      this.state.email != '' &&
      !this.state.emailInvalid &&
      this.state.password != '' &&
      !this.state.passwordInvalid
    ) {
      this.setState({ dialogOpen: true })
    }
  }

  accept() {
    this.setState({ dialogOpen: false })

    this.props
      .fetchLogin({ username: this.state.email, password: this.state.password })
      .then(() => {
        this.setState({
          redirectTo: '/',
        })
      })
  }

  cancel() {
    this.setState({ dialogOpen: false })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="row">
          <p>Detta är en demo.</p>

          <div className="full">
            <label className="bx--label">Välj användare</label>
            <Dropdown
              id="user"
              onChange={this.handleUserChange}
              value={this.state.userSelected}
              ariaLabel="user"
            >
              <DropdownItem value="-1" itemText="" />
              {this.props.users.map((user, i) => (
                <DropdownItem
                  key={i}
                  value={i + ''}
                  itemText={user.firstname + ' ' + user.surname}
                />
              ))}
            </Dropdown>

            <TextInput
              id="username"
              onChange={this.handleEmailChange}
              placeholder="Enter your email"
              invalid={this.state.emailInvalid}
              invalidText="A valid email adress is required"
              labelText="Användarnamn"
              value={this.state.email}
            />

            <TextInput
              id="password"
              onChange={this.handlePasswordChange}
              placeholder="Enter your password"
              invalid={this.state.passwordInvalid}
              invalidText="A password is required"
              labelText="Lösenord"
              type="password"
              value={this.state.password}
            />
            <br />
            <Button kind="secondary" onClick={this.getConsent}>
              Logga in
            </Button>
          </div>

          <Modal
            onRequestClose={this.cancel}
            onBlur={this.cancel}
            open={this.state.dialogOpen}
            modalHeading="Eways demo"
            passiveModal
          >
            <p className="bx--modal-content__text">Detta är en demo!</p>
            <br />
            <Button kind="secondary" onClick={this.accept}>
              OK
            </Button>{' '}
            {/* <Button kind="secondary" onClick={this.cancel}>Nej</Button> */}
          </Modal>
        </div>
      )
    }
  }
}

LoginPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  fetchUsers: PropTypes.func,
  fetchLogin: PropTypes.func,
}

function mapStateToProps(state) {
  return { users: state.auth_users }
}

export default {
  component: connect(mapStateToProps, { fetchUsers, fetchLogin })(LoginPage),
}
