---
id: propertiesHierarchy
title: Hierarchy
---

## List box hierárquica

`Array type list boxes`

Essa propriedade especifica que o list box deve ser exibido em forma hierárquica. No formulário JSON essa funcionalidade é ativada [quando o *dataSource* valor de propriedade for um array](properties_Object.md#hierarchical-list-box), ou seja uma coleção.

Opções adicionais (**Variable 1...10**) estão disponíveis quando a opção *List box hierárquica* for selecionada, correspondendo a cada array *dataSource* para usar como quebra de coluna. A cada vez que um valor é digitado em um campo, uma nova linha é adicionada. Podem ser especificadas até 10 variáveis. Essas variáveis estabelecem os níveis hierárquicos a serem exibidos na primeira coluna.

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)

#### JSON Grammar

| Nome       | Tipo de dados | Possible Values                                  |
| ---------- | ------------- | ------------------------------------------------ |
| datasource | string array  | Collection of array names defining the hierarchy |

#### Objects Supported

[List Box](listbox_overview.md)
