import { Button, Checkbox, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/joy';
import { useState } from "react";
import { Link } from "react-router-dom";

const groups = [
    {
        name: "orders",
        label: "Insect Orders",
        folder: "orders",
        sets: [
            { label: "Blattodea", name: "blattodea" },
            { label: "Coleoptera", name: "coleoptera" },
            { label: "Diptera", name: "diptera" },
            { label: "Ephemeroptera", name: "ephemeroptera" },
            { label: "Hemiptera", name: "hemiptera" },
            { label: "Hymenoptera", name: "hymenoptera" },
            { label: "Lepidoptera", name: "lepidoptera" },
            { label: "Mantodea", name: "mantodea" },
            { label: "Megaloptera", name: "megaloptera" },
            { label: "Neuroptera", name: "neuroptera" },
            { label: "Odonata", name: "odonata" },
            { label: "Orthoptera", name: "orthoptera" },
            { label: "Trichoptera", name: "trichoptera" },
        ]
    },
    {
        name: "classes",
        label: "Arthropod Classes",
        folder: "classes",
        sets: [
            { label: "Arachnida", name: "arachnida" },
            { label: "Branchiopoda", name: "branchiopoda" },
            { label: "Chilopoda", name: "chilopoda" },
            { label: "Diplopoda", name: "diplopoda" },
            { label: "Insecta", name: "insecta" },
            { label: "Malacostraca", name: "malacostraca" },
        ]
    },
    {
        name: "general",
        label: "General",
        folder: "general",
        sets: [
            { label: "Metamorphosis", name: "metamorphosis" },
        ]
    },
    {
        name: "species",
        label: "Species",
        folder: "2025-species",
        sets: [
            { label: "Identification", name: "identification" },
            //{ label: "Conservation Status", name: "conservation-status" },
            //{ label: "Characteristics", name: "general-questions" },
        ]
    }
];

const findFolder = (name) => {
    for (const group of groups) {
        for (const set of group.sets) {
            if (set.name === name) {
                return group.folder;
            }
        }
    }
    return null; // Return null if the value is not found
}

const getFullName = (name) => {
    return `${findFolder(name)}/${name}`;
}

const SelectFlashcardSetScreen = () => {
    const [selectedSets, setSelectedSets] = useState([]);

    const onSetChanged = (event) => {
        const checked = event.target.checked;
        const name = event.target.value;
        
        const fullName = getFullName(name);

        const newSets = checked
            ? [...selectedSets, fullName]
            : selectedSets.filter(item => item !== fullName);

        setSelectedSets(newSets);
    };

    const onSelectAllGroupChanged = (event) => {
        const checked = event.target.checked;
        const group = groups.find(group => group.name === event.target.value);

        const folderName = group.folder;
        const sets = group.sets.map(set => `${folderName}/${set.name}`);

        const newSets = checked
            ? selectedSets.concat(sets.filter(name => !selectedSets.includes(name)))
            : selectedSets.filter(name => !sets.includes(name));

        setSelectedSets(newSets);
    };


    return (
        <Stack display="flex" alignItems="center" spacing={5} mt={10} mb={10}>
            <Typography level="h4" fontWeight="lg" fontSize={36}>
                Select Flashcard Sets
            </Typography>
            <Grid container spacing={5} minWidth="300px" flexGrow={1} maxWidth={"sm"}>

                { groups.map(group => {
                    return (
                        <Grid key={group.name} xs={6} >
                            <Stack display="flex" alignItems={"center"}>

                                <Typography fontSize={20} level="body-lg" fontWeight="xl" mb={1}>
                                    {group.label}
                                </Typography>

                                    <List size="sm">
                                        <ListItem>
                                            <Checkbox
                                                value={group.name}
                                                label="Select All"
                                                size="lg"
                                                onChange={onSelectAllGroupChanged}
                                            />
                                        </ListItem>

                                        <Divider sx={{ m: 1, maxWidth: "200px" }} />

                                    {
                                        group.sets.map(set => (
                                            <ListItem key={set.name}>
                                                <Checkbox
                                                    label={set.label}
                                                    value={set.name}
                                                    size="lg"
                                                    checked={selectedSets.includes(getFullName(set.name))}
                                                    onChange={onSetChanged}
                                                />
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Stack>
                        </Grid>
                    );
                })}


            </Grid>
            <Button
                size="lg"
                disabled={selectedSets.length < 1}
                component={Link}
                to={`flashcards?setList=${selectedSets.join(",")}`}>
                Start!
            </Button>
        </Stack>
    );
};

export default SelectFlashcardSetScreen;