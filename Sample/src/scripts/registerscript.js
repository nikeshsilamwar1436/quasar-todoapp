export default {
  data () {
    return {
      username: '',
      schoolname: '',
      email: '',
      password: '',
      phonenumber: '',
      loading: false
    }
  },
  methods: {
    regSubmit () {
      this.$store.dispatch('user/register', {
        username: this.username,
        schoolname: this.schoolname,
        email: this.email,
        password: this.password,
        phonenumber: this.phonenumber
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      this.$q.dialog({
        title: 'Confirm',
        message: 'Registration successfull!!!',
        ok: 'Ok'
      })
    }
  }
}
