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

    loading.value = true

    // trocar por fetch
    const { data, error } = await useFetch(`${runtimeConfig.public.api}/login`, {
      method: 'POST',
      body: JSON.stringify(requestjson)
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
      console.log('erro')
    }

  }

</script>

<template>
  <section>
    <form @submit.prevent="submit">
      <label for="usrName">Nome</label>
      <input class="text-black" type="text" id="usrName" v-model="usrName" />
      <label for="password">Senha</label>
      <input class="text-black" type="password" id="password" v-model="password" />
      <button type="submit">Entrar</button>
    </form>
    <div v-if="loading">
      carregando...
    </div>
    <div v-if="errorMsg">
      Usuário ou senha incorretos
    </div>
  </section>
</template>