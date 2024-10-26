import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: ${props => props.mainBgColor};
  box-shadow: 0px 4px 16px 0px ${props => (props.isdark ? 'none' : '#ebebeb')};
  padding: 50px 40px 50px 40px;
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    padding: 30px 20px 30px 20px;
    width: 350px;
  }
`

export const Logo = styled.img`
  height: 35px;
  width: 150px;
  margin-bottom: 50px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 11px;
  color: ${props => (props.isdark ? '#ffffff' : '#7e858e')};
  font-weight: bold;
  margin-bottom: 5px;
`

export const ShowLabelElement = styled(LabelElement)`
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
  margin: 0px;
`

export const InputElement = styled.input`
  height: 35px;
  width: 100%;
  padding-left: 15px;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.isdark ? '  #475569' : '#cbd5e1')};
  border-radius: 2px;
  outline: none;
  margin-bottom: 20px;
  color: ${props => (props.isdark ? '#ffffff' : '#475569')};
  background-color: transparent;
`

export const InputPasswordElement = styled(InputElement)`
  margin-bottom: 10px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-family: 'Roboto';
  color: #000000;
  font-weight: 500;
  margin-bottom: 30px;
`

export const CheckBox = styled.input`
  height: 14px;
  width: 14px;
  margin-right: 5px;
`

export const LoginButton = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  border: none;
  font-family: 'Roboto';
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
export const ErrorElement = styled.p`
  font-size: 12px;
  margin-top: 2px;
  font-family: 'Roboto';
  color: #ff0000;
  font-weight: 500;
  align-self: flex-start;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`
