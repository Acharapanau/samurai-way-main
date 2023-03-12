import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {state} from "../../redux/state";

export const Dialogs = (props: any) => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.dialogsPage.messages.map(m => <Message message={m.message}/>)


    let newDialogElement = React.createRef<HTMLTextAreaElement>()

    let addDialog = () => {
        alert(newDialogElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div><textarea ref={newDialogElement}></textarea></div>
                <div>
                    <button onClick={addDialog}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

