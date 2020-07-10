import React from 'react';
import swal from 'sweetalert';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import FaHeadphones from 'react-icons/lib/fa/headphones';
import { createRandomNum } from 'react-jinke-music-player/lib/utils';
import 'react-jinke-music-player/assets/index.css';
import './JkMusicPlayer.css';

const lyric = [].join('\n');

const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      );
    },
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
];

const audioList2 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      );
    },
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3'
      );
    },
  },
];

const options = {
  //audio lists model
  audioLists: audioList1,

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: 'dark',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: 'body',

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: true,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: true,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 300,
    left: 120,
  },

  // play mode text config of the audio player
  playModeText: {
    order: 'Play all once',
    orderLoop: 'Repeat all',
    singleLoop: 'Repeat 1',
    shufflePlay: 'Shuffle',
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: '打开',

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: '关闭',

  //audio theme switch checkedText  [ type `String | ReactNode` default '-']
  checkedText: '开',

  //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
  unCheckedText: '关',

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: 'No tracks',

  panelTitle: 'Playlist',

  defaultPlayMode: 'order',

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: true,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: true,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
  controllerTitle: <FaHeadphones />,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: true,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [''],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    //console.log('audio download', audioInfo);
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    //console.log('audio playing', audioInfo);
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    // console.log('audio pause', audioInfo);
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    // console.log('audio seeked', audioInfo);
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    //console.log('audio volume change', currentVolume);
  },

  //The single song is ended handle
  onAudioEnded(audioInfo) {
    // swal('Audio is ended!', '', 'success')
    //console.log('audio ended', audioInfo);
  },

  //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
  onAudioAbort(e) {
    //console.log('audio abort', e);
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    //console.log('audio reload:', audioInfo);
  },

  //audio load failed error handle
  onAudioLoadError(e) {
    //console.error('audio load err', e);
  },

  //theme change handle
  onThemeChange(theme) {
    //console.log('theme change:', theme);
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    // console.log('[currentPlayId] audio lists change:', currentPlayId);
    //console.log('[audioLists] audio lists change:', audioLists);
    //console.log('[audioInfo] audio lists change:', audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    //console.log('audio play track change:', currentPlayId, audioLists, audioInfo);
  },

  onPlayModeChange(playMode) {
    // console.log('play mode change:', playMode);
  },

  onModeChange(mode) {
    //console.log('mode change:', mode);
  },

  onAudioListsPanelChange(panelVisible) {
    //console.log('audio lists panel visible:', panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    //console.log('audio lists drag end:', fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    //console.log('audio lyric change:', lineNum, currentLyric);
  },

  // custom music player root node
  getContainer() {
    return document.body;
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    //console.log('audio instance', audio);
  },

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3'
  //   })
  // }
};

class JkMusicPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    params: options,
  };
  onAddAudio = () => {
    const data = {
      ...this.state.params,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
        },
      ],
    };
    this.setState({
      params: data,
    });
  };
  extendsContent = () => {
    const data = {
      ...this.state.params,
      extendsContent: (
        <>
          <button onClick={() => swal("I'm extends content")}>button1</button>
          <button onClick={() => swal("I'm extends content")}>button2</button>
        </>
      ),
    };
    this.setState({
      params: data,
    });
  };

  onChangeToFirstAudioList = () => {
    const data = {
      ...this.state.params,
      clearPriorAudioLists: true,
      audioLists: audioList1,
    };
    this.setState({
      params: data,
    });
  };

  onChangeToSecondAudioList = () => {
    const data = {
      ...this.state.params,
      clearPriorAudioLists: true,
      audioLists: audioList2,
    };
    this.setState({
      params: data,
    });
  };
  onAutoPlayMode = () => {
    const data = {
      ...this.state.params,
      autoPlay: !this.state.params.autoPlay,
    };
    this.setState({
      params: data,
    });
  };

  onAutoPlayInitLoadPlayList = () => {
    const data = {
      ...this.state.params,
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    };
    this.setState({
      params: data,
    });
  };

  onShowGlassBg = () => {
    this.onChangeKey('glassBg');
  };
  onDrag = () => {
    this.onChangeKey('drag');
  };
  onToggleMode = () => {
    this.onChangeKey('toggleMode');
  };
  onSeeked = () => {
    this.onChangeKey('seeked');
  };
  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    };
    if (key === 'light' || key === 'dark') {
      data.theme = key;
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key;
    }
    this.setState({ params: data });
  };
  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar');
  };
  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover');
  };
  playModeShowTime = () => {
    const data = {
      ...this.state.params,
      playModeShowTime: createRandomNum(200, 2000),
    };
    this.setState({
      params: data,
    });
  };
  changePlayIndex = () => {
    const data = {
      ...this.state.params,
      playIndex: createRandomNum(0, this.state.params.audioLists.length),
    };
    this.setState({
      params: data,
    });
  };

  componentDidMount() {
    const data = {
      ...this.state.params,
      clearPriorAudioLists: true,
      audioLists: this.props.audioList,
    };
    this.setState({
      params: data,
    });
    //console.log('component did mount.');
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.audioList !== newProps.audioList) {
      const data = {
        ...this.state.params,
        clearPriorAudioLists: true,
        audioLists: this.props.audioList,
        defaultPlayMode: 'singleLoop',
      };
      this.setState({
        params: data,
      });
    }
  }

  render() {
    const { params } = this.state;
    //  console.log('params: ', params);
    // console.log('----------------------------------');
    //  console.log(this.props.audioList);
    return (
      <>
        <section className="settings">
          {/*  <button onClick={this.onChangeToFirstAudioList}>
                        change to first audio list ({audioList1.length})
                    </button>
                    <button onClick={this.onChangeToSecondAudioList}>
                        change to second audio list ({audioList2.length})
                    </button>*/}
          {/*    <button onClick={this.onAddAudio}>
                        + add audio ({params.audioLists.length})
                    </button>*/}
          {/*    <button onClick={this.extendsContent}>+ add extends content</button>
                    <button onClick={this.playModeShowTime}>
                        change play mode show time ({params.playModeShowTime} ms)
                    </button>*/}
          {/*     <button onClick={this.changePlayIndex}>
                        change playIndex ({params.playIndex || 0})
                    </button>*/}
          {/*     <label htmlFor="glass">
                        <input type="checkbox" id="glass" onChange={this.onShowGlassBg}/>
                        show glass background
                    </label>*/}
          {/*      <label htmlFor="drag">
                        <input
                            type="checkbox"
                            id="drag"
                            checked={params.drag}
                            onChange={this.onDrag}
                        />
                        drag
                    </label> */}
          {/*     <label htmlFor="seeked">
                        <input
                            type="checkbox"
                            id="seeked"
                            checked={params.seeked}
                            onChange={this.onSeeked}
                        />
                        seeked
                    </label>
                    {/*     <label htmlFor="toggle">
                        <input
                            type="checkbox"
                            id="toggle"
                            checked={params.toggleMode}
                            onChange={this.onToggleMode}
                        />
                        toggle mode
                    </label>*/}
          {/*   <label htmlFor="autoPlay">
                        <input
                            type="checkbox"
                            id="autoPlay"
                            checked={params.autoPlay}
                            onChange={this.onAutoPlayMode}
                        />
                        autoplay
                    </label>
                    <label htmlFor="onAutoPlayInitLoadPlayList">
                        <input
                            type="checkbox"
                            id="onAutoPlayInitLoadPlayList"
                            checked={params.autoPlayInitLoadPlayList}
                            onChange={this.onAutoPlayInitLoadPlayList}
                        />
                        autoplayInitLoadPlayList
                    </label>
                    <label htmlFor="showMiniProcessBar">
                        <input
                            type="checkbox"
                            id="showMiniProcessBar"
                            checked={params.showMiniProcessBar}
                            onChange={this.showMiniProcessBar}
                        />
                        show mini process bar
                    </label>
                    <label htmlFor="showMiniModeCover">
                        <input
                            type="checkbox"
                            id="showMiniModeCover"
                            checked={params.showMiniModeCover}
                            onChange={this.showMiniModeCover}
                        />
                        show cover of mini mode
                    </label>
                    <label htmlFor="showProgressLoadBar">
                        <input
                            type="checkbox"
                            id="showProgressLoadBar"
                            checked={params.showProgressLoadBar}
                            onChange={() => this.onChangeKey('showProgressLoadBar')}
                        />
                        showProgressLoadBar
                    </label>*/}
          {/*  <label htmlFor="showPlay">
                        <input
                            type="checkbox"
                            id="showPlay"
                            checked={params.showPlay}
                            onChange={() => this.onChangeKey('showPlay')}
                        />
                        showPlay
                </label>*/}
          {/*  <label htmlFor="showReload">
                        <input
                            type="checkbox"
                            id="showReload"
                            checked={params.showReload}
                            onChange={() => this.onChangeKey('showReload')}
                        />
                        showReload
                    </label>*/}
          {/* <label htmlFor="showDownload">
                        <input
                            type="checkbox"
                            id="showDownload"
                            checked={params.showDownload}
                            onChange={() => this.onChangeKey('showDownload')}
                        />
                        showDownload
                    </label>*/}
          {/*   <label htmlFor="showPlayMode">
                        <input
                            type="checkbox"
                            id="showPlayMode"
                            checked={params.showPlayMode}
                            onChange={() => this.onChangeKey('showPlayMode')}
                        />
                        showPlayMode
                    </label> */}
          {/*repeat 1, repeat all*/}
          {/* <label htmlFor="showThemeSwitch">
                        <input
                            type="checkbox"
                            id="showThemeSwitch"
                            checked={params.showThemeSwitch}
                            onChange={() => this.onChangeKey('showThemeSwitch')}
                        />
                        showThemeSwitch
                    </label>*/}
          {/*    <label htmlFor="showLyric">
                        <input
                            type="checkbox"
                            id="showLyric"
                            checked={params.showLyric}
                            onChange={() => this.onChangeKey('showLyric')}
                        />
                        showLyric
                    </label>*/}
          {/*    <label htmlFor="preload">
                        <input
                            type="checkbox"
                            id="preload"
                            checked={params.preload}
                            onChange={() => this.onChangeKey('preload')}
                        />
                        preload
                    </label>*/}
          {/*      <label htmlFor="remove">
                        <input
                            type="checkbox"
                            id="remove"
                            checked={params.remove}
                            onChange={() => this.onChangeKey('remove')}
                        />
                        remove
                    </label>*/}
          {/*     <label htmlFor="remember">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={params.remember}
                            onChange={() => this.onChangeKey('remember')}
                        />
                        remember
                    </label>
                    theme :{params.theme} */}
          {/*    <Switch
                        checkedChildren={'D'}
                        unCheckedChildren={'L'}
                        checked={params.theme === 'light'}
                        onChange={(checked) => this.onChangeKey(checked ? 'light' : 'dark')}
                    />
                    mode :{params.mode}
                    <Switch
                        checkedChildren={'M'}
                        unCheckedChildren={'F'}
                        checked={params.mode === 'mini'}
                        onChange={(checked) => this.onChangeKey(checked ? 'mini' : 'full')}
                    />*/}
        </section>
        <ReactJkMusicPlayer {...params} />
      </>
    );
  }
}

export default JkMusicPlayer;
