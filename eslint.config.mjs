/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatCompat } from '@eslint/eslintrc';
// eslint-disable-next-line import/no-extraneous-dependencies
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const dirname = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory: dirname, recommendedConfig: pluginJs.configs.recommended });

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('standard-with-typescript'),
  pluginReactConfig,
];
