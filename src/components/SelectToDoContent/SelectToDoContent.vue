<script setup lang="ts">
import { useId } from 'vue'

const uid = useId()
const maskId = `mask-for-svg11-${uid}`
</script>
<template>
  <div class="flex flex-col h-full w-full items-center justify-center">
    <div>
      <div class="bg-[#E8E8F2] rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="808.0859375 366.1953125 56 56"
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
              <rect width="56" height="56" x="808.0859375" y="366.1953125" fill="#ffffff" />
            </mask>
            <g transform="matrix(2.33333 0 0 2.33333 808.086 366.195)">
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="3"
                color="rgb(55, 54, 77)"
                fill="none"
                stroke="rgb(72, 69, 196)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8px"
              />
              <path
                d="M10 4v16M5.5 8.5h2M5.5 12h2M13 9h5M13 12.5h3.5"
                color="rgb(55, 54, 77)"
                fill="none"
                stroke="rgb(72, 69, 196)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8px"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="text-center max-w-[25rem]">
      <div class="font-bold text-[1.5rem] mt-[1rem]">Select a todo</div>
      <div>
        Choose a todo from the list to see its details. From there you can mark it as completed,
        edit it or delete it.
      </div>
    </div>
  </div>
</template>
