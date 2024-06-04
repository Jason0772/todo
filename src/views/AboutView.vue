<template>
    <main class="main">
        <div class="head">
            <img src="../assets/back.svg" class="ico" @click="onBack" />
            <img src="../assets/menu.svg" class="ico" @click="onMenu" />
        </div>
        <div class="t1">{{ item.title }}</div>
        <div class="time">Sat, 12:05 | 2.451 Characters</div>
        <div class="t2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in rutrum metus.
            Pellentesque commodo ante neque, eu hendrerit lorem gravida et.
        </div>
        <template v-if="item.items">
            <JCheckbox
                class="cbx"
                v-for="i in item.items"
                :key="i.txt"
                v-model="i.done"
                :label="i.txt"
                :mini="true"
            ></JCheckbox>
        </template>
        <JMenu v-if="pop" @color="onColor" @remove="onRemove" @close="onClose"></JMenu>
    </main>
</template>

<script setup lang="ts">
import { useNoteStore } from "@/stores/note";
import JPanel from "./j-panel.vue";
import JMenu from "./j-menu.vue";
import JCheckbox from "../components/j-checkbox.vue";

import { computed, ref } from "vue";
const noteStore = useNoteStore();

const item = computed(() => noteStore.cur);

const pop = ref(false);

const onBack = () => {
    history.back();
};

const onMenu = () => {
    pop.value = true;
};

const onColor = (color: any) => {
    pop.value = false;
    noteStore.cur.color = color;
};

const onRemove = () => {
    pop.value = false;
    noteStore.removeNote();
    history.back();
};
const onClose = () => {
    pop.value = false;
};
</script>

<style lang="less" scoped>
.main {
    padding: 28px;
    box-sizing: border-box;
    .head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ico {
            width: 32px;
            height: 32px;
            object-fit: contain;
            &:active {
                opacity: 0.9;
            }
        }
    }
}

.time {
    font-size: 10px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 18px;
}
.t1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    margin-top: 30px;
    margin-bottom: 4px;
}
.t2 {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
}

.cbx {
    margin-bottom: 8px;
}
</style>
