import './mess.css'
import { InputGroup, Form, Col, Row } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getTasks } from '../calendar/taskSlice'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
const MessList = (props) => {
    const tasks = useSelector((state) => getTasks(state, props.userInfo.id))
    const [searchedTasks, setSearchedTasks] = useState(tasks)
    const [selectedTag, setSelectedTag] = useState(0)


    const mystyle = {
        'backgroundColor': '#EFF2F4',
    }
    const filterTasks = (e) => {
        if (e.target.value === "") {
            setSearchedTasks(tasks)
        } else setSearchedTasks(tasks.filter(t => t.title.indexOf(e.target.value) !== -1))
    }
    useEffect(() => {
        setSearchedTasks(tasks)
    }, [props.userInfo.id]);
    return (
        <div className='Mess-list'>
            <h1>Chat</h1>
            <InputGroup className="mb-3 mt-5">
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Tìm kiếm" onChange={filterTasks}
                />
            </InputGroup>

            <div style={{ overflow: 'scroll', height: '500px' }}>
                {searchedTasks.map(t => {
                    if (t.related_user_id.length != 0)
                        return (
                            <Row key={t.id} className='mess-item' style={props.task.id == t.id ? mystyle : null} onClick={() => (
                                setSelectedTag(t.id),
                                props.setTask(t)
                            )}>
                                <Col lg='2' style={{ marginRight: '20px' }}>
                                    <div className='div-team-img'>
                                        <img src='/external/teamImg.jpeg' className='team-img'></img>
                                        <div className='online-icon'></div>
                                    </div>
                                </Col>
                                <Col>
                                    <Row>{t.title}</Row>
                                    <Row></Row>
                                </Col>
                            </Row>
                        )
                })}
            </div>


        </div>
    )
}
export default MessList