<script lang="ts">
    import {nameStore} from "../../store/store"

    const handleClick = (event: any) => {
        nameStore.set(event.target.value)
    }
</script>

<footer id="todo-form" class="row">
    <div class="col-sm-8 col-sm-offset-2 text-center">
        <input type="text" class="form-control" on:input={handleClick} bind:value={$nameStore}/>
    </div>
</footer>