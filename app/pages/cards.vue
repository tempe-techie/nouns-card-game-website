<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8 font-chewy">Cards</h1>

    <div class="mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Action Cards</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="card in actionCards"
          :key="card.name"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div class="p-4 bg-gray-50 dark:bg-gray-700/50">
            <div :class="['rounded-lg', isDark ? 'bg-white p-2' : '']">
              <img
                :src="`/img/cards/${card.image}`"
                :alt="card.name"
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-chewy">{{ card.name }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-3 font-motley">{{ card.description }}</p>
            <div v-if="card.optionalRule" class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400">
              <p class="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1 font-chewy">Optional Rule:</p>
              <p class="text-sm text-blue-800 dark:text-blue-200 font-motley">{{ card.optionalRule }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-chewy">Value Cards</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
        <p class="text-gray-700 dark:text-gray-300 mb-4 font-motley">
          The other cards are value cards which score points. These cards have nouns glasses (called "noggles") drawn on them. 
          A 1 point card has 1 noggle glasses on it, a 2 points card has 2 noggles glasses, and so on. 
          The person with the most points at the end, wins.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="card in valueCards"
          :key="card.name"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div class="p-4 bg-gray-50 dark:bg-gray-700/50">
            <div :class="['rounded-lg', isDark ? 'bg-white p-2' : '']">
              <img
                :src="`/img/cards/${card.image}`"
                :alt="card.name"
                class="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white font-chewy">{{ card.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2 font-motley">{{ card.points }} point{{ card.points !== 1 ? 's' : '' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsPage',
  data() {
    return {
      isDark: false,
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
    }
  }
}
</script>

