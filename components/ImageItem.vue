<script setup>

  const runtimeConfig = useRuntimeConfig()

  defineProps({
    image: {
      type: Object,
      required: true
    }
  })

</script>

<template>
    <img 
      :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" 
      class="w-full h-full object-cover"
    />
  <!-- <p>{{ image.description }}</p> -->
</template>