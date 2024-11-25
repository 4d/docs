---
id: propertiesHierarchy
title: Hierarquia
---

## List box hierárquica

`List box de tipo array`

Essa propriedade especifica que o list box deve ser exibido em forma hierárquica. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#array-list-box), i.e. a collection.

Opções adicionais (**Variable 1...10**) estão disponíveis quando a opção *List box hierárquica* for selecionada, correspondendo a cada array *dataSource* para usar como quebra de coluna. A cada vez que um valor é digitado em um campo, uma nova linha é adicionada. Podem ser especificadas até 10 variáveis. Essas variáveis estabelecem os níveis hierárquicos a serem exibidos na primeira coluna.

Ver [List box hierárquicos](listbox_overview.md#hierarchical-list-boxes)

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                   |
| ---------- | ------------- | --------------------------------------------------- |
| datasource | array string  | Coleção de nomes de matriz que definem a hierarquia |

#### Objectos suportados

[List Box](listbox_overview.md)
