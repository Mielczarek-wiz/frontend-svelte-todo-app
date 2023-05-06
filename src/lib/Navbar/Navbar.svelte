<script lang="ts">
  import "./Navbar.css"

  // Information which tab is actually active
  export let active: number;

</script>

<!--Navbar for tabs-->
<nav class="navbar navbar-fixed-top">
    <ul class="nav nav-tabs">
      <li class={active === 1 ? "nav-item active" : "nav-item"}>
        <a href="/">All</a>
      </li>
      <li class={active === 2 ? "nav-item active" : "nav-item"}>
        <a href="/done">Done</a>
      </li>
      <li class={active === 3 ? "nav-item active" : "nav-item"}>
        <a href="/active">Active</a>
      </li>
    </ul>
</nav>