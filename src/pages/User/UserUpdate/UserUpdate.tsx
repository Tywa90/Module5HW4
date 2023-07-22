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
import { useNavigate, useParams } from "react-router-dom";

const UserUpdate: FC<any> = (): ReactElement => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [response, setResponse] = useState<any>(null);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const { id, firstName, lastName } = useParams();

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
        if (id) {
            try {
                const response = await userApi.updateUser(id, name, job);
                setResponse(response);
            }
            catch (error) {
                console.error(error);
            }
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
            {!response ? (
                <Box>
                    <Container>
                        <p>Update information about</p>
                        <h3>{firstName} {lastName}</h3>
                    </Container>
                    <form onSubmit={handleSubmit}>
                        <FormControl size='medium' margin='normal' style={{ display: 'flex', gap: '20px', minWidth: "300px" }}>
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
                                    Update user
                                </Button>
                            </Box>
                        </FormControl>
                    </form>
                </Box>
            ) : (
                <Box>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"User information was updated!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Box sx={{ marginTop: '1rem', textAlign: 'left' }}>
                                    <h3>Name: {response.name}</h3>
                                    <h3>Job: {response.job}</h3>
                                    <h3>Updated at: {response.updatedAt}</h3>
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Box>
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

export default UserUpdate;