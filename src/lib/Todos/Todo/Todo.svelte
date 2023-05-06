<script lang="ts">
    import type { ITodos } from "$lib/Models/models";
    import { _callDel, _callPatch } from "../../../api/api";
    import { todosStore } from "../../../store/store";
    export let todo: ITodos;

    const updateTodo = async () => {
        try {
            const res = await _callPatch(todo._id, todo.done);
            todosStore.set(res);

        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async () => {
        try {
            const res = await _callDel(todo._id);
            todosStore.set(res);
            
        } catch (error) {
            console.log(error);
        }
    }
</script>

<div class="checkbox">
    <label>
        <input type="checkbox" checked={todo.done} on:input={updateTodo}/>
        <span class="{todo.done ? "done" : ""}">{todo.text}</span>
    </label>
    <button class="pull-right" on:click={deleteTodo}><i class="bi bi-trash text-danger " /></button>
</div>


<style>
    button {
        background-color: transparent;
        border: 0;
    }

    .done {
        text-decoration: line-through;
        color: gray;
    }
</style>