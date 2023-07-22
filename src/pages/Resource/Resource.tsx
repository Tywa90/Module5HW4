import React, { ReactElement, FC, useEffect, useState } from "react";
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography
} from '@mui/material'
import * as ResourceApi from "../../api/modules/resources"
import { IResource } from "../../interfaces/resources";
import { useParams } from "react-router-dom";
import { get } from "http";
import { start } from "repl";

const Resource: FC<any> = (): ReactElement => {
    const [resource, setResource] = useState<IResource | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()
    const resourcePath = 'unknown'

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true)
                    const res = await ResourceApi.getById(resourcePath, id)
                    setResource(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }
    }, [id])

    return (
        <Container sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
        }}>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card sx={{ minWidth: 350 }}>
                            <CardContent>
                                <Typography bgcolor={resource?.color} padding="30px 0px">
                                </Typography>
                                <Typography noWrap gutterBottom variant="h6" component="div">
                                    {resource?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {resource?.color}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year: {resource?.year} {resource?.pantone_value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Resource;