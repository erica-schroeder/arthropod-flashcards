import Flashcard from "../components/Flashcard";
const _ = require("lodash");

const generateFlashcards = (setDefinition) => {
    const shuffledSet = _.shuffle(setDefinition);

    return shuffledSet.map((def, index) =>
        <Flashcard key={index}
            frontText={def.question}
            frontImage={ def.image ? require(`../images/${def.image}`) : null }
            backText={def.answer}
        />);
};

export default generateFlashcards;