<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Decorative character images -->
    <div class="absolute top-10 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/crystal-ball.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute top-32 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/lucky.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-40 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/shuffle.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-20 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/trash.svg" alt="" class="w-28 h-28 character-hover" />
    </div>

    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-chewy relative z-10">Download</h1>

    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-12 relative z-10">
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 font-motley">
        Anyone can download the print-ready PDF of the card game for free. The recommended place to print the cards is 
        <a href="https://www.printninja.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">PrintNinja</a>, 
        but people are free to take them to their local printer too.
      </p>
    </div>

    <div class="relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6 font-chewy">Editions</h2>
      <div class="space-y-8">
        <div
          v-for="edition in editions"
          :key="edition.name"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
        >
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-chewy">{{ edition.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 font-motley">{{ edition.description }}</p>
            </div>
            <a
              :href="edition.downloadLink"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 md:mt-0 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-chewy"
            >
              Download PDF
            </a>
          </div>
          <div v-if="edition.designer" class="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p class="text-sm text-gray-600 dark:text-gray-400 font-motley">
              <span class="font-semibold font-chewy">Designer:</span> {{ edition.designer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadPage',
  data() {
    return {
      editions: [
        {
          name: 'Deguma Edition',
          description: 'The first edition of Nouns: The Card Game, featuring character illustrations by deguma.eth in his distinctive style.',
          designer: 'deguma.eth',
          downloadLink: '#' // Placeholder - will be updated with actual PDF link
        }
      ]
    }
  }
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

