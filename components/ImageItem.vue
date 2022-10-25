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
      <div 
        class="w-[50%] h-screen p-4 flex flex-col
        items-center justify-start relative
        "
      >
      <button 
        @click="open = false"
        class="absolute top-4 right-4 scale-[2]"
      >
        x
      </button>
        <div class="mt-5" v-click-outside="() => open = false">
          <img 
            :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
            class="max-w-[1000px] max-h-[700px]"
          />
        </div>
        <p class="mt-10">Descrição:</p>
        <p>{{ image.description }}</p>
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