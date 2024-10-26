import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBgContainer,
  LoginMainContainer,
  Logo,
  FormContainer,
  LabelElement,
  ShowLabelElement,
  InputElement,
  InputPasswordElement,
  CheckBoxContainer,
  CheckBox,
  LoginButton,
  ErrorElement,
} from './styleComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShow: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUser = e => {
    this.setState({username: e.target.value})
  }

  onChangePass = e => {
    this.setState({password: e.target.value})
  }

  onClickCheck = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      this.setState({showSubmitError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isShow, showSubmitError, errorMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const imgUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const bgColor = isDark ? '#212121' : '#f9f9f9'
          const mainBgColor = isDark ? '#0f0f0f' : '#ffffff'

          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginBgContainer bgColor={bgColor}>
              <LoginMainContainer isdark={isDark} mainBgColor={mainBgColor}>
                <Logo src={imgUrl} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <LabelElement isdark={isDark} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUser}
                    isDark={isDark}
                  />
                  <LabelElement isdark={isDark} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <InputPasswordElement
                    id="password"
                    value={password}
                    type={isShow ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePass}
                    isdark={isDark}
                  />
                  <CheckBoxContainer>
                    <CheckBox
                      id="check"
                      type="checkbox"
                      onClick={this.onClickCheck}
                    />
                    <ShowLabelElement isdark={isDark} htmlFor="check">
                      Show Password
                    </ShowLabelElement>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </FormContainer>
                {showSubmitError && <ErrorElement>*{errorMsg}</ErrorElement>}
              </LoginMainContainer>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
