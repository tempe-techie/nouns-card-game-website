<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Animated background characters -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-20 left-8 animate-float-slow">
        <img src="/img/characters/crystal-ball.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute top-40 right-8 animate-float-medium-reverse">
        <img src="/img/characters/lucky.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-40 left-12 animate-float-slow-reverse">
        <img src="/img/characters/shuffle.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-20 right-12 animate-float-medium">
        <img src="/img/characters/trash.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
    </div>

    <div class="text-center mb-12 relative z-10">
      <div class="inline-block mb-6">
        <div class="relative">
          <img src="/img/characters/thief.svg" alt="Download" class="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl animate-bounce-slow" />
          <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-chewy bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Download and Print
      </h1>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700 shadow-lg mb-12 relative z-10">
      <div class="flex items-start gap-4">
        <img src="/img/characters/approved.svg" alt="Info" class="w-16 h-16 flex-shrink-0" />
        <div>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Anyone can download the print-ready PDF of the card game for free. The recommended place to print the cards is 
            <a href="https://www.printninja.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">PrintNinja</a>, 
            but people are free to take them to their local printer too.
          </p>
          <button
            @click="showPrintNinjaSettings = !showPrintNinjaSettings"
            class="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold font-chewy transition-colors"
          >
            <span>{{ showPrintNinjaSettings ? 'Hide' : 'Show' }} PrintNinja Settings</span>
            <svg
              :class="{ 'rotate-180': showPrintNinjaSettings }"
              class="w-5 h-5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="showPrintNinjaSettings"
            class="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-3 font-semibold font-chewy">
              For PrintNinja, use the following settings:
            </p>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 text-lg space-y-2">
              <li>Go to <a href="https://calculator.printninja.com/card-game-quote" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold font-chewy">this page</a> (it's for at least 500 decks quantity).</li>
              <li>Deck Size: Poker (2.5" x 3.5")</li>
              <li>Card Count Per Deck: 52</li>
              <li>Card Stock: Blue Core Standard - 280gsm</li>
              <li>Card Backs: 1</li>
              <li>Finish Style: Gloss by default, then select Varnish (unless you want Lamination)</li>
              <li>Deck Packaging: Tuck Box (unless you want just shrink wrapped - the price is the same)</li>
              <li>Tuck Box Packaging Details: You can leave defaults or pick whichever you want</li>
              <li>Packaging Add-Ons: Don't choose any</li>
              <li>Specialty Options: Don't choose any</li>
              <li>Instructions: None</li>
              <li>Quantity: 500 or more</li>
              <li>Proofing: Electronic proof</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">EDITIONS</h2>
      </div>
      <div class="space-y-8">

        <!-- Deguma Edition -->
        <div
          class="group bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
        >
          <div class="relative z-10">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div class="flex items-start gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-chewy">Deguma Edition</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-lg">
                    The first edition of Nouns: The Card Game, featuring character illustrations by deguma.eth in his distinctive style.
                  </p>
                </div>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 md:mt-0 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-chewy text-lg text-center"
              >
                Download PDF
              </a>
            </div>
            <div class="pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <img src="/img/characters/fork.svg" alt="Designer" class="w-8 h-8 opacity-60" />
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-semibold font-chewy">Designer:</span> deguma.eth
              </p>
            </div>
          </div>
        </div>

        <!-- Next Edition -->
        <div
          class="group bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8 border-2 border-gray-200 dark:border-gray-700 relative overflow-hidden opacity-60 cursor-not-allowed"
        >
          <div class="relative z-10">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div class="flex items-start gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-chewy">Next Edition</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-lg">
                    In the works, stay tuned!
                  </p>
                </div>
              </div>
              <button
                disabled
                class="mt-4 md:mt-0 inline-flex items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg font-chewy text-lg text-center cursor-not-allowed opacity-75"
              >
                Download PDF
              </button>
            </div>
            <div class="pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
              <img src="/img/characters/shuffle.svg" alt="Designer" class="w-8 h-8 opacity-60" />
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <span class="font-semibold font-chewy">Designer:</span> TBD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

// Get the base URL - in production this should be your actual domain
const requestURL = useRequestURL()
const baseUrl = requestURL.origin

// Toggle state for PrintNinja settings
const showPrintNinjaSettings = ref(false)

useHead({
  title: 'Download and Print',
  meta: [
    { name: 'description', content: 'Download and print Nouns: The Card Game for free. Get the print-ready PDF of the Deguma Edition featuring character illustrations by deguma.eth.' },
    { property: 'og:title', content: 'Download and Print - Nouns: The Card Game' },
    { property: 'og:description', content: 'Download and print Nouns: The Card Game for free. Get the print-ready PDF of the Deguma Edition featuring character illustrations by deguma.eth.' },
    { property: 'og:url', content: `${baseUrl}${route.path}` },
    { property: 'og:image', content: `${baseUrl}/img/preview-fb.jpg` },
    { name: 'twitter:title', content: 'Download and Print - Nouns: The Card Game' },
    { name: 'twitter:description', content: 'Download and print Nouns: The Card Game for free. Get the print-ready PDF of the Deguma Edition featuring character illustrations by deguma.eth.' },
    { name: 'twitter:image', content: `${baseUrl}/img/preview.jpg` }
  ]
})
</script>

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

