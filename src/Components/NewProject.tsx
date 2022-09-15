import {Box, Button, Grid, Step, StepLabel, Stepper, Typography} from "@mui/material";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import {useEffect, useState} from "react";
import {Project, Worker} from "../types"
import ThirdPage from "./ThirdPage";
import {addProject} from "../Projects"
import {useNavigate} from "react-router-dom";

const NewProject = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [nameError, setNameError] = useState(false);
    const [project, setProject] = useState<Project>({
        name: "",
        description: "",
        workers: new Array<Worker>(),
        links: []
    });

    const steps =  ["Projekt adatai", "Dolgozók", "Dokumentumok"];
    const titles = ["Projekt hozzáadása", "Dolgozók felvitele", "Dokumentumok csatolása"];

    const setProjectName = (name: string) => {
        let tmp = project;
        tmp.name = name;
        setProject(tmp);
    }

    const setProjectDescription = (description: string) => {
        let tmp = project;
        tmp.description = description;
        setProject(tmp);
    }

    const addWorker = (name: string, position: string) => {
        let tmp = project;
        tmp.workers.push({name: name, position: position})
        setProject(tmp);
    }

    const addLink = (link: string) => {
        let tmp = project;
        tmp.links.push(link);
        setProject(tmp);
    }

    const nextPage = () => {
        if (currentPage == 3) {
            addProject(project);
            navigate("/");
        } else {
            if (project.name.length === 0) {
                setNameError(true);
            } else {
                setCurrentPage(currentPage + 1);
            }
        }
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    }

    useEffect(() => {
    }, [project]);

    return (
        <>
            <Typography alignSelf="center" variant="h3" gutterBottom={true}>
                {titles[currentPage-1]}
            </Typography>
            <Box display="flex">
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {currentPage === 1 &&
                    <FirstPage
                        name={project.name}
                        description={project.description}
                        nameError={nameError}
                        setNameError={setNameError}
                        setName={setProjectName}
                        setDescription={setProjectDescription}
                    />
                    }
                    {currentPage === 2 &&
                    <SecondPage addWorker={addWorker} workers={project.workers}/>
                    }
                    {currentPage === 3 &&
                    <ThirdPage addLink={addLink} links={project.links}/>
                    }
                    <Grid item xs={12}>
                        <Stepper activeStep={currentPage-1} alternativeLabel>
                            {steps.map((value) => (
                                <Step key={value} color="#000">
                                    <StepLabel>{value}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Grid>
                    <Grid item container
                          justifyContent="space-between">
                        <Grid item>
                            {currentPage != 1 &&
                            <Button onClick={prevPage}>Vissza</Button>
                            }
                        </Grid>
                        <Grid item>
                            <Button onClick={nextPage}>Tovább</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );

}

export default NewProject;