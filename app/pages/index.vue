<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Decorative character images -->
    <div class="absolute top-20 left-4 md:left-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/approved.svg" alt="" class="w-32 h-32 character-hover" />
    </div>
    <div class="absolute top-40 right-4 md:right-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/lucky.svg" alt="" class="w-32 h-32 character-hover" />
    </div>
    <div class="absolute bottom-40 left-4 md:left-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/birthday.svg" alt="" class="w-32 h-32 character-hover" />
    </div>
    <div class="absolute bottom-20 right-4 md:right-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/crystal-ball.svg" alt="" class="w-32 h-32 character-hover" />
    </div>

    <div class="text-center mb-16 relative z-10">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-chewy">
        Nouns: The Card Game
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-motley">
        A strategic card game featuring the iconic Nouns characters. Collect points, play action cards, and outsmart your opponents!
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
      <NuxtLink
        to="/about"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">About</h2>
        <p class="text-gray-600 dark:text-gray-400 font-motley">
          Learn about Nouns DAO and the game's development
        </p>
      </NuxtLink>

      <NuxtLink
        to="/rules"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Rules</h2>
        <p class="text-gray-600 dark:text-gray-400 font-motley">
          Understand the game setup and how to play
        </p>
      </NuxtLink>

      <NuxtLink
        to="/cards"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Cards</h2>
        <p class="text-gray-600 dark:text-gray-400 font-motley">
          Explore all the cards and their abilities
        </p>
      </NuxtLink>

      <NuxtLink
        to="/download"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Download</h2>
        <p class="text-gray-600 dark:text-gray-400 font-motley">
          Get your free print-ready PDF
        </p>
      </NuxtLink>
    </div>

    <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center relative z-10">
      <h2 class="text-3xl font-bold mb-4 font-chewy">Ready to Play?</h2>
      <p class="text-xl mb-6 font-motley">Download the game for free and start playing today!</p>
      <NuxtLink
        to="/download"
        class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-chewy"
      >
        Download Now
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.character-hover {
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

.character-hover:hover {
  transform: scale(1.15) translateY(-5px);
  opacity: 0.6 !important;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}
</style>

