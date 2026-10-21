<script setup lang="ts">
import { useId } from 'vue'

const uid = useId()
const maskId = `mask-for-svg11-${uid}`
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    viewBox="331 256 20 20"
  >
    <defs />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g :id="`svg1-${uid}`" :mask="`url(#${maskId})`">
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <mask :id="maskId">
        <rect width="20" height="20" x="331" y="256" fill="#ffffff" />
      </mask>
      <g transform="matrix(0.833333 0 0 0.833333 331 256)">
        <path
          d="m9 6 6 6-6 6"
          color="rgb(55, 54, 77)"
          fill="none"
          stroke="rgb(87, 88, 110)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2px"
        />
      </g>
    </g>
  </svg>
</template>
