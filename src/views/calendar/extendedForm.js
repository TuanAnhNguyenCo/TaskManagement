import { Form, FloatingLabel, Row, Col, Button, ListGroup } from "react-bootstrap"
import { DatePicker, TimePicker } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import './extendedForm.css'
import { getAccountList } from '../login/accountSlice'
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addTask } from "./taskSlice";
import moment from 'moment';

const ExtendedForm = (props) => {
    const accounts = useSelector(getAccountList)
    const [emails, setEmails] = useState([])
    const [partner, setPartner] = useState([])
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [workspace, setWorkspace] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [start, setStart] = useState(new Date())
    const [endT, setEndT] = useState(new Date())


    const dispatch = useDispatch()

    const handleFindUser = (e) => {
        const email = e.target.value
        if (email !== "")
            setEmails(accounts.filter(ac => ac.email.indexOf(email) !== -1))
        else
            setEmails([])

    }
    const addPartner = (email) => {
        const arr = partner
        if (arr.indexOf(email) == -1)
            arr.push(accounts.filter(ac => ac.email == email)[0])
        setPartner(arr)
        setEmails([])
    }
    const removePartner = (email) => {
        const arr = partner.filter(e => e.email !== email)
        setPartner(arr)
    }
    const handAddTask = (e) => {
        e.preventDefault()
        const tStart = start.getHours() * 3600 + start.getMinutes() * 60
        const tEnd = endT.getHours() * 3600 + endT.getMinutes() * 60
        const related_user_id = []
        if (tEnd <= tStart) {
            alert("Please enter time end greater than the start time")
            return;
        }
        for (var i in partner)
            related_user_id.push(partner[i].id)
        dispatch(addTask(
            [props.userInfo.id, title, tStart, tEnd,
            date.getDate(), date.getMonth() + 1, date.getFullYear()
                , related_user_id, location, workspace, description]
        ))
        alert("Add successfully")
        props.handleClose()
    }


    return (
        <div className="extended-form">
            <h1 className="mt-3" >Add task</h1>
            <Form.Check // prettier-ignore
                type="switch"
                label="Check this switch to extension of the job"
                onChange={() => props.setToggle1(false)}
            />
            <Form className="mt-3" onSubmit={(e) => handAddTask(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Workspace</Form.Label>
                        <Form.Control type="text" placeholder="Workspace" value={workspace} onChange={(e) => setWorkspace(e.target.value)} required />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Partner</Form.Label>
                    <Form.Control placeholder="Enter your partner email" onChange={(e) => handleFindUser(e)} />
                    <div style={{ wordWrap: 'break-word' }} className="mt-2">
                        {partner.map(p =>
                            <span key={p.id} className="email-add">{p.email}
                                <FontAwesomeIcon icon={faXmark}
                                    style={{ color: "#f51414", cursor: 'pointer', marginLeft: '5px' }}
                                    onClick={() => removePartner(p.email)}
                                /></span>
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
                    <Form.Control placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
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

                <Button variant="primary" type="submit" style={{ position: 'absolute', right: '100px' }}>
                    Submit
                </Button>
                <Button variant="danger" onClick={props.handleClose} style={{ position: 'absolute', right: '10px' }}>
                    Close
                </Button>
            </Form>
        </div >
    )
}

export default ExtendedForm