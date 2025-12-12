<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
    <!-- Animated background characters -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute top-20 left-8 animate-float-slow">
        <img src="/img/characters/approved.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute top-40 right-8 animate-float-medium-reverse">
        <img src="/img/characters/rejected.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-40 left-12 animate-float-slow-reverse">
        <img src="/img/characters/thief.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
      <div class="absolute bottom-20 right-12 animate-float-medium">
        <img src="/img/characters/lucky.svg" alt="" class="w-32 h-32 opacity-20 dark:opacity-10" />
      </div>
    </div>

    <div class="text-center mb-12 relative z-10">
      <div class="inline-block mb-6">
        <div class="relative">
          <img src="/img/characters/shuffle.svg" alt="Cards" class="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl animate-bounce-slow" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-chewy bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Cards
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Discover all the action cards and value cards in the game
      </p>
    </div>

    <div class="mb-16 relative z-10">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">ACTION CARDS</h2>
      </div>
      <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(card, index) in actionCards"
          :key="card.name"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
        >
          <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 relative">
            <img
              :src="`/img/cards/${card.image}`"
              :alt="card.name"
              class="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-6 relative z-10">
            <div class="flex items-center gap-3 mb-3">
              <img :src="`/img/characters/${getCharacterName(card.name)}.svg`" alt="" class="w-10 h-10" />
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white font-motley uppercase">{{ card.name }}</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{{ card.description }}</p>
            <div v-if="card.optionalRule" class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-blue-400 shadow-sm">
              <p 
                @click="toggleOptionalRule(card.name)" 
                class="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2 font-chewy cursor-pointer hover:text-blue-700 dark:hover:text-blue-200 transition-colors flex items-center gap-2"
              >
                <span>✨ See Optional Rule:</span>
                <span class="text-xs">{{ expandedOptionalRules[card.name] ? '▼' : '▶' }}</span>
              </p>
              <p v-if="expandedOptionalRules[card.name]" class="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{{ card.optionalRule }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-8">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white font-motley">VALUE CARDS</h2>
      </div>
      <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-700 mb-8 shadow-lg">
        <div class="flex items-start gap-4">
          <img src="/img/characters/crystal-ball.svg" alt="" class="w-12 h-12 flex-shrink-0" />
          <div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Value cards are cards that give you points. They show pairs of Nouns glasses, also known as "noggles". 
              A 1-point card has one pair, a 2-point card has two pairs, etc. Whoever has the most points at the end wins.
            </p>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="card in valueCards"
          :key="card.name"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
        >
          <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50">
            <img
              :src="`/img/cards/${card.image}`"
              :alt="card.name"
              class="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-6 text-center relative z-10">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-3 shadow-lg">
              <span class="text-2xl font-bold text-white font-chewy">{{ card.points }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white font-chewy">{{ card.name }}</h3>
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

useHead({
  title: 'Cards | Nouns: The Card Game',
  meta: [
    { name: 'description', content: 'Discover all the action cards and value cards in Nouns: The Card Game. Learn about Approved, Rejected, Thief, Lucky, and more action cards, plus value cards from 1 to 5 points.' },
    { property: 'og:title', content: 'Cards | Nouns: The Card Game' },
    { property: 'og:description', content: 'Discover all the action cards and value cards in Nouns: The Card Game. Learn about Approved, Rejected, Thief, Lucky, and more action cards, plus value cards from 1 to 5 points.' },
    { property: 'og:url', content: `${baseUrl}${route.path}` },
    { property: 'og:image', content: `${baseUrl}/img/preview-fb.jpg` },
    { name: 'twitter:title', content: 'Cards | Nouns: The Card Game' },
    { name: 'twitter:description', content: 'Discover all the action cards and value cards in Nouns: The Card Game. Learn about Approved, Rejected, Thief, Lucky, and more action cards, plus value cards from 1 to 5 points.' },
    { name: 'twitter:image', content: `${baseUrl}/img/preview.jpg` }
  ]
})
</script>

<script>
export default {
  name: 'CardsPage',
  data() {
    return {
      isDark: false,
      expandedOptionalRules: {},
      actionCards: [
        {
          name: 'Approved',
          image: 'approved.png',
          description: 'This card lets you draw one extra card from the pile (in addition to your usual end-of-turn draw). Instead of taking one card, you end up taking two.'
        },
        {
          name: 'Rejected',
          image: 'rejected.png',
          description: 'This card cancels another player\'s action (except the LUCKY card action). You can even reject a REJECTED card from another player.'
        },
        {
          name: 'Abstained',
          image: 'abstained.png',
          description: 'This card lets you skip your turn, meaning you don\'t have to draw a card from the pile. However, you can still play other actions before using this card.'
        },
        {
          name: 'Thief',
          image: 'thief.png',
          description: 'This card lets you take one card from an opponent of your choice. Your opponent does not show you the fronts of their cards, so you must take a blind guess when choosing.'
        },
        {
          name: 'Crystal Ball',
          image: 'crystal-ball.png',
          description: 'This card lets you secretly peek at the next three cards in the draw pile. (Make sure you don\'t change their order!)'
        },
        {
          name: 'Lucky',
          image: 'lucky.png',
          description: 'This card lets you remove the FORK card from your hand. No one can play a REJECTED card against it. When played, place the FORK card back into the draw pile (anywhere you want, secretly). After playing it, you can still draw a new card at the end of your turn.'
        },
        {
          name: 'Birthday',
          image: 'birthday.png',
          description: 'Choose an opponent, and they must give you one of their value cards. The opponent gets to decide which card to give you (including the Fork card). If the opponent has no value cards in their hand, your action card is wasted.',
          optionalRule: 'If you believe that opponent lied, you can demand that they reveal their hand to prove it. If the opponent lied, you can take up to 2 cards from them (this includes the value card you are entitled to), including any action card (you choose which one). If the opponent did not lie, you don\'t get any card, but the opponent gets one of your value cards (excluding the Fork card).'
        },
        {
          name: 'Shuffle',
          image: 'shuffle.png',
          description: 'This card allows you to shuffle the entire draw pile. Important: Another player can demand to reshuffle the deck if they believe your shuffle wasn\'t fair.'
        },
        {
          name: 'Trash',
          image: 'trash.png',
          description: 'This card allows you to pick the last card in the discard pile, whichever it is.'
        },
        {
          name: 'Fork',
          image: 'fork.png',
          description: 'This card halves your total points! There\'s only one in the deck, but it can ruin your chances of winning.'
        }
      ],
      valueCards: [
        { name: '1 Point', image: '1-point.png', points: 1 },
        { name: '2 Points', image: '2-point.png', points: 2 },
        { name: '3 Points', image: '3-point.png', points: 3 },
        { name: '4 Points', image: '4-point.png', points: 4 },
        { name: '5 Points', image: '5-point.png', points: 5 }
      ]
    }
  },
  mounted() {
    // Check if dark mode is active
    this.updateDarkMode()
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      this.updateDarkMode()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
  },
  methods: {
    updateDarkMode() {
      this.isDark = document.documentElement.classList.contains('dark')
    },
    getCharacterName(cardName) {
      const nameMap = {
        'Approved': 'approved',
        'Rejected': 'rejected',
        'Abstained': 'abstained',
        'Thief': 'thief',
        'Crystal Ball': 'crystal-ball',
        'Lucky': 'lucky',
        'Birthday': 'birthday',
        'Shuffle': 'shuffle',
        'Trash': 'trash',
        'Fork': 'fork'
      }
      return nameMap[cardName] || 'approved'
    },
    toggleOptionalRule(cardName) {
      this.expandedOptionalRules[cardName] = !this.expandedOptionalRules[cardName]
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

