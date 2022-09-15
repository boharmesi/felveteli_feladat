import {Button, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import {Project} from "../types";
import "../Projects";
import {getProjects} from "../Projects";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {

    const navigate = useNavigate();

    const [projects, setProjects] = useState<Project[]>([]);

    const handleClick = () => {
        navigate("/addProject");
    }

    getProjects().then(value => setProjects(value));

    return (
        <>
            <Typography alignSelf="center" gutterBottom={true} variant="h3">Projektek</Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button startIcon={<AddIcon/>} onClick={handleClick}>Új projekt</Button>
                    </Grid>
                    <Grid item container justifyItems="space-between" rowSpacing={3} columnSpacing={3}>
                        {projects.map((value, index) =>
                            <ProjectCard key={index} project={value}/>
                        )}
                    </Grid>
                </Grid>
        </>
    );
}

export default ProjectList;