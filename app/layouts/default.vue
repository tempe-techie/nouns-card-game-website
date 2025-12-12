<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <NuxtLink to="/" class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-chewy">
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
      <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p class="text-center text-gray-600 dark:text-gray-400">
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
</style>

