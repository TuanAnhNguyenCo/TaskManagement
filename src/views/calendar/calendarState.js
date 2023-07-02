import { Row, Col } from "react-bootstrap"
import './calendarState.css'
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus, faAngleUp, faAngleDown, faCircleCheck,
    faComments, faSquareCaretRight, faClock, faRectangleXmark,
    faBan, faSpinner
} from "@fortawesome/free-solid-svg-icons";

import { getTasksByDate, getTotalWorkspace, updateWorkStatus, getTaskProgress } from "./taskSlice";
import { useDispatch, useSelector } from "react-redux";
const CalendarState = (props) => {
    const [angleUp1, setAngleUp1] = useState(false)
    const [angleUp2, setAngleUp2] = useState(false)
    const [angleUp3, setAngleUp3] = useState(false)
    const changeAngleUpState1 = () => { setAngleUp1(!angleUp1) }
    const changeAngleUpState2 = () => { setAngleUp2(!angleUp2) }
    const changeAngleUpState3 = () => { setAngleUp3(!angleUp3) }
    const [opacity, setOpacity] = useState(1)
    const [isClosed, setIsClosed] = useState(true)

    const tasksByDate = useSelector((state) => getTasksByDate(state,
        props.selectedDate.getDate(), props.selectedDate.getMonth() + 1,
        props.selectedDate.getFullYear(), props.userInfo.id
    ))
    const taskProgress = useSelector((state) => getTaskProgress(state, props.userInfo.id))

    const completedTask = tasksByDate.filter(t => taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Completed')
    const cancelledTask = tasksByDate.filter(t => taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Cancelled')
    const inprogressTask = tasksByDate.filter(t => taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Inprogress')

    const total_workspace = useSelector((state) => getTotalWorkspace(state, props.userInfo.id))
    const [taskRemaining, setTaskRemaining] = useState(null)
    const [workStatus, setWorkStatus] = useState("")
    const dispatch = useDispatch()

    const handleCloseAdd = () => {
        setIsClosed(true)
        setOpacity(1)
    }

    const procressTime = (time) => {

        const hour = Math.floor(time / 3600)
        const minute = Math.round((time - hour * 3600) / 60)

        return `${hour}:${minute}`
    }
    const getWorkspaceById = (id) => {
        console.log(total_workspace)
        return (total_workspace.filter(workspace => workspace.id === id)[0]).name
    }
    const handleOpenToChangeTaskStatus = (data1, data2, type) => {

        setWorkStatus(type)
        setTaskRemaining(data1.concat(data2))
        setOpacity(0.1)
        setIsClosed(false)
    }


    const handleChangeTaskStatus = (task_id, user_id) => {

        dispatch(updateWorkStatus([task_id, user_id, workStatus, props.userInfo.name]))
        setTaskRemaining(taskRemaining.filter(w => w.id !== task_id))
        alert("Add successfully")
    }


    return (
        <>
            <div className="calendar-state" style={{ opacity: opacity }}>
                <Row className="calendar-state-row" style={{ color: '#adb5bd' }}>
                    <Col className="calendar-state-col" lg='4'>Task name</Col>
                    <Col className="calendar-state-col" lg='2'>Message</Col>
                    <Col className="calendar-state-col">Workspace</Col>
                    <Col className="calendar-state-col" lg='3'>Time</Col>
                    <Col className="calendar-state-col">Due to</Col>
                </Row>
                <Row className="calendar-state-row mt-3">
                    <Col className="calendar-state-header">
                        <Button
                            className="calendar-state-up-down"
                            onClick={changeAngleUpState1}
                            variant="light"
                        >
                            {angleUp1 ? (
                                <FontAwesomeIcon icon={faAngleUp} />
                            ) :
                                <FontAwesomeIcon icon={faAngleDown} />
                            }

                        </Button>
                        Completed tasks
                        <Button
                            className="calendar-state-up-down"
                            variant="light"
                            onClick={() => handleOpenToChangeTaskStatus(inprogressTask, cancelledTask, 'Completed')}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
                {
                    !angleUp1 ? (
                        completedTask.map((t) => (
                            <Row className="calendar-state-row" style={{ color: '#adb5bd' }} key={t.id}>
                                <Col className="calendar-state-col" lg='4'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#19e61d", marginRight: '5px' }} />
                                    {t.title}</Col>
                                <Col className="calendar-state-col" lg='2'>
                                    0
                                    <FontAwesomeIcon icon={faComments} style={{ color: "#ea0b0b", marginLeft: '6px' }} />
                                </Col>
                                <Col className="calendar-state-col">{getWorkspaceById(t.workspace_id)}</Col>
                                <Col className="calendar-state-col" lg='3'>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#f22602", marginRight: '5px' }} />
                                    {procressTime(t.date.start)}
                                    <FontAwesomeIcon icon={faSquareCaretRight} style={{ color: "#31f50a", margin: '0px 5px' }} />
                                    {procressTime(t.date.end)}
                                </Col>
                                <Col className="calendar-state-col">Today</Col>
                            </Row>

                        ))) : null
                }


                <Row className="calendar-state-row mt-3">
                    <Col className="calendar-state-header">
                        <Button
                            className="calendar-state-up-down"
                            onClick={changeAngleUpState2}
                            variant="light"
                        >
                            {angleUp2 ? (
                                <FontAwesomeIcon icon={faAngleUp} />
                            ) :
                                <FontAwesomeIcon icon={faAngleDown} />
                            }

                        </Button>
                        Cancelled tasks
                        <Button
                            className="calendar-state-up-down"
                            variant="light"
                            onClick={() => handleOpenToChangeTaskStatus(completedTask, inprogressTask, 'Cancelled')}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
                {
                    !angleUp2 ? cancelledTask.map((t) => (
                        <Row className="calendar-state-row" style={{ color: '#adb5bd' }} key={t.id}>
                            <Col className="calendar-state-col" lg='4'>

                                <FontAwesomeIcon icon={faBan} style={{ color: "#ef2906", marginRight: '5px' }} />
                                {t.title}</Col>
                            <Col className="calendar-state-col" lg='2'>
                                0
                                <FontAwesomeIcon icon={faComments} style={{ color: "#ea0b0b", marginLeft: '6px' }} />
                            </Col>
                            <Col className="calendar-state-col">{getWorkspaceById(t.workspace_id)}</Col>
                            <Col className="calendar-state-col" lg='3'>
                                <FontAwesomeIcon icon={faClock} style={{ color: "#f22602", marginRight: '5px' }} />
                                {procressTime(t.date.start)}
                                <FontAwesomeIcon icon={faSquareCaretRight} style={{ color: "#31f50a", margin: '0px 5px' }} />
                                {procressTime(t.date.end)}
                            </Col>
                            <Col className="calendar-state-col">Today</Col>
                        </Row>

                    )) : null
                }

                <Row className="calendar-state-row mt-3">
                    <Col className="calendar-state-header">
                        <Button
                            className="calendar-state-up-down"
                            onClick={changeAngleUpState3}
                            variant="light"
                        >
                            {angleUp3 ? (
                                <FontAwesomeIcon icon={faAngleUp} />
                            ) :
                                <FontAwesomeIcon icon={faAngleDown} />
                            }

                        </Button>
                        Inprogress tasks
                        <Button
                            className="calendar-state-up-down"
                            variant="light"
                            onClick={() => handleOpenToChangeTaskStatus(completedTask, cancelledTask, 'Inprogress')}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
                {
                    !angleUp3 ? inprogressTask.map((t) => (
                        <Row className="calendar-state-row" style={{ color: '#adb5bd' }} key={t.id}>
                            <Col className="calendar-state-col" lg='4'>
                                <FontAwesomeIcon icon={faSpinner} style={{ color: "#df7801", marginRight: '5px' }} />
                                {t.title}</Col>
                            <Col className="calendar-state-col" lg='2'>
                                0
                                <FontAwesomeIcon icon={faComments} style={{ color: "#ea0b0b", marginLeft: '6px' }} />
                            </Col>
                            <Col className="calendar-state-col">{getWorkspaceById(t.workspace_id)}</Col>
                            <Col className="calendar-state-col" lg='3'>
                                <FontAwesomeIcon icon={faClock} style={{ color: "#f22602", marginRight: '5px' }} />
                                {procressTime(t.date.start)}
                                <FontAwesomeIcon icon={faSquareCaretRight} style={{ color: "#31f50a", margin: '0px 5px' }} />
                                {procressTime(t.date.end)}
                            </Col>
                            <Col className="calendar-state-col">Today</Col>
                        </Row>

                    )) : null
                }

            </div>
            {!isClosed ?

                <div className="calendar-status-add">
                    <Row className="calendar-state-row1-head" style={{ color: '#adb5bd' }}>
                        <Col className="calendar-state-col1" lg='6'>Task name</Col>
                        <Col className="calendar-state-col1" lg='4'>Time</Col>
                        <Col className="calendar-state-col1" lg='2'>
                            <Button variant="light" className="close-btn" onClick={handleCloseAdd}>
                                <FontAwesomeIcon icon={faRectangleXmark} style={{ color: "#ea0634", width: '24px', height: '24px' }} />
                            </Button>
                        </Col>
                    </Row>
                    <div className="calendar-state-div1">
                        {taskRemaining.map((t) => (
                            <Row className="calendar-state-row1" style={{ color: '#adb5bd' }} key={t.id}>
                                <Col className="calendar-state-col1" lg='6'>
                                    {taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Completed' ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#19e61d", marginRight: '5px' }} /> : null}
                                    {taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Cancelled' ? <FontAwesomeIcon icon={faBan} style={{ color: "#ef2906", marginRight: '5px' }} /> : null}
                                    {taskProgress.find(tp => tp.task_id === t.id).workStatus == 'Inprogress' ? <FontAwesomeIcon icon={faSpinner} style={{ color: "#df7801", marginRight: '5px' }} /> : null}
                                    {t.title}</Col>
                                <Col className="calendar-state-col1" lg='4'>
                                    <FontAwesomeIcon icon={faClock} style={{ color: "#f22602", marginRight: '5px' }} />
                                    {procressTime(t.date.start)}
                                    <FontAwesomeIcon icon={faSquareCaretRight} style={{ color: "#31f50a", margin: '0px 5px' }} />
                                    {procressTime(t.date.end)}
                                </Col>
                                <Col className="calendar-state-col1" lg='2'>
                                    <Button onClick={() => handleChangeTaskStatus(t.id, props.userInfo.id)}>Add</Button>
                                </Col>
                            </Row>
                        ))
                        }
                    </div>
                </div> : null}


        </>
    )
}
export default CalendarState