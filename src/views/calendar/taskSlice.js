import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const init = {
    'tasks': [
        {
            "id": 1,
            "user_id": 6,
            "related_user_id": [4],
            "workspace_id": 7,
            "title": "Play Soccer",
            "location": "Stadium",
            "desciption": "....",
            "workStatus": "Completed",
            "done": 2,
            close: true,
            "date": {
                "start": 17000,
                "end": 21000,
                "day": 14,
                "month": 6,
                "year": 2023
            }
        },
        {
            "id": 2,
            "user_id": 6,
            "related_user_id": [3, 4],
            "workspace_id": 8,
            "title": "Game",
            "location": "X-Game Tran Dai Nghia",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 18000,
                "end": 23000,
                "day": 15,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 3,
            "user_id": 6,
            "related_user_id": [1, 4],
            "workspace_id": 8,
            "title": "Drink Coffee",
            "location": "The Coffee House",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 18000,
                "end": 23000,
                "day": 16,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 4,
            "user_id": 6,
            "related_user_id": [1, 5],
            "workspace_id": 7,
            "title": "Jogging",
            "location": "Thong Nhat Park",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 17000,
                "end": 19000,
                "day": 17,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 5,
            "user_id": 6,
            "related_user_id": [2, 5],
            "workspace_id": 9,
            "title": "Learn Japanese",
            "location": "School",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 17000,
                "end": 19000,
                "day": 18,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 6,
            "user_id": 6,
            "related_user_id": [2, 5],
            "workspace_id": 9,
            "title": "Learn EngLish",
            "location": "School",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 19000,
                "end": 21000,
                "day": 18,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 7,
            "user_id": 6,
            "related_user_id": [2, 5],
            "workspace_id": 8,
            "title": "Watch Film",
            "location": "Cinema",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 21000,
                "end": 23000,
                "day": 18,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 8,
            "user_id": 6,
            "related_user_id": [3, 5],
            "workspace_id": 9,
            "title": "Work in Lab",
            "location": "B1-1002",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 17000,
                "end": 20000,
                "day": 19,
                "month": 6,
                "year": 2023
            }
        }
        ,
        {
            "id": 9,
            "user_id": 6,
            "related_user_id": [4, 5],
            "workspace_id": 9,
            "title": "Cammping",
            "location": "Yen So Park",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 10000,
                "end": 20000,
                "day": 20,
                "month": 6,
                "year": 2023
            }
        },
        {
            "id": 10,
            "user_id": 6,
            "related_user_id": [2, 4],
            "workspace_id": 7,
            "title": "Do my homework",
            "location": "Circle K",
            "desciption": "....",
            "done": 3,
            close: true,
            "workStatus": "Completed",
            "date": {
                "start": 20000,
                "end": 22000,
                "day": 20,
                "month": 6,
                "year": 2023
            }
        }
    ]

    ,
    'workspace': [
        {
            id: 1,
            user_id: 1,
            related_user_id: [],
            name: 'ITSS',
            checked: true,
            other_workspace: false,
        },
        {
            id: 2,
            user_id: 1,
            related_user_id: [],
            name: 'VHKD',
            checked: true,
            other_workspace: false,
        },
        {
            id: 3,
            user_id: 1,
            related_user_id: [],
            name: 'GR1',
            checked: true,
            other_workspace: false,
        }, {
            id: 7,
            user_id: 6,
            related_user_id: [1, 4, 5],
            name: 'Daily Work',
            checked: true,
            other_workspace: false,
        },
        {
            id: 8,
            user_id: 6,
            related_user_id: [1, 2, 3, 4, 5],
            name: 'Free Time',
            checked: true,
            other_workspace: false,
        },
        {
            id: 9,
            user_id: 6,
            related_user_id: [2, 3, 4, 5],
            name: 'Study',
            checked: true,
            other_workspace: false,
        }

    ],
    'message': [
        {
            id: 1,
            user_id: 6,
            task_id: 1,
            text: 'Hello bạn hiền'
        },
        {
            id: 2,
            user_id: 2,
            task_id: 1,
            text: 'Chào bạn'
        },
        {
            id: 3,
            user_id: 4,
            task_id: 1,
            text: 'Đi đá bóng đi'
        },
        {
            id: 4,
            user_id: 6,
            task_id: 1,
            text: 'Ok em'
        },

    ],
    'notifications': [
        {
            id: 1,
            user_id: 6,
            seen: false,
            text: "Chào bạn đây chỉ là dữ liệu demo",
            "date": {
                "start": 17000,
                "day": 14,
                "month": 6,
                "year": 2023
            }
        }
    ],
    'taskProgress': [
        {
            id: 1,
            user_id: 6,
            task_id: 1,
            workStatus: "Completed",
        },
        {
            id: 2,
            user_id: 4,
            task_id: 1,
            workStatus: "Completed",
        },
        {
            id: 3,
            user_id: 6,
            task_id: 2,
            workStatus: "Completed",
        },
        {
            id: 4,
            user_id: 3,
            task_id: 2,
            workStatus: "Completed",
        },
        {
            id: 5,
            user_id: 4,
            task_id: 2,
            workStatus: "Completed",
        },
        {
            id: 6,
            user_id: 6,
            task_id: 3,
            workStatus: "Completed",
        },
        {
            id: 7,
            user_id: 1,
            task_id: 3,
            workStatus: "Completed",
        }, {
            id: 8,
            user_id: 4,
            task_id: 3,
            workStatus: "Completed",
        },
        {
            id: 9,
            user_id: 6,
            task_id: 4,
            workStatus: "Completed",
        },
        {
            id: 10,
            user_id: 1,
            task_id: 4,
            workStatus: "Completed",
        },
        {
            id: 11,
            user_id: 5,
            task_id: 4,
            workStatus: "Completed",
        },
        {
            id: 12,
            user_id: 6,
            task_id: 5,
            workStatus: "Completed",
        },
        {
            id: 13,
            user_id: 2,
            task_id: 5,
            workStatus: "Completed",
        },
        {
            id: 14,
            user_id: 5,
            task_id: 5,
            workStatus: "Completed",
        },
        {
            id: 15,
            user_id: 6,
            task_id: 6,
            workStatus: "Completed",
        },
        {
            id: 16,
            user_id: 2,
            task_id: 6,
            workStatus: "Completed",
        },
        {
            id: 17,
            user_id: 5,
            task_id: 6,
            workStatus: "Completed",
        },
        {
            id: 18,
            user_id: 6,
            task_id: 7,
            workStatus: "Completed",
        },
        {
            id: 19,
            user_id: 2,
            task_id: 7,
            workStatus: "Completed",
        },
        {
            id: 20,
            user_id: 5,
            task_id: 7,
            workStatus: "Completed",
        },
        {
            id: 21,
            user_id: 6,
            task_id: 8,
            workStatus: "Completed",
        },
        {
            id: 22,
            user_id: 3,
            task_id: 8,
            workStatus: "Completed",
        }, {
            id: 23,
            user_id: 5,
            task_id: 8,
            workStatus: "Completed",
        },
        {
            id: 24,
            user_id: 6,
            task_id: 9,
            workStatus: "Completed",
        },
        {
            id: 25,
            user_id: 4,
            task_id: 9,
            workStatus: "Completed",
        },
        {
            id: 26,
            user_id: 5,
            task_id: 9,
            workStatus: "Completed",
        },
        {
            id: 27,
            user_id: 6,
            task_id: 10,
            workStatus: "Completed",
        },
        {
            id: 28,
            user_id: 2,
            task_id: 10,
            workStatus: "Completed",
        },
        {
            id: 29,
            user_id: 4,
            task_id: 10,
            workStatus: "Completed",
        }
    ]
}
const createTaskProgress = (id, user_id, task_id) => {
    return {
        id: id,
        user_id: user_id,
        task_id: task_id,
        workStatus: "Inprogress",
    }
}

const createNotification = (id, user_id, text) => {
    const date = new Date()
    return {
        id: id,
        user_id: user_id,
        seen: false,
        text: text,
        "date": {
            "start": date.getHours() * 3600 + date.getMinutes() * 60,
            "day": date.getDate(),
            "month": date.getMonth() + 1,
            "year": date.getFullYear()
        }
    }
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(updateCheckedWorkspace.fulfilled, (state, action) => {
                const { id } = action.payload;

                const workspace = state.workspace.filter(t => t.id == id)[0]
                workspace.checked = !workspace.checked

            })
            .addCase(updateWorkStatus.fulfilled, (state, action) => {
                const [id, user_id, status, username] = action.payload;

                const taskProgress = state.taskProgress.find(t => t.task_id === id && t.user_id === user_id);
                const task = state.tasks.find(t => t.id === id)


                if (taskProgress) {
                    taskProgress.workStatus = status
                    const count1 = state.taskProgress.filter(t => t.task_id === id && t.workStatus === "Completed").length
                    const count2 = state.taskProgress.filter(t => t.task_id === id && t.workStatus === "Cancelled").length
                    // const count3 = state.taskProgress.filter(t => t.id === task_id && t.workStatus === "Inprogress")
                    if (task.related_user_id.length + 1 === count1) {
                        task.workStatus = "Completed"
                    } else if (task.related_user_id.length + 1 === count2) {
                        task.workStatus = "Cancelled"
                    } else task.workStatus = "Inprogress"
                    if (task.user_id !== user_id)
                        state.notifications.push(
                            createNotification(state.notifications.length + 1, task.user_id,
                                `Bạn ${username} của bạn đã thay đổi trạng thái công việc "${task.title}" thành "${status}"`
                            )
                        )
                    for (var i in task.related_user_id) {
                        if (task.related_user_id[i] === user_id) continue

                        state.notifications.push(
                            createNotification(state.notifications.length + 1, task.related_user_id[i],
                                `Bạn ${username} của bạn đã thay đổi trạng thái công việc "${task.title}" thành "${status}"`
                            )
                        )
                    }
                }


            })
            .addCase(addTask.fulfilled, (state, action) => {
                const [user_id, title, start, end, day, month, year, friends, location, workspace, description] = action.payload;
                const wsp = state.workspace.filter(w => w.name == workspace);
                var workspace_id = 0

                if (wsp.length === 0) {
                    workspace_id = state.workspace[state.workspace.length - 1].id + 1
                    state.workspace.push({
                        id: workspace_id,
                        user_id: user_id,
                        related_user_id: friends,
                        name: workspace,
                        checked: true,
                        other_workspace: false,
                    })
                    console.log(state.workspace);
                } else {
                    workspace_id = wsp[0].id
                    wsp[0].related_user_id = friends
                }

                state.tasks.push(
                    {
                        "id": state.tasks.length + 1,
                        "user_id": user_id,
                        "related_user_id": friends,
                        "workspace_id": workspace_id,
                        "title": title,
                        "location": location,
                        "description": description,
                        "workStatus": "Inprogress",
                        "date": {
                            "start": start,
                            "end": end,
                            "day": day,
                            "month": month,
                            "year": year,
                        }
                    }
                )
                state.taskProgress.push(createTaskProgress(state.taskProgress.length + 1, user_id, state.tasks.length))
                for (var i in friends) {
                    state.notifications.push(
                        createNotification(state.notifications.length + 1, friends[i], `Bạn đã được thêm vào task: ${title} ở workspace ${state.workspace.find(w => w.id == workspace_id).name}`)
                    )
                    state.taskProgress.push(createTaskProgress(state.taskProgress.length + 1, friends[i], state.tasks.length))
                }

            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const [taskID, start, end, day, month, year, friends, description] = action.payload;
                const task = state.tasks.find(t => t.id === taskID)

                if (task) {
                    task.date = {
                        "start": start,
                        "end": end,
                        "day": day,
                        "month": month,
                        "year": year,
                    }
                    task.workStatus = 'Inprogress'

                    state.taskProgress.find(t => t.user_id === task.user_id && t.task_id === task.id).workStatus = 'Inprogress'

                    for (var i in task.related_user_id) {
                        state.taskProgress.find(p => p.task_id === taskID && p.user_id === task.related_user_id[i]).task_id = -1
                    }
                    task.related_user_id = friends
                    for (var i in task.related_user_id) {
                        state.taskProgress.push(
                            createTaskProgress(state.taskProgress.length + 1, task.related_user_id[i], taskID)
                        )
                    }
                    task.description = description
                    const wsp = state.workspace.find(w => w.id === task.workspace_id)
                    wsp.related_user_id = friends

                }

            })
            .addCase(synchornizeGG.fulfilled, (state, action) => {
                if (state.workspace.filter(w => w.id == 4).length == 0) {
                    state.workspace.push({
                        id: 4,
                        user_id: 6,
                        related_user_id: [],
                        name: 'Meeting',
                        checked: true,
                        other_workspace: true,
                    })
                    state.workspace.push({
                        id: 5,
                        user_id: 6,
                        related_user_id: [],
                        name: 'Wife',
                        checked: true,
                        other_workspace: true,
                    })
                    state.workspace.push({
                        id: 6,
                        user_id: 6,
                        related_user_id: [],
                        name: 'Friends',
                        checked: true,
                        other_workspace: true,
                    })
                    state.tasks.push(
                        {
                            "id": 501,
                            "user_id": 6,
                            "related_user_id": [1, 2, 3, 4, 5],
                            "workspace_id": 4,
                            "title": "Họp với ban lãnh đạo bàn về chính sách cải cách",
                            "location": "Trung tâm hội nghị quốc gia",
                            "description": "...",
                            "workStatus": "Inprogress",
                            "date": {
                                "start": 30000,
                                "end": 35155,
                                "day": 20,
                                "month": 6,
                                "year": 2023
                            }
                        }
                    )
                    state.tasks.push({
                        "id": 502,
                        "user_id": 6,
                        "related_user_id": [1, 3],
                        "workspace_id": 5,
                        "title": "Đưa vợ đi spa",
                        "location": "Spa",
                        "description": "...",
                        "workStatus": "Inprogress",
                        "date": {
                            "start": 36000,
                            "end": 45000,
                            "day": 20,
                            "month": 6,
                            "year": 2023
                        }
                    }
                    )


                    state.tasks.push({
                        "id": 503,
                        "user_id": 6,
                        "related_user_id": [1, 3],
                        "workspace_id": 6,
                        "title": "Đi đánh golf với bạn",
                        "location": "Sân golf",
                        "description": "...",
                        "workStatus": "Inprogress",
                        "date": {
                            "start": 55000,
                            "end": 65000,
                            "day": 20,
                            "month": 6,
                            "year": 2023
                        }
                    }
                    )
                }


            })
            .addCase(addMess.fulfilled, (state, action) => {

                const [user_id, task_id, text] = action.payload

                state.message.push(
                    {
                        id: state.message.length + 1,
                        user_id: user_id,
                        task_id: task_id,
                        text: text
                    }
                )
            })
            .addCase(updateCloseStatus.fulfilled, (state, action) => {
                const [task_id] = action.payload
                const task = state.tasks.find(t => t.id === task_id)
                task.close = !task.close
            })

    }
}
)
export const updateCheckedWorkspace = createAsyncThunk('workspace/updateChecked', async (data, { getState }) => {
    const id = data[0]
    return { id };
});
export const updateWorkStatus = createAsyncThunk('tasks/updateWorkStatus', async (data, { getState }) => {

    return data;
});
export const synchornizeGG = createAsyncThunk('workspace/Synchronize', async (data, { getState }) => {
    return {};
});
export const addTask = createAsyncThunk('taks/add', async (data, { state }) => {

    return data;
});
export const updateTask = createAsyncThunk('taks/update', async (data, { state }) => {

    return data;
});

export const addMess = createAsyncThunk('mess/add', async (data, { state }) => {
    return data;
});
export const updateCloseStatus = createAsyncThunk('task/updateClose', async (data, { state }) => {
    return data;
});




export const getNumOfTotalTaskByMontrh = (state, user_id, month) => {
    const date = new Date()
    const total_task = state.tasks.tasks.filter(t => t.date.month == month && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0)).length;
    return total_task
}
export const getNumOfComplatedTaskByMonth = (state, user_id, month) => {
    const date = new Date()
    const num_of_complated_task = state.tasks.tasks.filter(t => t.workStatus == "Completed"
        && t.date.month == month && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0)
    ).length;
    return num_of_complated_task

}
export const getNumOfInprogressTaskByMonth = (state, user_id, month) => {

    const num_of_complated_task = state.tasks.tasks.filter(t => t.workStatus == "Inprogress"
        && t.date.month == month && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0)
    ).length;
    return num_of_complated_task

}
export const getNumOfCacelledTaskByMonth = (state, user_id, month) => {
    const date = new Date()
    const num_of_complated_task = state.tasks.tasks.filter(t => t.workStatus == "Cancelled"
        && t.date.month == month && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0)
    ).length;

    return num_of_complated_task
}

export const getWorkingTimeInMonth = (state, user_id) => {
    const date = new Date()
    const workingTime = state.tasks.tasks.filter(t => t.date.month == date.getMonth() + 1 && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0) && t.workStatus == "Completed");
    var total_time = 0
    workingTime.map((task) => {
        total_time += task.date.end - task.date.start
    })

    return total_time
}

export const getPercentOfCompletedWorkInWeek = (state, day, user_id) => {
    const date = new Date()
    var percent_of_completedTaskInDay = []
    var total_completedTask = 0
    var total_time = 0
    for (var i = day; i < day + 7; i++) {
        const tasks_by_day = state.tasks.tasks.filter(t => t.date.month == date.getMonth() + 1 && t.date.day == i && (t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0));
        const completedTask = tasks_by_day.filter(t => t.workStatus == "Completed")
        if (!tasks_by_day.length)
            percent_of_completedTaskInDay.push(0)
        else {
            percent_of_completedTaskInDay.push(Math.round(100 * completedTask.length / tasks_by_day.length))
            total_completedTask += completedTask.length
            completedTask.map((task) => {
                total_time += task.date.end - task.date.start
            })

        }
    }
    return [percent_of_completedTaskInDay, total_completedTask, (total_time / 3600).toFixed(1)]

}

const checkExistRelatedUser = (related_user_id, id) => {
    return related_user_id.filter(x => x == id).length
}

export const getMyWorkspace = (state, user_id) => {
    const my_workspace = state.tasks.workspace.filter(w => w.other_workspace == false && w.user_id == user_id)

    return my_workspace
}
export const getOtherWorkspace = (state, user_id) => {
    const other_workspace = state.tasks.workspace.filter(w => (w.other_workspace == true &&
        w.user_id == user_id) || checkExistRelatedUser(w.related_user_id, user_id) !== 0)
    return other_workspace
}
export const getTotalWorkspace = (state, user_id) => {
    return state.tasks.workspace.filter(w => w.user_id == user_id || checkExistRelatedUser(w.related_user_id, user_id) !== 0)
}
export const getTasks = (state, user_id) => {
    return state.tasks.tasks.filter(t => t.user_id == user_id || checkExistRelatedUser(t.related_user_id, user_id) !== 0)
}



export const getTasksByDate = (state, day, month, year, user_id) => {
    const checked_workspace = state.tasks.workspace.filter(w => w.checked && (w.user_id == user_id ||
        checkExistRelatedUser(w.related_user_id, user_id) !== 0))
    const total_task = state.tasks.tasks.filter(task => task.date.month == month && task.date.day == day
        && task.date.year == year && checked_workspace.filter(w => w.id == task.workspace_id).length !== 0
        && (task.user_id == user_id || checkExistRelatedUser(task.related_user_id, user_id) !== 0)
    );

    return total_task
}

export const getMessByTaskId = (state, id) => {
    const mess = state.tasks.message.filter(m => m.task_id === id);
    return mess
}

export const getNotifications = (state, id) => {
    return state.tasks.notifications.filter(n => n.user_id === id)
}
export const getTaskProgress = (state, user_id) => {
    return state.tasks.taskProgress.filter(t => t.user_id === user_id)
}
export const getTotalProgress = (state) => {
    return state.tasks.taskProgress
}



export default taskSlice