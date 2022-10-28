<script setup>

  const runtimeConfig = useRuntimeConfig()

  const open = useState('modalOpen', () => false)
  let selectedImage = useState('selectedImage', () => null)

  defineProps({
    image: {
      type: Object,
      required: true
    }
  })

  const isLoaded = ref(false)

  const onImgLoad = () => {
    console.log('loaded')
    isLoaded.value = true
  }

  const onClick = (image) => {
    open.value = true
    selectedImage.value = {
      key: image.key,
      description: image.description
    }
  }

</script>

<template>

  <a class="cursor-pointer relative" @click="onClick(image)" >
    <img
      @load="onImgLoad"
      :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração"
      class="w-full h-full object-cover transition ease-in-out hover:transition-all hover:scale-105 duration-200"
      :class="{'invisible': !isLoaded, 'fade-in-small': isLoaded}"
    />
    <div
      :class="{'visible': !isLoaded, 'invisible': isLoaded}" 
      class="animate-pulse absolute top-0 right-0 w-full h-full bg-zinc-700"
    >
    </div>
  </a>
</template>