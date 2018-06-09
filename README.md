[![Build Status](https://travis-ci.com/brandondoran/graphql-directive-deprecated.svg?branch=master)](https://travis-ci.com/brandondoran/graphql-directive-deprecated)
[![Coverage Status](https://coveralls.io/repos/github/brandondoran/graphql-directive-deprecated/badge.svg?branch=master)](https://coveralls.io/github/brandondoran/graphql-directive-deprecated?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

When writing a GraphQL schema with the [Schema Definition Language](https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0/), some flexibility, such as
adding a `deprecationReason` to a field is lost. This package implements a custom directive
to make it possible to deprecate a field or enum. This is intended for use in [Apollo Server](https://github.com/apollographql/apollo-server) that builds the schema with [graphql-tools](https://github.com/apollographql/graphql-tools). See the [Apollo graphql-tools docs](https://www.apollographql.com/docs/graphql-tools/schema-directives.html) for more information on schema directives.

# Usage

```bash
npm install graphql-directive-deprecated
```

## Example

```javascript
import { makeExecutableSchema } from 'graphql-tools';
import { DeprecatedDirective } from 'graphql-directive-deprecated';

const typeDefs = `
  directive @deprecated(
    reason: String = "No longer supported"
  ) on FIELD_DEFINITION | ENUM_VALUE

  type ExampleType {
    newField: String
    oldField: String @deprecated(reason: "Use newField.")
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  schemaDirectives: {
    deprecated: DeprecatedDirective
  }
});
```
