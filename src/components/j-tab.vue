<script setup lang="ts">
import { ref, computed } from "vue";
const prop = defineProps({
    tabs: Array<string>,
    active: String,
});
</script>

<template>
    <div class="tabs">
        <div
            class="tab"
            v-for="item in prop.tabs"
            :key="item"
            :class="item === active ? 'active' : ''"
            @click="$emit('change', item)"
        >
            {{ item }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.tabs {
    display: flex;
    font-size: 14px;
    margin-top: 20px;
    .tab {
        flex: 1;
        height: 30px;
        position: relative;
        text-align: center;
        &.active {
            &:before {
                display: block;
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 81px;
                height: 1.5px;
                background: #ffa132;
                border-radius: 1px;
            }
        }
    }
}
</style>
