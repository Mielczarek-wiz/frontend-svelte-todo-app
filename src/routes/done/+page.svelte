<script lang="ts">
    import Navbar from "$lib/Navbar/Navbar.svelte";
    import Header from "$lib/Header/Header.svelte";
    import { todosStore } from "../../store/store";
    import type { ITodos } from "$lib/Models/models";
    import { onMount } from "svelte";
    import Todos from "$lib/Todos/Todos.svelte";

    // Done todos.
    let done: ITodos[] = [];

    // When the component is mounted take the todo list and set it in done (after filtering).
    onMount(() => {
        const unsubscribe = todosStore.subscribe((value) => {
            done = value.filter((item) => item.done === true);
        });

        // Unsubscribe from the store when the component is destroyed
        return unsubscribe;
    });

</script>

<!--Head of page-->
<Navbar active={2}/>
<Header len={done.length}/>
<!--Todo list with done tasks-->
<Todos todos={done} />