import React, { useState } from 'react';
import Track from './Track';
import JkMusicPlayer from './JkMusicPlayer';

const TrackList = ({ tracks }) => {
  const [audioList, setAudioList] = useState([
    {
      name: 'Test',
      singer: 'Test',
      cover: 'test.jpg',
      musicSrc: () => {
        return Promise.resolve(
          'https://p.scdn.co/mp3-preview/1f37421e137fd8d765c99f79b6718191df19d23f?cid=068737bc88d94c4c9f1d5b963003a462'
        );
      },
    },
  ]);

  const playTrack = (track) => {
    console.log(track.mp3);
    alert(track.mp3);

    setAudioList([
      {
        name: 'click',
        singer: 'click',
        cover: 'click.jpg',
        musicSrc: () => {
          return Promise.resolve(track.mp3);
        },
      },
    ]);
    console.log(audioList);
  };

  const renderedTracks = tracks.map((track, index) => (
    <Track key={index} track={track} index={index} playTrack={playTrack} />
  ));

  return (
    <div>
      <div role="list" className="ui divided relaxed list">
        {renderedTracks}
      </div>
      <div>
        <JkMusicPlayer audioList={audioList} />
      </div>
    </div>
  );
};

export default TrackList;
