import { readYamlArray, readYamlObject } from '@/lib/yaml';

describe('yaml loader', () => {
  test('loads services.yaml as array of items', async () => {
    const services = await readYamlArray<{ title: string; desc: string }>('services.yaml');
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
    expect(services[0]).toHaveProperty('title');
  });

  test('loads contacts.yaml as object', async () => {
    const contacts = await readYamlObject<{ email?: string; phone?: string }>('contacts.yaml');
    expect(contacts).not.toBeNull();
    if (contacts?.email) {
      expect(contacts.email).toMatch(/@/);
    }
  });
});


