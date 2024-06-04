<template>
    <Teleport to="body">
        <main class="j-menu" @click.self="onClose">
            <div class="content">
                <div class="colors">
                    <div
                        @click="onChoose(item)"
                        class="color"
                        v-for="item in noteStore.colors"
                        :style="{ background: item }"
                    ></div>
                </div>
                <div class="remove" @click="onRemove">
                    <img src="../assets/remove.svg" class="icon" />
                    <span>Delete note</span>
                </div>
                <div class="done">
                    <img src="../assets/done.svg" class="icon" />
                    <span>Sat, 12:05 | 2.451 Characters</span>
                </div>
            </div>
        </main>
    </Teleport>
</template>

<script setup lang="ts">
import { useNoteStore } from "@/stores/note";
import JPanel from "./j-panel.vue";
import JCheckbox from "../components/j-checkbox.vue";

import { computed } from "vue";
const noteStore = useNoteStore();

const item = computed(() => noteStore.cur);
const emit = defineEmits(["color", "remove", "close"]);

const onChoose = (val: any) => {
    emit("color", val);
};
const onRemove = () => {
    emit("remove");
};
const onClose = () => {
    emit("close");
};
</script>

<style lang="less" scoped>
.j-menu {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-end;
    .content {
        padding: 28px;
        box-sizing: border-box;
        background: rgba(28, 28, 28, 1);
        border-radius: 20px 20px 0 0;
        width: 100%;
        animation: tin 300ms;
        animation-fill-mode: forwards;
    }
    @keyframes tin {
        0% {
            opacity: 0;
            transform: translateY(70px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .colors {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
        .color {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid rgba(67, 67, 67, 1);
            &:active {
                opacity: 0.8;
            }
        }
    }
    .remove {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-bottom: 143px;
        .icon {
            width: 20px;
            height: 20px;
            margin-right: 20px;
        }
    }
    .done {
        display: flex;
        align-items: center;
        font-size: 10px;
        // margin-bottom: 36px;
        .icon {
            width: 32px;
            height: 42px;
            margin-right: 20px;
        }
    }
}
</style>
