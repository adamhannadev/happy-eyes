<script setup>
import { ref } from 'vue'
const days = ref([])

const items = { ...localStorage }
const report = []
for (let [key, value] of Object.entries(items)) {
    // console.log(`key=${key} value=${value}`)
    report.push({ date: key, values: JSON.parse(value) })
}
console.log(report)
</script>

<template>
    <!-- {{  report }} -->
    <div class="flex mt-5">
        <div class="flex flex-1"></div>
        <Panel class="flex-grow-1 justify-content-center shadow-1">
            <template #header class="">
                <div class="flex gap-3 flex-grow-1 justify-content-center align-items-center">
                    <i class="pi pi-chart-line"></i>
                    <div class="border-primary border-3 border-round">
                        <span class="font-bold p-2 text-2xl text-primary-800">Dry Eye Stats</span>
                    </div>
                    <i class="pi pi-eye"></i>
                </div>
            </template>
            <div class="grid">
                <div v-for="day in report">
                    <div class="col">
                        <Card class="border-3 border-green-500">
                            <template #title></template>
                            <template #content class="text-center">
                            {{ day.date }}
                            <div class="flex justify-content-center mt-3">
                            <i v-for="treatment in day.values" class="pi pi-circle" :class="{'pi-circle-fill': treatment.selected}" :style="{'color': 'var(--' + treatment.colour + ')'}"></i>
                            </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </div>
        </Panel>
        <div class="flex flex-1"></div>
    </div>
</template> 

<style scoped>
.pi {
    font-size: 1rem;
}
</style>
