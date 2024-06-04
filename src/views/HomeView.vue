<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import JTab from "../components/j-tab.vue";
import JCheckbox from "../components/j-checkbox.vue";
import JFlows from "./j-flows.vue";
import JGrid from "./j-grid.vue";

import { todoList } from "./initData";
import { useNoteStore } from "@/stores/note";

const tabs = reactive(["All Notes", "Folders"]);
const active = ref(tabs[0]);
const keyword = ref("");
const noteStore = useNoteStore();

const orignList = reactive(todoList);
const list = ref<any>([]);

onMounted(() => {
    onSearch();
    // console.log("key", keyword.value, list.value);
});

const onSearch = () => {
    if (keyword.value) {
        list.value = noteStore.notes.filter((item) => item.title.includes(keyword.value));
    } else {
        list.value = [...noteStore.notes];
    }
    console.log("keyword.value", keyword.value, list.value);
};
</script>

<template>
    <main class="main">
        <div class="title">Notes</div>
        <div class="search-bar">
            <img src="../assets/search.svg" class="icon" alt="" />
            <input
                class="txt"
                type="text"
                v-model="keyword"
                placeholder="Search Your Notes"
                @input="onSearch"
            />
        </div>
        <JTab :active="active" :tabs="tabs" @change="active = $event"></JTab>

        <div class="views">
            <JFlows v-show="active == tabs[0]" :list="list"></JFlows>
            <JGrid v-show="active == tabs[1]"></JGrid>
        </div>
    </main>
</template>

<style lang="less" scoped>
.main {
    padding: 28px;
    box-sizing: border-box;
}
.title {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
    color: #fff;
}
.search-bar {
    width: 319px;
    height: 46px;
    border-radius: 23px;
    background: #1c1c1c;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: auto;
    .icon {
        width: 18px;
        height: 18px;
        margin-left: 20px;
    }
    .txt {
        flex: 1;
        display: block;
        background: none;
        border: none;
        outline: none;
        color: #fff;
        font-size: 12px;
        margin-right: 20px;
    }
}
.views {
    margin-top: 20px;
}
</style>
