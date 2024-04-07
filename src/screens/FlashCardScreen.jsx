import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { IconButton, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CongratsCard from '../components/CongratsCard';
import withHideable from '../components/withHideable';
import generateFlashcards from '../flashcards/generate-flashcards';

const HideableIconButton = withHideable(IconButton);
const HideableTypography = withHideable(Typography);

const FlashCardScreen = () => {
    const [ searchParams ] = useSearchParams();
    const setNames = searchParams.get("setList").split(",");
    const sets = setNames.reduce((acc, setName) => acc.concat(require(`../flashcards/sets/${setName}.js`)), []);

    const [flashcards] = useState([...generateFlashcards(sets), <CongratsCard/>]);
    const numFlashcards = flashcards.length - 1;
    const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  return (
    <Stack spacing={2} paddingTop={10} alignItems="center">
        {flashcards[currentFlashcardIndex]}

          <Stack maxWidth="sm" sx={{ width: "100%" }} direction="row" alignItems="center" justifyContent="space-evenly" >
              <HideableIconButton
                  visible={currentFlashcardIndex === 0 ? false : true}
                  onClick={() => setCurrentFlashcardIndex(Math.max(0, currentFlashcardIndex - 1))}
              >
                  <ArrowBackRoundedIcon sx={{ fontSize: 45 }} />
              </HideableIconButton>

              <HideableTypography
                  visible={currentFlashcardIndex < numFlashcards ? true : false}
              >
                  {`${currentFlashcardIndex + 1} / ${numFlashcards}`}
              </HideableTypography>

              <HideableIconButton
                  visible={currentFlashcardIndex === flashcards.length - 1 ? false : true}
                  onClick={() => setCurrentFlashcardIndex(Math.min(flashcards.length - 1, currentFlashcardIndex + 1))}>
                  <ArrowForwardRoundedIcon sx={{ fontSize: 45 }} />
              </HideableIconButton>
          </Stack>
    </Stack>
  );

}

export default FlashCardScreen;