<script>
  import Login from "./login.svelte";
  import user from "./user.js";
  import { writable } from "svelte/store";
  
  user.authenticate();
</script>

<style>
  button {
    position: absolute;
    top: 16px;
    right: 32px;
  }
</style>

{#if !$user}
  <!-- If no user was not signed in, present the login page -->
  <Login />
{:else}
  <!-- If a user is signed in, show the nested layouts and pages -->
  <button on:click={user.logout}>Logout</button>
  <slot />
{/if}
