<template>
  <q-form class="resetSubmit" @submit.prevent="resetSubmit">
       <div id="q-app">
           <div class="q-pa-md bg-orange-4 text-white row justify-center items-center">
                <div class="q-gutter-y-md column" style="max-width: 600px">
                  <div class="row justify-center items-center">
                   <h5 class="text-h5 text-black q-my-md"> Reset Password </h5>
                  </div>
                  <q-input standout="bg-teal text-white" v-model="Email" type="email" label="Re-enter your Email" :dense="dense"
                     lazy-rules
                        :rules="[val => val && val.length > 0||'Please enter a valid Email address',
                          value => value.includes('@')||'Please include @ make Email']">
                        <template v-slot:prepend>
                          <q-icon name="email"></q-icon>
                        </template>
                  </q-input>
                    <q-input standout="bg-teal text-white" v-model="Password" type="password" label="New Password" :dense="dense"

                        lazy-rules
                        :rules="[val => val && val.length > 0||'Please enter password']">
                        <template v-slot:prepend>
                         <q-icon name="vpn_key"></q-icon>
                        </template>
                    </q-input>
                    <q-input standout="bg-teal text-white"  type="password" v-model="repeatPassword" label="Confirm Password" :dense="dense"
                        lazy-rules
                        :rules="[val2 => val2 && val2.length > 0||'Please enter password',
                        value => value == Password||'passwords does not match']">
                        <template v-slot:prepend>
                            <q-icon name="vpn_key"></q-icon>
                        </template>
                    </q-input>
                   <div class="row flex flex-center">
                        <q-card-actions>
                            <q-btn color="black" :loading="loading" type="submit">RESET PASSWORD</q-btn>
                            <q-btn to="/" color="black">CANCEL</q-btn>
                            <q-btn to="/" color="black">LOGIN PAGE</q-btn>
                        </q-card-actions>
                    </div>
                </div>
            </div>
        </div>
    </q-form>
</template>
<script>
export default {
  data () {
    return {
      Email: '',
      Password: '',
      repeatPassword: ''
    }
  },
  methods: {
    resetSubmit () {
      const payload = {
        Email: this.Email,
        Password: this.Password
      }
      this.$axios.put('/Registers/' + payload.Email, payload)
        .then(response => {
          console.log(response)
          this.$q.dialog({
            title: 'Confirm',
            message: 'Password updated successfully!!!'
          })
          window.setTimeout(function () { location.reload() }, 1000)
        })
    }
    // resetSubmit () {
    //   this.$store.dispatch('user/resetpwd', {
    //     email: this.email,
    //     password: this.password
    //   })
    // }
  }
}
</script>
