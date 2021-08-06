import React from 'react';
import {useSelector} from "react-redux";
import {selectTotal} from "../../slices/basketSlice";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const FooterCart = () => {

    const total = useSelector(selectTotal);

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

        const classes = useStyles();
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };



        return (
        <div className="flex justify-end mt-10">
            <div className="">
                <h2 className="mr-7 text-gray-400">Total Cost</h2>
                <div className="text-3xl font-bold text-gray-600">${total}</div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" className="text-2xl font-bold">The order is submitted</h2>
                        <p id="transition-modal-description" className="text-xl">The confirmation email was sent</p>
                    </div>
                </Fade>
            </Modal>

            <div onClick={handleOpen} className="w-56 flex items-center bg-yellow-500 justify-center rounded-lg ml-5 text-white font-bold hover:bg-yellow-600 cursor-pointer duration-200">
                Complete Order
            </div>
        </div>
    );
};

export default FooterCart;
