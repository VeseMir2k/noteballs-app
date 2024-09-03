<template>
  <div class="notes">
    <div class="card has-background-primary-20 p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Add a new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-primary">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div
      v-for="i in 3"
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          voluptas? Quia incidunt totam laboriosam porro quidem tenetur quaerat,
          reprehenderit veritatis aperiam fugit vitae, et nihil necessitatibus
          hic fuga omnis ducimus.
        </div>
      </div>
      <footer class="card-footer">
        <a
          href="#"
          class="card-footer-item"
          >Edit</a
        >
        <a
          href="#"
          class="card-footer-item"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>
