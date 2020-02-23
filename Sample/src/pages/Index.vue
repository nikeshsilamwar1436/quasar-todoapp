<template>
  <div class="q-pa-md bg-image">
    <!-- <q-img src="../../assets/bg2.png" class="fullscreen" /> -->
    <q-layout class="vertical-center row justify-center items-center">
      <q-card square bordered class="q-pa-lg ">
        <div class="row justify-center items-center">
        <q-img :src="require('../assets/logo1.png')"
          native-context-menu
          alt="Logo"
          basic
          style="height: 120px;max-width: 120px"
        />
        </div>
        <q-form class="handleSubmit" @submit.prevent="handleSubmit">
          <div class="row justify-center items-center">
            <h6 class="text-h6 text-black q-my-md">Login</h6>
            </div>
            <q-input
              bg-color="orange"
              filled
              outlined
              color="black"
              v-model.trim="email"
              type="email"
              label="Email*"
              lazy-rules
              :rules="[val => val && val.length > 0||'Please enter Email address',
              value => value.includes('@')||'Please include @ make Email']">
              <template v-slot:prepend>
            <q-icon name="email"></q-icon>
            </template></q-input>
            <q-input
              bg-color="orange"
              filled
              outlined
              color="black"
              v-model="password"
              type="password"
              label="Password *"
              lazy-rules
                  :rules="[val => val && val.length > 0||'Please enter password']">
            <template v-slot:prepend>
            <q-icon name="vpn_key"></q-icon>
            </template> </q-input>
            <div class="row justify-center items-center">
            <q-card-actions>
              <q-btn color="green" :loading="loading" type="submit">Login</q-btn>
              <q-btn to="/register" color="green">New User Register</q-btn>
            </q-card-actions>
          </div>
          <div class="row justify-center items-center">
            <router-link v-bind:to="'/pass'">Forget password???</router-link>
          </div>
        </q-form>
      </q-card>
    </q-layout>
  </div>
</template>

<script src = "../scripts/indexscript.js"></script>
<style>
.bg-image {
background-image: url(../assets/school1.jpg);
background-repeat: no-repeat;
background-size: cover;
}
.q-card{
width: 360px;
}
</style>
