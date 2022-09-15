import {Button, Grid, TextField} from "@mui/material";
import WorkerDetails from "./WorkerDetails";
import AddIcon from '@mui/icons-material/Add';
import React, {useState} from "react";
import {Worker} from "../types";

type SecondPageProps = {
    addWorker: (name: string, position: string) => void;
    workers: Worker[];
}

const SecondPage = (props: SecondPageProps) => {

    const [workerName, setWorkerName] = useState("");
    const [workerPos, setWorkerPos] = useState("");

    const [workerNum, setWorkerNum] = useState(0);

    const handleClick = () => {
        setWorkerNum(workerNum + 1);
        props.addWorker(workerName, workerPos);
    }

    return (
        <>
            {props.workers.map((value, index) =>
                <WorkerDetails key={index} name={value.name} position={value.position}/>
            )}
            <Grid item xs={6}>
                <TextField
                    id="workerName"
                    label="Dolgozó neve"
                    fullWidth={true}
                    onChange={(e) => {
                        setWorkerName(e.target.value)
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="position"
                    label="Pozíciója"
                    fullWidth={true}
                    onChange={(e) => {
                        setWorkerPos(e.target.value)
                    }}
                />
            </Grid>
            <Grid container justifyContent={'flex-end'}>
                <Grid item>
                    <Button startIcon={<AddIcon/>} color="primary" onClick={handleClick}>
                        Hozzáadás
                    </Button>
                </Grid>
            </Grid>

        </>
    );
}

export default SecondPage;