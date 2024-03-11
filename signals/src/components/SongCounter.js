import { bowieSongs } from "../signals/signals";

export function SongCounter() {
    return (
      <h2>Canciones de David Bowie: {bowieSongs.value}</h2>
    )
}