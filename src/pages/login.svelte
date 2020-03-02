<script>
  import user from "./user.js";
  let name = "John Doe";

  function handleSubmit() {
    user.login(name);
  }
</script>



<form on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={name} />
  <input type="submit" value="login">
</form>
