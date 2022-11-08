<script setup>

  const runtimeConfig = useRuntimeConfig()
  const { pending, data: { value } } = await useLazyFetch(`${runtimeConfig.public.api}/image/`)
  const show = useState('show', () => true)

  const userLogged = ref(false)
  const file = ref(null)
  const fileDescription = ref('')

  onMounted(() => {
    if (localStorage.getItem('token')) {
      userLogged.value = true
    }
  })

  watch(file, (val) => {
    console.log(val)
  })

  const onFileChange = (e) => {
    file.value = e.target.files[0]
  }

  const onFileSend = () => {
    const formData = new FormData()
    formData.append('image', file.value)
    formData.append('description', fileDescription.value)
    fetch(`${runtimeConfig.public.api}/image`, {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      window.location.href = '/'
    })
    .catch(err => {
      console.log(err)
    })
  }

</script>

<template>
  <div class="max-w-[80%] md:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%] mx-auto">
    <div class="border-2 flex flex-row justify-center mb-10" v-if="userLogged">
      <div class="border-2 w-[50%] p-4 flex flex-col">
        <p class="self-center justify-self-center">Adicionar imagem</p>
        <div>
          <input @change="onFileChange" type="file" />
        </div>
        <textarea class="text-center" v-model="fileDescription" type="text" placeholder="descrição" />
        <button @click="onFileSend">Enviar</button>
      </div>
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
