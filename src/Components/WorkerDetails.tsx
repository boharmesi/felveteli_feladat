import {Grid,Typography} from "@mui/material";

type WorkerProps = {
    name: string,
    position: string
}

const WorkerDetails = (props: WorkerProps) => {

    return (
        <>
            <Grid item xs={6}>
                <Typography>{props.name}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography>{props.position}</Typography>
            </Grid>
        </>
    );
}

export default WorkerDetails;