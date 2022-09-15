import {Dialog, DialogContent, DialogTitle, Divider, Grid, Link, Typography} from "@mui/material";
import {Project} from "./types";

type DialogProps = {
    open: boolean;
    onClose: () => void;
    project: Project;
}

const ProjectDetailsDialog = (props: DialogProps) => {

    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth={true}>
            <DialogTitle align="center" color="primary">{props.project.name}</DialogTitle>
            <DialogContent>
                <Divider textAlign="left" style={{margin: 8}}>Leírása</Divider>
                <Typography>
                    {props.project.description}
                </Typography>
                <Divider textAlign="left" style={{margin: 8}}>Dolgozók</Divider>
                {props.project.workers.map((worker) =>
                        <Grid container>
                            <Grid item xs={6}>{worker.name}</Grid>
                            <Grid item xs={6}>{worker.position}</Grid>
                        </Grid>
                )}
                <Divider textAlign="left" style={{margin: 8}}>Csatolt dokumentumok</Divider>
                {props.project.links.map((link) =>
                    <Grid item xs={12}><Link href={link} target="_blank">{link}</Link></Grid>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default ProjectDetailsDialog;