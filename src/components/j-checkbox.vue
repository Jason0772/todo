<script setup lang="ts">
import { ref, computed } from "vue";
import imgNormal from "../assets/check-n.svg";
import imgActive from "../assets/check-a.svg";
import imgWhite from "../assets/check-w.svg";

const prop = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    mini: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
    },
    white: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:modelValue"]);

const toggleCheckbox = () => {
    console.log(prop.modelValue);
    emit("update:modelValue", !prop.modelValue);
};
</script>

<template>
    <div class="checkbox" :class="{ mini, checked: modelValue }">
        <img
            @click.stop="toggleCheckbox"
            :src="modelValue ? (white ? imgWhite : imgActive) : imgNormal"
            class="icon"
            alt=""
        />
        <div class="tip">{{ label }}</div>
    </div>
</template>

<style lang="less" scoped>
.checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    .icon {
        width: 31px;
        height: 31px;
    }
    .tip {
        margin-top: 4px;
    }
    &.mini {
        font-size: 10px;
        .icon {
            width: 20px;
            height: 20px;
        }
    }
    &.checked {
        text-decoration: line-through;
    }
}
</style>
