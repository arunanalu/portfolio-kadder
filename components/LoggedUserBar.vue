<script setup>

  const runtimeConfig = useRuntimeConfig()
  const file = ref(null)
  const fileDescription = ref('')

  const onFileChange = (e) => {
    file.value = e.target.files[0]
  }

  watch(file, (val) => {
    console.log(val)
  })

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
  <div class="border-2 w-[50%] p-4 flex flex-col">
    <p class="self-center justify-self-center">Adicionar imagem</p>
    <div>
      <input @change="onFileChange" type="file" />
    </div>
    <textarea class="text-center" v-model="fileDescription" type="text" placeholder="descrição" />
    <button @click="onFileSend">Enviar</button>
  </div>
</template>