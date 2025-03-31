---
id: propertiesRangeOfValues
title: Gama de valores
---

## Valor padrão

É possível atribuir um valor proposto a ser introduzido num objeto de entrada. Esta propriedade é útil, por exemplo, quando a entrada [data source](properties_Object.md#variable-or-expression) é um campo: o valor padrão é inserido quando um novo registro é exibido pela primeira vez. Você pode alterar o valor, a menos que a área de entrada tenha sido definida como [não entrável](properties_Entry.md#enterable).

O valor padrão só poderá ser usado se o [tipo de fonte de dados](properties_Object.md#expression-type) for:

- text/string
- number/integer
- date
- time
- boolean

4D fornece carimbos para gerar valores padrão para a data, hora e número de sequência. A data e a hora são retiradas da data e da hora do sistema. 4D gera automaticamente os números de sequência necessários. A tabela abaixo mostra o carimbo a ser usado para gerar valores padrão automaticamente:

| Stamp | Significado         |
| ----- | ------------------- |
| #D    | Data actual         |
| #H    | Hora actual         |
| #N    | Número de sequência |

É possível usar um número de sequência para criar um número exclusivo para cada registro na tabela do arquivo de dados atual. Um número de sequência é um longint gerado para cada novo registo. Os números começam em um (1) e aumentam gradualmente em um (1). Um número de sequência nunca é repetido, mesmo que o registro ao qual foi atribuído seja excluído da tabela. Cada tabela tem o seu próprio contador interno de números de sequência. Para obter mais informações, consulte o parágrafo [Autoincremento](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029).

> Não faça confusão entre esta propriedade e a propriedade "[valores padrão](properties_DataSource.md#default-list-of-values)" que permite preencher uma coluna list box com valores estáticos.

#### Gramática JSON

| Nome         | Tipo de dados                       | Valores possíveis                                                |
| ------------ | ----------------------------------- | ---------------------------------------------------------------- |
| defaultValue | string, number, date, time, boolean | Qualquer valor e/ou um carimbo: "#D", "#H", "#N" |

#### Objectos suportados

[Entrada](input_overview.md)

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

Restringe as entradas válidas aos itens da lista. Por exemplo, talvez você queira usar uma lista obrigatória para títulos de cargos, de modo que as entradas válidas sejam limitadas a títulos que tenham sido aprovados pela gerência.

Tornar uma lista obrigatória não apresenta automaticamente a lista quando o campo é selecionado. Se você deseja exibir a lista obrigatória, atribua a mesma lista à propriedade [Lista de opções](properties_DataSource.md#choice-list).
No entanto, ao contrário da propriedade [Lista de opções](properties_DataSource.md#choice-list) quando uma lista é definida, a entrada de teclado não é mais possível, apenas a seleção de um valor da lista usando o menu pop-up é permitida. Se listas diferentes forem definidas usando as propriedades da [Lista de Opções](properties_DataSource.md#choice-list) e da Lista exigida, a propriedade da Lista obrigatória tem prioridade.

> Se uma lista especificada for hierárquica, apenas os itens do primeiro nível são tidos em conta.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                  |
| ------------ | ------------- | -------------------------------------------------- |
| requiredList | lista         | Uma lista de valores obrigatórios. |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)
