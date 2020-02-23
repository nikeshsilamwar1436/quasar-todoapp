<template>
<q-form class="regSubmit" @submit.prevent="regSubmit">
    <div id="q-app">
    <div class="q-pa-md bg-orange-4 text-white row justify-center items-center">
        <div class="q-gutter-y-md column" style="max-width: 600px">
        <div class="row justify-center items-center">
            <h5 class="text-h5 text-black q-my-md"> Registration Form </h5>
        </div>
        <q-input standout="bg-teal text-white" v-model="username" type="username" label="Enter UserName" :dense="dense" required
          lazy-rules
          :rules="[val => val && val.length > 0||'Please enter username']">
          <template v-slot:prepend>
            <q-icon name="account_box"></q-icon>
          </template>
        </q-input>
        <q-input standout="bg-teal text-white" v-model="schoolname" type="schoolname" label="Enter School Name" :dense="dense"
        lazy-rules
              :rules="[val => val && val.length > 0||'Please enter schoolname']">
            <template v-slot:prepend>
            <q-icon name="school"></q-icon>
            </template>
        </q-input>
        <q-input standout="bg-teal text-white" v-model="email" type="email" label="Enter Email" :dense="dense"
               lazy-rules
              :rules="[val => val && val.length > 0||'Please enter Email address',
              value => value.includes('@')||'Please include @ make Email']">
            <template v-slot:prepend>
            <q-icon name="email"></q-icon>
            </template>
        </q-input>
        <q-input standout="bg-teal text-white"  type="password" v-model="password" label="Enter Password" :dense="dense"
        lazy-rules
            :rules="[val => val && val.length > 0||'Please enter password']">
            <template v-slot:prepend>
            <q-icon name="vpn_key"></q-icon>
            </template>
        </q-input>
        <q-input standout="bg-teal text-white" v-model="phonenumber" type="phonenumber" label="Enter phone" :dense="dense"
        lazy-rules
              :rules="[val => val && val.length > 0 && val.length <= 11||'Please enter correct Number']">
            <template v-slot:prepend>
            <q-icon name="call"></q-icon>
            </template>
        </q-input>
        <div class="row flex flex-center">
            <q-card-actions>
                <q-btn color="black" :loading="loading" type="submit">Proceed</q-btn>
                <q-btn to="/" color="black" >Login page</q-btn>
            </q-card-actions>
        </div>
        </div>
    </div>
    </div>
</q-form>
</template>

<script src = "../scripts/registerscript"></script>
