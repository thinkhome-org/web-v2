import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

export async function readYamlArray<T = unknown>(relativePath: string): Promise<T[]> {
  const file = path.join(process.cwd(), 'src', 'content', relativePath);
  const raw = await fs.readFile(file, 'utf8');
  const data = parse(raw);
  if (!Array.isArray(data)) return [];
  return data as T[];
}


