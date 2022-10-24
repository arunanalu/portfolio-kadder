<script setup>

const links = ref(
  [
    { name: 'PORTFOLIO', href: '/' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'COMISSÕES', href: '/comissoes' },
  ]
)

const route = useRoute()

</script>

<template>
  <nav>
    <ul class="flex flex-row gap-x-20"
    >
      <li v-for="link in links" :key="link.name">
        <NuxtLink 
          class="menulink text-xl font-semibold text-gray-600 
          hover:text-gray-900"
          :class="{
            'text-gray-900': route.path === link.href
          }" 
          :to="link.href"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
  .menulink {
    transition: all 0.2s ease-in-out;
    font-family: 'Crimson Text', serif;
  }
</style>