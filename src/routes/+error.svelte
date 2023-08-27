<script>
  import { page } from '$app/stores';
</script>


<div class="container mx-auto flex h-full flex-col justify-center items-center gap-4">
  <h1 class="h1 text-5xl">{$page.status}: {$page.error?.message}</h1>
  <h2 class="h2 text-3xl">oh no 😱</h2>
</div>
