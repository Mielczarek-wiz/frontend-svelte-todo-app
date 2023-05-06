<script lang="ts">
    import {nameStore} from "./../../store/store"

    export let len: number = 0;
</script>

<header class="jumbotron text-center">
    <h1>nodeTODO {$nameStore} <span class="label label-info">{len}</span></h1>
</header>