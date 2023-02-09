import React from "react";
import s from './Dialogs.module.css'
export const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.active}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your it-kamasutra?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

