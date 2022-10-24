<script setup>

  const runtimeConfig = useRuntimeConfig()
  const { pending, data: { value } } = await useLazyFetch(`${runtimeConfig.public.api}/image/`)

</script>

<template>
  <section>
    <h4>pagina inicial</h4>
    <div v-if="pending">carregando...</div>
    <div v-else>
      <div v-for="image in value" :key="image.key" >
        <p>{{ image.description }}</p>
        <img :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração" />
      </div>
    </div>
  </section>
</template>
