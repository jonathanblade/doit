<script lang="ts">
  import { Route, useLocation } from "svelte-navigator";

  export let path: string;
  export let category: string;

  const location = useLocation();

  function getHeaderStyle() {
    if ($location.pathname === "/") {
      return "text-6xl font-bold text-blue-600";
    }
    if ($location.pathname === "/scheduled") {
      return "text-6xl font-bold text-red-600";
    }
    if ($location.pathname === "/all") {
      return "text-6xl font-bold text-gray-600";
    }
  }
</script>

<Route {path}>
  <h1 class={getHeaderStyle()}>{category}</h1>
  <div class="flex border-b py-4">
    <input type="checkbox" class="checkbox" />
    <label for="checkbox" class="ml-2">Kill yourself.</label>
  </div>
  <div class="flex border-b py-4">
    <input type="checkbox" class="checkbox" />
    <label for="checkbox" class="ml-2">Kill yourself.</label>
  </div>
  <div class="flex border-b py-4">
    <input type="checkbox" class="checkbox" />
    <label for="checkbox" class="ml-2">Kill yourself.</label>
  </div>
</Route>
