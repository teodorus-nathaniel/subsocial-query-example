import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://squid.subsquid.io/subsocial/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/services/squid/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
