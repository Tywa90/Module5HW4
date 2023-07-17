import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {ICreateUser} from "../../../interfaces/createUser";
import {useNavigate} from "react-router-dom";

const CreateUserCard: FC<ICreateUser> = (props): ReactElement => {

    const navigate = useNavigate()

     return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea onClick={() => navigate(`/new-user`)}>
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.name} {props.job}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CreateUserCard