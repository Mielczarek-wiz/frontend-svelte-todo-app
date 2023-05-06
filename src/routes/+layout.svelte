<script lang="ts">
    import { _callPost } from "../api/api";
    import Form from "$lib/Form/Form.svelte";
    import Footer from "$lib/Footer/Footer.svelte";
    import type { ITodos } from '$lib/Models/models';
    import { todosStore } from "../store/store";
  
    export let data: any;
    
    todosStore.set(Object.keys(data).map( (key:any) => { return data[key]; }) as ITodos[]);


</script>



<section>
    <slot />
</section>

<Form callPost={_callPost}/>
<Footer />