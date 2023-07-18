import React, { ReactElement, FC, useState } from "react";
import {
    Box,
    CircularProgress,
    Container,
    Button,
    FormControl,
    TextField
} from '@mui/material'
import * as userApi from "../../../api/modules/users"
import { useParams } from "react-router-dom";

const UserUpdate: FC<any> = (): ReactElement => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [response, setResponse] = useState<any>(null);
    const {id} = useParams()

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
        if(id) {
            try {
                const response = await userApi.updateUser(id, name, job);
                console.log('id');
                setResponse(response);
                setName('');
            }
            catch (error) {
                console.error(error);
            }
        }
    };

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
                                sx={{ backgroundColor: "secondary.main" }}>Update user
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            ) : (
                <Box sx={{ marginTop: '1rem', textAlign: 'left' }} >
                    <h1>User updated</h1>
                    <h3>Name: {response.name}</h3>
                    <h3>Job: {response.job}</h3>
                    <h3>Created at: {response.updatedAt}</h3>
                </Box>
            )}
        </Container>
    )
}

export default UserUpdate