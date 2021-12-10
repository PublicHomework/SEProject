<template>
  <header class="bg-indigo-600">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 md:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="/favicon.svg" alt="" />
          </a>
          <div class="ml-10 space-x-8">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
              {{ link.name }}
            </a>
          </div>
        </div>
        <a class="ml-10 space-x-4 text-white">
          <router-link to="profile"> {{username}} </router-link>
        </a>
      </div>
    </nav>
  </header>

	<center-content />
  

</template>

<script>
const navigation = [
  { name: '游戏中心', href: '/gamecenter' },
  { name: '关于', href: '/about' },
]

import CenterContent from './CenterContent.vue'
import { ref } from 'vue'
import { SERVER_URL } from '@/config.js'
import axios from 'axios'

const username = ref('')

export default {
	components: {
    CenterContent
  },
  setup() {

    axios.get(SERVER_URL + '/api/v1/auth/user')
    .then(res => {
      const data = res.data
      username.value = data.data.username
    })

    return {
      navigation,
      username
    }
  },
}
</script>