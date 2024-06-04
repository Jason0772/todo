<template>
    <div class="panel">
        <div class="t1">{{ item.title }}</div>
        <div class="t2" v-if="item.desc">{{ item.desc }}</div>
        <template v-if="item.items">
            <JCheckbox
                class="cbx"
                v-for="i in item.items"
                :key="i.txt"
                v-model="i.done"
                :label="i.txt"
                :mini="true"
                :white="!!item.color"
            ></JCheckbox>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch } from "vue";
import JCheckbox from "../components/j-checkbox.vue";

interface IProp {
    item: any;
}

const prop = defineProps<IProp>();
</script>

<style lang="less" scoped>
.panel {
    width: 152px;
    padding: 12px;
    box-sizing: border-box;
    // border-radius: 20px;
    // background: rgba(28, 28, 28, 1);
    // margin-bottom: 10px;
    .t1 {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 5px;
    }
    .t2 {
        font-size: 10px;
        font-weight: 400;
        line-height: 15px;
        margin-bottom: 8px;
    }

    .cbx {
        margin-bottom: 8px;
    }
}
</style>
