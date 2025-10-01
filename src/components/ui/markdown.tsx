import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  children: string
  className?: string
}

export function Markdown({ children, className }: MarkdownProps) {
  return (
    <ReactMarkdown className={className} remarkPlugins={[remarkGfm]}>
      {children}
    </ReactMarkdown>
  )
}


