import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';
import { z } from 'zod';

export async function readYamlArray<T = unknown>(relativePath: string): Promise<T[]> {
  const file = path.join(process.cwd(), 'src', 'content', relativePath);
  const raw = await fs.readFile(file, 'utf8');
  const data = parse(raw);
  if (!Array.isArray(data)) return [];
  return data as T[];
}

export async function readYamlObject<T = unknown>(relativePath: string): Promise<T | null> {
  const file = path.join(process.cwd(), 'src', 'content', relativePath);
  const raw = await fs.readFile(file, 'utf8');
  const data = parse(raw);
  if (data && typeof data === 'object' && !Array.isArray(data)) return data as T;
  return null;
}

export const serviceSchema = z.object({
  title: z.string(),
  desc: z.string(),
  slug: z.string().optional(),
  intro: z.string().optional(),
  steps: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
  projects: z.array(z.string()).optional(),
});
export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  email: z.string().email().optional(),
  image: z.string().optional(),
  links: z.object({ linkedin: z.string().url().optional(), github: z.string().url().optional() }).optional(),
  slug: z.string().optional(),
  bio: z.string().optional(),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()).optional(),
  services: z.array(z.string()).optional(),
});
export const projectSchema = z.object({
  title: z.string(),
  desc: z.string(),
  url: z.string().url().optional(),
  tags: z.array(z.string()).optional(),
  slug: z.string().optional(),
  summary: z.string().optional(),
  images: z.array(z.string()).optional(),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  authors: z.array(z.string()).optional(),
});

export type Service = z.infer<typeof serviceSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Project = z.infer<typeof projectSchema>;

export async function readValidatedArray<T>(relativePath: string, schema: z.ZodType<T>): Promise<T[]> {
  const items = await readYamlArray<unknown>(relativePath);
  const out: T[] = [];
  for (const it of items) {
    const parsed = schema.safeParse(it);
    if (parsed.success) out.push(parsed.data);
  }
  return out;
}


