
// // ---------------------------------------------------------------------------

/**
 * 1. Render songs -> ok
 * 2. scroll top -> ok
 * 3. play / pause / seek -> ok
 * 4. CD rotate -> ok
 * 5. next / prev -> ok
 * 6. Random -> ok
 * 7. Next / Repeat when ended -> ok
 * 8. Active song
 * 9. scroll active song into view
 * 10. play song when click
 */

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const PlAYER_STORAGE_KEY = 'F8_PLAYER'

// const playlist = $('.playlist')
// const cd = $('.cd')
// const heading = $('header h2')
// const cdThumb = $('.cd-thumb')
// const audio = $('#audio')
// const player = $('.player')
// const playBtn = $('.btn-toggle-play')
// const progress = $('#progress')
// const nextBtn = $('.btn-next')
// const prevBtn = $('.btn-prev')
// const randomBtn = $('.btn-random')
// const repeatBtn = $('.btn-repeat')
// console.log()




// const app = {
//     currentIndex: 0,
//     isPlaying: false,
//     isRandom: false,
//     isRepeat: false,
//     config: {},
//     // (1/2) Uncomment the line below to use localStorage
//     // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
//     songs: [
//         {
//             name: '3170-1',
//             singer: 'Duong x Nau',
//             path: './assets/music/song1.mp3',
//             image: './assets/img/music-1.png',
//         },
//         {
//             name: '3170-2',
//             singer: 'Duong x Nau',
//             path: './assets/music/song2.mp3',
//             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
//         },
//         {
//             name: 'Harehare Ya',
//             singer: 'Sou',
//             path: './assets/music/song3.mp3',
//             image: './assets/img/music-1.png',
//         },
//         {
//             name: 'Dream Lantern (English Version)',
//             singer: 'RADWIMPS',
//             path: 'https://data3.chiasenhac.com/downloads/1762/2/1761749-dfb9f98e/128/Dream%20Lantern%20English%20Version_%20-%20RADWIMP.mp3',
//             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
//         },
//         {
//             name: '3170-1',
//             singer: 'Duong x Nau',
//             path: './assets/music/song1.mp3',
//             image: './assets/img/music-1.png',
//         },
//         {
//             name: '3170-2',
//             singer: 'Duong x Nau',
//             path: './assets/music/song2.mp3',
//             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
//         },
//         {
//             name: 'Harehare Ya',
//             singer: 'Sou',
//             path: './assets/music/song3.mp3',
//             image: './assets/img/music-1.png',
//         },
//         {
//             name: 'Dream Lantern (English Version)',
//             singer: 'RADWIMPS',
//             path: 'https://data3.chiasenhac.com/downloads/1762/2/1761749-dfb9f98e/128/Dream%20Lantern%20English%20Version_%20-%20RADWIMP.mp3',
//             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
//         },
//     ],
//     setConfig: function (key, value) {
//         this.config[key] = value;
//         // (2/2) Uncomment the line below to use localStorage
//         // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
//       },
//     render: function() {
//         const htmls = this.songs.map((song, index) => {
//             return `<div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
//                         <div class="thumb" style="background-image: url('${song.image}')">
//                         </div>
//                         <div class="body">
//                         <h3 class="title">${song.name}</h3>
//                         <p class="author">${song.singer}</p>
//                         </div>
//                         <div class="option">
//                         <i class="fas fa-ellipsis-h"></i>
//                         </div>
//                     </div>`
//         })
//         playlist.innerHTML = htmls.join('')
        
//     },
//     defineProperties: function() {
//         Object.defineProperty(this, 'currentSong', {
//             get: function() {
//                 return this.songs[this.currentIndex]
//             }
//         })
//     },
//     handleEvents: function() {
//         const _this = this
//         const cdWidth = cd.offsetWidth

//         // X??? l?? CD quay / d???ng
//         const cdThumbAnimate = cdThumb.animate([
//             { transform: 'rotate(360deg)' }

//         ], {
//             duration: 10000, // 10s
//             iteration: Infinity,
//         }) 
//         cdThumbAnimate.pause();

//         // X??? l?? ph??ng to / thu nh??? cd
//         document.onscroll = function() {
//             const scrollTop = window.scrollY || document.documentElement.scrollTop
//             const newCdWidth = cdWidth - scrollTop

//             cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
//             cd.style.opacity = newCdWidth / cdWidth
//         }

//         // X??? l?? khi click play
//         playBtn.onclick = function() {
//             _this.isPlaying = !_this.isPlaying
//             if(_this.isPlaying) {
//                 audio.play()
//             } else {
//                 audio.pause()
//             }
//         }

//         // Khi song ???????c play
//         audio.onplay = function() {
//             _this.isPlaying = true;
//             player.classList.add('playing')
//             cdThumbAnimate.play()
//         }
//         // Khi song b??? pause
//         audio.onpause = function() {
//             _this.isPlaying = false;
//             player.classList.remove('playing')
//             cdThumbAnimate.pause()
//         }

//         // Khi ti???n ????? b??i h??t thay ?????i
//         audio.ontimeupdate = function() {
//             if(audio.duration) {
//                 const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
//                 progress.value = progressPercent
//             }
//         }

//         // X??? l?? khi tua song
//         progress.onchange = function(e) {
//             const seekTime = e.target.value / 100 * audio.duration
//             audio.currentTime = seekTime
//         }

//         // X??? l?? khi next song
//         nextBtn.onclick = function() {
//             if(_this.isRandom) {
//                 _this.playRandomSong()
//             } else {
//                 _this.nextSong()
//             }
//             audio.play()
//             _this.render()
//             _this.scrollToActiveSong()
//         }
//         // X??? l?? khi prev song
//         prevBtn.onclick = function() {
//             if(_this.isRandom) {
//                 _this.playRandomSong()
//             } else {
//                 _this.prevSong()
//             }
//             audio.play()
//             _this.render()
//             _this.scrollToActiveSong()
//         }

//         // X??? l?? khi random b???t / t???t
//         randomBtn.onclick = function(e) {
//             _this.isRandom = !_this.isRandom
//             _this.setConfig('isRandom', _this.isRandom)
//             this.classList.toggle('active', _this.isRandom)
//         }

//         // X??? l?? l???p l???i 1 song
//         repeatBtn.onclick = function() {
//             _this.isRepeat = !_this.isRepeat
//             _this.setConfig('isRepeat', _this.isRepeat)
//             this.classList.toggle('active', _this.isRepeat)
//         }

//         // X??? l?? next song khi audio ended
//         audio.onended = function() {
//             if(_this.isRepeat) {
//                 audio.play()
//             } else {
//                 nextBtn.click()
//             }
//         }

//         // L???ng nghe h??nh vi click v??o playlist
//         playlist.onclick = function(e) {
//             const songNode = e.target.closest('.song:not(.active)')
//             if(songNode || e.target.closest('.option')) {
//                 // X??? l?? khi click v??o song
//                 if(songNode) {
//                     _this.currentIndex = Number(songNode.dataset.index)
//                     _this.loadCurrentSong()
//                     _this.render()
//                     audio.play()
//                 }
//                 // X??? l?? khi click v??o song options
//                 if(e.target.closest('.option')) {
//                     console.log('option')
//                 }
//             }

//         }
//     },
//     scrollToActiveSong: function() {
//         setTimeout(() => {
//             $('.song.active').scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'center',
//             })
//         }, 100)
//     },
//     loadCurrentSong: function() {
//         heading.textContent = this.currentSong.name
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
//         audio.src = this.currentSong.path
//     },
//     nextSong: function() {
//         this.currentIndex++
//         if(this.currentIndex >= this.songs.length) {
//             this.currentIndex = 0
//         }
//         this.loadCurrentSong()
//     },
//     prevSong: function() {
//         this.currentIndex--
//         if(this.currentIndex < 0) {
//             this.currentIndex = this.songs.length - 1
//         }
//         this.loadCurrentSong()
//     },
//     playRandomSong: function() {
//         let newIndex
//         do {
//             newIndex = Math.floor(Math.random() * this.songs.length)
//         } while (newIndex === this.currentIndex)
//         this.currentIndex = newIndex
//         this.loadCurrentSong()
//     },
//     start: function() {

//         // ?????nh ngh??a c??c thu???c t??nh cho Object
//         this.defineProperties()

//         // L???ng nghe v?? x??? l?? c??c s??? ki???n
//         this.handleEvents()

//         // T???i th??ng tin b??i h??t ?????u ti??n v??o UI khi ch???y ???ng d???ng
//         this.loadCurrentSong()

//         // Render playlist
//         this.render()
//     }
// };

// app.start() 
 
// ----------------------------------------------------------------
/**
 * 1. Render songs -> ok
 * 2. scroll top -> ok
 * 3. play / pause / seek -> ok
 * 4. CD rotate -> ok
 * 5. next / prev -> ok
 * 6. Random -> ok
 * 7. Next / Repeat when ended -> ok
 * 8. Active song -> ok
 * 9. scroll active song into view -> ok
 * 10. play song when click
 */

 const $ = document.querySelector.bind(document)
 const $$ = document.querySelectorAll.bind(document)
 
 const player = $('.player')
 const playlist = $('.playlist')
 const heading = $('header h2')
 const cdThumb = $('.cd-thumb')
 const audio = $('#audio')
 const cd = $('.cd')
 const playBtn = $('.btn-toggle-play')
 const progress = $('#progress')
 const nextBtn = $('.btn-next')
 const prevBtn = $('.btn-prev')
 const randomBtn = $('.btn-random')
 const repeatBtn = $('.btn-repeat')
 
 const app = {
     currentIndex: 0,
     isPlaying: false,
     isRandom: false,
     isRepeat: false,
     songs: [
         {
             name: '3170-1',
             singer: 'Duong x Nau',
             path: './assets/music/song1.mp3',
             image: './assets/img/music-1.png',
         },
         {
             name: '3170-2',
             singer: 'Duong x Nau',
             path: './assets/music/song2.mp3',
             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
         },
         {
             name: 'Harehare Ya',
             singer: 'Sou',
             path: './assets/music/song3.mp3',
             image: './assets/img/music-1.png',
         },
         {
             name: 'Dream Lantern (English Version)',
             singer: 'RADWIMPS',
             path: 'https://data3.chiasenhac.com/downloads/1762/2/1761749-dfb9f98e/128/Dream%20Lantern%20English%20Version_%20-%20RADWIMP.mp3',
             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
         },
         {
             name: '3170-1',
             singer: 'Duong x Nau',
             path: './assets/music/song1.mp3',
             image: './assets/img/music-1.png',
         },
         {
             name: '3170-2',
             singer: 'Duong x Nau',
             path: './assets/music/song2.mp3',
             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
         },
         {
             name: 'Harehare Ya',
             singer: 'Sou',
             path: './assets/music/song3.mp3',
             image: './assets/img/music-1.png',
         },
         {
             name: 'Dream Lantern (English Version)',
             singer: 'RADWIMPS',
             path: 'https://data3.chiasenhac.com/downloads/1762/2/1761749-dfb9f98e/128/Dream%20Lantern%20English%20Version_%20-%20RADWIMP.mp3',
             image: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg',
         },
     ],
     render: function() {
         const htmls = this.songs.map((song, index) => {
             return `<div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                         <div class="thumb" style="background-image: url('${song.image}')">
                         </div>
                         <div class="body">
                         <h3 class="title">${song.name}</h3>
                         <p class="author">${song.singer}</p>
                         </div>
                         <div class="option">
                         <i class="fas fa-ellipsis-h"></i>
                         </div>
                     </div>`
         })
         playlist.innerHTML = htmls.join('')
     },
     defineProperties: function() {
         Object.defineProperty(this, 'currentSong', {
             get: function() {
                 return this.songs[this.currentIndex]
             }
         })
     },
     handleEvents: function() {
         const _this = this
 
         // X??? l?? CD quay / d???ng
         const cdThumbAnimate = cdThumb.animate([
             { transform: 'rotate(360deg)' }
         ], {
             duration: 10000,
             iteration: Infinity
         })
         cdThumbAnimate.pause()
 
         // X??? l?? scroll top
         const cdWidth = cd.offsetWidth
         document.onscroll = function() {
             const scrollTop = window.scrollY || document.documentElement.scrollTop
             const newCdWidth = cdWidth - scrollTop
             
             cd.style.width =  newCdWidth > 0 ? newCdWidth + 'px' : 0
             cd.style.opacity = newCdWidth / cdWidth
         }
 
         // X??? l?? khi click v??o n??t play
         playBtn.onclick = function() {
             _this.isPlaying = !_this.isPlaying
             if(_this.isPlaying) {
                 audio.play()
             } else {
                 audio.pause()
             }
         }
 
         // X??? l?? khi song ???????c play
         audio.onplay = function() {
             _this.isPlaying = true
             player.classList.add('playing')
             cdThumbAnimate.play()
         }
 
         // X??? l?? khi song pause
         audio.onpause = function() {
             _this.isPlaying = false
             player.classList.remove('playing')
             cdThumbAnimate.pause()
         }
 
         // X??? l?? khi ti???n ????? song thay ?????i
         audio.ontimeupdate = function() {
             if(audio.duration) {
                 const progressPercent = audio.currentTime / audio.duration * 100
                 progress.value = progressPercent
             }
         }
 
         // X??? l?? tua song
         progress.onchange = function(e) {
             const seekTime = e.target.value * audio.duration / 100
             audio.currentTime = seekTime
         }
 
         // X??? l?? khi next song
         nextBtn.onclick = function() {
             if(_this.isRandom) {
                 _this.playRandomSong()
             } else {
                 _this.nextSong()
             }
             audio.play()
             _this.render()
             _this.scrollToActiveSong()
         }
 
         // X??? l?? khi prev song
         prevBtn.onclick = function() {
             if(_this.isRandom) {
                 _this.playRandomSong()
             } else {
                 _this.prevSong()
             }
             audio.play()
             _this.render()
             _this.scrollToActiveSong()
         }
 
         // X??? l?? khi random btn b???t / t???t
         randomBtn.onclick = function() {
             _this.isRandom = !_this.isRandom
             this.classList.toggle('active', _this.isRandom)
         }
 
         // X??? l?? khi repeat btn b???t / t???t
         repeatBtn.onclick = function() {
             _this.isRepeat = !_this.isRepeat
             this.classList.toggle('active', _this.isRepeat)
         }
 
         // X??? l?? khi song ended
         audio.onended = function() {
             if(_this.isRepeat) {
                 this.play()
             } else {
                 nextBtn.click()
             }
         }
         
         // l???ng nghe h??nh vi click v??o playlist 
         playlist.onclick = function(e) {
             const songNode = e.target.closest('.song:not(active)')
             const optionNode = e.target.closest('.option') 
             if(songNode || optionNode) {
                 if(songNode) {
                     _this.currentIndex = Number(songNode.dataset.index)
                     _this.loadCurrentSong()
                     _this.render()
                     audio.play()
                 }
                 if(optionNode) {
                     console.log('option')
                 }
             }
         }
     },
     scrollToActiveSong: function() {
         setTimeout(() => {
             $('.song.active').scrollIntoView({
                 behavior: 'smooth',
                 block: 'center'
             })
         }, 100)
     },
     loadCurrentSong: function() {
         heading.textContent = this.currentSong.name
         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
         audio.src = this.currentSong.path
     },
     nextSong: function() {
         this.currentIndex++
         if(this.currentIndex >= this.songs.length) {
             this.currentIndex = 0
         }
         this.loadCurrentSong()
     },
     prevSong: function() {
         this.currentIndex--
         if(this.currentIndex < 0) {
             this.currentIndex = this.songs.length - 1
         }
         this.loadCurrentSong()
     },
     playRandomSong: function() {
         let newIndex
         do {
             newIndex = Math.floor(Math.random() * this.songs.length)
         } while (newIndex === this.currentIndex)
         this.currentIndex = newIndex
         this.loadCurrentSong()
     },
     start: function() {
         this.defineProperties()
 
         this.handleEvents()
 
         this.loadCurrentSong()
 
         this.render()
     }
 }
 
 app.start()