<script setup>

</script>

<template>
 <router-view></router-view>
</template>

<style>
.pi {
  font-size: 2rem;
}

:deep(.p-panel .p-panel-header) {
  background-color: var(--orange-100);
  color: black;
}

:deep(.p-panel .p-panel-content) {
  background-color: var(--orange-50);
}
</style>
