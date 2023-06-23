import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const init = {
    'tasks': [
        {
            "id": 1,
            "user_id": 6,
            "related_user_id": [1, 4],
            "workspace_id": 7,
            "title": "Play Soccer",
            "location": "Stadium",
            "desciption": "....",
            "workStatus": "Completed",
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
    ]
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
                const { id, status } = action.payload;

                const task = state.tasks.find(t => t.id == id)
                if (task) {
                    task.workStatus = status
                }

            })
            .addCase(addTask.fulfilled, (state, action) => {
                const [user_id, title, start, end, day, month, year, friends, location, workspace, description] = action.payload;
                const wsp = state.workspace.filter(w => w.name == workspace);
                var workspace_id = 0

                if (wsp.length === 0) {
                    workspace_id = state.workspace[state.workspace.length - 1] + 1
                    state.workspace.push({
                        id: workspace_id,
                        user_id: user_id,
                        related_user_id: friends,
                        name: workspace,
                        checked: true,
                        other_workspace: false,
                    })
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
                for (var i in friends) {
                    state.notifications.push(
                        {
                            id: state.notifications.length + 1,
                            user_id: friends[i],
                            seen: false,
                            text: `Bạn đã được thêm vào task: ${title} ở workspace ${state.workspace.find(w => w.id == workspace_id).name}`,
                            "date": {
                                "start": start,
                                "day": day,
                                "month": month,
                                "year": year,
                            }
                        }
                    )
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
                    task.related_user_id = friends
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

    }
}
)
export const updateCheckedWorkspace = createAsyncThunk('workspace/updateChecked', async (data, { getState }) => {
    const id = data[0]
    return { id };
});
export const updateWorkStatus = createAsyncThunk('tasks/updateWorkStatus', async (data, { getState }) => {
    const id = data[0]
    const status = data[1]
    return { id, status };
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



export default taskSlice