import { useState } from 'react';

import { Card, CardContent, Divider, Stack, Typography } from '@mui/joy';
import '../styles/flashcard.css';

function Flashcard({ frontText, frontImage, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Card
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flashcard-inner"
            >
                <CardContent className="flashcard-front" sx={{ minHeight: "100%" }}>
                    <Stack spacing={2} sx={{ flex: 1 }}>

                        <Typography level="title-lg">
                            Question
                        </Typography>
                        <Divider />

                        <Stack spacing={3} justifyContent={"center"} sx={{ flex: 1 }}>
                            {frontImage &&
                                    <img src={frontImage} alt=""/>
                            }

                            <Typography textAlign="center" fontSize={"lg"} whiteSpace={"pre-wrap"}>
                                {frontText}
                            </Typography>
                        </Stack>

                    </Stack>
                </CardContent>

                <CardContent className="flashcard-back" sx={{ position: "absolute", top: "0", width: "100%", height: "100%" }}>
                    <Stack spacing={2} sx={{ flex: 1 }}>

                        <Typography level="title-lg" textAlign={"right"}>
                            Answer
                        </Typography>
                        <Divider />

                        <Stack justifyContent={"center"} sx={{ flex: 1 }}>
                            <Typography textAlign={"center"} fontSize={"lg"} whiteSpace={"pre-wrap"}>
                                {backText}
                            </Typography>
                        </Stack>

                    </Stack>
                </CardContent>
            </div>
        </Card>
    );
}

export default Flashcard;
