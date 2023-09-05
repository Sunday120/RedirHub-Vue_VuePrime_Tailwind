<template>
    <div class="flex items-center justify-between">
        <h1 class="text-[#344054] text-[30px] font-semibold leading-[38px]">Redirects</h1>
        <div class="flex items-center gap-[16px]">
            <Button
                class="!text-[#344054] w-[48px] h-[48px] !p-[14px] flex items-center justify-center  bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white  hover:border-[#D0D5DD] ">
                <IconServerSamll />
            </Button>
            <Button
                class="!text-[#344054] w-[48px] h-[48px] flex items-center justify-center !p-[14px]  bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white hover:border-[#D0D5DD] ">
                <IconChart />
            </Button>
            <Button
                class="!text-[#344054] w-[48px] h-[48px] flex items-center justify-center !p-[14px]  !bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white hover:border-[#D0D5DD] ">
                <IconUpGraph />
            </Button>
            <Button
                class="!text-white !px-[20px] !py-[12px] text-[16px] font-semibold leading-[24px] flex items-center justify-center  !bg-[#1C6DB6] !border-0 rounded-[8px] hover:!bg-[#1C6DB6] hover:border-[#D0D5DD] ">
                New redirect
            </Button>
        </div>
    </div>
    <div class="flex mt-[32px] mb-[24px] items-center justify-between">
        <Button
            class="!text-[#344054] flex items-center text-[14px] font-semibold justify-center gap-[8px] !px-[16px] !py-[10px] !bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white hover:border-[#D0D5DD] ">
            Filter
            <IconFilter />
        </Button>

        <SelectButton v-model="value" :options="options" class="p-selectbutton" optionLabel="value" dataKey="value"
            aria-labelledby="custom">
            <template #option="slotProps">
                <component :is="slotProps.option.icon" class="shrink-0" aria-hidden="true" />

            </template>
        </SelectButton>

    </div>

    <div  v-for="(item,index) in navigation" :key="index" class="rounded-[8px] mb-4 flex items-start gap-[16px] p-[24px] bg-white">
        <div class="flex items-center gap-[12px]">
            <Checkbox v-model="checked" :binary="true" />
            <div
                class="w-[40px] flex items-center justify-center border-[#EAECF0] rounded-full relative border bg-[white] h-[40px]">
                <img :src= "item.icon" />
                
                <span class="w-[10px] h-[10px] bottom-0 right-0 absolute block rounded-full bg-[#12B76A]">

                </span>
            </div>
        </div>
        <div class="flex-1">
            <div class="lg:flex flex-1 items-center">
                <h2 class="text-[18px] flex-1 font-noraml leading-[28px] text-[#667085]"> {{ item.name }}</h2>
                <div class="flex gap-[48px] items-center">
                    <div class="flex gap-[24px] items-center">
    
                        <span class="text-[#1D2939] flex items-center gap-[8px] font-normal leading-[20px]">
                            <IconActivity /> <span><span class="font-bold">2</span> clicks</span>
                        </span>
    
                        <span class="text-[14px] flex items-center gap-[8px] font-normal text-[#667085] leading-[20px]">
                            <IconCommand /> Permanent (301)
                        </span>
                        <span class="text-[14px] flex items-center gap-[8px] font-normal text-[#667085] leading-[20px]">
                            <IconCalendar /> 16.08.2023
                        </span>
                    </div>
                    <div class="flex items-center gap-[16px]">
                        <Button
                            class="!text-[#344054] w-[40px] h-[40px] flex items-center justify-center !p-[10px]  bg-[#D2E2F0] !border-[#D2E2F0] rounded-[8px] hover:bg-[#D2E2F0] hover:border-[#D0D5DD] ">
                            <IconCopy />
                        </Button>
                        <Button
                            class="!text-[#344054] w-[40px] h-[40px] flex items-center justify-center !p-[10px]  bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white hover:border-[#D0D5DD] ">
                            <IconPen />
                        </Button>
                        <Button
                            class="!text-[#344054] w-[40px] h-[40px] flex items-center justify-center !p-[10px]  bg-white !border-[#D0D5DD] rounded-[8px] hover:bg-white hover:border-[#D0D5DD] ">
                            <IconDots />
                        </Button>
                    </div>
                </div>
            </div>
            <div class="lg:flex-row flex-col  flex mt-[16px] lg:items-center gap-[16px]">
                <div class="border py-[4px] flex-1 px-[16px] rounded-[8px] border-[#D0D5DD] text-[#475467] text-[16px] font-[600] leading-[24px]">
                    console.dnspod.cn/dns/djiankong.com/record
                </div>
                <div>
                    <IconLeftRounded />
                </div>
                <div class="border py-[4px] flex-1 px-[16px] rounded-[8px] border-[#12B76A] text-[#027A48] text-[16px] font-[600] leading-[24px]">
                    https://www.redirhub.com
                </div>
            </div>
            <div class="flex items-center mt-[16px] gap-[16px]">
                <IconTag />
                <span class="text-[14px] bg-[#FFF6ED] py-[2px] px-[10px] rounded-full font-medium leading-[20px] text-[#C4320A]">New</span>
                <span class="text-[14px] bg-[#FFF6ED] py-[2px] px-[10px] rounded-full font-medium leading-[20px] text-[#C4320A]">Personal</span>
            </div>
        </div>

    </div>


</template>
  
<script setup>
import Button from "primevue/button"
import IconChart from "../components/Icons/IconChart.vue"
import IconUpGraph from "../components/Icons/IconUpGraph.vue"
import IconFilter from "../components/Icons/IconFilter.vue"
import IconServerSamll from "../components/Icons/IconServerSamll.vue"
import SelectButton from 'primevue/selectbutton';
import IconGrid from "../components/Icons/IconGrid.vue"
import IconActivity from '../components/Icons/IconActivity.vue'
import IconCommand from '../components/Icons/IconCommand.vue'
import IconCalendar from '../components/Icons/IconCalendar.vue'
import IconCopy from '../components/Icons/IconCopy.vue'
import IconPen from '../components/Icons/IconPen.vue'
import IconDots from '../components/Icons/IconDots.vue'
import IconLeftRounded from '../components/Icons/IconLeftRounded.vue'
import IconTag from '../components/Icons/IconTag.vue'
import IconGrid2 from "../components/Icons/IconGrid2.vue"
import Checkbox from 'primevue/checkbox';
import { ref } from 'vue';


const checked = ref(false);
const value = ref(null);
console.log("asdas", value)
const options = ref([
    { icon: IconGrid, value: 'Left' },
    { icon: IconGrid2, value: 'Right' },
]);

const navigation = [
  { name: 'RedirHub Name line',  icon: "/logo (2).png", current: true },
  { name: 'Facebook redirect', icon: "/Social icon.svg",  current: false },
  { name: 'Loom redirect', icon:"/globe.svg", current: false },
  { name: 'console.dnspod.cn/dns/djiankong.com...', icon: "/slack.svg", current: false },
]
</script>
<style></style>