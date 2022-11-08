<script setup>
  const runtimeConfig = useRuntimeConfig()

  const usrName = ref('')
  const password = ref('')
  const loading = ref(false)
  const errorMsg = ref(false)

  const submit = async () => {
    const requestjson = {
      name: usrName.value,
      password: password.value
    }

    errorMsg.value = false
    loading.value = true

    const { data, error } = await useFetch(() => `${runtimeConfig.public.api}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestjson),
      initialCache: false
    })

    loading.value = false

    if (!error.value) {
      errorMsg.value = false
      localStorage.setItem('token', data.value.token)
      localStorage.setItem('name', data.value.name)
      localStorage.setItem('id', data.value.id)
      window.location.href = '/'
    } else {
      usrName.value = ''
      password.value = ''
      errorMsg.value = true
    }

  }

</script>

<template>
  <section class="flex flex-col items-center">
    <form
      class="mt-20 border-2 border-fuchsia-700 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] m-auto flex flex-col items-center gap-4 pt-4 rounded" 
      @submit.prevent="submit"
    >
      <div class="flex flex-col items-center w-full">
        <!-- <label for="usrName">Nome</label> -->
        <input placeholder="NOME" class="h-8 bg-zinc-300 text-center mt-2 rounded w-[80%] text-black" type="text" id="usrName" v-model="usrName" />
      </div>
      <div class="flex flex-col items-center w-full">
        <!-- <label for="password">Senha</label> -->
        <input placeholder="SENHA" class="h-8 bg-zinc-300 text-center mt-2 rounded w-[80%] text-black" type="password" id="password" v-model="password" />
      </div>
      <button 
        class="mt-4 w-[100%] h-10 bg-fuchsia-700"
        type="submit"
      >
        Entrar
      </button>
    </form>
    <div 
      v-if="loading"
      class="mt-8 rounded-full w-5 h-5 bg-fuchsia-700 animate-bounce"
    >
    </div>
    <div 
      v-if="errorMsg"
      class="mt-5"
    >
      Usuário ou senha incorretos
    </div>
  </section>
</template>