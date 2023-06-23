import React, { useState } from "react";
import "./chat.css";
import MessList from "./MessList";
import { useDispatch, useSelector } from "react-redux";
import { getMessByTaskId,addMess } from "../calendar/taskSlice";

const ContentChat = (props) => {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const getUsername = (id) => {
        return props.accounts.find(a => a.id === id).name
    }
    const mess = useSelector((state) => getMessByTaskId(state, props.task.id))
    const sendMessage = () => {
        dispatch(addMess([props.userInfo.id,props.task.id,text]))
    }
    console.log(props.task,'chat')
    return (
        <>
            {props.task.id !== 0 ?
                <div className="chat" >
                    <div className="top ">
                        <div className="box">
                            <div className="image">
                                <img
                                    src='/external/teamImg.jpeg'
                                    alt=""
                                />
                            </div>
                            <div className="online"></div>
                        </div>
                        <div className="information">
                            <div className="username">
                                {props.task.title}
                            </div>
                        </div>
                        <div className="options">
                            <button>
                                <i className="fa-solid fa-phone"></i>
                            </button>
                            <button>
                                <i className="fa-solid fa-video"></i>
                            </button>
                            <button>
                                <i className="fa-solid fa-ellipsis-vertical"></i>

                            </button>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="tumbler">
                            <div className="messages">
                                {mess.map(m => {
                                    if (m.user_id == props.userInfo.id)
                                        return (
                                            <div className="clip sent" key={m.id}>
                                                <div className="text">{m.text}</div>
                                            </div>
                                        )
                                    else {
                                        return (
                                            <div key={m.id}>
                                                <div className="clip received" >
                                                    <div className="name">{getUsername(m.user_id)}</div>
                                                </div>

                                                <div className="clip received" >
                                                    <div className="text">{m.text}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                                
                            {/* <div className="clip received">
                                <div className="image"><img
                                    src={`./${process.env.PUBLIC_URL}/img/chat1.png`}
                                    alt=""
                                /></div>
                            </div>
                            <div className="clip received">
                                <div className="image"><img
                                    src={`./${process.env.PUBLIC_URL}/img/chat2.png`}
                                    alt=""
                                /></div>
                            </div> */}
                          
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="cup">
                            <textarea id="message" cols="30" rows="1" placeholder="Write your message..." style={{ height: "18px" }}
                                value={text} 
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter')
                                    {
                                        sendMessage()
                                        setText("")
                                    }
                                        
                                }}
                            ></textarea>
                            <button className="send" style={{ display: "none" }} >Send</button>
                            <div className="picker photo" >
                                <i className="fa-solid fa-link"></i>
                            </div>
                            <div className="picker photo" >
                                😍
                            </div>
                        </div>
                    </div>
                </div>

                : null}
            <MessList {...props}/>
        </>
    );

};

export default ContentChat;
