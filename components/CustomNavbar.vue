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
    <ul class="flex flex-row gap-x-12 sm:gap-x-20"
    >
      <li class="flex flex-col items-center" v-for="link in links" :key="link.name">
        <NuxtLink 
          class="menulink text-sm sm:text-xl font-semibold text-gray-500 
          hover:text-gray-100"
          :class="{
            'text-gray-100': route.path === link.href
          }" 
          :to="link.href"
        >
          {{ link.name }}
        </NuxtLink>
        <div class="mt-1 w-16 sm:w-20 h-1 rounded-lg bg-gradient-to-br from-purple-700 to-pink-700" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .menulink {
    transition: all 0.2s ease-in-out;
    font-family: 'Crimson Text', serif;
  }
</style>