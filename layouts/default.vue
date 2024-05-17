<template>
  <div class="flex justify-center items-center h-screen bg-blue-600 bg-[url('https://gartic.io/static/images/new/textura.png')]">
    <div class="flex flex-col justify-center h-screen w-[1050px]">
      <header class="text-center text-white p-4">
        Coreeple Scrum Poker
      </header>
      <section class="flex-1 bg-white rounded-2xl shadow-md p-8 max-h-[700px] min-h-[700px]">
        <slot />
      </section>
      <footer class="py-4 text-white">
        Coreeple Scrum Poker
      </footer>
    </div>
  </div>
</template>