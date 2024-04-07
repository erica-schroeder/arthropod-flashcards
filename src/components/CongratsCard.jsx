import { Button, Card, CardContent, Divider, Stack, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import '../styles/flashcard.css';

function CongratsCard() {

    return (
        <Card
            className={"flashcard"}
        >
            <CardContent className="flashcard-front" sx={{ minHeight: "100%" }}>
                <Stack spacing={2} sx={{ flex: 1 }}>

                    <Typography level="title-lg">
                        Finished!
                    </Typography>

                    <Divider />

                    <Stack spacing={3} justifyContent={"center"} sx={{ flex: 1 }}>
                        <img src={require("../images/congrats.gif")} alt="" />

                        <Typography textAlign="center" fontSize={"lg"}>
                            Amazing work!!!
                        </Typography>
                    </Stack>

                    <Divider />

                    <Button component={Link} to="/">
                        Pick a new set
                    </Button>

                </Stack>
            </CardContent>
        </Card>
    );
}

export default CongratsCard;
