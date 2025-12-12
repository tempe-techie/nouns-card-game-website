<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Animated background characters -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-20 left-8 animate-float-slow">
        <img src="/img/characters/rejected.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute top-40 right-8 animate-float-medium-reverse">
        <img src="/img/characters/shuffle.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-40 left-12 animate-float-slow-reverse">
        <img src="/img/characters/thief.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-20 right-12 animate-float-medium">
        <img src="/img/characters/trash.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
    </div>

    <div class="text-center mb-12 relative z-10">
      <div class="inline-block mb-6">
        <div class="relative">
          <img src="/img/characters/crystal-ball.svg" alt="About" class="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl animate-bounce-slow" />
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-chewy bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About
      </h1>
    </div>

    <section class="mb-12 relative z-10">
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">ABOUT NOUNS</h2>
        </div>
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            <a href="https://nouns.wtf/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">Nouns</a> 
            is a forever-running art project (one Noun, everyday, forever) and a growing brand that
            <a href="https://nouns.world/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">funds ideas and brings people together</a>. 
            Whether you’re a collector, a technologist, a nonprofit, or a company, Nouns welcomes everyone.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            Nouns DAO is a decentralized autonomous organization on Ethereum. Each day, a unique Noun is 
            <a href="https://www.probe.wtf/en-US/nouns" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">generated and auctioned</a>,
            with proceeds funding various community-driven projects. Members of the DAO, who own Nouns, 
            <a href="https://www.nouns.camp/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">participate in governance</a>
            and decision-making processes that shape the future of the Nouns ecosystem.
          </p>
        </div>
      </div>
    </section>

    <section class="mb-12 relative z-10">
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">ABOUT THE GAME</h2>
        </div>
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            <em>Nouns: The Card Game</em> was developed by 
            <a href="https://farcaster.xyz/tempetechie.eth" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">Tempe Techie</a>, 
            who created the game rules, gameplay mechanics, chose characters for each card and developed the website. 
            The game brings the iconic Nouns characters to life in an engaging card game format that combines strategy, luck and 
            social interaction.
          </p>
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Tempe Techie works with various designers to create multiple editions of the game, each featuring unique artistic 
            interpretations of the Nouns characters. The first designer to collaborate on the project is 
            <a href="https://farcaster.xyz/deguma" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">deguma.eth</a>, 
            who created the character illustrations for the Deguma Edition in his own distinctive style.
          </p>
        </div>
      </div>
    </section>

    <section class="relative z-10">
      <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700 shadow-lg">
        <div class="flex items-start gap-4 mb-6">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">CREDITS</h2>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div class="space-y-6">
            <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <img src="/img/characters/crystal-ball.svg" alt="Development" class="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Game Development</h3>
                <p class="text-gray-700 dark:text-gray-300 text-lg">
                  <a href="https://farcaster.xyz/tempetechie.eth" target="_blank" rel="noopener noreferrer" class="hover:underline font-semibold font-chewy">Tempe Techie</a>
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Game rules, gameplay design and website</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg">
              <img src="/img/characters/fork.svg" alt="Design" class="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-chewy">Deguma Edition</h3>
                <p class="text-gray-700 dark:text-gray-300 text-lg"><a href="https://farcaster.xyz/deguma" target="_blank" rel="noopener noreferrer" class="hover:underline font-semibold font-chewy">deguma.eth</a></p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Character illustrations and design</p>
              </div>
            </div>
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

