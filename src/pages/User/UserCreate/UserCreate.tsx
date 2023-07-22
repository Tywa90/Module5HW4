import React, { ReactElement, FC, useState } from "react";
import {
    Box,
    Container,
    Button,
    FormControl,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material'
import * as userApi from "../../../api/modules/users";
import { useNavigate } from "react-router-dom";

const UserCreate: FC<any> = (): ReactElement => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [response, setResponse] = useState<any>(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        switch (id) {
            case 'name-input':
                return setName(value);
            case 'job-input':
                return setJob(value);
            default:
                return console.log('something wrong in switch/case');
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

    function refreshPage() {
        window.location.reload();
    }

    return (
        <Container sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {!response ? (


                <form onSubmit={handleSubmit}>
                    <FormControl size='medium' margin='normal' style={{ display: 'flex', gap: '20px' }}>

                        <TextField
                            id="name-input"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                            color="success"
                        />
                        <TextField
                            id="job-input"
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
                <Box>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"User was created!"}
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
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ backgroundColor: "secondary.main" }} onClick={refreshPage}>
                            Create another user
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ backgroundColor: "secondary.main" }} onClick={() => navigate(`/`)}>
                            Back to users page
                        </Button>
                    </Box>
                </Box>
            )}
        </Container >
    )
}

export default UserCreate;