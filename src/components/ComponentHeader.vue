<template>
    <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-[30px]">
       
        <Button class="!bg-white !border-0 block lg:hidden hover:!bg-white hover:!text-[#475467] !text-[#475467]" icon="pi pi-bars" @click="visible = true" />
       

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">

            <form class="relative flex items-center flex-1" action="#" method="GET">

                <i class="pi pi-search absolute left-1 text-[#475467]" />
                <InputText v-model="value1" placeholder="Search" class="w-full pl-[25px] border-0 focus:shadow-none min-w-sm" />

            </form>
            <div class="flex items-center gap-x-4 lg:gap-x-6">




                <!-- Profile dropdown -->


                <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
                    class="-m-1.5 bg-white border-none focus:shadow-none hover:bg-white flex items-center p-1.5">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full bg-gray-50"
                        src="/Avatar.png"
                        alt="" />
                    <span class="hidden  lg:flex lg:items-center">
                        <span class="ml-4 text-[16px] font-semibold leading-6 text-[#344054]" aria-hidden="true">John Smith</span>
                        <i class="ml-2  text-[#475467] pi pi-angle-down" aria-hidden="true" />
                    </span>
                </Button>

                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
                   
                    <template #item="{ item, label, props }">
                        <a class="flex" v-bind="props.action">
                            <span v-bind="props.icon" />
                            <span v-bind="props.label">{{ label }}</span>
                            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                        </a>
                    </template>
                    <template #end>
                        <button
                            class="w-full  p-link flex items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                            <i class="pi pi-sign-out" />
                            <span class="ml-2">Log Out</span>
                        </button>
                    </template>
                </Menu>

            </div>
        </div>
    </div>
</template>

<script setup >

import { ref } from 'vue';

const value1 = ref(null);
const menu = ref();

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const toggle = (event) => {
    menu.value.toggle(event);
};


</script>
