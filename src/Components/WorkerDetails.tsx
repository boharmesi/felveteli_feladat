import {Divider, Grid, Typography} from "@mui/material";
import React from "react";

type WorkerProps = {
    name: string,
    position: string
}

const WorkerDetails = (props: WorkerProps) => {

    return (
        <>
            <Grid item xs={6}>
                <Typography> {props.name}</Typography>
                <Divider/>
            </Grid>
            <Grid item xs={6}>
                <Typography>{props.position}</Typography>
                <Divider/>
            </Grid>
        </>
    );
}

export default WorkerDetails;