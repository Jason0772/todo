<script setup lang="ts">
import { reactive, ref } from "vue";
import JTab from "../components/j-tab.vue";
import JCheckbox from "../components/j-checkbox.vue";
import JFlows from "./j-flows.vue";

import { todoList } from "./initData";
import note from "../assets/note.svg";
import design from "../assets/design.svg";
import right from "../assets/right.svg";

const tabs = reactive(["All Notes", "Folders"]);
const active = ref(tabs[0]);

const checked = ref(false);
const list = reactive(todoList);

const grid = reactive([
    {
        name: "My Notes",
        icon: note,
    },
    {
        name: "Design",
        icon: design,
    },
    {
        name: "Projects",
        icon: note,
    },
    {
        name: "To do list",
        icon: right,
    },
]);
</script>

<template>
    <div class="boxes">
        <div class="grid">
            <div v-for="item in grid" class="g-item">
                <img :src="item.icon" class="g-ico" />
                <div class="g-name">{{ item.name }}</div>
            </div>
        </div>
        <div class="btn">+ Add new folder</div>
    </div>
</template>

<style lang="less" scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    .g-item {
        width: 152px;
        height: 163px;
        border-radius: 20px;
        background: rgba(28, 28, 28, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:first-child {
            background: rgba(255, 13, 13, 1);
        }
        &:active {
            opacity: 0.8;
        }
        .g-ico {
            width: 37px;
            height: 37px;
            object-fit: contain;
            margin-bottom: 10px;
        }
        .g-name {
            font-size: 16px;
            font-weight: 600;
        }
    }
}
.btn {
    width: 227px;
    height: 58px;
    border-radius: 30px;
    background: #ffa132;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    &:active {
        background: darken(#ffa132, 10%);
    }
}
</style>
