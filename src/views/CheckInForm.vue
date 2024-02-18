<script setup>
import { ref } from 'vue';
const today = new Date().toDateString();
const treatments = ref([
  { name: "Preservative Free Artificial Tears", key: "1", colour: "green-400", selected: false},
  { name: "AM Warm Compress/Mask", key: "2", colour: "pink-600", selected: false },
  { name: "6 to 8 8oz Glasses of Water", key: "3", colour: "teal-400", selected: false },
  { name: "Ointment or Gel Drops", key: "4", colour: "cyan-600", selected: false },
  { name: "Omega Supplements", key: "5", colour: "yellow-500", selected: false },
  { name: "PM Warm Compress/Mask", key: "6", colour: "purple-900", selected: false },
]);
// const selectedTreatments = ref([]);
const eyeStates = ref([
  { name: "Gritty", key: "1", colour: "bluegray-500", selected: false },
  { name: "Irritated", key: "2", colour: "red-700", selected: true },
  { name: "Comfortable", key: "2", colour: "indigo-400", selected: false },
]);
// const selectedEyeStates = ref([])

function save(e) {
  const stringifiedTreatments = JSON.stringify(treatments.value)
  const stringifiedEyeStates = JSON.stringify(eyeStates.value)
  const report = {'treatments': treatments.value, 'eyeStates': eyeStates.value}
  localStorage.setItem(today, JSON.stringify(report));
};
</script>

<template>
  <!-- {{ treatments }} -->
  <div class="flex mt-5">
    <div class="flex flex-1"></div>
    <Panel class="flex-grow-1 justify-content-center shadow-1">
      <template #header class="bg-orange-50">
        <div class="flex gap-3 flex-grow-1 justify-content-center align-items-center">
          <RouterLink :to="{name: 'stats-calendar'}">
            <i class="pi pi-chart-line"></i>
          </RouterLink>
          <div class="border-primary border-3 border-round">
            <span class="font-bold p-2 text-2xl text-primary-800">{{ today }}</span>
          </div>
          <i class="pi pi-eye"></i>
        </div>

      </template>
      <template #icons style="display:none;"></template>
      <div v-for="treatment of treatments" :key="treatment.key" class="flex flex-column gap-4">
        <div class="flex align-items-left mb-4 p-2 border-round"
          :style="{ 'background-color': 'var(--' + treatment.colour + ')' }">
          <Checkbox v-model="treatment.selected" :inputId="treatment.key" v-bind:selected="true" :binary="true" value="true" name="treatment" />
          <label style="color:white;" class="ml-2 text-xl" :for="treatment.key">{{ treatment.name }}</label>
        </div>
      </div>
      <div class="flex justify-content-center ">
        <span class="font-bold border-primary border-3 border-round mb-4 p-1 text-2xl text-primary-800">Today My Eyes Felt
          Mostly</span>
      </div>
      <div v-for="eyeState of eyeStates" :key="eyeState.key" class="flex flex-column gap-4">
        <div class="flex align-items-left mb-4 p-2 border-round"
          :style="{ 'background-color': 'var(--' + eyeState.colour + ')' }">
          <Checkbox v-model="eyeState.selected" :inputId="eyeState.key" v-bind:selected="true" :binary="true" value="true" name="treatment" />
          <label style="color:white;" class="ml-2 text-xl" :for="eyeState.key">{{ eyeState.name }}</label>
        </div>
      </div>
      <div class="flex justify-content-center">
        <Button label="Submit" @click="save" class="shadow-1 text-xl" />
      </div>
    </Panel>
    <div class="flex flex-1"></div>
  </div>
</template>

<style scoped>
</style>
