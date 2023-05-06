<script lang="ts">
    import type { ITodo, ITodos } from '$lib/Models/models';
    import { form, field } from 'svelte-forms';
    import { required } from 'svelte-forms/validators';
    import { todosStore } from '../../store/store';
  
    export let callPost: (param: ITodo) => Promise<ITodos[]>;

    const newTodo = field('newTodo', '', [required()]);
    const newTodoForm = form(newTodo);


    const handleSubmit = async () => {
      if ($newTodoForm.valid) {
        try {
          const newTodoValue = {text: $newTodo.value} as ITodo ;
          const res = await callPost(newTodoValue);
          todosStore.set(res);
          $newTodo.value = '';
        } catch (error) {
          console.error(error);
        }
        
      }
    }

</script>

<section id="todo-form" class="row">
    <div class="col-sm-8 col-sm-offset-2 text-center">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <input id="newTodo" type="text" class="form-control input-lg text-center" placeholder="co jeszcze chcesz zrobić?" required={true} bind:value={$newTodo.value}/>
        </div>
        <button type="submit" class="btn btn-primary btn-lg" disabled={!$newTodoForm.valid} >Dodaj</button>
      </form>
    </div>
</section>