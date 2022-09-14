import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from "react-router-dom";
import {Project} from "../types";
import "../Projects";
import {getProjects} from "../Projects";

const ProjectList = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/addProject");
    }

    let projects: Project[] = [];
        getProjects().then(value => projects = value);

    return(
        <>
            {projects.map((value) => {console.log(value.name)})}
            <Button startIcon={<AddIcon/>} onClick={handleClick}>Új projekt</Button>
        </>
    )

}

export default ProjectList;