import type { ITodos } from '$lib/Models/models';
import { writable } from 'svelte/store';

// Declare a writable store for name
export const nameStore = writable<string>('Damiaś');

// Declare a writable store for todos
export const todosStore = writable<ITodos[]>([]);

