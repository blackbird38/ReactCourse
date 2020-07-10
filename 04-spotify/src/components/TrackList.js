import React, { useState, useEffect } from 'react';
import Track from './Track';
import JkMusicPlayer from './JkMusicPlayer';
import Loading from './Loading';

const TrackList = ({ tracks, imageAlbum }) => {
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    const playList = tracks.map((track) => {
      const artists = track.artists.map((artist) => artist.name);
      return {
        name: track.name,
        singer: artists.join(),
        cover: track.image || imageAlbum,
        musicSrc: () => {
          return Promise.resolve(track.mp3);
        },
      };
    });
    setAudioList(playList);
  }, [tracks]);

  const playTrack = (track) => {
    // console.log('playList', playList);
    console.log(JSON.stringify(track.image));
    console.log('playTrack', track.mp3);
    const artists = track.artists.map((artist) => artist.name);
    setAudioList([
      {
        name: track.name,
        singer: artists.join(),
        cover: track.image || imageAlbum,
        musicSrc: () => {
          return Promise.resolve(track.mp3);
        },
      },
    ]);
  };

  const renderedTracks = tracks.map((track, index) => (
    <Track key={index} track={track} index={index} playTrack={playTrack} />
  ));

  return (
    <div>
      {tracks.length > 0 ? (
        <>
          <div role="list" className="ui divided relaxed list">
            {renderedTracks}
          </div>
          <div>
            <JkMusicPlayer audioList={audioList} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TrackList;
