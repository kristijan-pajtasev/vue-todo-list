import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import ToDoItem from '@/components/ToDoItem/ToDoItem.vue'

const titleSelector = '[data-testid=ItemTitle]'

const mockTodo = {
  id: 1,
  title: 'Buy groceries',
  content: 'Milk, eggs, bread, and coffee',
  isCompleted: false,
}

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { id: String(mockTodo.id) } }),
  useRouter: () => ({ replace: vi.fn(), push: vi.fn() }),
}))

vi.mock('@/stores/toDoType.ts', () => ({
  useToDoStore: () => ({
    getItemById: vi.fn(() => mockTodo),
    updateTodo: vi.fn(),
    deleteTodo: vi.fn(),
  }),
}))

describe('ToDoItem', () => {
  test('to contain right title', () => {
    const wrapper = mount(ToDoItem, {
      global: {
        stubs: {
          RouterLink: true,
          ToDoListWithFilter: true,
        },
      },
    })

    expect(wrapper.find(titleSelector).text()).toContain(mockTodo.title)
  })
})
