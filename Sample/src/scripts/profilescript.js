export default {
  data () {
    return {
      edit: {
        taskid: '',
        taskname: '',
        personname: '',
        startdate: '',
        enddate: ''
      },
      icon: false,
      show: false,
      taskvalue: []
    }
  },
  components: {
    'add-task': require('pages/Task.vue').default
  },
  mounted () {
    this.$axios.get('/TaskDetails')
      .then(response => {
        this.taskvalue = response.data
      })
  },
  methods: {
    deleteitem (data) {
      this.$axios.delete('/TaskDetails/' + data)
        .then(response => {
          console.log(this.Todos)
          this.$q.dialog({
            title: 'Confirm',
            message: 'Task deleted successfully!!!'
          })
          window.setTimeout(function () { location.reload() }, 2000)
        })
    },
    edititem (data) {
      this.edit.taskid = data.taskId
      this.edit.taskname = data.taskName
      this.edit.personname = data.personName
      this.edit.startdate = data.startDate
      this.edit.enddate = data.endDate
      this.show = true
    },
    savedata () {
      const load = {
        taskId: this.edit.taskid,
        taskName: this.edit.taskname,
        personName: this.edit.personname,
        startDate: this.edit.startdate,
        endDate: this.edit.enddate
      }
      this.$axios.put('/TaskDetails/' + load.taskId, load)
        .then(response => {
          console.log(response)
          this.$q.dialog({
            title: 'Confirm',
            message: 'Task updated successfully!!!'
          })
          window.setTimeout(function () { location.reload() }, 2000)
        })
    },
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  }
}
