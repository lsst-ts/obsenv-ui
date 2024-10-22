import { Suspense } from 'react'
import Form from '@/app/ui/change/form'

const Change = () => {
  return (
    <main>
      <Suspense>
        <Form />
      </Suspense>
    </main>
  )
}

export default Change
