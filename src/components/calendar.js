import Nav from "../views/calendar/nav"
import Header from "../views/calendar/header"
import './calendar.css'
import DashBoard from "./dashboard"
import CalendarLeft from "../views/calendar/calendarLeft"
import CalendarState from "../views/calendar/calendarState"
import ContentCalendar from "../views/calendar/ContentCalendar"
import UserInfo from './userInfo'
import { useState } from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { getAccountList, addAccount } from '../views/login/accountSlice'
import ContentChat from "../views/chat/ContentChat"


const Calendar = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState()
    const [isDashboard1, setIsDashboard] = useState(false)
    const [isCalendar1, setIsCalendar] = useState(true)
    const [isTasks1, setIsTasks] = useState(false)
    const [isChat, setIsChat] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [task, setTask] = useState({ id: 0 })
    const handleShow = () => setModalShow(true);
    const accounts = useSelector(getAccountList)

    useEffect(() => {
        const email = localStorage.getItem('email')
        const password = localStorage.getItem('password');
        const account = accounts.filter(acc => acc.email === email && acc.password === password)

        if (account.length > 0) {
            setUserInfo(account[0])
            setIsLogin(true)
        } else {
            setUserInfo('')
            setIsLogin(false)
        }
    });
    const handleDateSelect = (date) => {
        setSelectedDate(new Date(date));
    };
    const handleOpenDashBoard = () => {
        setIsDashboard(true)
        setIsCalendar(false);
        setIsTasks(false)
        setIsChat(false)
    }
    const handleOpenCalendar = () => {
        setIsDashboard(false)
        setIsCalendar(true);
        setIsTasks(false)
        setIsChat(false)
    }
    const handleOpenTask = () => {
        setIsDashboard(false)
        setIsCalendar(false);
        setIsTasks(true)
        setIsChat(false)
    }
    const handleOpenChat = () => {
        setIsDashboard(false)
        setIsCalendar(false);
        setIsTasks(false)
        setIsChat(true)
    }
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        setUserInfo('')
        setIsLogin(false)
    }

    return (
        <>
            {isLogin == false ? <UserInfo setIsLogin={setIsLogin} /> :
                <div className="calendar" >
                    <Header setSelectedDate={setSelectedDate}
                        isCalendar={isCalendar1}
                        handleLogout={handleLogout}
                        userInfo={userInfo}
                        handleShow={handleShow}
                    />
                    <Nav
                        handleOpenDashBoard={handleOpenDashBoard}
                        handleOpenCalendar={handleOpenCalendar}
                        handleOpenTask={handleOpenTask}
                        handleOpenChat={handleOpenChat}
                        isCalendar={isCalendar1}
                        isTasks={isTasks1}
                        isDashboard={isDashboard1}
                        isChat={isChat}

                    />
                    {isDashboard1 ?
                        <DashBoard
                            handleOpenDashBoard={handleOpenDashBoard}
                            handleOpenCalendar={handleOpenCalendar}
                            handleOpenTask={handleOpenTask}
                            isCalendar={isCalendar1}
                            isTasks={isTasks1}
                            isDashboard={isDashboard1}
                            handleLogout={handleLogout}
                            userInfo={userInfo}
                            handleShow={handleShow}
                            isChat={isChat}
                            handleOpenChat={handleOpenChat}

                        /> :
                        isChat == false ?
                            <CalendarLeft handleDateSelect={handleDateSelect} selectedDate={selectedDate}
                                userInfo={userInfo}
                                modalShow={modalShow}
                            /> : null}
                    {isCalendar1 ? <ContentCalendar
                        selectedDate={selectedDate}
                        userInfo={userInfo}
                        accounts={accounts}
                        modalShow={modalShow}
                        setModalShow={setModalShow}
                        handleOpenChat={handleOpenChat}
                        setTask={setTask}
                    /> : null}
                    {isTasks1 ? <CalendarState selectedDate={selectedDate}
                        userInfo={userInfo}
                    /> : null}
                    {isChat ? <ContentChat
                        userInfo={userInfo}
                        accounts={accounts}
                        task={task}
                        setTask={setTask}
                    /> : null}
                </div>
            }
        </>
    )
}
export default Calendar