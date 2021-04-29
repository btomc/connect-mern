import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../components/Input'
import { signin, signup } from '../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const GOOGLE_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)

        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const googleSuccess = async (res) => {
        // console.log(res)
        // console.log('Success')
        const result = res?.profileObj
        const token = res?.tokenId
        
        try {
            dispatch({ type: 'AUTH', data: { result, token }})

            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log('Google Sign In was unsuccessful. Try Again Later')
    }

    return (
        <Container>
            <Logo src='/logo.svg' />
            <Title>{isSignup ? 'Sign up' : 'Sign in'}</Title>
            <Form onSubmit={handleSubmit}>
                <Wrap>
                    {isSignup && (
                        <>  
                            <Label>First Name</Label>
                            <Input name='firstName' label='First Name' handleChange={handleChange} />
                            <Label>Last Name</Label>
                            <Input name='lastName' label='Last Name' handleChange={handleChange} />
                        </>
                    )}
                    <Label>Email Address</Label>
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Label>Password</Label>
                    <Input name='password' label='Password' handleChange={handleChange} type='password' />
                    { isSignup && (
                        <>
                            <Label>Confirm Password</Label>
                            <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />
                        </>
                    )}
                </Wrap>
                <BtnSubmit type='submit'>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </BtnSubmit>
                <GoogleLogin 
                    clientId={GOOGLE_ID}
                    render={(renderProps) => (
                        <Btn 
                            style={{ background: '#f7f7f7', color: '#162f7f'}}
                            onClick={renderProps.onClick}
                        >Login with Google</Btn>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />
                <Btn onClick={switchMode}>
                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Btn>

            </Form>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #162f7f;
    min-height: 100vh;
    height: auto;
    color: #f7f7f7;
    padding: 2rem;
`
const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
`

const Title = styled.h1`
    margin-bottom: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
`

const Label = styled.label`
    margin: 10px 0 0;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

const BtnSubmit = styled.button`
    background: #3764af;
    white-space: nowrap;
    outline: none;
    border: none;
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;

    margin-top: 1.2rem;

    &:hover {
        opacity: 0.8;
    }
`

const Btn = styled.button`
    background: #ec1e84;
    white-space: nowrap;
    outline: none;
    border: none;
    /* min-width: 100px;
    max-width: 200px; */
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    /* margin-right: 1rem; */

    &:hover {
        opacity: 0.8;
    }
`
