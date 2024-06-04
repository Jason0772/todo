<template>
    <div class="flows">
        <div class="column" v-for="(columnItems, index) in columns" :key="index">
            <JPanel
                class="ps"
                v-for="item in columnItems"
                :key="item.id"
                :item="item"
                :style="{ background: getColor(item) }"
                @click="onJump(item)"
            ></JPanel>
        </div>
        <img src="../assets/new.svg" class="new" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, watch } from "vue";
import JCheckbox from "../components/j-checkbox.vue";
import JPanel from "./j-panel.vue";
import { useRouter } from "vue-router";
import { useNoteStore } from "../stores/note";
interface IProp {
    list: Array<any>;
}

const noteStore = useNoteStore();
const router = useRouter();

const prop = defineProps<IProp>();
const columns = reactive<Array<any>>([[], []]);

const getColor = (item: any) => {
    if (item.color) {
        return item.color;
    }
    return "rgba(28, 28, 28, 1)";
};
watch(
    () => prop.list,
    () => {
        console.log("change list", prop.list);
        reset();
    }
);

onMounted(() => {
    console.log("change list 0", prop.list);
    reset();
});

const onJump = (item: any) => {
    console.log("ok");
    noteStore.changeCur(item);
    router.push("/about");
};
const reset = () => {
    columns[0] = [];
    columns[1] = [];
    prop.list.forEach((element, i) => {
        columns[i % 2].push(element);
    });
};
</script>

<style lang="less" scoped>
.flows {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}

.ps {
    border-radius: 20px;
    margin-bottom: 10px;
}
.has {
}
.new {
    width: 54px;
    height: 54px;
    object-fit: contain;
    position: fixed;
    right: 48px;
    bottom: 50px;
    z-index: 1;
    &:active {
        opacity: 0.9;
    }
}
</style>
