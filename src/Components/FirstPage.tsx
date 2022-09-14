import {Grid, TextField} from "@mui/material";

type FirstPageProps = {
    setName: (name: string) => void;
    setDescription: (description: string) => void;
    nameError: boolean;
    setNameError: (nameError: boolean) => void;
}

const FirstPage = (props: FirstPageProps) => {
    return (
        <>
            <Grid item xs={12}>
                <TextField
                    required={true}
                    id="name"
                    label="Projekt neve"
                    inputProps={{
                        maxLength: 255,
                    }}
                    fullWidth={true}
                    error={props.nameError}
                    helperText={"Kötelező mező"}
                    onChange={(e) => {
                        props.setName(e.target.value);
                        if(e.target.value.length > 0){
                            props.setNameError(false);
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required={false}
                    id="description"
                    label="Leírása"
                    inputProps={{
                        maxLength: 500,
                        minLength: 50,
                    }}
                    fullWidth={true}
                    multiline={true}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
            </Grid>
        </>
    );
}

export default FirstPage;