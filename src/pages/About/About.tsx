import React, { ReactElement, FC, useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid, Pagination, Typography } from '@mui/material'
import * as userApi from "../../api/modules/users"
import { ICreateUser } from "../../interfaces/createUser";
import CreateUserCard from "./components";
import User from "../User/User";

const About: FC<any> = (props): ReactElement => {
  const [users, setUsers] = useState<ICreateUser[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>("morpheus")
  const [job, setJob] = useState<string>("leader")

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        const res = await userApi.createUser(name, job)
        setName(res.name)
        setJob(res.job)
        setUsers(res.data)
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message)
        }
      }
      setIsLoading(false)
    }
    getUser()
  }, [])

  return (
    <Container sx={{
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Grid container spacing={4} justifyContent="center" my={4}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {users?.map((item) => (
              <Grid key={item.id} item lg={2} md={3} xs={6}>
                <CreateUserCard {...item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
      </Box>
    </Container>
  );
};

export default About;