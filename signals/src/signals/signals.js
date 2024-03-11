import { signal, computed } from '@preact/signals-react';

// Definimos los signals, los estados que comparten varios componentes.
// Despues podemos llamarlos o modificarlos directamente desde cualquier lugar.
// Al modificar el valor de un signal, se renderizaran solamente los componentes que lo usen.

const songs = signal([
  { id: 0, title: "Absolute Beginners", artist: "David Bowie" },
  { id: 1, title: "Ship of Fools", artist: "Erasure" },
  { id: 2, title: "Modern Love", artist: "David Bowie" },
]);

const title = signal("");

const artist = signal("");

const bowieSongs = computed(() => {
  return songs.value.filter(song => song.artist.toLowerCase() === "david bowie").length;
});

const artists = signal(["David Bowie", "Erasure"]);

function updateArtists(){
  let newArtists = [];
  for(let i = 0; i < songs.value.length; i++){
    let selectedArtist =  songs.value[i].artist;
    if(!newArtists.includes(selectedArtist))
      newArtists.push(selectedArtist);
  }
  artists.value = newArtists;
}

export { songs, title, artist, bowieSongs, artists, updateArtists };