import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { todoList } from "./initData";

export const useNoteStore = defineStore("note", () => {
    const cur = ref<any>();

    const notes = reactive(todoList);

    const changeCur = (val: any) => {
        cur.value = val;
    }
    const removeNote = () => {
        const id = notes.indexOf(cur.value);
        notes.splice(id, 1)
    }
    const colors = reactive([
        "rgba(255, 13, 13, 1)",
        "rgba(9, 49, 192, 1)",
        "rgba(255, 161, 50, 1)",
        "rgba(14, 180, 0, 1)",
        "rgba(214, 50, 255, 1)",
        "rgba(28, 28, 28, 1)"
    ])
    return { cur, changeCur, colors, notes, removeNote };
});
