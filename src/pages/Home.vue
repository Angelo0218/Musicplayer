<template>
  <div class="container flex flex-col  items-center max-sm:w-full">
    <div class="bg-lightyellow w-128 h-36 mt-11 max-sm:w-full flex flex-row">
      <div class="music-button flex flex-col justify-center items-center w-2/12 gap-2">
        <i class="fa-regular fa-heart text-xl"></i>
        <i class="fa-solid fa-repeat text-xl"></i>
        <i class="fa-solid fa-list text-xl"></i>
      </div>
      <div class="music-img  w-5/12"><img src='https://s.yimg.com/ny/api/res/1.2/MVerAileYIfrd6AbPrEDDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTU4MDtoPTQzOA--/https://media.zenfs.com/ko_KR/News/starnn/20130701111437_51d0e60dbaf77_1.jpg'></div>
      <div class="music-control w-8/12">
        <div class="container mx-auto">
          <div class="flex flex-col items-center py-4">
            <div class="text-gray-500 text-lg font-medium mb-2">歌名</div>
            <div class="text-gray-900 text-sm font-medium mb-4">作者</div>
            
            <div class="pull w-full bg-black h-1 mt-2">
              <div class="push bg-blue-500 h-full"></div>
              <div class="flex justify-between text-gray-500 text-sm mt-2">
                <span>0:12</span>
                <span>3:00</span>
              </div>
            </div>
            <div class="flex justify-center items-center mt-4">
              <button class="bg-transparent rounded-full px-2 py-1 mr-2">
                <i class="fas fa-backward"></i>
              </button>
              <button class="bg-transparent rounded-full px-2 py-1">
                <i class="fas fa-play"></i>
              </button>
              <button class="bg-transparent rounded-full px-2 py-1 ml-2">
                <i class="fas fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-orange-200 w-128 h-full max-sm:w-full pt-6 list">
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
        <img class="h-8 w-8" :src="item.imageURL" :alt="item.title">
        <div class="ml-4">
          <div class="text-gray-900 font-medium">{{ item.title }}</div>
          <div class="text-lightred text-sm">{{ item.album }}</div>
        </div>
        <div class="ml-auto text-right">
          <span class="text-gray-500 text-sm p-4">{{ item.duration }}</span>
        </div>
      </div>
      <div v-for="item in musicList" :key="item.id" class="flex items-center">
        <span class="text-gray-500 text-sm p-6">{{ item.number }}</span>
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
</template>
<script>
import '../index.css';
export default {
  data() {
    return {
      musicList: [
        {
          id: 1,
          number: "01",
          imageURL: "https://s.yimg.com/ny/api/res/1.2/MVerAileYIfrd6AbPrEDDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTU4MDtoPTQzOA--/https://media.zenfs.com/ko_KR/News/starnn/20130701111437_51d0e60dbaf77_1.jpg",
          title: "牛奶麥片",
          album: "專輯名稱",
          duration: "4:23",
        },
        // 添加更多的音樂項目...
      ],
    };
  },
};
</script>
<style scoped>
p,
input,
label,
div {
  font-family: CUBIC;
}

.pash {
  transition: transform 0.3s ease-in-out;
}

.pash.left-0 {
  transform: translateX(-100%);
}

.pash.right-0 {
  transform: translateX(100%);
}
</style>
