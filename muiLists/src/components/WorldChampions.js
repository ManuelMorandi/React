import { Champions } from "./Champions";

export function WorldChampions({wweChamps}) {
    return(
        <>
            <h3>WWE Champions</h3>
            <Champions champs={wweChamps} />
        </>
    )
}