<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img src="/img/characters/approved.svg" alt="Nouns Logo" class="w-12 h-12 animate-bounce-slow" />
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30"></div>
              </div>
              <NuxtLink to="/" class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-chewy hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Nouns: The Card Game
              </NuxtLink>
            </div>
            <div class="hidden md:flex items-center space-x-6">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                :class="[
                  'transition-colors',
                  isActiveRoute(link.path)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                ]"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                @click="toggleTheme"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
            <div class="md:hidden flex items-center space-x-2">
              <button
                @click="toggleTheme"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <button
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
            <div class="flex flex-col space-y-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                @click="mobileMenuOpen = false"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors',
                  isActiveRoute(link.path)
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                ]"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <slot />
      </main>
      <footer class="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute bottom-4 left-8 animate-float-slow">
            <img src="/img/characters/lucky.svg" alt="" class="w-24 h-24" />
          </div>
          <div class="absolute bottom-4 right-8 animate-float-medium-reverse">
            <img src="/img/characters/birthday.svg" alt="" class="w-24 h-24" />
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div class="flex gap-4">
              <img src="/img/characters/approved.svg" alt="" class="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="/img/characters/shuffle.svg" alt="" class="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="/img/characters/crystal-ball.svg" alt="" class="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <img src="/img/characters/thief.svg" alt="" class="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>
          <p class="text-center text-gray-600 dark:text-gray-400 font-motley">
            © 2025 Nouns: The Card Game. Developed by TempeTechie.eth
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isDark: false,
      mobileMenuOpen: false,
      navLinks: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/rules', label: 'Rules' },
        { path: '/cards', label: 'Cards' },
        { path: '/download', label: 'Download' }
      ]
    }
  },
  mounted() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.isDark = true
    }
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      this.applyTheme()
    },
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
    isActiveRoute(path) {
      const currentPath = this.$route.path
      if (path === '/') {
        return currentPath === '/'
      }
      return currentPath.startsWith(path)
    }
  }
}
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
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

.animate-float-medium-reverse {
  animation: float-medium-reverse 9s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>

