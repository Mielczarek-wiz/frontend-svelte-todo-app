<script lang="ts">
    import type { ITodos } from "$lib/Models/models";
    import Todo from "./Todo/Todo.svelte";

    // Getting todos from pages
    export let todos: ITodos[] = [];

</script>
<!--Show all the todos by using Todo component-->
<main id="todo-list" class="row">
    <div class="col-sm-4 col-sm-offset-4">
        {#if todos.length === 0 }
            <div class="text-center"> No elements to display.</div>
        {:else}
            {#each todos as todo}
                <Todo todo={todo} />
            {/each}
        {/if}
    </div>
</main>