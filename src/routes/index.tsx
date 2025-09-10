import { createFileRoute } from '@tanstack/react-router'
import { Start } from '@pages/Start'

export const Route = createFileRoute('/')({
  component: () => <Start/>
})