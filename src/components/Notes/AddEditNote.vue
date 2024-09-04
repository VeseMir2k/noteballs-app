<template>
  <div class="card has-background-primary-20 p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          class="textarea"
          placeholder="Add a new note"
          ref="textareaRef"
          @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
  // ~ imports
  import { ref } from 'vue'

  // ~ props
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
  })

  // ~ emits
  const emit = defineEmits(['update:modelValue'])

  // ~ focus textarea
  const textareaRef = ref(null)

  const focusTextarea = () => {
    textareaRef.value.focus()
  }

  defineExpose({
    focusTextarea,
  })
</script>
