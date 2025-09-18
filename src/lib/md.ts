import { marked } from 'marked';

export function renderMarkdown(md: string): string {
  return marked.parse(md, { mangle: false, headerIds: false }) as string;
}


