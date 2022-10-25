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
      class="fixed top-0 bg-zinc-900/90 text-gray-100
      w-screen min-h-screen flex justify-center items-center 
      "
    >
    <button 
      class="absolute top-10 right-20 p-2 rounded-lg bg-gradient-to-br from-purple-700 to-pink-700"
      @click="open = false"
    >
      FECHAR
    </button>
      <div 
        class="w-[80%] h-[50.0rem] flex"
      >
        <div :class="{'w-[100%]': image.description.length == 0, 'w-[70%]': image.description.length > 0 }" 
          class="flex justify-center items-center">
            <img 
              :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
              class="max-w-[100%] max-h-[100%] rounded-lg "
              v-click-outside="() => open = false"
            />
        </div>
        <div v-if="image.description.length > 0" class="w-[30%] flex justify-center items-center">
          <div class="w-[70%] h-[70%] rounded-lg flex flex-col text-xl shadow-xl
            bg-gradient-to-br from-purple-700 to-pink-700
            "
          >
            <p class="mt-20 self-center">Descrição:</p>
            <p class="mt-10 w-[100%] h-[100%] p-3 text-center ">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <a class="cursor-pointer" @click="open = true" >
    <img 
      :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
      class="w-full h-full object-cover"
    />
  </a>
</template>