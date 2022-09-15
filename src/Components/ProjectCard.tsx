import {Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import ProjectDetailsDialog from "../Components/ProjectDetailsDialog"
import {Project} from "./types";

type ProjectCardProps = {
    project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {

    const [image, setImage] = useState("");
    const [open, setOpen] = useState(false);

    const fetchImage = async () => {
        let imageUrl = "https://ui-avatars.com/api/?name=";
        let name = props.project.name.split(" ");
        imageUrl += name.join("+");
        imageUrl += "&background=f8eeee&rounded=true";
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    });

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Grid item>
            <Card sx={{width: 350, height: 200, margin: "auto"}}>
                <CardHeader
                    avatar={
                        <img src={image} alt="icons"/>
                    }
                    title={props.project.name}
                />
                <CardContent>
                    <Typography variant="body2" style={{wordWrap: "break-word", textOverflow: "ellipsis", overflow: "hidden",
                        whiteSpace: "nowrap"}}>
                        {props.project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClickOpen}>Részletek</Button>
                    <ProjectDetailsDialog open={open} onClose={handleClose} project={props.project}/>
                </CardActions>
            </Card>
        </Grid>);
}

export default ProjectCard;