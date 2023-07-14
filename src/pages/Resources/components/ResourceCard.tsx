import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { FC, ReactElement } from "react";
// import {IUser} from "../../../interfaces/users";
import { IResource } from "../../../interfaces/resources";
import { useNavigate } from "react-router-dom";

const UserCard: FC<IResource> = (props): ReactElement => {

    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
                <CardMedia
                // component="img"
                // height="250"
                // image={props.}
                // alt={props.email}

                />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography bgcolor={props.color} padding="5px 0px">
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Color: {props.color}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Year: {props.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.pantone_value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default UserCard