---
id: propertiesPlugIns
title: Plug-ins
---

## Propriedades avançadas

Si las opciones avanzadas son proporcionadas por el autor del plug-in, un botón **Propiedades avanzadas** puede ser activado en la lista de propiedades. Nesse caso, você pode clicar nesse botão para definir essas opções, geralmente por uma caixa de diálogo personalizada.

Como o recurso de propriedades avançadas está sob o controle do autor do plug-in, as informações sobre essas opções avançadas são de responsabilidade do distribuidor do plug-in.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis                                                                                                                                                                                  |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customProperties | text          | Propriedades específicas do plug-in, passadas para o plug-in como uma cadeia de caracteres JSON, se for um objeto, ou como um buffer binário, se for uma cadeia de caracteres codificada em base64 |

#### Objectos suportados

[Área de Plug-in](pluginArea_overview.md)
