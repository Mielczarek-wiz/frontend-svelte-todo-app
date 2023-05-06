<script lang="ts">
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import Header from "$lib/Header/Header.svelte";
  import { todosStore } from "../store/store";
  import { onMount } from "svelte";
  import type { ITodos } from "$lib/Models/models";
  import Todos from "$lib/Todos/Todos.svelte";

  let all: ITodos[] = [];

  onMount(() => {
    const unsubscribe = todosStore.subscribe((value) => {
      all = value;
    });

    // Unsubscribe from the store when the component is destroyed
    return unsubscribe;
  });
  
</script>

<Navbar active={1}/>
<Header len={all.length}/>
<Todos todos={all} />