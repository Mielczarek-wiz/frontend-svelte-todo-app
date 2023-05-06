<script lang="ts">
    import {nameStore} from "./../../store/store"

    // Information how many task is on the tab
    export let len: number = 0;
</script>

<!--Special header with name and how many tasks information-->
<header class="jumbotron text-center">
    <h1>nodeTODO {$nameStore} <span class="label label-info">{len}</span></h1>
</header>