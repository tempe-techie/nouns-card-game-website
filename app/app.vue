<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Chewy';
  src: url('/fonts/Chewy-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'MotleyForces';
  src: url('/fonts/MotleyForcesRegular-w1rZ3.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Chewy', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Chewy', sans-serif;
}
</style>
