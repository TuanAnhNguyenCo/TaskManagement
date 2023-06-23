import '../dashboard/dashboard.css'
import { Button, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch } from 'react-redux'
import { synchornizeGG } from './taskSlice'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Notification from '../notification/notification'
import { useState } from 'react'
import { getNotifications } from './taskSlice'
import { useSelector } from 'react-redux'
const Header = (props) => {
    const dispatch = useDispatch()
    const [notifiToggle, setNotifiToggle] = useState(false)
    const notifications = useSelector((state) => getNotifications(state, props.userInfo.id))
    const handleSynchronizeGG = () => {
        dispatch(synchornizeGG())
        alert("Synchornize successfully")
    }
    const mystyle = {
        'backgroundColor':'#cadfff'
    }
    return (
        <div className="component11-topbar">
            {props.isCalendar ?
                <div className='header-create-event'>
                    <button className="btn bars-calendar">
                        <i className="fas fa-bars"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-project mx-5" onClick={props.handleShow}>
                        <i className="bi-plus-lg"></i> Create Event
                    </button>
                    <button type="button" className="btn btn-project btn-synchornize" onClick={handleSynchronizeGG}>
                        <img
                            src={`./${process.env.PUBLIC_URL}/img/gg.png`}
                            alt=""
                        />
                        Synchornize Task
                    </button>
                    <Button variant='light' style={{ border: '1px solid ', marginLeft: '20px' }}
                        onClick={() => props.setSelectedDate(new Date())}>
                        Today
                    </Button>
                </div> : null}

            <div className="component11-logo">
                <div className="component11-daterange">
                    <img
                        src="/external/rectangle25i197-wz55-200h.png"
                        alt="Rectangle25I197"
                        className="component11-rectangle25"
                    />
                    <img
                        src="/external/rectangle26i197-m2op-200h.png"
                        alt="Rectangle26I197"
                        className="component11-rectangle26"
                    />
                    <img
                        src="/external/line1i197-54m.svg"
                        alt="Line1I197"
                        className="component11-line1"
                    />
                    <img
                        src="/external/line2i197-ad8.svg"
                        alt="Line2I197"
                        className="component11-line2"
                    />
                    <img
                        src="/external/rectangle27i197-hc6i-200h.png"
                        alt="Rectangle27I197"
                        className="component11-rectangle27"
                    />
                    <img
                        src="/external/rectangle29i197-hbsh-200h.png"
                        alt="Rectangle29I197"
                        className="component11-rectangle29"
                    />
                    <img
                        src="/external/rectangle28i197-1rpi-200h.png"
                        alt="Rectangle28I197"
                        className="component11-rectangle28"
                    />
                    <img
                        src="/external/rectangle30i197-uehr-200h.png"
                        alt="Rectangle30I197"
                        className="component11-rectangle30"
                    />
                </div>
                <span className="component11-text048">
                    <span>Supernet</span>
                </span>
            </div>
            <div className="component11-group141">
                <div className="component11-bellpinlight">
                    <button className='bell-icon-container'
                        onClick={() => setNotifiToggle(!notifiToggle)}
                        style={notifiToggle?mystyle:null}
                    >
                        <FontAwesomeIcon icon={faBell} shake className='bell-icon' style={notifiToggle ? mystyle : null} />
                    </button>
                    <div className='num-notification'>
                        {notifications.length}
                    </div>
                    {notifiToggle ? <Notification {...props} /> : null}


                </div>
            </div>
            <div className="component11-cavinpetarson">

                <div className="component11-group143">
                    <img
                        src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg"
                        alt="portraitsmilingbusinessmandressedsuit21973"
                        className="component11-portraitsmilingbusinessmandressedsuit2"
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className='head-dropdown'>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='head-dropdown-content'>
                            <Dropdown.Item onClick={props.handleLogout} >Log out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="component11-group142">
                        <span className="component11-text050">
                            <span>{props.userInfo.name}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header