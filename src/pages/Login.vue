<template>

    <div class="flex items-center justify-center w-123 h-full max-sm: home max-sm:w-full" :class="{ 'mobile': isMobile }">
        <div class="container max-sm:w-full w-auto shadow-2xl flex flex-col rounded-l-md max-sm:rounded-none sm:flex-row">
            <div class="right flex-none w-full sm:w-2/3 rounded-l-md max-sm:rounded-none">
                <video class="w-full h-full max-sm:h-44 rounded-l-md max-sm:rounded-none bg-orange-200" autoplay loop muted
                    playsinline>
                    <source src="../assets/video/movie1.mp4" type="video/mp4">
                </video>
            </div>
            <div class="left bg-orange-200 flex-none sm:w-1/3 rounded-r-md max-sm:rounded-none pt-20 max-sm:pt-0">
                <div class="w-full md:mt-0 sm:max-w-md xl:p-0 bg-orange-200">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p class="text-3xl font-black leading-tight tracking-tight text-gray-900">
                            MusicPlayer
                        </p>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                                帳號
                            </label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">密碼</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-blue-500">記住我</label>
                                </div>
                            </div>
                        </div>
                        <input type="submit"
                            class="btn w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            value="Login">
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
  
<script >
import '../index.css';

export default {
    data() {
        return {
         
        };
    },
    mounted() {
     
    },
};
</script>

  
<style >
body{
    overflow:hidden
}
.home{
    margin:0 auto ;
}

video {
    object-fit: cover;
}

.btn {
    background: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
}

.btn:hover {
    background: linear-gradient(to left, #ed6ea0 0%, #ec8c69 100%);
    color: #fff;
    transition: transform 0.3s ease-in-out;
}

p,
input,
label {
    font-family: CUBIC;
}

/* .overlay {
    position: fixed;
    top: -25px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
} */

/* .overlay-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
} */

@media (min-width: 768px) {
    .home {

        padding-top: 8vh;
        /* 根据需要进行调整 */
        padding-bottom: 100px;
        /* 根据需要进行调整 */
    }
}

.mobile {
    /* 手机设备下移样式 */
    margin-top: 50px;
    /* 根据需要调整下移的距离 */
}
</style>
  