<script setup>

const runtimeConfig = useRuntimeConfig()
const open = useState('modalOpen')
let selectedImage = useState('selectedImage')

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

</script>

<template>
  <Teleport to="body">
    <div v-if="open"
      class="fixed top-0 bg-zinc-900 text-gray-100
      w-screen min-h-screen flex justify-center items-center fade-in
      z-50
      "
    >
    <button 
      class="z-50 text-sm sm:text-lg md:text-xl absolute top-14 right-8 sm:top-10 sm:right-8 md:top-8 md:right-8 xl:top-10 xl:right-20 p-2 rounded-lg bg-zinc-800 "
      @click="open = false"
    >
      FECHAR
    </button>
    <div 
      class="absolute flex justify-center items-center left-0 h-screen w-[8%] md:w-[10%] xl:w-[15%] "
      @click.stop="previousImage(data, selectedImage.key)"
    >
      <button 
        class="w-8 h-8 md:w-10 md:h-10 bg-gray-100 arrow"
        >
      </button>
    </div>
    <div 
      class="absolute flex justify-center items-center right-0 h-screen w-[8%] md:w-[10%] xl:w-[15%] z-0"
      @click.stop="nextImage(data, selectedImage.key)"
    >
      <button 
        class="w-8 h-8 md:w-10 md:h-10 bg-gray-100 bg-gray-100 arrow rotate-180"
        >
        next
      </button>
    </div>
      <div
        class="w-[75%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] 2xl:w-[80%] flex flex-col lg:flex-row justify-center "
      >
        <div 
          class="flex justify-center items-center ">
            <img 
              :src="runtimeConfig.public.api + '/image/' + selectedImage.key" alt="ilustração" 
              class="max-w-[100%] max-h-[80vh]"
              rel="preload"
              v-click-outside="() => open = false"
              />
        </div>
        <div v-if="selectedImage.description.length > 0" class="flex justify-center items-center ">
          <div class="h-[130px] md:h-[180px] w-[100%] lg:h-[100%] lg:w-[300px] flex flex-col text-xl 
            bg-zinc-800"
          >
            <p class="mt-1 sm:mt-5 lg:mt-10 w-[100%] h-[100%] p-3 text-center text-base sm:text-lg md:text-xl  ">{{ selectedImage.description }}</p>
          </div>
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