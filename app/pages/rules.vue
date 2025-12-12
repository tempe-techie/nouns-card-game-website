<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Decorative character images -->
    <div class="absolute top-10 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/abstained.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute top-32 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden md:block">
      <img src="/img/characters/fork.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-40 left-4 md:-left-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/approved.svg" alt="" class="w-28 h-28 character-hover" />
    </div>
    <div class="absolute bottom-20 right-4 md:-right-8 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
      <img src="/img/characters/birthday.svg" alt="" class="w-28 h-28 character-hover" />
    </div>

    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-chewy relative z-10">Game Rules</h1>

    <section class="mb-12 relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Setup</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Shuffle all cards thoroughly.</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Deal three (3) cards to each player.</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Place the remaining cards face-down in a draw pile in the center.</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Starting Player</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <p class="text-gray-700 dark:text-gray-300 mb-3 font-motley">
          Players decide who goes first. Use any fun criterion, such as:
        </p>
        <ul class="space-y-2 text-gray-700 dark:text-gray-300">
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>"The player with the lowest Noun ID"</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>"The player who most recently published a Nouns proposal"</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>"The player with the funniest laugh"</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>(Or any other creative method!)</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Turn Structure</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <p class="text-gray-700 dark:text-gray-300 mb-4 font-motley">
          <strong class="text-gray-900 dark:text-white font-chewy">On your turn, you may:</strong>
        </p>
        <ul class="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Play one or more action cards (one at a time), or none at all.</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>End your turn by drawing a card from the pile (unless you choose to skip with the ABSTAIN card).</span>
          </li>
        </ul>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mt-4">
          <p class="text-gray-800 dark:text-gray-200 font-semibold mb-2 font-chewy">Important:</p>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li class="flex items-start font-motley">
              <span class="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
              <span>Your turn ends immediately after drawing.</span>
            </li>
            <li class="flex items-start font-motley">
              <span class="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
              <span>Play action cards before drawing (except the REJECTED card, which can be played at any time).</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="relative z-10">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Game End & Winning</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>When the draw pile runs out, play continues until no one can (or wants to) play action cards.</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>If a player discards the Fork card after the draw pile is empty, it's removed from the game.</span>
          </li>
          <li class="flex items-start font-motley">
            <span class="text-green-600 dark:text-green-400 mr-2 font-bold">🏆</span>
            <span><strong class="text-gray-900 dark:text-white font-chewy">Winner:</strong> The player with the most points wins.</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RulesPage'
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

