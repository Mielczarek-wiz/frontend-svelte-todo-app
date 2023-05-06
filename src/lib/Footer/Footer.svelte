<script lang="ts">
    import {nameStore} from "../../store/store"

    // Function for handling changing input for name
    const handleInput = (event: any) => {
        nameStore.set(event.target.value)
    }
</script>

<!--Footer with input for name-->
<footer id="todo-form" class="row">
    <div class="col-sm-8 col-sm-offset-2 text-center">
        <!--Input for name with binded value of store-->
        <input type="text" class="form-control" on:input={handleInput} bind:value={$nameStore}/>
    </div>
</footer>