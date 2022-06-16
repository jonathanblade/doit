<script lang="ts">
  import { Router } from "svelte-navigator";

  import RouterLink from "./RouterLink.svelte";
  import RouterView from "./RouterView.svelte";
  import { TodoListCategory } from "../types";
</script>

<Router>
  <div class="p-4 md:grid md:grid-cols-3 md:gap-4">
    <div class="hidden md:block">
      <div class="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Search" class="input input-sm bg-base-200 col-span-2 w-full" />
        <RouterLink to={"/"} label={"Today"} counter={1} faIcon={"fa-solid fa-calendar-day"} />
        <RouterLink to={"/scheduled"} label={"Scheduled"} counter={1} faIcon={"fa-solid fa-calendar-days"} />
        <RouterLink extraClasses="col-span-2" to={"/all"} label={"All"} counter={1} faIcon={"fa-solid fa-database"} />
      </div>
    </div>
    <div class="md:col-span-2">
      <RouterView path={"/"} category={TodoListCategory.Today} />
      <RouterView path={"/scheduled"} category={TodoListCategory.Scheduled} />
      <RouterView path={"/all"} category={TodoListCategory.All} />
    </div>
  </div>
</Router>
