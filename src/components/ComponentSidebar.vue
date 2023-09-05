<template>
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[260px] lg:flex-col">
    <div class="flex grow flex-col overflow-y-auto border-r border-[#EAECF0] bg-white ">
      <div class="flex shrink-0 px-[16px]  py-[12px] items-center">
        <img class="h-[40px] w-auto" src="/logo.png" alt="Your Company" />
        <!-- <img class="h-[40px] w-auto" src="/logo (1).png" alt="Your Company" /> -->

      </div>
      <nav class="flex flex-1 pb-[24px] flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li class="flex-1">
            <ul role="list" class="space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <a :href="item.href"
                  :class="[route.fullPath == item.href ? 'bg-[#F2F4F7]  text-[#344054]' : 'text-[#667085] hover:text-[#344054] hover:bg-[#F2F4F7]', 'group gap-x-[24px] transition duration-300 flex items-center px-[24px] py-[12px] text-[14px] leading-[20px] font-semibold']">
                  <span :class="[route.fullPath == item.href ? 'text-[#F79009]' : 'text-[#475467]  ']">
                    <component :is="item.icon" class="shrink-0" aria-hidden="true" />
                  </span>
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
          <li class="px-[24px]">
            <div class="bg-[#F9FAFB] text-center rounded-[8px] p-[16px]">
              <div class="flex items-center gap-[12px]">

                <div class="bg-[#F79009] text-white rounded-[4px] p-[4px]">
                  <IconRedirects />
                </div>
                <h2 class="text-[14px] text-[#344054] font-medium leading-[20px]">Redirects Basic</h2>
              </div>
              <div class="text-[#98A2B3] mt-[16px] font-normal text-[12px] flex items-center justify-between">

                <h2 class=" text-[#98A2B3] font-normal leading-[18px]">You’re at 80% of your plan</h2>
                <i class=" pi pi-info-circle" />
              </div>
              <div class="mt-[10px] mb-[16px]">
                <ProgressBar class="bg-[#EAECF0] h-[8px]" :showValue="false" :value="50"></ProgressBar>
              </div>
              <a class="text-[14px] cursor-pointer text-[#1962A4] font-semibold leading-[20px]">
                Upgrade
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  
</template>

<script setup >

import IconHome from "../components/Icons/IconHome.vue"
import IconEye from "../components/Icons/IconEye.vue"
import IconServer from "../components/Icons/IconServer.vue"
import IconCoinStack from "../components/Icons/IconCoinStack.vue"
import IconSettings from "../components/Icons/IconSettings.vue"
import IconURL from "../components/Icons/IconURL.vue"
import IconRedirects from "../components/Icons/IconRedirects.vue"
import { useRoute, useRouter } from "vue-router"
import Sidebar from 'primevue/sidebar';
import ProgressBar from "primevue/progressbar"
const router = useRouter()
const route = useRoute()

console.log('router', router, route.fullPath);

const navigation = [
  { name: 'Home', href: '/', icon: IconHome, current: true },
  { name: 'Redirects', href: '/redirects', icon: IconRedirects, current: false },
  { name: 'URL shortener', href: '/url_shortener', icon: IconURL, current: false },
  { name: 'Monitor', href: '/monitor', icon: IconEye, current: false },
  { name: 'Hostnames', href: '/hostnames', icon: IconServer, current: false },
  { name: 'Subscriptions', href: '/subscriptions', icon: IconCoinStack, current: false },
  { name: 'Settings', href: '/settings', icon: IconSettings, current: false },

]
import { ref } from "vue";

const visible = ref(false);

</script>
