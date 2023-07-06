import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import './addDetailTask.css'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addOrUpdateDetailTask, getDetailTaskText } from "../calendar/taskSlice"

const AddDetailTask = (props) => {
    const [id, setId] = useState(0)
    const [description, setDescription] = useState("")
    const text = useSelector((state) => getDetailTaskText(state, id, props.task.id))
    const disptach = useDispatch()
    const handleClose = () => {
        props.setShow1(false)
    }
    const getUser = (id) => {
        return props.accounts.find(a => a.id === id)
    }
    useEffect(() => {
        setDescription(text)
    },[id])
    const handInput = (e) => {
        setDescription(e.target.value)
    }
    const handleSelectUser = (e) => {
        setId(parseInt(e.target.value))
        
    }
    const handSubmit = () => {

        if (id !== 0) {
            disptach(addOrUpdateDetailTask([id, props.task.id, description]))
            setDescription("")
            alert("Add successfully")
        }else alert("Please select email")
    }
    return (
        <div
            className="modal show AddTask"
            style={{ display: 'block', position: "absolute", top: '200px' }}
        >
            <Modal show={props.show1} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add or Update if detail task exists</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <Form className="AddTask">
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Select aria-label="Default select example" onChange={handleSelectUser}>
                                    <option value={0}>select email</option>
                                    <option value={props.task.user_id}>{getUser(props.task.user_id).email}</option>
                                    {props.task.related_user_id.map(id =>
                                        <option key={id} value={id}>{getUser(id).email}</option>
                                    )}
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Detail Task
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="description" onChange={handInput} value={description} />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button onClick={handSubmit}>Submit</Button>

                </Modal.Body>


            </Modal>
        </div>
    )
}

export default AddDetailTask