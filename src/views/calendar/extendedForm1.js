import { Form, FloatingLabel, Row, Col, Button, ListGroup } from "react-bootstrap"
import { DatePicker, TimePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import './extendedForm.css'
import { getAccountList } from '../login/accountSlice'
import { getTasks } from "./taskSlice"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { updateTask } from "./taskSlice";
import moment from 'moment';
import { getTotalWorkspace } from "./taskSlice"

const ExtendedForm1 = (props) => {
    const accounts = useSelector(getAccountList)
    const tasks = useSelector((state) => getTasks(state, props.userInfo.id))
    const [emails, setEmails] = useState([])
    const [inputEmail, setInputEmail] = useState('')
    const [partner, setPartner] = useState([])
    const [title, setTitle] = useState('')
    const [titleList, setTitleList] = useState([])
    const [location, setLocation] = useState('')
    const [workspace, setWorkspace] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [start, setStart] = useState(new Date())
    const [endT, setEndT] = useState(new Date())
    const [taskID, setTaskID] = useState('')
    const total_workspace = useSelector((state) => getTotalWorkspace(state, props.userInfo.id))
    const [submit, setSubmit] = useState(false)
    const checkExistRelatedUser = (partner, id) => {
        return partner.filter(x => x.id == id).length
    }
    const dispatch = useDispatch()

    const handleFindUser = (e) => {
        const email = e.target.value
        setInputEmail(email)
        if (email !== "")
            setEmails(accounts.filter(ac => ac.email.indexOf(email) !== -1))
        else
            setEmails([])

    }
    const handleFindTask = (e) => {
        const ti = e.target.value
        if (ti !== "")
            setTitleList(tasks.filter(t => t.title.indexOf(ti) !== -1 && props.userInfo.id === t.user_id))
        else
            setTitleList([])
        setTitle(ti)
        setSubmit(false)

    }
    const addPartner = (email) => {
        const arr = partner
        if (arr.filter(p => p.email.indexOf(email) !== -1).length === 0)
            arr.push(accounts.filter(ac => ac.email == email)[0])
        setPartner(arr)
        setInputEmail('')
        setEmails([])
    }
    const removePartner = (email) => {
        const arr = partner.filter(e => e.email !== email)
        setPartner(arr)
    }
    const handUpdateTask = (e) => {
        e.preventDefault()
        const tStart = start.getHours() * 3600 + start.getMinutes() * 60
        const tEnd = endT.getHours() * 3600 + endT.getMinutes() * 60
        if (tEnd <= tStart) {
            alert("Please enter time end greater than the start time")
            return;
        }
        const related_user_id = []
        for (var i in partner)
            related_user_id.push(partner[i].id)
        dispatch(updateTask(
            [taskID, tStart, tEnd, date.getDate(), date.getMonth() + 1, date.getFullYear()
                , related_user_id, description]
        ))
        alert("Add successfully")
        props.handleClose()
    }
    const handAddAttr = (task) => {
        setTitle(task.title)
        setWorkspace(total_workspace.filter(w => w.id === task.workspace_id)[0].name)
        setDescription(task.description)
        setLocation(task.location)
        setTitleList([])
        var arr = []
        for (var i in task.related_user_id)
            accounts.filter(ac => ac.id === task.related_user_id[i]).map(ac => arr.push(ac))
        setPartner(arr)
        setSubmit(true)
        setTaskID(task.id)
    }




    return (
        <div className="extended-form">
            <h1 className="mt-3" >Extension of the job</h1>
            <Form.Check // prettier-ignore
                type="switch"
                checked
                label="Check this switch to create the job"
                onChange={() => props.setToggle1(true)}
            />
            <Form className="mt-3" onSubmit={(e) => handUpdateTask(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={handleFindTask} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Workspace</Form.Label>
                        <Form.Control type="text" placeholder="Workspace" value={workspace} onChange={(e) => setWorkspace(e.target.value)} required disabled />
                    </Form.Group>
                </Row>
                {titleList.length !== 0 ?
                    <ListGroup className="title-suggestion">
                        {titleList.map(t =>
                        (<ListGroup.Item key={t.id} type="button" className="email-suggestion-item"
                            onClick={() => handAddAttr(t)}>{t.title}</ListGroup.Item>))}

                    </ListGroup>
                    : null}

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Partner</Form.Label>
                    <Form.Control placeholder="Enter your partner email"
                        onChange={(e) => handleFindUser(e)} value={inputEmail}
                        disabled={checkExistRelatedUser(partner, props.userInfo.id) !== 0 ? true : false}
                    />
                    <div style={{ wordWrap: 'break-word' }} className="mt-2">
                        {partner.map(p =>
                            <span key={p.id} className="email-add">{p.email}
                                {checkExistRelatedUser(partner, props.userInfo.id) !== 0 ?
                                    null :

                                    <FontAwesomeIcon icon={faXmark}
                                        style={{ color: "#f51414", cursor: 'pointer', marginLeft: '5px' }}
                                        onClick={() => removePartner(p.email)}
                                        disabled
                                    />}
                            </span>
                        )}
                    </div>

                    <ListGroup className="email-suggestion">
                        {emails.map(e =>
                            (<ListGroup.Item key={e.id} type="button" className="email-suggestion-item" onClick={() => addPartner(e.email)}>{e.email}</ListGroup.Item>))}


                    </ListGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter description" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} disabled />
                </Form.Group>

                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Date</Form.Label>
                        <DatePicker style={{ display: 'block', height: '38px' }} onChange={(d) => setDate(new Date(d))} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>Start</Form.Label>
                        <TimePicker style={{ display: 'block', height: '38px' }} onChange={(d) => setStart(new Date(d))} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>End</Form.Label>
                        <TimePicker style={{ display: 'block', height: '38px' }} onChange={(d) => setEndT(new Date(d))} />
                    </Form.Group>


                </Row>

                <Button variant="primary" type="submit" style={{ position: 'absolute', right: '100px' }}
                    disabled={!submit}
                    d
                >
                    Submit
                </Button>
                <Button variant="danger" onClick={props.handleClose} style={{ position: 'absolute', right: '10px' }}>
                    Close
                </Button>
            </Form>
        </div >
    )
}

export default ExtendedForm1