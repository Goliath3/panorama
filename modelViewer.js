import '@google/model-viewer';

export function modelViewer(element) {
  const modelViewer = document.createElement('model-viewer');
  modelViewer.src =
    'https://cdn.jsdelivr.net/gh/Goliath3/panorama@main/shaylushay.glb';
  modelViewer.setAttribute('alt', 'A 3D model');
  // modelViewer.setAttribute('auto-rotate', '');
  modelViewer.setAttribute('camera-controls', '');
  // modelViewer.setAttribute('autoplay', false);
  modelViewer.style.width = window.innerWidth;
  modelViewer.style.height = window.innerHeight;
  modelViewer.shadowIntensity = 1;
  modelViewer.touchAction = 'pan-y';
  modelViewer.ar = true;
  modelViewer.arMode = 'webxr scene-viewer';

  //Add modelviewer to #container in #app
  element.appendChild(modelViewer);

  //Create & add play pause state btn to #container in #app
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'counter';
  btn.innerHTML = 'Play';
  element.appendChild(btn);

  //Eventlistener to handle play pause logic
  btn.addEventListener('click', () => {
    let paused = modelViewer.paused;
    console.log(paused);
    if (!paused) {
      modelViewer.pause();
      btn.innerHTML = 'Play';
    } else {
      modelViewer.play();
      btn.innerHTML = 'Pause';
    }
    console.log('play');
  });
}
