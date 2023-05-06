<script lang="ts">
    import Navbar from "$lib/Navbar/Navbar.svelte";
    import Header from "$lib/Header/Header.svelte";
    import { todosStore } from "../../store/store";
    import type { ITodos } from "$lib/Models/models";
    import { onMount } from "svelte";
    import Todos from "$lib/Todos/Todos.svelte";

    let done: ITodos[] = [];

    onMount(() => {
        const unsubscribe = todosStore.subscribe((value) => {
            done = value.filter((item) => item.done === true);
        });

        // Unsubscribe from the store when the component is destroyed
        return unsubscribe;
    });

</script>
  
<Navbar active={2}/>
<Header len={done.length}/>
<Todos todos={done} />