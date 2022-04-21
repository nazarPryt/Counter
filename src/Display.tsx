import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import s from './App.module.css'
import Btn from "./Btn";
import BasicModal from "./ModalWindow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type DisplayType = {
    setCurrentValue: (value: number) => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    displayStatus: boolean
    setDisplayStatus: (value: boolean) => void

    currentValue: number
    maxValue: number
    startValue: number
}

function Display(props: DisplayType) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = JSON.parse(e.currentTarget.value)
        props.setMaxValue(newValue)
    }
    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = JSON.parse(e.currentTarget.value)
        props.setStartValue(newValue)
    }
    const onClickFunction = () => {
        handleOpen()
    }
    const modalBtnHandler = ()=>{
        props.setDisplayStatus(!props.displayStatus)
        handleClose()
    }
    const modalWindow = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        textAlign: 'center',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className={s.display}>
            {props.displayStatus
            ? <div className={props.currentValue < props.maxValue ? s.displayValue : s.displayValueRed}>{props.currentValue}</div>
            : <div className={s.displayInputWrapper}>
                <div className={s.inputWrapper}>
                    <div><span>Max Value:</span><input type="number" className={s.input} value={props.maxValue} onChange={changeMaxValueHandler}/></div>
                    <div><span>Start Value:</span><input type="number" className={s.input} value={props.startValue} onChange={changeStartValueHandler}/></div>
                </div>
                <Btn name={'OK'} onClickFunction={onClickFunction} isBtnDisable={false}/>
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                        >
                            <Box sx={modalWindow}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Changes were saved!!

                                    <Typography>
                                        <Btn name={'OK'} onClickFunction={modalBtnHandler}/>
                                    </Typography>
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
            </div>}
        </div>
    )
};

export default Display;