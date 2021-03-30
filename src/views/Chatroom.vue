<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  },
}
</script>

<style></style>
