<script setup>

  const runtimeConfig = useRuntimeConfig()

  const open = useState('modalOpen', () => false)
  let selectedImage = useState('selectedImage', () => null)
  const show = useState('show')

  const deleteLoading = ref(false)

  defineProps({
    image: {
      type: Object,
      required: true
    },
    logged: {
      type: Boolean,
      required: true
    }
  })

  const isLoaded = ref(false)

  const onImgLoad = () => {
    isLoaded.value = true
  }

  const onClick = (image) => {
    show.value = false
    open.value = true
    selectedImage.value = {
      key: image.key,
      description: image.description
    }
  }

  const onImageDelete = (img) => {
    deleteLoading.value = true
    fetch(`${runtimeConfig.public.api}/image/${img.key}`, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    })
    .then(res => res.json())
    .then(res => {
      window.location.href = '/'
    })
    .catch(err => {
      console.log(err)
    })
    deleteLoading.value = false
  }

</script>

<template>

  <a class="cursor-pointer relative" @click="onClick(image)" >
    <div v-if="logged">
      <button class="z-10 absolute w-7 h-7 top-[-10px] right-[-10px] bg-gradient-to-br from-purple-700 to-pink-700 rounded"
          @click.stop="onImageDelete(image)"
        >
          <Icon :class="{'animate-spin': deleteLoading}" name="bi:x-lg" ></Icon>
      </button>
    </div>
    <img
      @load="onImgLoad"
      :src="runtimeConfig.public.api + '/image/' + image.key" alt="ilustração"
      class="select-none w-full h-full object-cover transition ease-in-out hover:transition-all lg:hover:scale-105 duration-200"
      :class="{'invisible': !isLoaded, 'fade-in-small': isLoaded}"
    />
    <div
      :class="{'visible': !isLoaded, 'invisible': isLoaded}" 
      class="animate-pulse absolute top-0 right-0 w-full h-full bg-zinc-700"
    >
    </div>
  </a>
</template>