export enum LanguageTypes {
  int = "int",
  string = "string",
  object = "object",
  struct = "struct",
  action = "action",
  effect = "effect",
  event = "event",
  float = "float",
  itemproperty = "itemproperty",
  location = "location",
  talent = "talent",
  vector = "vector",
  void = "void",
  json = "json",
  sqlquery = "sqlquery",
  cassowary = "cassowary",
  none = "none",
}

export enum LanguageScopes {
  includeDeclaration = "meta.preprocessor.include.nss",
  structIdentifier = "storage.type.struct-defined.nss",
  structProperty = "entity.other.attribute-name.nss",
  variableIdentifer = "variable.language.nss",
  constantIdentifer = "constant.language.nss",
  type = "storage.type.built-in.nss",
  separatorStatement = "punctuation.separator.delimiter.nss",
  terminatorStatement = "punctuation.terminator.statement.nss",
  dotAccessStatement = "punctuation.separator.dot-access.nss",
  commentStatement = "punctuation.definition.comment.nss",
  assignationStatement = "keyword.operator.assignment.nss",
  functionIdentifier = "entity.name.function.nss",
  functionCall = "meta.function-call.nss",
  functionDeclaration = "meta.function.nss",
  functionParameter = "variable.parameter.nss",
  block = "meta.block.nss",
  blockDeclaraction = "punctuation.section.block.begin.bracket.curly.nss",
  blockTermination = "punctuation.section.block.end.bracket.curly.nss",
  leftRoundBracket = "punctuation.section.arguments.begin.bracket.round.nss",
}