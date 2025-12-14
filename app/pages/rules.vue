<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Animated background characters -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-20 left-8 animate-float-slow">
        <img src="/img/characters/abstained.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute top-40 right-8 animate-float-medium-reverse">
        <img src="/img/characters/fork.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-40 left-12 animate-float-slow-reverse">
        <img src="/img/characters/approved.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-20 right-12 animate-float-medium">
        <img src="/img/characters/birthday.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
    </div>

    <div class="text-center mb-12 relative z-10">
      <div class="inline-block mb-6">
        <div class="relative">
          <img src="/img/characters/rejected.svg" alt="Rules" class="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl animate-bounce-slow" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-chewy bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Game Rules
      </h1>
    </div>

    <section class="mb-12 relative z-10">
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">SETUP</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start text-lg">
              <img src="/img/characters/shuffle.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>Shuffle all cards thoroughly.</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/approved.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>Deal three (3) cards to each player.</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/crystal-ball.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>Place the remaining cards face-down in a draw pile in the center.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">STARTING PLAYER</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            Players decide who goes first. Use any fun criterion, such as:
          </p>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start text-lg">
              <img src="/img/characters/birthday.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>"The player with the lowest Noun ID"</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/approved.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>"The player who most recently published a Nouns proposal"</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/lucky.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>"The player with the funniest laugh"</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/abstained.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>(Or any other creative method!)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">TURN STRUCTURE</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            <strong class="text-gray-900 dark:text-white font-chewy">On your turn, you may:</strong>
          </p>
          <ul class="space-y-4 text-gray-700 dark:text-gray-300 mb-4">
            <li class="flex items-start text-lg">
              <img src="/img/characters/approved.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>Play one or more action cards (one at a time), or none at all.</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/trash.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>End your turn by drawing a card from the pile (unless you choose to skip with the ABSTAIN card).</span>
            </li>
          </ul>
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-400 p-5 mt-4 rounded-r-lg shadow-sm">
            <div class="flex items-start gap-3 mb-3">
              <img src="/img/characters/rejected.svg" alt="Important" class="w-8 h-8 flex-shrink-0" />
              <p class="text-gray-800 dark:text-gray-200 font-semibold font-chewy text-lg">Important:</p>
            </div>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start">
                <span class="text-yellow-600 dark:text-yellow-400 mr-2 font-bold">•</span>
                <span>Your turn ends immediately after drawing.</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 dark:text-yellow-400 mr-2 font-bold">•</span>
                <span>Play action cards before drawing (except the REJECTED card, which can be played at any time).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10">
      <div class="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-pink-200 dark:border-pink-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">GAME END & WINNING</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start text-lg">
              <img src="/img/characters/shuffle.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>When the draw pile runs out, play continues until no one can (or wants to) play action cards.</span>
            </li>
            <li class="flex items-start text-lg">
              <img src="/img/characters/fork.svg" alt="" class="w-8 h-8 mr-3 flex-shrink-0" />
              <span>If a player discards the Fork card after the draw pile is empty, it's removed from the game.</span>
            </li>
            <li class="flex items-start text-lg bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <img src="/img/characters/birthday.svg" alt="Winner" class="w-10 h-10 mr-3 flex-shrink-0" />
              <span><strong class="text-gray-900 dark:text-white font-chewy">Winner:</strong> The player with the most points wins.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()

// Get the base URL dynamically from the current request
const requestURL = useRequestURL()
const baseUrl = requestURL.origin

useHead({
  title: 'Game Rules | Nouns: The Card Game',
  meta: [
    { name: 'description', content: 'Learn how to play Nouns: The Card Game. Complete rules including setup, turn structure, action cards, and how to win. Free and fun card game featuring Nouns characters.' },
    { property: 'og:title', content: 'Game Rules | Nouns: The Card Game' },
    { property: 'og:description', content: 'Learn how to play Nouns: The Card Game. Complete rules including setup, turn structure, action cards, and how to win. Free and fun card game featuring Nouns characters.' },
    { property: 'og:url', content: `${baseUrl}${route.path}` },
    { property: 'og:image', content: `${baseUrl}/img/preview-fb.jpg` },
    { name: 'twitter:title', content: 'Game Rules | Nouns: The Card Game' },
    { name: 'twitter:description', content: 'Learn how to play Nouns: The Card Game. Complete rules including setup, turn structure, action cards, and how to win. Free and fun card game featuring Nouns characters.' },
    { name: 'twitter:image', content: `${baseUrl}/img/preview.jpg` }
  ]
})
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(-5deg);
  }
}

@keyframes float-slow-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-5deg);
  }
}

@keyframes float-medium-reverse {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(30px) rotate(5deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 8s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: float-slow-reverse 7s ease-in-out infinite;
}

.animate-float-medium-reverse {
  animation: float-medium-reverse 9s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>

