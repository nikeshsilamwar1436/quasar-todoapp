<template>
    <q-card>
        <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">CREATE TASK</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-form class="taskSubmit" @submit.prevent="taskSubmit">
        <q-card-section>
        <div class="q-gutter-md q-pa-md" style="max-width: 300px">
        <q-input v-model="taskid" type="taskid" label="id" />
        <q-input v-model="taskname" type="taskname" label="Taskname" />
        <q-input v-model="personname" type="personname" label="PersonName" />
        <q-input filled v-model="startdate" type="startdate" label="Start Date" mask="date" :rules="['date']">
    <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="startdate" @input="() => $refs.qDateProxy.hide()"></q-date>
        </q-popup-proxy>
        </q-icon>
    </template>
    </q-input>
        <q-input filled v-model="enddate" type="enddate" label="End Date" mask="date" :rules="['date']">
    <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="enddate" @input="() => $refs.qDateProxy.hide()"></q-date>
        </q-popup-proxy>
        </q-icon>
    </template>
    </q-input>
    <q-btn push color="red-6" label="CREATE TASK" type="submit" v-close-popup/>
        </div>
        </q-card-section>
        </q-form>
    </q-card>
</template>
<script>
export default {
  data () {
    return {
      taskid: '',
      taskname: '',
      personname: '',
      startdate: '',
      enddate: ''
    }
  },
  methods: {
    taskSubmit () {
      this.$store.dispatch('user/task', {
        taskid: this.taskid,
        taskname: this.taskname,
        personname: this.personname,
        startdate: this.startdate,
        enddate: this.enddate
      })
        .then(() => this.$router.push('/profile'))
        .catch(err => console.log(err))
      this.$q.dialog({
        title: 'Confirm',
        message: 'Task Created successfully!!!'
      })
      window.setTimeout(function () { location.reload() }, 1000)
    }
  }
}
</script>
<style scoped>
 .my-card {
   width: 100%;
   max-width: 200px;
 }
</style>
