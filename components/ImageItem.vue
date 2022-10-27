<script setup>

  const runtimeConfig = useRuntimeConfig()

  const open = ref(false)

  defineProps({
    image: {
      type: Object,
      required: true
    }
  })

</script>

<template>

  <Teleport to="body">
    <div v-if="open"
      class="fixed top-0 bg-zinc-800/90 text-gray-100
      w-screen min-h-screen flex justify-center items-center fade-in
      z-50
      "
    >
    <button 
      class="absolute top-0 right-0 sm:top-5 sm:right-5 md:top-5 md:right-5 xl:top-10 xl:right-20 p-2 rounded-lg bg-gradient-to-br from-purple-700 to-pink-700 "
      @click="open = false"
    >
      FECHAR
    </button>
      <div
        class="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[70%] 2xl:w-[80%] flex flex-col lg:flex-row justify-center "
      >
        <div 
          class="flex justify-center items-center ">
            <img 
              :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
              class="max-w-[100%] max-h-[80vh] "
              v-click-outside="() => open = false"
            />
        </div>
        <div v-if="image.description.length > 0" class="flex justify-center items-center ">
          <div class="h-[180px] md:h-[240px] w-[100%] lg:h-[100%] lg:w-[300px] flex flex-col text-xl shadow-xl
          bg
            "
          >
            <p class="mt-6 sm:mt-10 xl:mt-20 self-center text-base sm:text-lg md:text-xl ">Descrição:</p>
            <p class="mt-1 sm:mt-5 lg:mt-10 w-[100%] h-[100%] p-3 text-center text-base sm:text-lg md:text-xl  ">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <a class="cursor-pointer" @click="open = true" >
    <img 
      :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
      class="w-full h-full object-cover transition ease-in-out hover:transition-all hover:scale-105 duration-200"
    />
  </a>
</template>

<style scoped>
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  .fade-in {
	-webkit-animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .bg {
    background-size: 300% 300%;
    background-image: linear-gradient(
          -45deg, 
          rgb(42, 124, 161) 0%, 
          rgb(69, 88, 183) 25%, 
          rgb(126, 56, 151) 51%, 
          rgb(204, 46, 104) 100%
    );  
    animation: AnimateBG 20s ease infinite;
  }
</style>