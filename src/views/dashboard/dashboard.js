import React from 'react'
import { useState } from 'react';
import Header from '../calendar/header';
import Nav from '../calendar/nav';

import './dashboard.css'

const Component11 = (props) => {

  const radius = 100; // Bán kính của biểu đồ hình tròn
  const circumference = 2 * Math.PI * radius; // Chu vi của biểu đồ hình tròn
  if (props.num_of_total_task === 0)
    var percent = 50
  else
    var percent = 50 * props.num_of_complated_task / props.num_of_total_task + 50
  const offset = circumference - (percent / 100) * circumference; // Độ dịch chuyển của đường viền
  const halfHeight = radius; // Chiều cao nửa trên của biểu đồ

  const radius2 = 70;
  const percent2 = Math.round(100 * props.workingTimeInMonth / (60 * 60 * 24 * 30))

  const circumference2 = 2 * Math.PI * radius2;
  const offset2 = circumference2 - (percent2 / 100) * circumference2;

 

  return (
    <div className="component11-container">
      <div className="component11-component11">
        <div className="component11-dashboard">
          <Nav {...props} />

          <div className="component11-group66">
            <div className="component11-task-target-actualvs-prediction">
              <img
                src="/external/rectangle31973-j4wb-300h.png"
                alt="Rectangle31973"
                className="component11-rectangle3"
              />
              <span className="component11-text002">
                <span>Total Task vs Completed task</span>
              </span>
              <div className="component11-group22">
                <div >
                  <svg width={radius * 2 + 40} height={halfHeight + 14}>
                    <circle
                      className="circle-chart-background"
                      stroke="#f2f2f2"
                      strokeWidth="25"
                      fill="transparent"
                      r={radius}
                      cx={radius + 20}
                      cy={radius + 20}
                    />
                    <circle
                      className="circle-chart-progress"
                      stroke="#6610f2"
                      strokeWidth="25"
                      strokeDasharray={`${circumference} ${circumference}`}
                      strokeDashoffset={offset}
                      fill="transparent"
                      r={radius}
                      cx={radius + 20}
                      cy={radius + 20}
                    />
                  </svg>
                  <span className="component11-text004">
                    <span>Tasks</span>
                  </span>
                  <span className="component11-text006">
                    <span>{Math.round(percent * 2 - 100, 2)}%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="component11-group65">
              <div className="component11-total-employees">
                <img
                  src="/external/rectangle21973-ug7-300h.png"
                  alt="Rectangle21973"
                  className="component11-rectangle2"
                />
                <div className="component11-group6">
                  <div className="component11-group5">
                    <span className="component11-text008">
                      <span className="component11-text009">+{props.num_of_inProgress_task_prev == 0 ? props.num_of_inProgress_task * 100 : 100 * props.num_of_inProgress_task / props.num_of_inProgress_task_prev - 100}% Prev Month</span>
                      <span style={{ color: '#ced4da' }}> This Month</span>
                    </span>
                    <div className="component11-group4">
                      <span className="component11-text011">
                        <span>Inprogress Task</span>
                      </span>
                      <div className="component11-group3">
                        <span className="component11-text013">
                          <span>Task</span>
                        </span>
                        <span className="component11-text015">
                          <span>{props.num_of_inProgress_task}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="component11-group2">
                    <img
                      src="/external/uiiconpersonfilled1973-pg4n.svg"
                      alt="UIiconpersonfilled1973"
                      className="component11--iiconpersonfilled"
                    />
                  </div> */}
                </div>
              </div>
              <div className="component11-total-tasks">
                <div className="component11-group12">
                  {/* <div className="component11-group10">
                    <span className="component11-text017">
                      <span className="component11-text018">+35%</span>
                      <span> This Month</span>
                    </span>
                    <div className="component11-group9">
                      <span className="component11-text020">
                        <span>Total Tasks</span>
                      </span>
                      <div className="component11-group8">
                        <span className="component11-text022">
                          <span>Task</span>
                        </span>
                        <span className="component11-text024">
                          <span>2.3016</span>
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="component11-complated-task">
                <div className="component11-group14">
                  <span className="component11-text026">
                    <span>Completed Task</span>
                  </span>
                  <span className="component11-text028">
                    <span className="component11-text029">+{props.num_of_complated_task_prev == 0 ? props.num_of_complated_task * 100 : 100 * props.num_of_complated_task / props.num_of_complated_task_prev - 100}% Prev Month</span>
                    <span style={{ color: '#ced4da' }}> This Month</span>
                  </span>
                  <div className="component11-group13">
                    <span className="component11-text031">
                      <span>Task</span>
                    </span>
                    <span className="component11-text033">
                      <span>{props.num_of_complated_task}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="component11-incompleted-task">
                <div className="component11-group19">
                  <div className="component11-group18">
                    <span className="component11-text035">
                      <span>Cancelled Task</span>
                    </span>
                    <span className="component11-text037">
                      <span className="component11-text038">+{props.num_of_cancelled_task_prev == 0 ? props.num_of_cancelled_task * 100 : 100 * props.num_of_cancelled_task / props.num_of_cancelled_task_prev - 100}% Prev Month</span>
                      <span style={{ color: '#ced4da' }}> This Month</span>
                    </span>
                    <div className="component11-group17">
                      <span className="component11-text040">
                        <span>Task</span>
                      </span>
                      <span className="component11-text042">
                        <span>{props.num_of_cancelled_task}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="component11-dashboard1">
            <span className="component11-text044">
              <span>Dashboard</span>
            </span>
            <div className="component11--iiconcategoryfilled">
              <img
                src="/external/rectangle2411973-ox9-200h.png"
                alt="Rectangle2411973"
                className="component11-rectangle241"
              />
              <img
                src="/external/rectangle2431973-br6-200h.png"
                alt="Rectangle2431973"
                className="component11-rectangle243"
              />
              <img
                src="/external/rectangle2421973-lbar-200h.png"
                alt="Rectangle2421973"
                className="component11-rectangle242"
              />
              <img
                src="/external/rectangle2441973-vjy2-200h.png"
                alt="Rectangle2441973"
                className="component11-rectangle244"
              />
            </div>
            <img
              src="/external/rectangle2451973-bmdc-200w.png"
              alt="Rectangle2451973"
              className="component11-rectangle245"
            />
          </div> */}
          {/* <div className="component11-project">
            <span className="component11-text046">
              <span>Calendar</span>
            </span>
            <img
              src="/external/uiicondocumentfilled1973-krun.svg"
              alt="UIicondocumentfilled1973"
              className="component11--iicondocumentfilled"
            />
            <img
              src="/external/rectangle2451973-ntxi-200w.png"
              alt="Rectangle2451973"
              className="component11-rectangle2451"
            />
          </div> */}
          <Header {...props} />
          
          <div className="component11-group121">
            <div className="component11-group101">
              <span className="component11-text052">
                <span className="component11-text053">+{props.num_of_total_task_prev == 0 ? props.num_of_total_task * 100 : 100 * props.num_of_total_task / props.num_of_total_task_prev - 100}% Prev Month</span>
                <span style={{ color:'#ced4da'}}> This Month</span>
              </span>
              <div className="component11-group91">
                <span className="component11-text055">
                  <span>Total Tasks</span>
                </span>
                <div className="component11-group81">
                  <span className="component11-text057">
                    <span>Task</span>
                  </span>
                  <span className="component11-text059">
                    <span>{props.num_of_total_task}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="component11-group11">
              <img
                src="/external/uiiconbriefcasefilled9810-k3bk.svg"
                alt="UIiconbriefcasefilled9810"
                className="component11--iiconbriefcasefilled"
              />
            </div>
          </div>
          <div className="component11-group15">
            <img
              src="/external/uiiconmultiselectfilled9810-icbq.svg"
              alt="UIiconmultiselectfilled9810"
              className="component11--iiconmultiselectfilled"
            />
          </div>
          <div className="component11-group16">
            <img
              src="/external/uiiconclosefilled9810-7g8m.svg"
              alt="UIiconclosefilled9810"
              className="component11--iiconclosefilled"
            />
          </div>
          <div className="component11-group21 component11-group21">
            <img
              src="/external/uiiconpersonfilled9899-dxaz.svg"
              alt="UIiconpersonfilled9899"
              className="component11--iiconpersonfilled1"
            />
          </div>
        </div>
        <div className="component11-group64">
          <div className="component11-complete-task-target">
            <span className="component11-text061">
              <span>Predicted time vs real time</span>
            </span>
            <svg width={300} height={300}>
              <circle
                className="circle-chart-background"
                stroke="#f2f2f2"
                strokeWidth="25"
                fill="transparent"
                r={radius2}
                cx={radius2 + 55}
                cy={radius2 + 55}
              />
              <circle
                className="circle-chart-progress"
                stroke="#52CD9F"
                strokeWidth="25"
                strokeDasharray={`${circumference2} ${circumference2}`}
                strokeDashoffset={offset2}
                fill="transparent"
                r={radius2}
                cx={radius2 + 55}
                cy={radius2 + 55}
              />
            </svg>
            <div className="component11-group25">
              <div className="component11-group23">

                <span className="component11-text063">
                  <span>{percent2}%</span>
                </span>
                <span className="component11-text065">
                  <span>Hour</span>
                </span>
              </div>
            </div>
            <div className="component11-group28">
              <span className="component11-text067">
                <span>{(props.workingTimeInMonth / 3600).toFixed(1)}h</span>
              </span>
              <div className="component11-group27">
                <span className="component11-text069">
                  <span>Working time</span>
                </span>
                <span className="component11-text071">
                  <span>Global</span>
                </span>
              </div>
              <div className="component11-group26">
                <div className="component11-group1">
                  <img
                    src="/external/ellipse1371973-cwow-200h.png"
                    alt="Ellipse1371973"
                    className="component11-ellipse137"
                  />
                  <img
                    src="/external/vector1973-uatr.svg"
                    alt="Vector1973"
                    className="component11-vector"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="component11-task-count">
            <span className="component11-text073">
              <span>Tasks of the week </span>
            </span>
            <div className="component11-group39">
              <div className="component11-group30">
                <span className="component11-text075">
                  <span>Tus</span>
                </span>
                <div className="component11-group29">
                  <div 
                    style={{
                      height: props.percent_of_completedTaskInDay[0] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius:'10px 10px 0px 0px'
                    }}>
                    
                    </div>
                </div>
              </div>
              <div className="component11-group32">
                <span className="component11-text077">
                  <span>Mon</span>
                </span>
                <div className="component11-group31">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[1] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
              <div className="component11-group34">
                <span className="component11-text079">
                  <span>Wed</span>
                </span>
                <div className="component11-group33">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[2] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
              <div className="component11-group36">
                <span className="component11-text081">
                  <span>Thu</span>
                </span>
                <div className="component11-group35">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[3] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
              <div className="component11-group38">
                <span className="component11-text083">
                  <span>Fri</span>
                </span>
                <div className="component11-group37">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[4] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
              <div className="component11-group38270">
                <span className="component11-text083">
                  <span>Sat</span>
                </span>
                <div className="component11-group37">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[5] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
              <div className="component11-group38271">
                <span className="component11-text083">
                  <span>Sun</span>
                </span>
                <div className="component11-group37">
                  <div
                    style={{
                      height: props.percent_of_completedTaskInDay[6] + 'px', backgroundColor: '#6610f2', position: 'absolute', bottom: '0px', width: '100%'
                      , borderRadius: '10px 10px 0px 0px'
                    }}>

                  </div>
                </div>
              </div>
            </div>
            <div className="component11-group43">
              <div className="component11-group41">
                <span className="component11-text085">
                  <span>{props.total_completedTask}</span>
                </span>
                <div className="component11-group40">
                  <span className="component11-text087">
                    <span>Completed task</span>
                  </span>
                  <span className="component11-text089">
                    <span>Global</span>
                  </span>
                </div>
              </div>
              <div className="component11-group42">
                <img
                  src="/external/uiiconshoppingbaglight1973-jl3.svg"
                  alt="UIiconshoppingbaglight1973"
                  className="component11--iiconshoppingbaglight"
                />
              </div>
            </div>
            <div className="component11-group47">
              <div className="component11-group46">
                <span className="component11-text091">
                  <span>{props.total_time_inWeek}h</span>
                </span>
                <div className="component11-group45">
                  <span className="component11-text093">
                    <span>Total time</span>
                  </span>
                  <span className="component11-text095">
                    <span>Commercial</span>
                  </span>
                </div>
              </div>
              <div className="component11-group44">
                <div className="component11--iiconwalletlight">
                  <img
                    src="/external/union1973-vb2q.svg"
                    alt="Union1973"
                    className="component11-union"
                  />
                  <div className="component11-group161">
                    <img
                      src="/external/rectangle381973-tbdw-200h.png"
                      alt="Rectangle381973"
                      className="component11-rectangle38"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component11-top-employees">
            <span className="component11-text097">
              <span>Task</span>
            </span>
            <span className="component11-text099">
              <span>Score</span>
            </span>
            {/* <span className="component11-text101">
              <span>Workspace</span>
            </span> */}
            <span className="component11-text103">
              <span>Top Partner</span>
            </span>
            <div className="component11-group51">
              <span className="component11-text105">
                <span>210 pts</span>
              </span>
              <span className="component11-text107">
                <span>21 Tasks</span>
              </span>
              {/* <span className="component11-text109">
                <span>IT in Japanese 1</span>
              </span> */}
              <span className="component11-text111">
                <span> Hạnh</span>
              </span>
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg"
                alt="happybeardedyoungmanlookswithjoyfulexpressionhasfr1973"
                className="component11-happybeardedyoungmanlookswithjoyfulexpressionhasfr"
              />
            </div>
            <div className="component11-group52">
              <span className="component11-text113">
                <span>180 pts</span>
              </span>
              <span className="component11-text115">
                <span>18 Tasks</span>
              </span>
              {/* <span className="component11-text117">
                <span>VHKD</span>
              </span> */}
              <span className="component11-text119">
                <span> Linh</span>
              </span>
              <img
                src="https://images.news18.com/ibnlive/uploads/2021/06/1622715559_disha.jpg"
                alt="closeupyoungsuccessfulmansmilingcamerastandingcasu1973"
                className="component11-closeupyoungsuccessfulmansmilingcamerastandingcasu"
              />
            </div>
            <div className="component11-group48">
              <span className="component11-text121">
                <span>Tú</span>
              </span>
              {/* <span className="component11-text123">
                <span>GR!</span>
              </span> */}
              <span className="component11-text125">
                <span>50 Tasks</span>
              </span>
              <span className="component11-text127">
                <span>500 pts</span>
              </span>
              <img
                src="https://i.dailymail.co.uk/1s/2020/11/05/20/35306112-8918801-image-a-4_1604607816563.jpg"
                alt="portraitsmilingbusinessmandressedsuit11973"
                className="component11-portraitsmilingbusinessmandressedsuit1"
              />
            </div>
            <div className="component11-group50">
              <span className="component11-text129">
                <span>350 pts</span>
              </span>
              <span className="component11-text131">
                <span>35 Tasks</span>
              </span>
              {/* <span className="component11-text133">
                <span>ITSS</span>
              </span> */}
              <span className="component11-text135">
                <span>Tùng</span>
              </span>
              <img
                src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg"
                alt="smilingmanwhiteshirttypingtextmessagescrollingfeed1973"
                className="component11-smilingmanwhiteshirttypingtextmessagescrollingfeed"
              />
            </div>
            <div className="component11-group49">
              <span className="component11-text137">
                <span>400 pts</span>
              </span>
              <span className="component11-text139">
                <span>40 Tasks</span>
              </span>
              {/* <span className="component11-text141">
                <span>UIUX</span>
              </span> */}
              <span className="component11-text143">
                <span>Minh</span>
              </span>
              <img
                src="https://i.pinimg.com/236x/35/6a/cf/356acfda905c45950ee134f2f19ee454.jpg"
                alt="younghandsomebusinessmanwithlaptopoffice11973"
                className="component11-younghandsomebusinessmanwithlaptopoffice1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component11
