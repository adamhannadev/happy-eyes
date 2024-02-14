<script setup>
import { ref } from 'vue';
const today = new Date().toDateString();
const treatments = ref([
  {name: "Preservative Free Artificial Tears", key: "1", colour: "green"},
  {name: "AM Warm Compress/Mask", key: "2", colour: "pink"},
  {name: "6 to 8 8oz Glasses of Water", key: "3", colour: "turquoise"},
  {name: "Ointment or Gel Drops", key: "4", colour: "blue"},
  {name: "Omega Supplements", key: "5", colour: "gold"},
  {name: "PM Warm Compress/Mask", key: "6", colour: "purple"},
]);
const selectedTreatments = ref([]);
const eyeStates = ref([
  {name: "Gritty", key: "1", colour: "grey"},
  {name: "Irritated", key: "2", colour: "red"},
  {name: "Comfortable", key: "2", colour: "blue"},
]);
const selectedEyeStates = ref([])

function save(e) {
  const status = {"treatments": selectedTreatments.value, "eyeStates": "bon"}
  // const status = {bill: "named Jeremy", arron: "named william"}
 localStorage.setItem(today, JSON.stringify(status));
};

const storedData = localStorage.getItem(today);
</script>

<template>
  {{ JSON.stringify(selectedTreatments) }}
  {{ JSON.parse(storedData).treatments }}
  <div class="flex mt-5">
    <div class="flex flex-1"></div>
    <Panel class="flex-grow-1 justify-content-center shadow-1">
      <template #header class="">
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
      <div class="flex align-items-left mb-4">
        <Checkbox v-model="selectedTreatments" :inputId="treatment.key" name="treatment" :value="treatment.name" />
        <label :style="{color: treatment.colour}" class="ml-2 text-xl" :for="treatment.key">{{ treatment.name }}</label>
      </div>
    </div>
    <div class="flex justify-content-center ">
      <span class="font-bold border-primary border-3 border-round p-1 text-2xl text-primary-800">Today My Eyes Felt Mostly</span>
    </div>
    <div v-for="eyeState of eyeStates" :key="eyeState.key" class="flex flex-column gap-4">
      <div class="flex align-items-left mb-4">
        <Checkbox v-model="selectedEyeStates" :inputId="eyeState.key" name="treatment" :value="eyeState.name" />
        <label :style="{color: eyeState.colour}" class="ml-2 text-xl" :for="eyeState.key">{{ eyeState.name }}</label>
      </div>
    </div>
    <div class="flex justify-content-center">
      <Button label="Submit" @click="save" class="shadow-1 text-xl" />
    </div>
    <!---<Image src="/logo.jpg" alt="Image" width="250" /> -->
    </Panel>
    <div class="flex flex-1"></div>
  </div>

</template>

<style scoped>
  .pi {
    font-size: 2rem;
  }
</style>
