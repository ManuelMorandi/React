import { Champions } from "./Champions";

export function MidcardChampions({icChamps, usChamps}) {
    return(
        <>
            <h3>Intercontinental Champions</h3>
            <Champions champs={icChamps} />
            <h3>United States Champions</h3>
            <Champions champs={usChamps} />
        </>
    )
}