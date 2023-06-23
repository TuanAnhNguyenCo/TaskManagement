import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import DashBoardView from '../views/dashboard/dashboard'
import {
    getNumOfTotalTaskByMontrh, getNumOfComplatedTaskByMonth,
    getNumOfInprogressTaskByMonth, getNumOfCacelledTaskByMonth,
    getWorkingTimeInMonth, getPercentOfCompletedWorkInWeek

} from "../views/calendar/taskSlice";

const DashBoard = (props) => {
    var currentDate = new Date();
    const num_of_total_task = useSelector((state) => getNumOfTotalTaskByMontrh(state,props.userInfo.id,currentDate.getMonth()+1))
    const num_of_complated_task = useSelector((state) => getNumOfComplatedTaskByMonth(state, props.userInfo.id, currentDate.getMonth() + 1))
    const num_of_cancelled_task = useSelector((state) => getNumOfCacelledTaskByMonth(state, props.userInfo.id, currentDate.getMonth() + 1))
    const num_of_inProgress_task = useSelector((state) => getNumOfInprogressTaskByMonth(state, props.userInfo.id, currentDate.getMonth() + 1))
    const workingTimeInMonth = useSelector((state) => getWorkingTimeInMonth(state, props.userInfo.id, currentDate.getMonth() + 1))
    
    const num_of_total_task_prev = useSelector((state) => getNumOfTotalTaskByMontrh(state, props.userInfo.id, currentDate.getMonth()))
    const num_of_complated_task_prev = useSelector((state) => getNumOfComplatedTaskByMonth(state, props.userInfo.id, currentDate.getMonth()))
    const num_of_cancelled_task_prev = useSelector((state) => getNumOfCacelledTaskByMonth(state, props.userInfo.id, currentDate.getMonth()))
    const num_of_inProgress_task_prev = useSelector((state) => getNumOfInprogressTaskByMonth(state, props.userInfo.id, currentDate.getMonth()))
    const workingTimeInMonth_prev = useSelector((state) => getWorkingTimeInMonth(state, props.userInfo.id, currentDate.getMonth()))




    const [percent_of_completedTaskInDay, total_completedTask,total_time_inWeek] = useSelector(
        (state) => getPercentOfCompletedWorkInWeek(state, currentDate.getDate() - currentDate.getDay() + 1, props.userInfo.id)
    )
    console.log(percent_of_completedTaskInDay, total_completedTask)
    return (
        <DashBoardView
            num_of_total_task={num_of_total_task}
            num_of_complated_task={num_of_complated_task}
            num_of_cancelled_task={num_of_cancelled_task}
            num_of_inProgress_task={num_of_inProgress_task}
            workingTimeInMonth={workingTimeInMonth}
            percent_of_completedTaskInDay={percent_of_completedTaskInDay}
            total_completedTask={total_completedTask}
            total_time_inWeek={total_time_inWeek}
            {...props}

            num_of_total_task_prev={num_of_total_task_prev}
            num_of_complated_task_prev={num_of_complated_task_prev}
            num_of_cancelled_task_prev={num_of_cancelled_task_prev}
            num_of_inProgress_task_prev={num_of_inProgress_task_prev}
        />
    )
}
export default DashBoard