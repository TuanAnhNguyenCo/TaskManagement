import React from "react";
import "./calendar.css";
import { getTasksByDate, getTotalProgress, getMyWorkspace, getOtherWorkspace } from "./taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

import { faPlus, faUserCircle, fa3, faClipboard, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { Button, ProgressBar, OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import { updateCloseStatus } from "./taskSlice";
import AddDetailTask from "../task/addDetailTask";

import ExtendedForm from "./extendedForm";
import ExtendedForm1 from "./extendedForm1";

const ContentCalendar = (props) => {
    const tasksByDate = useSelector((state) => getTasksByDate(state,
        props.selectedDate.getDate(), props.selectedDate.getMonth() + 1,
        props.selectedDate.getFullYear(), props.userInfo.id
    ))
    const disptach = useDispatch()
    const myStyle = {
        opacity: 0.1,
    };
    const totalProgress = useSelector(getTotalProgress)
    const [modalEmailShow, setEmailModalShow] = useState(false);
    const my_workspace = useSelector((state) => getMyWorkspace(state, props.userInfo.id))
    const other_workspace = useSelector((state) => getOtherWorkspace(state, props.userInfo.id))
    const handleClose = () => props.setModalShow(false);
    const [show1, setShow1] = useState(false)
    const handleShowAddDetailTask = (task) => {
        setTask1(task)
        setShow1(true)
    }
    const getTaskProgress = (task_id, user_id) => {
        return totalProgress.find(t => t.task_id === task_id && t.user_id === user_id)
    }
    const [toggle1, setToggle1] = useState(true)
    const [task1, setTask1] = useState(null)

    const returnColor = (workspace_id) => {
        const totalWorkspace = my_workspace.concat(other_workspace)
        return totalWorkspace.find(w => w.id === workspace_id).color
    }

    const procressTime = (time) => {

        const hour = Math.floor(time / 3600)
        const minute = Math.round((time - hour * 3600) / 60)

        return `${hour}:${minute}`
    }



    return (
        <>
            {show1 ?

                <AddDetailTask setShow1={setShow1} show1={show1} {...props} task={task1} />
                : null}
            <div className="schedule-list" style={props.modalShow ? myStyle : null}>
                {tasksByDate.map((task) =>
                    <div className="schedule-inner alert alert-success " key={task.id} style={{ backgroundColor: returnColor(task.workspace_id) }}>
                        <span className="author">Created by: {props.accounts.find(a => a.id === task.user_id).name}</span>
                        <div className="schedule-left" >
                            {task.user_id === props.userInfo.id ?
                                <div className="note">
                                    <FontAwesomeIcon icon={faClipboard} style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleShowAddDetailTask(task)
                                        }} />
                                    <FontAwesomeIcon icon={faExclamation} bounce style={{ color: "#e13623", }} className="note-qs" />
                                </div>
                                : null}
                            <div className="time">
                                <span>{procressTime(task.date.start)}</span>
                                <span>|</span>
                                <span>{procressTime(task.date.end)}</span>

                            </div>
                            <div className="content">
                                Title: {task.title}
                                <br />
                                Location: {task.location}
                                <br />
                                Task: {getTaskProgress(task.id, props.userInfo.id).text === ""
                                    ? "Bạn chưa được phân cụ thể nhiệm vụ vui lòng liên lạc với " + props.accounts.find(a => a.id === task.user_id).name
                                    + " để nhận được chi tiết về công việc của mình" : getTaskProgress(task.id, props.userInfo.id).text}
                                <br />
                                <div className="progress-bar mb-1">

                                    <OverlayTrigger placement="left" overlay={
                                        <Popover id="popover-basic" style={{ maxWidth: '500px' }}>
                                            <Popover.Header as="h3">Completed</Popover.Header>
                                            <Popover.Body>

                                                <div>
                                                    {

                                                        (totalProgress.filter(pr => pr.user_id === task.user_id && pr.task_id === task.id && pr.workStatus === "Completed").length !== 0
                                                        ) ? <p> Tên: {props.accounts.find(a => a.id === task.user_id).name} - Email: {props.accounts.find(a => a.id === task.user_id).email}</p> : null
                                                    }
                                                    {props.accounts.map(ac => {
                                                        if (totalProgress.filter(pr => pr.user_id === ac.id && pr.task_id === task.id && pr.workStatus === "Completed").length !== 0
                                                            && task.related_user_id.filter(p => p == ac.id).length !== 0)
                                                            return (<p key={ac.id}>
                                                                Tên: {ac.name} - Email: {ac.email}

                                                            </p>)
                                                    }
                                                    )}
                                                </div>
                                            </Popover.Body>
                                            <Popover.Header as="h3">Cancelled</Popover.Header>
                                            <Popover.Body>
                                                <div>
                                                    {(totalProgress.filter(pr => pr.user_id === task.user_id && pr.task_id === task.id && pr.workStatus === "Cancelled").length !== 0
                                                    ) ? <p> Tên: {props.accounts.find(a => a.id === task.user_id).name} - Email: {props.accounts.find(a => a.id === task.user_id).email}</p> : null
                                                    }
                                                    {props.accounts.map(ac => {

                                                        if (totalProgress.filter(pr => pr.user_id === ac.id && pr.task_id === task.id && pr.workStatus === "Cancelled").length !== 0 &&
                                                            task.related_user_id.filter(p => p == ac.id).length !== 0)
                                                            return (<p key={ac.id}>
                                                                Tên: {ac.name} - Email: {ac.email}

                                                            </p>)
                                                    }
                                                    )}
                                                </div>
                                            </Popover.Body>

                                            <Popover.Header as="h3">Inprogress</Popover.Header>
                                            <Popover.Body>

                                                <div>
                                                    {(totalProgress.filter(pr => pr.user_id === task.user_id && pr.task_id === task.id && pr.workStatus === "Inprogress").length !== 0
                                                    ) ? <p> Tên: {props.accounts.find(a => a.id === task.user_id).name} - Email: {props.accounts.find(a => a.id === task.user_id).email}</p> : null
                                                    }
                                                    {props.accounts.map(ac => {
                                                        if (totalProgress.filter(pr => pr.user_id === ac.id && pr.task_id === task.id && pr.workStatus === "Inprogress").length !== 0 &&
                                                            task.related_user_id.filter(p => p == ac.id).length !== 0)
                                                            return (<p key={ac.id}>
                                                                Tên: {ac.name} - Email: {ac.email}

                                                            </p>)
                                                    }
                                                    )}
                                                </div>
                                            </Popover.Body>


                                        </Popover>
                                    }>


                                        <ProgressBar style={{ cursor: 'pointer' }}>



                                            <ProgressBar striped variant="success"
                                                animated
                                                now={100 * totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Completed").length / (task.related_user_id.length + 1)} key={1}
                                                label={`${totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Completed").length}/${(task.related_user_id.length + 1)}`}
                                            />




                                            <ProgressBar variant="warning"
                                                animated
                                                now={100 * totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Inprogress").length / (task.related_user_id.length + 1)} key={2}
                                                label={`${totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Inprogress").length}/${(task.related_user_id.length + 1)}`}
                                            />


                                            <ProgressBar striped variant="danger"
                                                key={3} animated
                                                now={100 * totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Cancelled").length / (task.related_user_id.length + 1)}
                                                label={`${totalProgress.filter(p => p.task_id === task.id && p.workStatus === "Cancelled").length}/${(task.related_user_id.length + 1)}`}
                                            />



                                        </ProgressBar>
                                    </OverlayTrigger>
                                </div>
                                {task.related_user_id.length !== 0 ?
                                    <OverlayTrigger placement="left" overlay={
                                        <Popover id="popover-basic" style={{ maxWidth: '500px' }}>
                                            <Popover.Header as="h3">Member</Popover.Header>
                                            <Popover.Body>
                                                <div>

                                                    <p> Tên: {props.accounts.find(a => a.id === task.user_id).name} - Email: {props.accounts.find(a => a.id === task.user_id).email}</p>

                                                    {props.accounts.map(ac => {
                                                        if (task.related_user_id.filter(p => p == ac.id).length !== 0)
                                                            return (<p key={ac.id}>
                                                                Tên: {ac.name} - Email: {ac.email}

                                                            </p>)
                                                    }
                                                    )}
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }>

                                        <div style={{ height: '20px', cursor: 'pointer' }} className="mt-1">

                                            {task.related_user_id.map((id, idx) => {
                                                if (idx <= 2)
                                                    return < FontAwesomeIcon icon={faUserCircle} style={{ color: "#216ae8" }} size="xl" key={idx} />
                                                else if (idx == 3)
                                                    return <div style={{ borderRadius: "50%", display: 'inline-block', border: '1px solid #81868d' }} key={idx}>
                                                        <FontAwesomeIcon icon={fa3} style={{ color: "#0c5fed", }} />
                                                        <FontAwesomeIcon icon={faPlus} style={{ color: "#0e5ddd", }} />
                                                    </div>
                                            })}</div>

                                    </OverlayTrigger>
                                    : null}




                                {/* {props.userInfo.id === task.user_id ? (task.close  ?
                                    <Button className="close-task-btn" onClick={() => disptach(updateCloseStatus([task.id]))}>Open</Button> :
                                    <Button className="close-task-btn" onClick={() => disptach(updateCloseStatus([task.id]))}>Close</Button>)
                                    :null
                                } */}
                            </div>


                        </div>
                        {task.related_user_id.length !== 0 ?

                            <div className="schedule-right" onClick={() => (
                                props.setTask(task),
                                props.handleOpenChat()
                            )} >
                                <FontAwesomeIcon icon={faFacebookMessenger} style={{ width: '40px', height: '40px', color: '#4096ff' }} />
                            </div> : null}

                    </div>
                )}
            </div >


            {
                props.modalShow ?
                    (toggle1 ? <ExtendedForm
                        handleClose={handleClose}
                        setToggle1={setToggle1}
                        {...props}
                    ></ExtendedForm> : <ExtendedForm1
                        handleClose={handleClose}
                        setToggle1={setToggle1}
                        userInfo={props.userInfo}
                        {...props}
                    ></ExtendedForm1>)
                    : null
            }
        </>
    );
};

export default ContentCalendar;
