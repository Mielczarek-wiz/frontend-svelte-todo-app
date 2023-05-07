<script lang="ts">
    import type { ITodo, ITodos } from '$lib/Models/models';
    import { _callPost } from "../../api/api";
    import { form, field } from 'svelte-forms';
    import { required } from 'svelte-forms/validators';
    import { todosStore } from '../../store/store';

    // Using svelte-forms to operate form. Text for task is required.
    const newTodo = field('newTodo', '', [required()]);

    // Creating new form.
    const newTodoForm = form(newTodo);

    // Function for handling submiting form (if it is valid => name is not empty)
    const handleSubmit = async () => {
      if ($newTodoForm.valid) {
        try {
          // Getting text from input
          const newTodoValue = {text: $newTodo.value} as ITodo;

          // Calling axios request from api file for adding new task.
          const res = await _callPost(newTodoValue);

          // Setting new tasks to store.
          todosStore.set(res);

          // Updating new value to empty string.
          $newTodo.value = '';
        } catch (error) {
          // When something went wrong console log the error.
          console.error(error);
        }
        
      }
    }

</script>

<!--Form for adding new task-->
<section id="todo-form" class="row">
    <div class="col-sm-8 col-sm-offset-2 text-center">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <!--Input for text of new task-->
          <input id="newTodo" type="text" class="form-control input-lg text-center" placeholder="co jeszcze chcesz zrobić?" required={true} bind:value={$newTodo.value}/>
        </div>
        <!--Button for submiting-->
        <button type="submit" class="btn btn-primary btn-lg" disabled={!$newTodoForm.valid} >Dodaj</button>
      </form>
    </div>
</section>