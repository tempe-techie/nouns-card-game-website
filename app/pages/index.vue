<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Animated background characters -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-10 left-4 md:left-16 animate-float-slow">
        <img src="/img/characters/approved.svg" alt="" class="w-40 md:w-56 h-40 md:h-56 opacity-30 dark:opacity-20" />
      </div>
      <div class="absolute top-32 right-4 md:right-16 animate-float-medium">
        <img src="/img/characters/lucky.svg" alt="" class="w-40 md:w-56 h-40 md:h-56 opacity-30 dark:opacity-20" />
      </div>
      <div class="absolute bottom-32 left-8 md:left-24 animate-float-slow-reverse">
        <img src="/img/characters/birthday.svg" alt="" class="w-40 md:w-56 h-40 md:h-56 opacity-30 dark:opacity-20" />
      </div>
      <div class="absolute bottom-20 right-8 md:right-24 animate-float-medium-reverse">
        <img src="/img/characters/crystal-ball.svg" alt="" class="w-40 md:w-56 h-40 md:h-56 opacity-30 dark:opacity-20" />
      </div>
      <div class="absolute top-1/2 left-1/4 animate-float-slow">
        <img src="/img/characters/shuffle.svg" alt="" class="w-32 md:w-44 h-32 md:h-44 opacity-25 dark:opacity-15" />
      </div>
      <div class="absolute top-1/3 right-1/4 animate-float-medium-reverse">
        <img src="/img/characters/thief.svg" alt="" class="w-32 md:w-44 h-32 md:h-44 opacity-25 dark:opacity-15" />
      </div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div class="text-center mb-20">
        <div class="inline-block mb-6 animate-bounce-slow">
          <div class="relative">
            <img src="/img/characters/approved.svg" alt="Nouns Character" class="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-2xl" />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          </div>
        </div>
        <h1 class="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 font-chewy bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
          Nouns: The Card Game
        </h1>
        <p class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-motley mb-8 animate-fade-in-delay">
          A strategic card game featuring the iconic Nouns characters. Collect points, play action cards, and outsmart your opponents!
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <div class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <img src="/img/characters/lucky.svg" alt="" class="w-8 h-8" />
            <span class="font-chewy text-gray-900 dark:text-white">Strategic Gameplay</span>
          </div>
          <div class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <img src="/img/characters/birthday.svg" alt="" class="w-8 h-8" />
            <span class="font-chewy text-gray-900 dark:text-white">Iconic Characters</span>
          </div>
          <div class="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
            <img src="/img/characters/crystal-ball.svg" alt="" class="w-8 h-8" />
            <span class="font-chewy text-gray-900 dark:text-white">Free to Play</span>
          </div>
        </div>
      </div>

      <!-- Feature Cards with Character Icons -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <NuxtLink
          to="/about"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="/img/characters/approved.svg" alt="" class="w-full h-full" />
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/img/characters/approved.svg" alt="About" class="w-10 h-10" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 font-chewy">About</h2>
            <p class="text-gray-600 dark:text-gray-400 font-motley">
              Learn about Nouns DAO and the game's development
            </p>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/rules"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="/img/characters/shuffle.svg" alt="" class="w-full h-full" />
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/img/characters/shuffle.svg" alt="Rules" class="w-10 h-10" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 font-chewy">Rules</h2>
            <p class="text-gray-600 dark:text-gray-400 font-motley">
              Understand the game setup and how to play
            </p>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/cards"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="/img/characters/thief.svg" alt="" class="w-full h-full" />
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/img/characters/thief.svg" alt="Cards" class="w-10 h-10" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 font-chewy">Cards</h2>
            <p class="text-gray-600 dark:text-gray-400 font-motley">
              Explore all the cards and their abilities
            </p>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/download"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src="/img/characters/lucky.svg" alt="" class="w-full h-full" />
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/img/characters/lucky.svg" alt="Download" class="w-10 h-10" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 font-chewy">Download</h2>
            <p class="text-gray-600 dark:text-gray-400 font-motley">
              Get your free print-ready PDF
            </p>
          </div>
        </NuxtLink>
      </div>

      <!-- CTA Section -->
      <div class="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-4 left-4 animate-spin-slow">
            <img src="/img/characters/crystal-ball.svg" alt="" class="w-32 h-32" />
          </div>
          <div class="absolute bottom-4 right-4 animate-spin-slow-reverse">
            <img src="/img/characters/birthday.svg" alt="" class="w-32 h-32" />
          </div>
        </div>
        <div class="relative z-10">
          <div class="inline-block mb-6 animate-bounce-slow">
            <img src="/img/characters/lucky.svg" alt="" class="w-24 h-24 drop-shadow-2xl" />
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4 font-chewy">Ready to Play?</h2>
          <p class="text-xl md:text-2xl mb-8 font-motley">Download the game for free and start playing today!</p>
          <NuxtLink
            to="/download"
            class="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl font-chewy text-lg"
          >
            Download Now 🎮
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
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

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slow-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 25s linear infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.3s both;
}
</style>

