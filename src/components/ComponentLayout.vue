<template>
  <div class="flex h-screen bg-[#F2F4F7] font-roboto">
    <ComponentSidebar />

    <div class="flex-1 flex lg:pl-[260px] flex-col overflow-hidden">
      <ComponentHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#F2F4F7]">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup >


import ComponentSidebar from "./ComponentSidebar.vue";
import ComponentHeader from "./ComponentHeader.vue";


</script>
