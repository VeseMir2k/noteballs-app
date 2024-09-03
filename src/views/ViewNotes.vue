<template>
  <div class="notes">
    <div class="card has-background-primary-20 p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-primary"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
  // ~ imports
  import { ref } from 'vue'
  import Note from '@/components/Notes/Note.vue'

  // ~ notes
  const newNote = ref('')
  const newNoteRef = ref(null)

  const notes = ref([
    {
      id: 'id1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure voluptate quos fugiat consectetur! Reprehenderit exercitationem facere voluptatibus fugiat quam dolore molestiae esse quos! Esse vitae facere sapiente error recusandae!',
    },
    {
      id: 'id2',
      content: 'This is a shorter note! Woo!',
    },
  ])

  const addNote = () => {
    let currenDate = new Date().getTime(),
      id = currenDate.toString()

    let note = {
      id,
      content: newNote.value,
    }

    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
  }

  // ~ delete note
  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => note.id !== idToDelete)
  }
</script>
