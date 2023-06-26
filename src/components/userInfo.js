import { useState } from "react"
import Login from '../views/login/login'
import Register from '../views/register/register'
import ForgotPassword from '../views/login/forgotpassword'
import { getAccountList, addAccount } from '../views/login/accountSlice'
import { useSelector, useDispatch } from 'react-redux';




const UserInfo = (props) => {
    const [page, setPage] = useState('login')


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errAndSuccMessage, setErrAndSuccMessage] = useState("")
    const [isFailed, setIsFailed] = useState(false);
    const [validEmail, setValidEmail] = useState(null)

    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [name, setName] = useState("")
    const [isFailedRegister, setIsFailedRegister] = useState(false);
    const [validEmailRegister, setValidEmailRegister] = useState(null)
    const [type, setType] = useState(null)
    const [errAndSuccMessageRegister, setErrAndSuccMessageRegister] = useState("")
    const accounts = useSelector(getAccountList)

    const [emailForgot, setEmailForgot] = useState('')
    const [errorForgot, setErrorForgot] = useState(false)
    const [errorForgotMess, setErrorForgotMess] = useState('')
    const [opacity, setOpacity] = useState(1);
    const [newPassword, setNewPassword] = useState(false)

    const dispatch = useDispatch()
    const showRegisterPage = () => {
        setPage('register')

    }
    const showForgotPasswordPage = () => {
        setPage('forgot_password')

    }
    const showLoginPage = () => {
        if (errorForgot) setErrorForgot(false)
        setPage('login')

    }
    const checkValidEmail = (email) => {
        const isEmail = new RegExp('\\b[A-Za-z0-9._%+-]+@gmail\\.com\\b');
        return isEmail.test(email);
    }
    const handleForgotPassword = () => {
        const isEmailValid = checkValidEmail(emailForgot);
        if (!isEmailValid) {
            setErrorForgot(true)
            setErrorForgotMess("Please enter a valid email")
            return;
        }
        const account = accounts.find(acc => acc.email === emailForgot)
        if (!account) {
            setErrorForgot(true)
            setErrorForgotMess("Your email doesn't exist")
            return;
        }
        setErrorForgot(false)
        setErrorForgotMess('')
        setNewPassword(true)
        // Đóng thanh thông báo sau 3 giây
        const timer = setTimeout(() => {
            setNewPassword(false)
            showLoginPage()
        }, 3000);

    }
    const handInputEmailForgot = (e) => {
        if (errorForgot)
            setErrorForgot(false)
        setEmailForgot(e.target.value)
    }
    const handleUsernameInput = (e, isLogin) => {

        const email = e.target.value
        const isEmailValid = checkValidEmail(e.target.value);
        if (isLogin) {

            setUsername(e.target.value)
            // Nếu độ dài bằng 0 sẽ bỏ đi báo sai
            if (email.length === 0)
                setValidEmail(null)
            else
                setValidEmail(isEmailValid)
            // bỏ báo lỗi khi người dùng nhập lại
            setIsFailed(false)
        } else {
            setEmailRegister(e.target.value)
            // Nếu độ dài bằng 0 sẽ bỏ đi báo sai
            if (email.length === 0)
                setValidEmailRegister(null)
            else
                setValidEmailRegister(isEmailValid)
            // bỏ báo lỗi khi người dùng nhập lại
            setIsFailedRegister(false)
        }
    }
    const handlePassowrdInput = (e, isLogin) => {
        if (isLogin) {
            setIsFailed(false)
            // bỏ báo lỗi khi người dùng nhập lại
            setPassword(e.target.value)
        } else {
            setIsFailedRegister(false)
            // bỏ báo lỗi khi người dùng nhập lại
            setPasswordRegister(e.target.value)
        }
    }

    const handleNameInput = (e) => {
        setIsFailedRegister(false)
        // bỏ báo lỗi khi người dùng nhập lại
        setName(e.target.value)
    }


    const handleLogin = (e) => {
        // Kiểm tra xem email có đúng định dạng không
        if (checkValidEmail(username)) {
            // Kiểm tra xem có đúng tài khoản mật khẩu không
            const account = accounts.filter(acc => acc.email === username && acc.password === password)

            if (account.length > 0) {

                localStorage.setItem('email', username);
                localStorage.setItem('password', password);
                setIsFailed(false)
                setPassword('')
                setUsername('')
                setValidEmail(null)
                setType("success")
                setIsFailed(true)
                setErrAndSuccMessage("Đăng nhập thành công")
                props.setIsLogin(true)

            }
            else {
                setIsFailed(true)
                setType("danger")
                setErrAndSuccMessage("Tài khoản hoặc mật khẩu không chính xác")
            }
        } else {
            setIsFailed(true)
            setType("danger")
            setErrAndSuccMessage("Địa chỉ email phải có dạng xxx@gmail.com")
        }
    }
    const handleRegister = (e) => {
        console.log("Register")
        // Kiểm tra xem email có đúng định dạng không
        if (checkValidEmail(emailRegister)) {
            // Kiểm tra xem có tk đó chưa
            const account = accounts.find(acc => acc.email === emailRegister)

            if (!account) {
                setEmailRegister('')
                setPasswordRegister('')
                setName('')
                setIsFailedRegister(false)
                setValidEmailRegister(null)
                setType("success")
                setIsFailedRegister(true)
                setErrAndSuccMessageRegister("Đăng ký thành công")
                const timer = setTimeout(() => {
                    showLoginPage()
                }, 600); // Đóng thanh thông báo sau 1 giây

                console.log(dispatch(addAccount([name, emailRegister, passwordRegister])))
            }
            else {
                setIsFailedRegister(true)
                setType("danger")
                setErrAndSuccMessageRegister("Tài khoản đã tồn tại")
            }
        } else {
            setIsFailedRegister(true)
            setType("danger")
            setErrAndSuccMessageRegister("Địa chỉ email phải có dạng xxx@gmail.com")
        }
    }

    return (
        <>
            {page === 'login' ? <Login
                username={username} handleUsernameInput={handleUsernameInput}
                password={password} handlePassowrdInput={handlePassowrdInput}
                errAndSuccMessage={errAndSuccMessage}
                isFailed={isFailed}
                validEmail={validEmail}
                setIsFailed={setIsFailed}
                handleLogin={handleLogin}
                type={type}
                showRegisterPage={showRegisterPage}
                showForgotPasswordPage={showForgotPasswordPage}
            /> : null}
            {page === 'register' ? <Register
                showLoginPage={showLoginPage}
                name={name} handleNameInput={handleNameInput}

                handleEmailInput={handleUsernameInput}
                handlePassowrdRegister={handlePassowrdInput}
                emailRegister={emailRegister}
                passwordRegister={passwordRegister}
                errAndSuccMessageRegister={errAndSuccMessageRegister}
                isFailedRegister={isFailedRegister}
                validEmailRegister={validEmailRegister}
                setIsFailedRegister={setIsFailedRegister}
                handleRegister={handleRegister}
                type={type}

            /> : null}
            {page === 'forgot_password' ?
                <ForgotPassword showLoginPage={showLoginPage}
                    handInputEmailForgot={handInputEmailForgot}
                    handleForgotPassword={handleForgotPassword}
                    errorForgotMess={errorForgotMess}
                    errorForgot={errorForgot}
                    emailForgot={emailForgot}
                    newPassword={newPassword}
                /> : null}
        </>


    )

}
export default UserInfo