<script lang="ts">
    import './Todo.css'
    import type { ITodos } from "$lib/Models/models";
    import { _callDel, _callPatch } from "../../../api/api";
    import { todosStore } from "../../../store/store";

    // Get just one task.
    export let todo: ITodos;

    // Function used to update task (done -> active or the other way round)
    const updateTodo = async () => {
        try {
            // Calling Patch function from api file.
            const res = await _callPatch(todo._id, todo.done);
            // Setting the updated tasks.
            todosStore.set(res);

        } catch (error) {
            // Consoling an error when it occures.
            console.log(error);
        }
    }

    // Function for deleting task
    const deleteTodo = async () => {
        try {
            // Calling Del function from api file.
            const res = await _callDel(todo._id);
            
            // Setting the updated tasks.
            todosStore.set(res);
            
        } catch (error) {

            // Consoling an error when it occures.
            console.log(error);
        }
    }
</script>

<!--Checkbox for task-->
<div class="checkbox">
    <label>
        <!--Task checkbox-->
        <input type="checkbox" bind:checked={todo.done} on:click={updateTodo}/>

        <!--Task text-->
        <span class="{todo.done ? "done" : ""}">{todo.text}</span>
    </label>

    <!--Button for deleting task-->
    <button class="pull-right" on:click={deleteTodo}><i class="bi bi-trash text-danger " /></button>
</div>


<style>

</style>