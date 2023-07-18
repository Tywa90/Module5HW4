import React, { ReactElement, FC, useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography,
    Button
} from '@mui/material'
import * as userApi from "../../api/modules/users"
import { IUser } from "../../interfaces/users";
import { useNavigate, useParams } from "react-router-dom";

const User: FC<any> = (): ReactElement => {
    const [user, setUser] = useState<IUser | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            const getUser = async () => {
                try {
                    setIsLoading(true)
                    const res = await userApi.getById(id)
                    setUser(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getUser()
        }
    }, [id])

    return (
        <Container sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Grid justifyContent="center">
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={user?.avatar}
                                alt={user?.email}
                            />
                            <CardContent>
                                <Typography noWrap gutterBottom variant="h6" component="div">
                                    {user?.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user?.first_name} {user?.last_name}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Button onClick={() => {navigate('/user/update')}} variant="contained" color="success" sx={{ marginTop: 3, backgroundColor: "secondary.main" }}>
                                UPDATE USER
                            </Button>
                        </Box>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default User;