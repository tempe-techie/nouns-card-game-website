<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Decorative character images -->
    <div class="absolute top-10 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/rejected.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute top-32 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/shuffle.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-40 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/thief.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-20 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/trash.svg" alt="" class="w-28 h-28 character-hover" />
    </div>

    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-chewy relative z-10">About</h1>

    <section class="mb-12 relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">About Nouns</h2>
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-gray-700 dark:text-gray-300 mb-4 font-motley">
          Nouns is an infinite work of art (one Noun, everyday, forever) and community-owned brand that makes a positive impact by funding ideas and fostering collaboration. From collectors and technologists, to non-profits and brands, Nouns is for everyone.
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4 font-motley">
          Nouns DAO is a decentralized autonomous organization on the Ethereum blockchain. Each day, a unique Noun is generated and auctioned, with proceeds funding various community-driven projects. Members of the DAO, who own Nouns, participate in governance and decision-making processes that shape the future of the Nouns ecosystem.
        </p>
        <p class="text-gray-700 dark:text-gray-300 font-motley">
          The Nouns project represents a new model for community ownership and creative collaboration, where the value generated through daily auctions supports innovative ideas and initiatives that benefit the broader community.
        </p>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">About the Game</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <p class="text-gray-700 dark:text-gray-300 mb-4 font-motley">
          <strong class="text-gray-900 dark:text-white font-chewy">Nouns: The Card Game</strong> was developed by <strong class="text-gray-900 dark:text-white font-chewy">TempeTechie.eth</strong>, who created the game rules, gameplay mechanics, and chose characters for each card. The game brings the iconic Nouns characters to life in an engaging card game format that combines strategy, luck, and social interaction.
        </p>
        <p class="text-gray-700 dark:text-gray-300 font-motley">
          TempeTechie.eth works with various designers to create multiple editions of the game, each featuring unique artistic interpretations of the Nouns characters. The first designer to collaborate on the project is <strong class="text-gray-900 dark:text-white font-chewy">deguma.eth</strong>, who created the character illustrations for the Deguma Edition in his own distinctive style.
        </p>
      </div>
    </section>

    <section class="relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Credits</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Game Development</h3>
            <p class="text-gray-700 dark:text-gray-300 font-motley">TempeTechie.eth</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 font-motley">Game rules, gameplay design, and character selection</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Deguma Edition</h3>
            <p class="text-gray-700 dark:text-gray-300 font-motley">deguma.eth</p>
            <p class="text-sm text-gray-600 dark:text-gray-400 font-motley">Character illustrations and design</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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

