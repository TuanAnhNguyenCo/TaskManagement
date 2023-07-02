import '../dashboard/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faCalendar, faListCheck, faComments } from '@fortawesome/free-solid-svg-icons'
const Nav = (props) => {
    const navStyles = {
        color: '#6610f2',
        backgroundColor: '#f7f6f6',
    }
    const navStyles1 = {
        color: 'rgba(182, 182, 182, 1)',
    }
    return (
        <div >
            <img
                src="/external/rectangle2581972-qsuj-900h.png"
                alt="Rectangle2581972"
                className="component11-rectangle258"
            />


            <div className="component11-dashboard1" onClick={props.handleOpenDashBoard} style={props.isDashboard == true ? navStyles : null}>
                <span className="component11-text044">
                    <span style={props.isDashboard == true ? navStyles : navStyles1}>Dashboard</span>
                </span>
                <div className="component11--iiconcategoryfilled">
                    <FontAwesomeIcon icon={faChartPie} className='nav-icon1' />
                </div>
            </div>

            <div className="component11-project" onClick={props.handleOpenCalendar} style={props.isCalendar == true ? navStyles : null}>
                <span className="component11-text046">
                    <span style={props.isCalendar == true ? navStyles : navStyles1}>Calendar</span>
                </span>
                <FontAwesomeIcon icon={faCalendar} className='nav-icon2' />
            </div>
            <div className="component11-my-task" onClick={props.handleOpenTask} style={props.isTasks == true ? navStyles : null}>
                <span className="component11-text">
                    <span style={props.isTasks == true ? navStyles : navStyles1}>My Task</span>
                </span>
                <FontAwesomeIcon icon={faListCheck} className='nav-icon3' />
            </div >
            <div className="component11-my-task1" onClick={()=> props.handleOpenChat()} style={props.isChat == true ? navStyles : null}>
                <span className="component11-text">
                    <span style={props.isChat == true ? navStyles : navStyles1}>Chat</span>
                </span>
                <FontAwesomeIcon icon={faComments} className='nav-icon3' />
            </div >
        </div>
    )
}
export default Nav