import {Grid, Typography} from "@mui/material";

type LinkDetailsProps = {
    link: string;
}

const LinkDetails = (props: LinkDetailsProps) => {

    return(
        <Grid item xs={12}>
            <Typography>{props.link}</Typography>
        </Grid>
    );

}

export default LinkDetails;