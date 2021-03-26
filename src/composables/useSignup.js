import { ref } from 'vue'

const signup = async () => {}

const useSignup = () => {
  const error = ref()

  return { error, signup }
}

export default useSignup
