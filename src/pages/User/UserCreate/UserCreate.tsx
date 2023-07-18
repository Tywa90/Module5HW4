import React, { ReactElement, FC, useState } from "react";
import {
    Box,
    CircularProgress,
    Container,
    Button,
    FormControl,
    TextField,
    Backdrop,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material'
import * as userApi from "../../../api/modules/users";

const UserCreate: FC<any> = (): ReactElement => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [response, setResponse] = useState<any>(null);
    const [open, setOpen] = React.useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'job') {
            setJob(value);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await userApi.createUser(name, job);
            setResponse(response);

            console.log(response.id);
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Container sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {/* new try */}
            {!response ? (
                <form onSubmit={handleSubmit}>
                    <FormControl size='medium' margin='normal' style={{ display: 'flex', gap: '20px' }}>
                        <TextField
                            id="my-input"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <TextField
                            id="my-job"
                            label="Job"
                            name="job"
                            value={job}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <Box sx={{ display: 'flex', justifyContent: "center", marginTop: '1rem' }} >
                            <Button type="submit"
                                variant="contained"
                                color="success"
                                sx={{ backgroundColor: "secondary.main" }} onClick={handleClickOpen}>
                                Create user
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            ) : (
                <>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title" color="success">
                            {"User was created"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Box sx={{ marginTop: '1rem', textAlign: 'left' }}>
                                    <h3>User ID: {response.id}</h3>
                                    <h3>Name: {response.name}</h3>
                                    <h3>Job: {response.job}</h3>
                                    <h3>Created at: {response.createdAt}</h3>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}



















            {/* {!response ? (
                <form onSubmit={handleSubmit}>
                    <FormControl size='medium' margin='normal' style={{ display: 'flex', gap: '20px' }}>
                        <TextField
                            id="my-input"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <TextField
                            id="my-job"
                            label="Job"
                            name="job"
                            value={job}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <Box sx={{ display: 'flex', justifyContent: "center", marginTop: '1rem' }} >

                            <Button type="submit"
                                variant="contained"
                                color="success"
                                sx={{ backgroundColor: "secondary.main" }} onClick={handleClickOpen}>
                                Open alert dialog
                            </Button>
                        </Box>
                    </FormControl>
                    ) : ()
        }

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"User was created"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Box sx={{ marginTop: '1rem', textAlign: 'left' }} >

                                    <h3>User ID: {response.id}</h3>
                                    <h3>Name: {name}</h3>
                                    <h3>Job: </h3>
                                    <h3>Created at: </h3>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Button type="submit"
                        variant="contained"
                        color="success"
                        sx={{ backgroundColor: "secondary.main" }}>Create user
                    </Button>
                </Box>
                    </FormControl>
                </form > */}



            {/* {!response ? (
                <form onSubmit={handleSubmit}>
                    <FormControl size='medium' margin='normal' style={{ display: 'flex', gap: '20px' }}>
                        <TextField
                            id="my-input"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <TextField
                            id="my-job"
                            label="Job"
                            name="job"
                            value={job}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <Box sx={{ display: 'flex', justifyContent: "center", marginTop: '1rem' }} >
                            <Button type="submit"
                                variant="contained"
                                color="success"
                                sx={{ backgroundColor: "secondary.main" }}>Create user
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            ) : (
                <Box sx={{ marginTop: '1rem', textAlign: 'left' }} >
                    <h1>User created</h1>
                    <h3>User ID: {response.id}</h3>
                    <h3>Name: {response.name}</h3>
                    <h3>Job: {response.job}</h3>
                    <h3>Created at: {response.createdAt}</h3>
                </Box>
            )} */}
        </Container >
    )
}

export default UserCreate