<template>
  <main class="w-screen min-h-screen bg-zinc-900 text-gray-100 pb-10">
  <Header />
    <slot />
  </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap');

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes AnimateBG { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  .fade-in {
	-webkit-animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .fade-in-small {
	-webkit-animation: fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .bg {
    background-size: 300% 300%;
    background-image: linear-gradient(
          -45deg, 
          rgb(42, 124, 161) 0%, 
          rgb(69, 88, 183) 25%, 
          rgb(126, 56, 151) 51%, 
          rgb(204, 46, 104) 100%
    );  
    animation: AnimateBG 20s ease infinite;
  }
</style>