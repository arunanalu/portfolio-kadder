<script setup>

  const runtimeConfig = useRuntimeConfig()
  const { pending, data: { value } } = await useLazyFetch(`${runtimeConfig.public.api}/image/`)

</script>

<template>
  <section 
    class="grid grid-cols-4 gap-6 max-w-[60%] mx-auto"
  >
    <div v-if="pending" class="absolute top-[25%] right-[48%]">carregando...</div>
    <div v-else v-for="image in value" :key="image.key"
      class="w-[100%] aspect-square"
    >
      <ImageItem :image="image" />
    </div>
  </section>
</template>
