import { Calendar, Checkbox } from "antd";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { getMyWorkspace, getOtherWorkspace, updateCheckedWorkspace } from "./taskSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';

import './calendarLeft.css'
const CalendarLeft = (props) => {
    const [angleUp1, setAngleUp1] = useState(false)
    const [angleUp2, setAngleUp2] = useState(false)
    const myStyle = {
        opacity: 0.1,
    };
    const changeAngleUpState1 = () => { setAngleUp1(!angleUp1) }
    const changeAngleUpState2 = () => { setAngleUp2(!angleUp2) }
    const my_workspace = useSelector((state) => getMyWorkspace(state, props.userInfo.id))
    const other_workspace = useSelector((state) => getOtherWorkspace(state, props.userInfo.id))
    const dispatch = useDispatch()
    const dateCellRender = (date) => {
        if (new Date(date).getDate() == props.selectedDate.getDate() &&
            new Date(date).getMonth() == props.selectedDate.getMonth() &&
            new Date(date).getFullYear() == props.selectedDate.getFullYear()
        ) {
            return (
                <div className="ant-picker-cell-inner ant-picker-calendar-date ant-picker-calendar-date-today ant-picker-cell-selected "
                    onClick={() => props.handleDateSelect(date)} style={{ 'backgroundColor': '#0dcaf0' }}>
                    {date.date()}
                </div>


            );
        }

        return date.date();
    };

    const handleCheckedWorkspace = (id) => {
        dispatch(updateCheckedWorkspace([id]))
    }
    return (

        <Card className="cld-left" style={props.modalShow ? myStyle : null}>
            <Card.Body>
                <Calendar fullscreen={false} onChange={props.handleDateSelect} fullCellRender={dateCellRender} />
                <div className='calendars-item ' >
                    <div className="calendar-div">

                        <Button variant="light" className='calendars-bt' size="lg" onClick={changeAngleUpState1} style={{ fontSize: '19px' }}>
                            Workspace
                            <span style={{ marginLeft: "54%" }}>
                                {angleUp1 ? (
                                    <FontAwesomeIcon icon={faAngleUp} />
                                ) :
                                    <FontAwesomeIcon icon={faAngleDown} />
                                }

                            </span>
                        </Button>
                        <Button variant="light" size="sm" className="calendar-add-btn">
                            {
                                <FontAwesomeIcon icon={faPlus} />
                            }

                        </Button>
                    </div>
                    {my_workspace.map((w) => (
                        !angleUp1 ? (
                            <div className="calendar-workspace" key={w.id}>
                                <Checkbox style={{ marginLeft: '17px', marginRight: '10px' }}
                                    checked={w.checked} onClick={() => { handleCheckedWorkspace(w.id) }} />
                                <span>{w.name}</span>
                            </div>
                        ) : null
                    ))}

                </div>
                <div className='calendars-item' >
                    <div className="calendar-div">
                        <Button variant="light" className='calendars-bt' size="lg" onClick={changeAngleUpState2} style={{ fontSize: '19px' }}>
                            Another Workspace
                            <span style={{ marginLeft: "25%" }}>
                                {angleUp2 ? (
                                    <FontAwesomeIcon icon={faAngleUp} />
                                ) :
                                    <FontAwesomeIcon icon={faAngleDown} />
                                }

                            </span>
                        </Button>
                        <Button variant="light" size="sm" className="calendar-add-btn1">
                            {
                                <FontAwesomeIcon icon={faPlus} />
                            }

                        </Button>
                    </div>
                    {other_workspace.map((w) => (
                        !angleUp2 ? (
                            <div className="calendar-workspace" key={w.id}>
                                <Checkbox style={{ marginLeft: '17px', marginRight: '10px' }}
                                    checked={w.checked} onClick={() => { handleCheckedWorkspace(w.id) }} />
                                <span>{w.name}</span>
                            </div>
                        ) : null
                    ))}
                </div>

            </Card.Body>

        </Card>
    )
}
export default CalendarLeft