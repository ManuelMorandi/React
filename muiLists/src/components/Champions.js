import { Chip } from "@mui/material"

export function Champions({champs}) {
    const chips = champs.map(c => {
        return <Chip key={c.id} variant="outlined" label={c.id + ") " + c.name} />
    });

    return (
        <>
            {chips}
        </>
    )
}