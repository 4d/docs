---
id: propertiesDataSource
title: Fonte de dados
---

## Inserção automática

Quando esta opção é selecionada, se usuário insere um valor que não é encontrado na lista associada ao objeto, este valor é automaticamente adicionado à lista armazenada na memória.

Quando a opção **inserção automática** não está definida (padrão), o valor inserido é armazenado no objeto formulário, mas não na lista na memória.

Esta propriedade é suportada por:

- os objetos de formulário [Combo box](comboBox_overview.md) e [colunas de list box](listbox_overview.md#list-box-columns) associados a uma lista de opções.
- os [Combo box](comboBox_overview.md) cuja lista associada é preenchida por seu array ou objeto datasource.

Por exemplo, dada uma lista de opções contendo "França, Alemanha, Itália" que está associada a um combo box "Countries": se a propriedade **inserção automática** estiver definida e um usuário digitar "Espanha", o valor "Espanha" será automaticamente adicionado à lista na memória:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> Se a lista de opções tiver sido criada a partir de uma lista definida no modo Desenho, a lista original não será modificada.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| automaticInsertion | boolean       | true, false       |

#### Objectos suportados

[Combo Bo](comboBox_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns)

---

## Lista de escolha

Associa uma lista de opções a um objeto. Pode ser um nome da lista de opções (uma referência da lista) ou uma coleção de valores padrão.

Você também pode associar listas de opções a objetos usando os comandos [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) ou [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html).

#### Gramática JSON

| Nome       | Tipo de dados     | Valores possíveis                                           |
| ---------- | ----------------- | ----------------------------------------------------------- |
| choiceList | liste, collection | Uma lista de valores possíveis                              |
| lista      | liste, collection | Uma lista de valores possíveis (apenas listas hierárquicas) |

#### Objectos suportados

[Lista suspensa](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Lista Hierárquica](list_overview.md) - [Coluna](listbox_overview.md#list-box-columns)

---

## Lista de opções (lista estática)

Lista de valores estáticos a serem usados como etiquetas para o objeto de controle de tabulação.

#### Gramática JSON

| Nome   | Tipo de dados     | Valores possíveis                                          |
| ------ | ----------------- | ---------------------------------------------------------- |
| labels | liste, collection | Uma lista de valores para preencher o controlo de pestanas |

#### Objectos suportados

[Controles das Abas](tabControl.md)

---

## Item atual

`List box de tipo collection ou entity selection`

Especifica uma variável ou expressão a que será atribuído o elemento/entidade da coleção selecionada pelo usuário. Você deve usar uma variável objeto ou uma expressão atribuível que aceita objetos. Se o usuário não selecionar nada ou se você usou uma coleção de valores escalares, o valor Null é atribuído.
> Esta propriedade é "somente leitura", é atualizada automaticamente conforme as ações do usuário list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis    |
| ----------------- | ------------- | -------------------- |
| currentItemSource | string        | Expressão de objecto |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Posição item atual

`List box de tipo collection ou entity selection`

Especifica uma variável ou expressão a que será atribuída uma longa indicando a posição do elemento/entidade da coleção selecionada pelo usuário.

- se nenhum elemento/entidade for selecionado, a variável ou expressão recebe zero,
- se um único elemento/entidade for selecionado, a variável ou expressão recebe seu local,
- se vários elementos/entidades forem selecionados, a variável ou expressão recebe a posição do elemento/entidade que foi selecionado pela última vez.
> Esta propriedade é "somente leitura", é atualizada automaticamente conforme as ações do usuário list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome                      | Tipo de dados | Valores possíveis  |
| ------------------------- | ------------- | ------------------ |
| currentItemPositionSource | string        | Expressão numérica |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Tipo de dados

Define o tipo de dados para a expressão apresentada. Esta propriedade é utilizada com:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list).
- Naturally, the value entered must not belong to the list of [excluded values](properties_RangeOfValues.md#excluded-list) associated with the object, if one has been set.

Please refer to [Expression Type](properties_Object.md#expression-type) section.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis                                  |
| ------------------ | ------------- | -------------------------------------------------- |
| dataSourceTypeHint | string        | <li>**columnas list box:** "boolean", "number", "picture", "text", date", "time". *Apenas para Array/seleção list box*: "integer", "object"</li><li>**listas pendentes:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li> |

#### Objectos suportados

[Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Tipo de dados (lista)

Define o tipo de dados a guardar no campo ou na variável associada à [lista pendente](dropdownList_Overview.md). Esta propriedade é utilizada com:

- Listas suspensas [associadas a uma lista de opções](dropdownList_Overview.md#using-a-choice-list).
- Listas suspensas [associadas a uma lista de opções hierárquica](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Estão disponíveis três opções:

- **Referência de lista**: declara que a lista suspensa é hierárquica. Isso significa que a lista suspensa pode exibir até dois níveis hierárquicos e seu conteúdo pode ser gerenciado pelos comandos de linguagem 4D do tema **Listas hierárquicas**.
- **Valor do item selecionado** (padrão): a lista suspensa não é hierárquica e o valor do item escolhido na lista pelo usuário é salvo diretamente. Por exemplo, se o usuário escolher o valor "Azul", esse valor será salvo no campo.
- **Referência do item selecionado**: a lista suspensa não é hierárquica e a referência do item da lista de opções é salva no objeto. Esta referência é o valor numérico associado a cada item, quer através do parâmetro *itemRef* dos comandos [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) ou [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html), quer no editor de listas. Esta opção permite otimizar o uso de memória: armazenar valores numéricos em campos usa menos espaço do que armazenar frases. Também facilita traduzir aplicações: você apenas cria listas múltiplas em diferentes línguas, mas com referências do mesmo item, depois carregar a lista com base no idioma da aplicação.

O uso da opção **Referência de item selecionado** exige a conformidade com os seguintes princípios:

- Para poder armazenar a referência, a fonte de dados do campo ou da variável deve ser do tipo Número (independentemente do tipo de valor exibido na lista). A propriedade [expression](properties_Object.md#expression-type) é definida automaticamente.
- Devem ser associadas referências válidas e únicas aos itens da lista.
- A lista pendente deve estar associada a um campo ou a uma variável.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis    |
| ------ | ------------- | -------------------- |
| saveAs | string        | "value", "reference" |

> Definir apenas `"dataSourceTypeHint" : "integer"` com um objeto de formulário `"type": "dropdown"` declarará uma lista suspensa hierárquica.

#### Objectos suportados

[Listas suspensas](dropdownList_Overview.md) associadas a listas

---

## Valores padrão (lista de)

Lista de valores usados como valores padrão para a coluna do list box (somente tipo array). Esses valores estão automaticamente disponíveis na [variable array](properties_Object.md#variable-or-expression) associada a essa coluna quando o formulário é executado. Usando a linguagem, você pode gerenciar o objeto referir-se a esse array.

> Não faça confusão entre esta propriedade e a propriedade "[valor padrão](properties_RangeOfValues.md#default-value)" que permite definir um valor de campo em novos registros.

É necessário introduzir uma lista de valores. No editor de formulários, uma caixa de diálogo específica permite que você insira valores separados por retornos de carro:

![](../assets/en/FormObjects/defaultValues.png)

> Você também pode definir uma [lista de opções](properties_DataSource.md#choice-list) com a coluna de list box. No entanto, uma lista de opções será usada como lista de valores selecionáveis para cada linha da coluna, enquanto a lista padrão preenche todas as linhas da coluna.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                                           |
| ------ | ------------- | ------------------------------------------------------------------------------------------- |
| values | collection    | Uma coleção de valores por defeito (cadeias de caracteres), por exemplo: "a", "b", "c", "d" |

#### Objectos suportados

[Coluna List Box (apenas tipo array)](listbox_overview.md#list-box-columns)

---

## Expression

Esta descrição é específica para as colunas de tipo list box [seleção](listbox_overview.md#selection-list-boxes) e [collection](listbox_overview.md#collection-or-entity-selection-list-boxes). Veja também a seção **[Variável ou expressão](properties_Object.md#variable-or-expression)**.

Uma expressão 4D a associar a uma coluna. Você pode entrar:

- Uma **variável simple** (nesse caso, ela deve ser declarada explicitamente para compilação). Pode utilizar qualquer tipo de variável, exceto BLOBs e arrays. O valor da variável será geralmente calculado no evento `On Display Detail`.

- Um **campo** que usa a sintaxe padrão [Table]Field ([list box de tipo seleção](listbox_overview.md#selection-list-boxes) somente), por exemplo: `[Employees]LastName`. Podem ser utilizados os seguintes tipos de campos:
  - String
  - Numeric
  - Date
  - Hora
  - Imagem
  - Boolean  
    Você pode usar campos da tabela mestre ou de outras tabelas.

- Uma **expressão 4D** (expressão simples, fórmula ou método 4D). A expressão deve devolver um valor. O valor será avaliado nos eventos `On Display Detail` e `On Data Change`. O resultado da expressão será automaticamente apresentado quando mudar para o modo Aplicação. A expressão será avaliada para cada registro da seleção (atual ou nomeada) da Tabela mestre (para os list box de tipo de seleção), cada elemento da coleção (para as list box de tipo coleção) ou cada entidade da seleção (para os list box de tipo entity selection). Se estiver vazia, a coluna não apresentará nenhum resultado. São suportados os seguintes tipos de expressão:
  - String
  - Numeric
  - Date
  - Imagem
  - Parâmetros

 Nos list boxes de tipo collection/entity selection, os tipos Null ou sem suporte são exibidos como cadeias de caracteres vazias.  
Ao usar coleções ou seleções de entidades, você geralmente declara a propriedade do elemento ou o atributo da entidade associado a uma coluna em uma expressão que contém [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` é um comando 4D dedicado que retorna uma referência ao elemento atualmente processado. Por exemplo, você pode usar `This.\&#060;propertyPath&#062;` onde `\&#060;propertyPath&#062;` é o caminho de uma propriedade na coleção ou um caminho de atributo de entidade para acessar o valor atual de cada elemento/entidade. Se você usar uma coleção de valores escalares, o 4D criará um objeto para cada elemento da coleção com uma única propriedade (denominada "value"), preenchida com o valor do elemento. Nesse caso, você usará `This.value` como expressão.

 Se for usada uma [expressão não atribuível](Concepts/quick-tour.md#expressions) (por exemplo, `[Person]FirstName+" "+[Person]LastName`), a coluna nunca poderá ser inserida, mesmo que a propriedade [Enterable](properties_Entry.md#enterable) esteja ativada.

Se for usado um campo, uma variável ou uma expressão atribuível*(por exemplo, Person.lastName*), a coluna poderá ser digitável ou não, dependendo da propriedade [Enterable](properties_Entry.md#enterable).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                 |
| ---------- | ------------- | --------------------------------------------------------------------------------- |
| dataSource | string        | Uma variável 4D, nome de campo ou uma expressão de linguagem complexa arbitrária. |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Tabela mestre

`Listbox de tipo seleção atual`

Especifica a tabela cuja seleção atual será utilizada. Essa tabela e sua seleção atual formará a referência para os campos associados às colunas do list box (referências de campo ou expressões que contêm campos). Mesmo que algumas colunas contenham campos de outras tabelas, o número de linhas exibidas será definido pela tabela mestre.

Todas as tabelas do banco de dados podem ser usadas, independentemente de o formulário estar relacionado a uma tabela (formulário tabela) ou não (formulário projeto).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| tabela | number        | Número de tabela  |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Salvar como

Esta propriedade está disponível nas seguintes condições:

- uma [lista de escolha](#choice-list) está associada ao objeto
- para as [entradas](input_overview.md) e as [colunas de list box](listbox_overview.md#list-box-columns), uma [lista necessária](properties_RangeOfValues.md#required-list) também está definida para o objeto (ambas as opções devem usar geralmente a mesma lista), para que apenas os valores da lista possam ser inseridos pelo usuário.

Essa propriedade específica, no contexto de um campo ou variável associado a uma lista de valores, o tipo de conteúdo a ser salvo:

- **Salvar como Valor** (opção padrão): o valor do item escolhido na lista pelo usuário é salvo diretamente. Por exemplo, se o usuário escolher o valor "Azul", esse valor será salvo no campo.
- **Salvar como referência**: a referência do item da lista de opções é salva no objeto. Esta referência é o valor numérico associado a cada item, quer através do parâmetro *itemRef* dos comandos [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) ou [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html), quer no editor de listas.

Esta opção permite otimizar o uso de memória: armazenar valores numéricos em campos usa menos espaço do que armazenar frases. Também facilita traduzir aplicações: você apenas cria listas múltiplas em diferentes línguas, mas com referências do mesmo item, depois carregar a lista com base no idioma da aplicação.

A utilização deste bem exige o cumprimento dos seguintes princípios:

- Para poder armazenar a referência, a fonte de dados do campo ou da variável deve ser do tipo Número (independentemente do tipo de valor exibido na lista). A propriedade [expression](properties_Object.md#expression-type) é definida automaticamente.
- Devem ser associadas referências válidas e únicas aos itens da lista.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis    |
| ------ | ------------- | -------------------- |
| saveAs | string        | "value", "reference" |

#### Objectos suportados

Coluna da List Box

---

## Itens selecionados

`List box de tipo collection ou entity selection`

Especifica uma variável ou expressão à qual serão atribuídos os elementos ou entidades selecionados pelo usuário.

- para um list box coleção, você deve usar uma variável de coleção ou uma expressão atribuível que aceite coleções,
- para um list box seleção de entidades, é criado um objeto de seleção de entidades. Você deve usar uma variável objeto ou uma expressão atribuível que aceita objetos.
> Esta propriedade é "somente leitura", é atualizada automaticamente conforme as ações do usuário list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                          |
| ------------------- | ------------- | ------------------------------------------ |
| selectedItemsSource | string        | Assignable collection or object expression |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Seleção temporária

`List boxes de tipo seleção temporária`

Especifica a seleção temporária a ser utilizada. Você deve inserir o nome de uma seleção temporária válida. Isso pode ser de uma seleção temporária processo ou interprocesso. O conteúdo do list box será baseado nesta seleção. A seleção temporária escolhida deve existir e ser válida no momento em que o list box for exibido; caso contrário, list box será exibido em branco.

> As selecções temporárias são listas ordenadas de registos. Eles são usados para manter a ordem e o registro atual de uma seleção na memória. Para obter mais informações, consulte a seção **Seleções temporárias** no *manual de Linguagem 4D*.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| namedSelection | string        | Nome da selecção  |

#### Objectos suportados

[List Box](listbox_overview.md)
