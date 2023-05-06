<script lang="ts">
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import Header from "$lib/Header/Header.svelte";
  import { todosStore } from "../store/store";
  import { onMount } from "svelte";
  import type { ITodos } from "$lib/Models/models";
  import Todos from "$lib/Todos/Todos.svelte";

  // All todos.
  let all: ITodos[] = [];

  // When the component is mounted take the todo list and set it in all.
  onMount(() => {
    const unsubscribe = todosStore.subscribe((value) => {
      all = value;
    });

    // Unsubscribe from the store when the component is destroyed
    return unsubscribe;
  });
  
</script>

<!--Head of page-->
<Navbar active={1}/>
<Header len={all.length}/>
<!--Todo list-->
<Todos todos={all} />