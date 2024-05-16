---
id: propertiesRangeOfValues
title: Gama de valores
---

## Valor padrão

É possível atribuir um valor proposto a ser introduzido num objeto de entrada. Esta propiedad es útil, por ejemplo, cuando la entrada [fuente de datos](properties_Object.md#variable-or-expression) es un campo: el valor por defecto se introduce cuando se muestra un nuevo registro por primera vez. Puede cambiar el valor a menos que el área de entrada se haya definido como [no editable](properties_Entry.md#enterable).

El valor por defecto sólo puede utilizarse si el [tipo de fuente de datos](properties_Object.md#expression-type) es:

- text/string
- number/integer
- date
- time
- boolean

4D provides stamps for generating default values for the date, time, and sequence number. A data e a hora são retiradas da data e da hora do sistema. 4D gera automaticamente os números de sequência necessários. The table below shows the stamp to use to generate default values automatically:

| Stamp | Significado         |
| ----- | ------------------- |
| #D    | Data actual         |
| #H    | Hora actual         |
| #N    | Número de sequência |

You can use a sequence number to create a unique number for each record in the table for the current data file. Um número de sequência é um longint gerado para cada novo registo. Os números começam em um (1) e aumentam gradualmente em um (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Cada tabela tem o seu próprio contador interno de números de sequência. Para más información, consulte el párrafo [Autoincremento](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029).

> No hay que confundir esta propiedad con la propiedad "valores por defecto" que permite llenar una columna list box con valores estáticos.

#### Gramática JSON

| Nome         | Tipo de dados                       | Valores possíveis                                                |
| ------------ | ----------------------------------- | ---------------------------------------------------------------- |
| defaultValue | string, number, date, time, boolean | Qualquer valor e/ou um carimbo: "#D", "#H", "#N" |

#### Objectos suportados

[Input](input_overview.md)

---

## Lista de excluídos

Permite definir uma lista cujos valores não podem ser introduzidos no objeto. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                               |
| ------------ | ------------- | ----------------------------------------------- |
| excludedList | lista         | Uma lista de valores a excluir. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)

---

## Lista obrigatória

Restringe as entradas válidas aos itens da lista. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Tornar uma lista obrigatória não apresenta automaticamente a lista quando o campo é selecionado. Si desea mostrar la lista requerida, asigne la misma lista a la propiedad [Lista de opciones](properties_DataSource.md#choice-list).
Sin embargo, a diferencia de la propiedad [Lista de selección](properties_DataSource.md#choice-list), cuando se define una lista requerida, ya no es posible la introducción mediante el teclado, sólo se permite la selección de un valor de la lista mediante Si se definen diferentes listas utilizando las propiedades [Lista de selección](properties_DataSource.md#choice-list) y Lista requerida, la propiedad Lista requerida tiene prioridad.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                  |
| ------------ | ------------- | -------------------------------------------------- |
| requiredList | lista         | Uma lista de valores obrigatórios. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)
