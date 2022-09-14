import {Button, Grid, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import LinkDetails from "./LinkDetails";

type ThirdPageProps = {
    addLink: (link: string) => void;
    links: string[];
}

const ThirdPage = (props: ThirdPageProps) => {

    const [link, setLink] = useState("");
    const [linkNum, setLinkNum] = useState(0);

    const handleClick = () => {
        setLinkNum(linkNum+1);
        props.addLink(link);
    }

    return (
        <>
            {props.links.map((value, index) =>
                <LinkDetails key={index} link={value} />
            )}
            <Grid item xs={12}>
                <TextField
                    id="links"
                    label="Kapcsolódó linkek"
                    fullWidth={true}
                    onChange={(e) => {
                        setLink(e.target.value)
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

export default ThirdPage;