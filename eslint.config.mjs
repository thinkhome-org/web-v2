import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Enforce centralized Tabler icons import via `@/components/ui`
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@tabler/icons-react",
              message:
                "Importujte ikony přes `import { Icons } from '@/components/ui'` místo přímého importu z '@tabler/icons-react'.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/components/ui/index.ts"],
    rules: {
      // Allow central barrel to import Tabler directly
      "no-restricted-imports": "off",
    },
  },
];

export default eslintConfig;
