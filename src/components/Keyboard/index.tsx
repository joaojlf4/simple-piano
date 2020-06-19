import React from 'react';
import useSound from 'use-sound';
import './main.scss';

const Keyboard: React.FC = () => {

  const audioList = document.querySelectorAll('audio');

  function cancelAudios() {
    audioList.forEach((audio: HTMLAudioElement) => {
      audio.pause();
    })
  }

  function clickToPlayNote(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLDivElement;
    
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${element.dataset.key}"]`);
    const key: HTMLDivElement | null = document.querySelector(`div[data-key="${element.dataset.key}"]`);

    if(audio && key) {
      key.classList.add('playing')
      cancelAudios();
      audio.currentTime = 0;
      audio.play();
      
      key.ontransitionend = () => {
        key?.classList.remove('playing')
      }
    }
  }

  const typeToPlayNote: any = (e: KeyboardEvent) => {
    e.preventDefault();
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key: HTMLDivElement | null = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(audio && key) {
      key.classList.add('playing')
      cancelAudios();
      audio.currentTime = 0;
      audio.play();
      
      key.ontransitionend = () => {
        key?.classList.remove('playing')
      }
    }
  }

  document.addEventListener('keydown', typeToPlayNote)

  return (
    <>
      <div id="piano">
        <div id="piano-container" className="keys">
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="65" data-note="C">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="87" data-note="C#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="83" data-note="D">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="69" data-note="D#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="68" data-note="E">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="70" data-note="F">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="84" data-note="F#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="71" data-note="G">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="89" data-note="G#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="72" data-note="A">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="85" data-note="A#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="74" data-note="B">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="75" data-note="C">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="79" data-note="C#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="76" data-note="D">
            </div>
            <div className="black key sharp" onClick={clickToPlayNote} data-key="80" data-note="D#">
            </div>
          </li>
          <li>
            <div className="white key" onClick={clickToPlayNote} data-key="186" data-note="E">
            </div>
          </li>
        </div>
      </div>
      <section className="audios">
        <audio data-key="65" src={require("./sounds/040.wav")}></audio>
        <audio data-key="87" src={require("./sounds/041.wav")}></audio>
        <audio data-key="83" src={require("./sounds/042.wav")}></audio>
        <audio data-key="69" src={require("./sounds/043.wav")}></audio>
        <audio data-key="68" src={require("./sounds/044.wav")}></audio>
        <audio data-key="70" src={require("./sounds/045.wav")}></audio>
        <audio data-key="84" src={require("./sounds/046.wav")}></audio>
        <audio data-key="71" src={require("./sounds/047.wav")}></audio>
        <audio data-key="89" src={require("./sounds/048.wav")}></audio>
        <audio data-key="72" src={require("./sounds/049.wav")}></audio>
        <audio data-key="85" src={require("./sounds/050.wav")}></audio>
        <audio data-key="74" src={require("./sounds/051.wav")}></audio>
        <audio data-key="75" src={require("./sounds/052.wav")}></audio>
        <audio data-key="79" src={require("./sounds/053.wav")}></audio>
        <audio data-key="76" src={require("./sounds/054.wav")}></audio>
        <audio data-key="80" src={require("./sounds/055.wav")}></audio>
        <audio data-key="186" src={require("./sounds/056.wav")}></audio>
      </section>
    </>
  );
}

export default Keyboard;