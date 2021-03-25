<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'

export default {
  components: { SignupForm, LoginForm },
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
