<script lang="ts">
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import Header from "$lib/Header/Header.svelte";
  import { todosStore } from "../../store/store";
  import type { ITodos } from "$lib/Models/models";
  import { onMount } from "svelte";
  import Todos from "$lib/Todos/Todos.svelte";
  
  let active: ITodos[] = [];

  onMount(() => {
    const unsubscribe = todosStore.subscribe((value) => {
      active = value.filter((item) => item.done === false);
    });

    // Unsubscribe from the store when the component is destroyed
    return unsubscribe;
  });

</script>

<Navbar active={3}/>
<Header len={active.length}/>
<Todos todos={active} />