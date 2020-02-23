<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <div class="q-gutter-md">
      <q-chip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        Welcome
      </q-chip>
    </div>
    <div class="q-gutter-md">
      <q-btn class="align-right" push color="green-6" label="CREATE TASK" @click="icon = true" />
    </div>
    <q-space/>
      <q-btn push color="green-6" label="LOGOUT" @click="logout"/>
    <q-dialog v-model="icon">
      <add-task/>
    </q-dialog>
    <template>
    <q-dialog v-model="show">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">UPDATE TASK</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
        <div class="q-gutter-md q-pa-md" style="max-width: 300px">
        <q-input class="disable"  v-model="edit.taskid" type="taskid" label="id" />
        <q-input  v-model="edit.taskname" type="taskname" label="Taskname" />
        <q-input  v-model="edit.personname" type="personname" label="PersonName" />
        <q-input filled v-model="edit.startdate" type="startdate" label="Start Date" mask="date" :rules="['date']">
    <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="edit.startdate" @input="() => $refs.qDateProxy.hide()"></q-date>
        </q-popup-proxy>
        </q-icon>
    </template>
    </q-input>
        <q-input filled v-model="edit.enddate" type="enddate" label="End Date" mask="date" :rules="['date']">
    <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="edit.enddate" @input="() => $refs.qDateProxy.hide()"></q-date>
        </q-popup-proxy>
        </q-icon>
    </template>
    </q-input>
    <q-btn push color="blue-6" label="UPDATE TASK" @click="savedata" v-close-popup/>
        </div>
        </q-card-section>
    </q-card>
    </q-dialog>
    </template>
    <div id="app">
   <div class="q-pa-sm q-gutter-sm">
   <table style="width:1300px">
     <template>
       <tr class="bg-orange-3">
         <q-th>ID</q-th>
         <q-th>TASK-NAME</q-th>
         <q-th>ALLOTED TO</q-th>
         <q-th>START DATE</q-th>
         <q-th>END DATE</q-th>
       </tr>
       <q-tr v-for="taskvalues in taskvalue" :key="taskvalues.taskid">
         <q-td class='text-center bg-green-3'>{{ taskvalues.taskId }}</q-td>
         <q-td  class='text-center bg-green-3'>{{ taskvalues.taskName }}</q-td>
         <q-td   class='text-center bg-green-3'>{{ taskvalues.personName }}</q-td>
         <q-td   class='text-center bg-green-3'>{{ taskvalues.startDate }}</q-td>
         <q-td class='text-center bg-green-3'>{{ taskvalues.endDate }}</q-td>
         <q-btn flat round color="red-8" icon="delete"  @click="deleteitem(taskvalues.taskId)" size="12px"/>
         <q-btn flat round color="primary" icon="edit" @click="edititem(taskvalues)" size="12px"/>
        </q-tr>
       </template>
   </table>
   </div>
  </div>
  </div>
</template>

<script src = "../scripts/profilescript"></script>
