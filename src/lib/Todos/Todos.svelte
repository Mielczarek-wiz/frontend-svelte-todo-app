<script lang="ts">
    import type { ITodos } from "$lib/Models/models";
    import Todo from "./Todo/Todo.svelte";

    export let todos: ITodos[] = [];

</script>

<main id="todo-list" class="row">
    <div class="col-sm-4 col-sm-offset-4">
        {#each todos as todo}
            <Todo todo={todo} />
        {/each}
    </div>
</main>