<script setup>
import { ref } from 'vue';
const today = new Date().toDateString();
const treatments = ref([
  { name: "Preservative Free Artificial Tears", key: "1", colour: "green-400" },
  { name: "AM Warm Compress/Mask", key: "2", colour: "pink-600" },
  { name: "6 to 8 8oz Glasses of Water", key: "3", colour: "teal-400" },
  { name: "Ointment or Gel Drops", key: "4", colour: "cyan-600" },
  { name: "Omega Supplements", key: "5", colour: "yellow-500" },
  { name: "PM Warm Compress/Mask", key: "6", colour: "purple-900" },
]);
const selectedTreatments = ref([]);
const eyeStates = ref([
  { name: "Gritty", key: "1", colour: "bluegray-500" },
  { name: "Irritated", key: "2", colour: "red-700" },
  { name: "Comfortable", key: "2", colour: "indigo-400" },
]);
const selectedEyeStates = ref([])

function save(e) {
  const status = { "treatments": selectedTreatments.value, "eyeStates": selectedEyeStates.value }
  console.log(status)
  localStorage.setItem(today, JSON.stringify(status));
};

const storedData = localStorage.getItem(today);
</script>

<template>
  {{ JSON.stringify(selectedTreatments) }}
  <div class="flex mt-5">
    <div class="flex flex-1"></div>
    <Panel class="flex-grow-1 justify-content-center shadow-1">
      <template #header class="bg-orange-50">
        <div class="flex gap-3 flex-grow-1 justify-content-center align-items-center">
          <i class="pi pi-chart-line"></i>
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
          <Checkbox v-model="selectedTreatments" :inputId="treatment.key" name="treatment" :value="treatment.name" />
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
          <Checkbox v-model="selectedEyeStates" :inputId="eyeState.key" name="treatment" :value="eyeState.name" />
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
.pi {
  font-size: 2rem;
}
:deep(.p-panel .p-panel-header) {
    background-color: var(--orange-100);
    color: black;
}
:deep(.p-panel .p-panel-content){
  background-color: var(--orange-50) ;
}
</style>
