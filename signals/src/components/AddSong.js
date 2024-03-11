import { useRef } from "react";
import { updateArtists, songs, title, artist, artists } from "../signals/signals";
import { Autocomplete, Button, TextField } from '@mui/material';

export function AddSong() {
  const nextIdRef = useRef(3);

  function addSong() {
    const song = {id: nextIdRef.current, title: title.value, artist: artist.value};
    songs.value = [...songs.value, song];
    nextIdRef.current++;
    title.value = "";
    artist.value = "";
    updateArtists();
  }

  return (
    <>
        <TextField label='Title' fullWidth value={title.value} onChange={e => title.value = e.target.value} />
        <br/><br/>
        <Autocomplete 
            onInputChange={(e, value) => artist.value = value} 
            value={artist.value}
            options={artists.value}
            freeSolo
            renderInput={(params) => (
                <TextField {...params} label='Artist' />
            )}
        />
        <br/>
        <Button variant="contained" onClick={() => addSong()}>Add Song</Button>
    </>
  )
}