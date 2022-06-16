<script lang="ts">
  import { Link, useLocation } from "svelte-navigator";

  export let extraClasses: string = "";
  export let to: string;
  export let label: string;
  export let counter: number;
  export let faIcon: string;

  const location = useLocation();

  function getProps({ href, isPartiallyCurrent, isCurrent }: Link.GetPropsParams) {
    const isActive = href === $location.pathname;
    if (isActive && href === "/") {
      return { class: `router-link text-white bg-blue-600 ${extraClasses}` };
    }
    if (isActive && href === "/scheduled") {
      return { class: `router-link text-white bg-red-600 ${extraClasses}` };
    }
    if (isActive && href === "/all") {
      return { class: `router-link text-white bg-gray-600 ${extraClasses}` };
    }
    return { class: `router-link ${extraClasses}` };
  }
</script>

<Link {to} {getProps}>
  <div class="row">
    <div class="icon">
      <i class={faIcon} />
    </div>
    <div class="counter">{counter}</div>
  </div>
  <div class="label">{label}</div>
</Link>

<style lang="postcss">
  :global(.router-link) {
    @apply bg-base-300 rounded-xl p-4 transition duration-300;
  }
  :global(.router-link:hover) {
    @apply scale-105 shadow-xl;
  }
  .icon {
    @apply float-left text-2xl;
  }
  .row {
    @apply flow-root;
  }
  .counter {
    @apply float-right text-2xl font-bold;
  }
  .label {
    @apply font-semibold;
  }
</style>
