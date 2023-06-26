import './notification.css'
import { Row, Col } from 'react-bootstrap'
import { getNotifications } from '../calendar/taskSlice'
import { useSelector } from 'react-redux'
import { notification } from 'antd'


const Notification = (props) => {
    const notifications = useSelector((state) => getNotifications(state, props.userInfo.id))

    const current = new Date()
    const procressTime = (time) => {

        const hour = Math.floor(time / 3600)
        const minute = Math.round((time - hour * 3600) / 60)

        return `${hour} giờ : ${minute} phút`
    }
    const getTime = (date) => {
        if (date.month < current.getMonth() + 1) {
            return `${- date.month + current.getMonth() + 1} tháng trước`
        } else if (date.day < current.getDate()) {
            return `${- date.day + current.getDate()} ngày trước`
        } else {
            return `${procressTime(current.getHours() * 3600 + current.getMinutes() * 60
                - date.start
            )} trước`
        }
    }
    return (
        <div className='Notification-container'>
            <Row>Thông báo</Row>
            {notifications.map(n => (
                <Row key={n.id} className='mess-item' >
                    <Col lg='2' style={{ marginRight: '20px' }}>
                        <div className='div-team-img'>
                            <img src='/external/notification.jpeg' className='team-img'></img>
                        </div>
                        <div className='notification-seen'>
                        </div>
                    </Col>
                    <Col>
                        <Row>{n.text}</Row>
                        <Row>
                           
                            <Col style={{ color: '#ced4da' }}>{getTime(n.date)}</Col>

                        </Row>
                    </Col>
                </Row>
            ))}
        </div>
    )

}
export default Notification