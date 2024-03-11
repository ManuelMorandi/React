import { updateArtists, songs } from "../signals/signals";
import { IconButton } from "@mui/material";
import { DeleteRounded } from '@mui/icons-material';

function SongList() {
    const songElements = songs.value.map(song => {
        return <Song key={song.id} song={song} />
    })

    return (
        <ul>
            {songElements}
        </ul>
    )
}

function Song({song}) {
    function deleteSong(song) {
      songs.value = songs.value.filter(s => s.id !== song.id);
      updateArtists();
    }

    return (
        <li>
            {song.title + " - " + song.artist}
            <IconButton onClick={() => deleteSong(song)}>
                <DeleteRounded />
            </IconButton>
        </li>
    )
}

export { Song, SongList };