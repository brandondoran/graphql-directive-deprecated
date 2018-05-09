import { SchemaDirectiveVisitor } from 'graphql-tools';
import { DeprecatedDirective } from '../src/deprecated-directive';

describe('DeprecatedDirective', () => {
  let directive;
  let config;
  let field;

  beforeEach(() => {
    field = {};
    config = {
      args: {
        reason: 'test reason'
      }
    };
    directive = new DeprecatedDirective(config);
  });

  it('should be an instance of SchemaDirectiveVisitor', () => {
    expect(directive).toBeInstanceOf(SchemaDirectiveVisitor);
  });

  describe('visitFieldDefinition', () => {
    it("should set the field's is deprecated to true", () => {
      directive.visitFieldDefinition(field);
      expect(field.isDeprecated).toEqual(true);
    });

    it("should set the field's deprecation reason", () => {
      directive.visitFieldDefinition(field);
      expect(field.deprecationReason).toEqual('test reason');
    });
  });

  describe('visitEnumValue', () => {
    it("should set the enum value's is deprecated to true", () => {
      directive.visitEnumValue(field);
      expect(field.isDeprecated).toEqual(true);
    });

    it("should set the enum value's deprecation reason", () => {
      directive.visitEnumValue(field);
      expect(field.deprecationReason).toEqual('test reason');
    });
  });
});
