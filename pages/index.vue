<script setup>

  const runtimeConfig = useRuntimeConfig()
  const { pending, data: { value } } = await useLazyFetch(`${runtimeConfig.public.api}/image/`)
  const show = useState('show', () => true)

  const userLogged = ref(false)

  onMounted(() => {
    if (localStorage.getItem('token')) {
      userLogged.value = true
    }
  })

</script>

<template>
  <div class="max-w-[80%] md:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%] mx-auto">
    <div class="border-2 flex flex-row justify-center mb-10" v-if="userLogged">
      <LoggedUserBar />
    </div>
    <section 
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
    >
      <div v-if="pending" class="absolute top-[25%] right-[48%]">carregando...</div>
      <div v-else v-for="image in value" :key="image.key"
        class="w-[100%] aspect-square"
        :class="{'invisible': !show, 'visible': show}"
      >
        <ImageItem :logged="userLogged" :image="image" />
      </div>
      <ImagesModal :data="value" />
    </section>
  </div>
</template>
