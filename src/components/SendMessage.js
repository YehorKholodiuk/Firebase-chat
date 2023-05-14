import React, {useState} from 'react';
import {auth,db} from "../firebase";
import {collection,  serverTimestamp, addDoc} from "firebase/firestore";

const style={
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-700 text-black outline-none border-none`,
    button: `w-[20%] bg-gray-400`,
}

const SendMessage = ({scroll}) => {
    const [input, setInput]=useState('')
    const sendMessage = async(event)=>{event.preventDefault()
        if(input===''){
            alert("Please enter a valid message")
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'),
            {
                text:input,
                name:displayName,
                uid,
                timestamp:serverTimestamp()
            })
        setInput('')
        scroll.current.scrollInfoView({behavior:"smoth"})
    }

    return (
        <form onSubmit={sendMessage}
              className={style.form}>
            <input
                value={input}
                onChange={(event)=>setInput(event.target.value)}
                className={style.input}
                type="text"
                placeholder='Message'
            />
            <button className={style.button}
                    type="submit">
                Send
            </button>
        </form>
    );
};

export default SendMessage;
