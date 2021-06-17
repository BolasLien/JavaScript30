const player = document.querySelector('.player')

// 影片
const video = player.querySelector('.viewer')

// 進度條
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

// 暫停/撥放
const toggle = player.querySelector('.toggle')

// 音量/撥放速度
const ranges = player.querySelectorAll('.player__slider')

// 往後跳/往前跳
const skipButtons = player.querySelectorAll('[data-skip]')


// 相關的功能
// 撥放/暫停
function togglePlay(){
  // if(this.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }

  // 上面可以簡寫成下面這樣
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

// 更換撥放暫停的圖示
function updateButtonIcon() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon
}

// 進度條的功能
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = percent + '%'
}

// 跳過功能
function skip(){
  video.currentTime += parseFloat(this.dataset.skip)
}

// 聲音及撥放速率的功能
function updateRange(){
  video[this.name] = this.value
}

// 拖拉進度條，影片會跳到該處
function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}



// 將功能跟事件串在一起
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButtonIcon)
video.addEventListener('pause', updateButtonIcon)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button=> button.addEventListener('click', skip))
ranges.forEach(input => input.addEventListener('change', updateRange))

let mouseDown = false
progress.addEventListener('click',scrub)
// progress.addEventListener('mousemove',(e)=> {
//   if(mouseDown) {
//     scrub(e)
//   }
// })
  // 上面可以簡寫成下面這樣
progress.addEventListener('mousemove',(e)=> mouseDown && scrub(e))
progress.addEventListener('mousedown',()=> mouseDown = true)
progress.addEventListener('mouseup',()=> mouseDown = false)