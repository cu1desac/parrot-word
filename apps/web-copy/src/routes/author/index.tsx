import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/author/')({
  component: () => <div>Hello /author/!</div>
})
