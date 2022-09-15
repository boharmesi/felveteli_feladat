import {Button, Divider, Grid, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";

type ThirdPageProps = {
    addLink: (link: string) => void;
    links: string[];
}

const ThirdPage = (props: ThirdPageProps) => {

    const [link, setLink] = useState("");

    const handleClick = () => {
        props.addLink(link);
        setLink("");
    }

    return (
        <>
            {props.links.map((value, index) =>
                <Grid item xs={12} key={index}>
                    <Typography style={{
                        wordWrap: "break-word",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                    }}>
                        {value}
                    </Typography>
                    <Divider/>
                </Grid>
            )}
            <Grid item xs={12}>
                <TextField
                    id="links"
                    label="Kapcsolódó linkek"
                    fullWidth={true}
                    onChange={(e) => {
                        setLink(e.target.value)
                    }}
                    value={link}
                />
            </Grid>
            <Grid container justifyContent={'flex-end'}>
                <Grid item>
                    <Button startIcon={<AddIcon/>} color="primary" onClick={handleClick} disabled={link === ""}>
                        Hozzáadás
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default ThirdPage;