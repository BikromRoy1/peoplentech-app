'use client';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';

import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';
import './VideoPlayer.css';

const textTracks = [
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
    kind: 'subtitles',
    label: 'English',
    srcLang: 'en',
    default: true,
  },
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/spanish.vtt',
    kind: 'subtitles',
    label: 'Spanish',
    srcLang: 'es',
  },
];

export default function VideoPlayer() {
  return (
    <div className='container mx-auto'>
      <MediaPlayer
        src='youtube/_cMxraX_5RE'
        viewType='video'
        streamType='on-demand'
        logLevel='warn'
        crossOrigin
        playsInline
        title='Sprite Fight'
        poster='https://files.vidstack.io/sprite-fight/poster.webp'
      >
        <MediaProvider>
          <Poster className='vds-poster' />
          {textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
}
