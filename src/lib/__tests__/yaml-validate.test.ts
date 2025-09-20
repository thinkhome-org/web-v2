import { readYamlArray, readValidatedArray, serviceSchema, teamMemberSchema } from '@/lib/yaml';

describe('yaml validated loader', () => {
  test('services.yaml validates against serviceSchema', async () => {
    const raw = await readYamlArray('services.yaml');
    const validated = await readValidatedArray('services.yaml', serviceSchema);
    expect(validated.length).toBeGreaterThan(0);
    expect(validated.length).toBe(raw.length);
  });

  test('team.yaml validates against teamMemberSchema', async () => {
    const raw = await readYamlArray('team.yaml');
    const validated = await readValidatedArray('team.yaml', teamMemberSchema);
    expect(validated.length).toBeGreaterThan(0);
    expect(validated.length).toBe(raw.length);
  });
});


