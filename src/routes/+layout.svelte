<script lang="ts">
    import { _callPost } from "../api/api";
    import Form from "$lib/Form/Form.svelte";
    import Footer from "$lib/Footer/Footer.svelte";
    import type { ITodos } from '$lib/Models/models';
    import { todosStore } from "../store/store";
    
    // Get the data from load function from +layout.ts
    export let data: any;
    
    // Set it in the correct format in the store
    todosStore.set(Object.keys(data).map( (key:any) => { return data[key]; }) as ITodos[]);


</script>


<!--Here are the Navbar, Header and Todo list -->
<section>
    <slot />
</section>

<!--Form for adding new todo-->
<Form callPost={_callPost}/>

<!--Fotter with input for name-->
<Footer />