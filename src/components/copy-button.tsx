'use client'

import { Button } from '@/components/ui/button'
import { IconCopy } from '@tabler/icons-react'
import { useToast } from '@/components/ui/toast-provider'

interface Props {
  value: string
  label?: string
  className?: string
  children?: React.ReactNode
}

export default function CopyButton({ value, label = 'Zkopírováno', className = '', children }: Props) {
  const { show } = useToast()
  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      show({ title: 'Zkopírováno', description: label, variant: 'success' })
    })
  }
  return (
    <Button variant="secondary" size="sm" onClick={handleCopy} leftIcon={<IconCopy size={16} />} className={className}>
      {children || 'Kopírovat'}
    </Button>
  )
}


