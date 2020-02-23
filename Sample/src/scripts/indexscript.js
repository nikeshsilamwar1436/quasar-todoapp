import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'PageIndex',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('user/login', {
        email: this.email,
        password: this.password
      })
        .then(() => this.$router.push('/profile'))
        .catch(error => {
          this.loading = false
          console.log(error.response)
          if (error.response === 500) {
            this.$q.dialog({
              title: 'Error',
              message: 'We could not verify your account details.'
            })
          } else {
            this.$q.dialog({
              title: 'Error',
              message: 'Something went wrong, please refresh and try again.'
            })
          }
        })
    }
  }
}
