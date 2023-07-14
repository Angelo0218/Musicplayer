<template>
  <div class="flex h-screen ">
    <Nav />
    <!-- 音樂主頁 -->
    <div class="flex flex-col items-center max-sm:w-full flex-grow pb-8 rounded ">
      <div class="bg-lightyellow w-128 h-36 mt-11 max-lg:w-full flex flex-row  ">
        <div class="music-button flex flex-col justify-center items-center w-24 gap-2 ">
          <i class="fa-regular fa-heart text-xl"></i>
          <i class="fa-solid fa-repeat text-xl"></i>
          <i class="fa-solid fa-list text-xl"></i>
        </div>

        <div class="music-control w-10/12 ml-10 pr-10 ">
          <div class="container mx-auto">
            <div class="flex flex-col items-center py-4">
              <div class="text-gray-500 text-lg font-medium mb-2">{{ currentSong.title }}</div>
              <div class="text-gray-900 text-sm font-medium mb-4">{{ currentSong.artist }}</div>

              <!-- 拉動條 -->
              <div class="pull w-full bg-black h-1 mt-2 relative" ref="progress" @mousedown="handleSliderClick">
                <div class="push bg-blue-500 h-full" :style="{ width: progressBarWidth + '%' }"></div>
                <div class="slider-handle" :style="{ left: progressBarWidth + '%' }" @mousedown="startDrag"
                  @touchstart="startDrag"></div>
                <div class="flex justify-between text-gray-500 text-sm mt-2">
                  <!-- 音樂時間 -->
                  <span>{{ formatTime(currentTime) }}</span>
                  <span>{{ formatTime(duration) }}</span>
                </div>
              </div>
              <div class="flex justify-center items-center mt-4 ml-2 pt-1">
                <!-- 上一首 -->
                <span class="bg-transparent rounded-full px-2 py-1 mr-2" @click="playPreviousSong">
                  <i class="fas fa-backward"></i>
                </span>

                <!-- 播放和暫停 -->
                <span class="bg-transparent rounded-full px-2 py-1 p-2" @click="togglePlay">
                  <span class="icon" v-if="!isPlaying" @click="play">
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </span>
                  <span class="icon" v-if="isPlaying" @click="pause">
                    <i class="fa fa-pause" aria-hidden="true"></i>
                  </span>
                </span>


                <!-- 下一首 -->
                <span class="bg-transparent rounded-full px-2 py-1 ml-2" @click="playNextSong">
                  <i class="fas fa-forward"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 音樂列表 -->
      <div class="bg-orange-200 w-128 h-128  max-lg:w-full max-sm:h-full pt-6 list overflow-y-auto">
        <div v-for="(item, index) in musicList" :key="item.id" class="flex items-center" @click="playMusic(item)">
          <span class="text-gray-500 text-sm p-6">{{ getNextNumber(index) }}</span>
          <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
          <div class="ml-4">
            <div class="text-gray-900 font-medium">{{ item.title }}</div>
            <div class="text-lightred text-sm">{{ item.album }}</div>
          </div>
          <div class="ml-auto text-right">
            <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import '../index.css';
import Nav from './Nav.vue';

export default {
  components: {
    Nav
  },
  data() {
    return {
      isPlaying: false,
      currentSong: {
        title: ""
      },
      audioPlayer: null,
      progressBarWidth: 0,
      musicList: [
        {
          imageURL: "../src/assets/la.jpg",
          title: "戶裡頭",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/戶裡頭.mp3"

        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "牛奶麥片",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/牛奶麥片.mp3"
        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "龍岡魂",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/龍岡魂.mp3"
        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "我們先放輕鬆",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/我們先放輕鬆.mp3"
        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "特寫你",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/特寫你.mp3"
        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "愛吃雞脖人",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/愛吃雞脖人.mp3"
        },
        {
          imageURL: "../src/assets/la.jpg",
          title: "打鬼隊",
          number: "",
          album: "",
          artist: "廖偉盛",
          duration: "",
          url: "../src/assets/music/打鬼隊.mp3"
        },
      ],
      nextNumber: 1,
      startX: 0,
      isDragging: false,
      currentTime: 0,
      duration: 0,
    };
  },
  computed: {
    getNextNumber() {
      return (index) => {
        const number = (index + 1).toString().padStart(2, '0');
        return number;
      };
    },
    isPaused() {
      return this.audioPlayer && this.audioPlayer.paused;
    },
  },

  mounted() {
    this.musicList.forEach((song) => {
      const audioPlayer = new Audio(song.url);
      audioPlayer.addEventListener('loadedmetadata', () => {
        song.duration = this.formatTime(audioPlayer.duration);
      });
    });
    if (this.audioPlayer && !this.audioPlayer.paused) {
      this.isPlaying = true;
    }
  },


  methods: {
    togglePlay() {
      if (this.audioPlayer) {
        if (this.audioPlayer.paused) {
          this.audioPlayer.play();
        } else {
          this.audioPlayer.pause();
        }
        this.isPlaying = !this.audioPlayer.paused;
      }
    },

    playMusic(song) {
      if (this.audioPlayer) {
        this.audioPlayer.pause();
      }

      if (this.currentSong === song && this.isPlaying) {
        // 点击当前正在播放的歌曲，则切换播放状态
        this.togglePlay();
      } else {
        // 切换到新的歌曲播放
        this.currentSong = song;
        const audioPlayer = new Audio(this.currentSong.url);
        audioPlayer.addEventListener('loadedmetadata', () => {
          song.duration = this.formatTime(audioPlayer.duration);
        });
        audioPlayer.addEventListener('timeupdate', this.updateProgress);
        audioPlayer.addEventListener('ended', this.playNextSong);
        song.number = this.getNextNumber(this.musicList.indexOf(song));
        audioPlayer.play();
        this.audioPlayer = audioPlayer;
        this.isPlaying = true;
      }
    },


    playNextSong() {
      const currentIndex = this.musicList.findIndex(item => item === this.currentSong);
      const nextIndex = (currentIndex + 1) % this.musicList.length;
      const nextSong = this.musicList[nextIndex];
      this.playMusic(nextSong);
    },
    playPreviousSong() {
      const currentIndex = this.musicList.findIndex(item => item === this.currentSong);
      let previousIndex = currentIndex - 1;
      if (previousIndex < 0) {
        previousIndex = this.musicList.length - 1;
      }
      const previousSong = this.musicList[previousIndex];
      this.playMusic(previousSong);
    },
    updateProgress() {
      const audioPlayer = this.audioPlayer;
      this.currentTime = audioPlayer.currentTime;
      this.duration = audioPlayer.duration;
      this.progressBarWidth = (this.currentTime / this.duration) * 100;
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    },
    startDrag(event) {
      event.preventDefault();
      this.isDragging = true;
      this.startX = event.clientX || event.touches[0].clientX;
    },
    handleDrag(event) {
      if (this.isDragging) {
        event.preventDefault();
        const currentX = event.clientX || event.touches[0].clientX;
        const progressContainerWidth = this.$refs.progress.offsetWidth;
        const progressBarWidth = Math.max(0, Math.min((currentX - this.startX) / progressContainerWidth * 100, 100));
        this.progressBarWidth = progressBarWidth;
        const seekTime = (progressBarWidth / 100) * this.duration;
        this.audioPlayer.currentTime = seekTime;
      }
    },
    endDrag() {
      this.isDragging = false;
    },
    handleSliderClick(event) {
      const progressContainerWidth = this.$refs.progress.offsetWidth;
      const clickX = event.clientX - this.$refs.progress.getBoundingClientRect().left;
      const progressBarWidth = Math.max(0, Math.min((clickX / progressContainerWidth) * 100, 100));
      this.progressBarWidth = progressBarWidth;
      const seekTime = (progressBarWidth / 100) * this.duration;
      this.audioPlayer.currentTime = seekTime;
    },
  },
};
</script>

<style scoped>
p,
input,
label,
div {
  font-family: CUBIC;
  user-select: none;
}

.pull {
  position: relative;
  cursor: pointer;
}

.push {
  position: absolute;
  top: 0;
  left: 0;
}

.slider-handle {
  position: absolute;
  top: -8px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: translateX(-50%);
}
</style>
