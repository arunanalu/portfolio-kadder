<script setup>

  const runtimeConfig = useRuntimeConfig()
  const open = useState('modalOpen')
  let selectedImage = useState('selectedImage')
  const show = useState('show')
  const descriptionOpen = ref(false)
  const arrayClosed = ref(['O', 'P', 'E', 'N'])
  const arrayOpened = ref(['C', 'L', 'O', 'S', 'E'])

  defineProps({
    data: Array,
  })

  const previousImage = (data, key) => {
    const index = data.findIndex((image) => image.key === key)
    if (index === 0) {
      selectedImage.value = data[data.length - 1]
    } else {
      selectedImage.value = data[index - 1]
    }
  }

  const nextImage = (data, key) => {
    const index = data.findIndex((image) => image.key === key)
    if (index === data.length - 1) {
      selectedImage.value = data[0]
    } else {
      selectedImage.value = data[index + 1]
    }
  }

  const isLoaded = ref(false)

  const onImgLoad = () => {
    isLoaded.value = true
  }

</script>

<template>
  <Teleport to="body">
    <div v-if="open"
      class="fixed top-0 bg-zinc-900 text-gray-100
      w-screen min-h-screen flex justify-center items-center fade-in
      z-50
      "
    >
    <div 
      class="z-0 cursor-pointer absolute flex justify-center items-center left-0 h-screen w-[8%] md:w-[10%] xl:w-[15%] "
      @click.stop="previousImage(data, selectedImage.key)"
    >
      <button 
        class="w-8 h-8 md:w-10 md:h-10 bg-gray-100 arrow select-none"
        >
      </button>
    </div>
    <div 
      class="z-0 cursor-pointer absolute flex justify-center items-center right-0 h-screen w-[8%] md:w-[10%] xl:w-[15%] z-0"
      @click.stop="nextImage(data, selectedImage.key)"
    >
      <button 
        class="w-8 h-8 md:w-10 md:h-10 bg-gray-100 bg-gray-100 arrow rotate-180 select-none"
        >
      </button>
    </div>
      <div
        class="w-[75%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] 2xl:w-[80%] flex flex-col-reverse lg:flex-row justify-center "
        v-click-outside="() => {
          open = false
          show = true
        }"
      >
        <div v-if="selectedImage.description.length > 0" class="flex justify-center items-center flex-col-reverse lg:flex-row ">
          <div @click.stop="descriptionOpen = !descriptionOpen" class="cursor-pointer z-10 h-[40px] sm:h-[50px] w-[100%] lg:h-[100%] lg:w-[50px] flex flex-col items-center justify-center text-xl
            bg-zinc-600"
          >
            <div v-if="!descriptionOpen" class="z-50 flex flex-row lg:flex-col items-center justify-center text-sm sm:text-xl">
              <div v-for="letter in arrayClosed" :key="letter"><p class="select-none">{{ letter }}</p></div>
            </div>
            <div v-if="descriptionOpen" class="z-50 flex flex-row lg:flex-col items-center justify-center text-sm sm:text-xl">
              <div v-for="letter in arrayOpened" :key="letter"><p class="select-none">{{ letter }}</p></div>
            </div>
          </div>
          <div class="h-[180px] w-[100%] lg:h-[100%] lg:w-[300px] flex flex-col text-xl 
            bg-zinc-700 transition-all"
            :class="{'lg:mr-[-300px] lg:mt-0 mt-[-180px]': !descriptionOpen, 'lg:mr-0 mt-0': descriptionOpen}"
            >
            <p class="mt-1 sm:mt-5 lg:mt-10 w-[100%] h-[100%] p-3 text-center text-base sm:text-lg md:text-xl select-none">{{ selectedImage.description }}</p>
          </div>
      </div>
      <div 
        class="relative flex justify-center items-center ">
        <button class="z-10 absolute w-8 h-8 top-[-10px] right-[-10px] bg-gradient-to-br from-purple-700 to-pink-700 rounded"
          @click="open = false, show = true"
        >
          <!-- https://icones.js.org/collection/bi?s=x -->
          <Icon name="bi:x-lg" ></Icon>
        </button>
        <img 
          @load="onImgLoad"
          :src="runtimeConfig.public.api + '/image/' + selectedImage.key" alt="ilustração" 
          class="max-w-[100%] max-h-[80vh] select-none"
          rel="preload"
          :class="{'invisible': !isLoaded}"
          />
          <div
            :class="{'visible': !isLoaded, 'invisible': isLoaded}" 
            class="z-0 animate-pulse absolute top-0 right-0 w-full h-full bg-zinc-700"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

.arrow {
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 80% 100%, 57% 49%, 80% 0);
}

</style>