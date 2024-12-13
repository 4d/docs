---
id: propertiesObject
title: Objetos
---

---

## Tipo

`CONFIGURAÇÃO OBRIGATÓRIA`

Esta propiedad designa el tipo del [objeto formulario activo o inactivo](formObjects_overview.md).

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                                                                                                                                                                                                                                                                                        |
| ---- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string        | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista hierárquica](list_overview.md) - [List Box](listbox_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns) - [Rodapie List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de imagem](pictureButton_overview.md) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md) - [Indicador de progresso](progressIndicator.md) - [Botão de opção](radio_overview.md) - [Spinner](spinner.md) - [Separador](splitters.md) -  - [Etapas](stepper.md) - [Subformulário](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

---

## Nome de objeto

Cada objeto de formulário ativo está associado a um nome de objeto. Cada nome de objeto deve ser único.

> Os nomes dos objectos estão limitados a um tamanho de 255 bytes.

Ao usar a linguagem 4D, você pode se referir a um objeto de formulário ativo pelo nome do objeto (para obter mais informações sobre isso, consulte [Propriedades Objeto](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) no manual de referência da linguagem 4D).

Para obter mais informações sobre regras de nomenclatura para objetos de formulário, consulte a seção [Identificadores](Concepts/identifiers.md).

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                                                 |
| ---- | ------------- | ----------------------------------------------------------------- |
| name | string        | Qualquer nome permitido que não pertença a um objeto já existente |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista hierárquica](list_overview.md) - [List Box](listbox_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns) - [Rodapie List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de imagem](pictureButton_overview.md) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md) - [Indicador de progresso](progressIndicator.md) - [Spinner](spinner.md) - [Separador](splitters.md) - [Imagem estática](staticPicture.md) - [Etapas](stepper.md) - [Botão de opção](radio_overview.md) - [Subformulário](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

---

## Guardar valor

Esta propriedade está disponível quando a opção [Salvar Geometria](FormEditor/properties_FormProperties.md#save-geometry) está marcada para o formulário.

Essa funcionalidade só é suportada por objetos que contribuam para a geometria geral do formulário. Por exemplo, essa opção está disponível para caixas de seleção porque seu valor pode ser usado para ocultar ou exibir áreas adicionais na janela.

Eis a lista de objetos cujo valor pode ser guardado:

| Object                                     | Valor guardado                                                                                            |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [Caixa de seleção](checkbox_overview.md)   | Valor da variável associada (0, 1, 2)                                                  |
| [Lista suspensa](dropdownList_Overview.md) | Número da linha seleccionada                                                                              |
| [Botão de rádio](radio_overview.md)        | Valor da variável associada (1, 0, True ou False para os botões, consoante o seu tipo) |
| [Controle de guias](tabControl.md)         | Número da aba selecionada                                                                                 |

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| memorizeValue | boolean       | true, false       |

#### Objectos suportados

[Casilla de selección](checkbox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Botón de radio](radio_overview.md) - [Control de pestañas](tabControl.md)

---

## Variável ou expressão

> Consulte também **[Expression](properties_DataSource.md#expression)** para colunas do list box do tipo seleção e coleção.

Esta propriedade especifica a fonte dos dados. Cada objeto de formulário ativo está associado a um nome de objeto e a um nome de variável. O nome da variável pode diferir do nome do objeto. No mesmo formulário, você pode usar a mesma variável várias vezes, mas cada [nome do objeto](#object-name) deve ser exclusivo.

> O tamanho do nome da variável é limitado a 31 bytes. Consulte a seção [Identificadores](Concepts/identifiers.md) para obter mais informações sobre regras de nomenclatura.

As variáveis de objeto do formulário permitem controlar e monitorar os objetos. Por exemplo, quando um botão é clicado, sua variável é definida como 1; em todos os outros momentos, ela é 0. A expressão associada a um indicador de progresso permite que você leia e altere a configuração atual.

As variáveis ou expressões podem ser digitáveis ou não digitáveis e podem receber dados do tipo Texto, Inteiro, Numérico, Data, Hora, Imagem, Booliano ou Objeto.

#### Gramática JSON

| Nome       | Tipo de dados              | Valores possíveis                                                                                                                                                                                                                                                           |
| ---------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | string ou array de strings | <li>Variável 4D, nome de campo ou qualquer expressão.</li><li>String vazia para [variáveis dinâmicas](#dynamic-variables).</li><li>Matriz de strings (coleção de nomes de matriz) para uma coluna [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes)]</li> |

### Expressões

Você pode usar uma [expressão](Concepts/quick-tour.md#expressions) como fonte de dados para um objeto. Se permite toda expresión 4D válida: expresión simple, propiedad de objeto, fórmula, función 4D, nombre de método proyecto o campo que utilice la sintaxis estándar `[Table]Field`. A expressão é avaliada quando o formulário é executado e reavaliada para cada evento do formulário. The expression is evaluated when the form is executed and reevaluated for each form event.

> Se o valor inserido corresponder tanto a um nome de variável quanto a um nome de método, 4D considera que você está indicando o método.

### Variáveis dinâmicas

Você pode deixar a cargo de 4D a criação de variáveis associadas aos objetos do formulário (botões, variáveis inseríveis, caixas de seleção etc.) dinamicamente e de acordo com suas necessidades. Para ello, basta con dejar en blanco la propiedad "Variable o expresión" (o el campo JSON de `dataSource`).

Quando uma variável não é nomeada, quando o formulário é carregado, 4D cria uma variável para o objeto, com um nome calculado único no espaço das variáveis de processo do intérprete (o que significa que esse mecanismo pode ser usado mesmo no modo compilado). Esta variável temporária será destruída quando o formulário for fechado.
Para que este princípio funcione em modo compilado, é imperativo que as variáveis dinâmicas sejam explicitamente tipadas. Há duas formas de o fazer:

- Você pode definir o tipo usando a propriedade [Tipo de expressão](#expression-type).
- Você pode usar um código de inicialização específico quando o formulário for carregado, usando, por exemplo, o comando `VARIABLE TO VARIABLE`:

```4d
 If(Form event code=On Load)
    var $init : Text
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

No código 4D, as variáveis dinâmicas podem ser acessadas usando um ponteiro obtido com o comando `OBJECT Get pointer`. Por exemplo:

```4d
  // atribuir a hora 12:00:00 à variável do objeto "tstart"
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

Este mecanismo tem duas vantagens:

- Por um lado, ele permite o desenvolvimento de componentes do tipo "subformulário" que podem ser usados várias vezes no mesmo formulário host. Tomemos como exemplo o caso de um subformulário datepicker que é inserido duas vezes em um formulário host para definir uma data inicial e uma data final. Esse subformulário usará objetos para escolher a data do mês e do ano. Será necessário que esses objetos trabalhem com variáveis diferentes para a data de início e a data de término. Permitir que 4D crie sua variável com um nome exclusivo é uma forma de resolver essa dificuldade.
- Por outro lado, pode ser utilizado para limitar a utilização da memória. De facto, os objectos formulário só funcionam com variáveis processo ou inter-processo. No entanto, no modo compilado, uma instância de cada variável de processo é criada em todos os processos, incluindo os processos do servidor. Essa instância ocupa memória, mesmo quando o formulário não é usado durante a sessão. Portanto, permitir que 4D crie variáveis dinamicamente ao carregar os formulários pode economizar memória.

### List box array

Para un list box array, la propiedad **Variable o Expresión** normalmente contiene el nombre de la variable array definida para el list box y para cada columna. No entanto, você pode usar uma matriz de strings (contendo nomes de matrizes) como valor *dataSource* para uma coluna de caixa de listagem para definir uma [caixa de listagem hierárquica] (listbox_overview.md#hierarchical-list-boxes).

#### Objectos compatíveis

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Lista hierárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Coluna List Box](listbox_overview.md#list-box-columns) - [Cabeçalho List Box](listbox_overview.md#list-box-headers) - [Rodapie de List Box](listbox_overview.md#list-box-footers) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicador de progresso](progressIndicator.md) - [Botão de opção](radio_overview.md) - [Seletor](spinner.md) - [Separador](splitters.md) - [Etapas](stepper.md) - [Subformulário](subform_overview.md#overview) - [Controle de tabulação](tabControl.md) - [Área web](webArea_overview.md)

---

## Tipo de expressão

> Essa propriedade é chamada de [**Data Type**](properties_DataSource.md#data-type-expression-type) na Lista de propriedades para [selection](listbox_overview.md#selection-list-boxes) e [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) e para colunas de caixa de listagem do tipo [Drop-down Lists](dropdownList_Overview.md) associadas a um [objeto](FormObjects/dropdownList_Overview.md#using-an-object) ou a um [array](FormObjects/dropdownList_Overview.md#using-an-array).

Especifique o tipo de dados para a expressão ou variável associada ao objeto. Observe que o principal objetivo dessa configuração é definir as opções (como formatos de exibição) disponíveis para o tipo de dados. Não digita efetivamente a variável em si. Considerando a compilação do projeto, você deve [declarar a variável](Concepts/variables.md#declaring-variables).

No entanto, essa propriedade tem uma função de digitação nos seguintes casos específicos:

- **[Variáveis dinâmicas](#dynamic-variables)**: você pode usar essa propriedade para declarar o tipo de variáveis dinâmicas.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: essa propriedade é usada para associar um formato de exibição aos dados da coluna. Os formatos fornecidos dependerão do tipo de variável (caixa de lista de tipos de matriz) ou do tipo de data/campo (caixas de lista de tipos de coleção e seleção). Os formatos padrão 4D que podem ser usados são: Alfa, Numeric, Data, Hora, Imagem e Booleano. O tipo de texto não tem formatos de visualização específicos. Também estão disponíveis quaisquer formatos personalizados existentes.
- **[Variáveis de imagem](input_overview.md)**: você pode usar este menu para declarar as variáveis antes de carregar o formulário no modo de interpretação. Mecanismos nativos específicos governam a exibição de variáveis de imagens em formas. Esses mecanismos requerem maior precisão na configuração das variáveis: a partir de agora, elas devem já ter sido declaradas antes de carregarem o formulário — i. ., mesmo antes do evento `No carregamento` — ao contrário de outros tipos de variáveis. Para fazer isso, você também precisa que a instrução `C_PICTURE(varName)` tenha sido executada antes de carregar o formulário (tipicamente, no método chamando o comando `DIALOG`), ou para que a variável tenha sido digitada no nível de formulário usando a propriedade do tipo de expressão.
  Caso contrário, a variável de imagem não será exibida corretamente (apenas no modo de interpretação).
  Caso contrário, a variável de imagem não será exibida corretamente (apenas no modo de interpretação).

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string        | <li>**objetos padrão:** "inteiro", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**colunas da caixa de lista:** "booleano", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li> |

#### Objectos suportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## Classe CSS

Lista de palabras separadas por espacios que se utilizan como selectores de clase en los [archivos css](FormEditor/createStylesheet.md#style-sheet-files).

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis                                                                                                         |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| "class" | string        | Uma cadeia de caracteres com o(s) nome(s) do CSS separados por caracteres de espaço |

#### Objectos compatíveis

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista hierárquica](list_overview.md) - [List Box](listbox_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns) - [Rodapie List Box](listbox_overview.md#list-box-footers) - [Cabeçalho de List Box](listbox_overview.md#list-box-headers) - [Botão de imagem](pictureButton_overview.md) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md) - [Indicador de progresso](progressIndicator.md) - [Botão de opção](radio_overview.md) - [Spinner](spinner.md) - [Separador](splitters.md) -  - [Etapas](stepper.md) - [Subformulário](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

---

## Seleção de entidade ou coleção

Para usar elementos da coleção ou entidades para definir o conteúdo da linha da caixa de lista.

Insira uma expressão que retorne uma coleção ou uma seleção de entidades. Geralmente, você irá digitar o nome de uma variável, um elemento de coleção ou uma propriedade que contém uma coleção ou uma seleção de entidade.

A coleção ou a seleção da entidade deve estar disponível para o formulário quando for carregada. Cada elemento da coleção ou cada entidade da seleção da entidade será associada a uma linha da caixa de lista e estará disponível como um objeto através do [`This`](. /Concepts/classes.md#esta) palavra-chave:

- se você usou uma coleção de objetos, você pode chamar **Isso** na expressão de código de dados para acessar cada valor de propriedade, por exemplo `Isso.<propertyPath>`.
- se você usou uma seleção de entidade, pode chamar **Isso** na expressão de código de dados para acessar cada valor de atributo, por exemplo `Isso.<attributePath>`.

> Se você usou uma coleção de valores escalares (e não objetos), 4D permite que você exiba cada valor chamando **This.value** na expressão da fonte de dados. No entanto, neste caso, você não será capaz de modificar valores ou acessar o objeto atual (veja abaixo).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                              |
| ---------- | ------------- | ------------------------------------------------------------------------------ |
| dataSource | string        | Expressão que devolve uma coleção ou uma seleção de entidades. |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Fonte de dados

Especifique o tipo de list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(padrão): use elementos array como as linhas da caixa de lista.
- **Seleção Atual**: use expressões, campos ou métodos cujos valores serão avaliados para cada registro da seleção atual de uma tabela.
- **Seleção Nomeada**: use expressões, campos ou métodos cujos valores serão avaliados para cada registro de uma seleção nomeada.
- **Seleção de Coleção ou Entidade**: use elementos de coleção ou entidades para definir o conteúdo da linha da caixa de lista. Note que com esta caixa de lista, você precisa definir a propriedade [Seleção de coleção ou Entidade](properties_Object.md#collection-or-entity-selection)

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                           |
| ----------- | ------------- | ----------------------------------------------------------- |
| listboxType | string        | "array", "currentSelection", "namedSelection", "collection" |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Tipo de plug-in

Nome da [área externa plug-in ](pluginArea_overview.md) associada ao objeto. Nomes de área externa do plug-in são publicados no arquivo manifest.json do plugin.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                                             |
| -------------- | ------------- | ----------------------------------------------------------------------------- |
| pluginAreaKind | string        | Nome da área externa do plug-in (começa com um carácter %) |

#### Objectos suportados

[Área de Plug-in](pluginArea_overview.md)

---

## Grupo Rádio

Permite que os botões de rádio sejam usados em conjuntos coordenados: somente um botão de cada vez pode ser selecionado no conjunto.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis   |
| ---------- | ------------- | ------------------- |
| radioGroup | string        | Nome do grupo rádio |

#### Objectos suportados

[Botão de rádio](radio_overview.md)

---

## Título

Permite inserir uma etiqueta num objeto. O tipo de letra e o estilo desta etiqueta podem ser especificados.

Pode forçar um retorno de carro na etiqueta utilizando o carácter \ (barra invertida).

![](../assets/en/FormObjects/property_title.png)

Para inserir um \ na etiqueta, introduzir "\\".

Por padrão, a etiqueta é colocada no centro do objeto. Quando o objeto também contém um ícone, você pode modificar a localização relativa desses dois elementos usando a propriedade [Title/Picture Position](properties_TextAndPicture.md#titlepicture-position)

Para fins de tradução da aplicação, você pode inserir uma referência XLIFF na área do título de um botão (veja [Apêndice B: arquitetura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| text | string        | qualquer texto    |

#### Objectos suportados

[Botón](button_overview.md) - [Casilla de selección](checkbox_overview.md) - [Encabezado List Box](listbox_overview.md#list-box-headers) - [Botón radio](radio_overview.md) - [ÁreaTexto](text.md)

---

## Cálculo de variáveis

Esta propriedade define o tipo de cálculo a ser feito em uma área de [rodapé da coluna](listbox_overview.md#list-box-footers).

> O cálculo de rodapés também pode ser definido usando o comando [`LISTBOX SET FOOTER CALCULATION`](https://doc.4d.com/4dv19/help/command/en/page1140.html) 4D.

Existem vários tipos de cálculos disponíveis. A tabela a seguir mostra quais cálculos podem ser usados de acordo com o tipo de dados encontrados em cada coluna e indica que o tipo é automaticamente afetado por 4D para a variável de rodapé (se não for digitado pelo código):

| Cálculo                                   | Num | Text | Date | Hora | Bool | Pict | tipo var rodapé         |
| ----------------------------------------- | --- | ---- | ---- | ---- | ---- | ---- | ----------------------- |
| Mínimo                                    | X   | X    | X    | X    | X    |      | Igual ao tipo de coluna |
| Máximo                                    | X   | X    | X    | X    | X    |      | Igual ao tipo de coluna |
| Soma                                      | X   |      |      | X    | X    |      | Igual ao tipo de coluna |
| Contagem                                  | X   | X    | X    | X    | X    | X    | Integer                 |
| Média                                     | X   |      |      | X    |      |      | Real                    |
| Desvio padrão(\*)      | X   |      |      | X    |      |      | Real                    |
| Variância(\*)          | X   |      |      | X    |      |      | Real                    |
| Soma dos quadrados(\*) | X   |      |      | X    |      |      | Real                    |
| Personalizado ("none") | X   | X    | X    | X    | X    | X    | Qualquer                |

(\*) Apenas para list boxes do tipo array.

> Somente declarado ou dinâmico [variables](Aceitar/variáveis.md) pode ser usado para exibir os cálculos do rodapé. Outros tipos de [expressions](Aceitações/quick-tour.md#expressions) como `Form.value` não são compatíveis.

Cálculos automáticos ignoram o estado mostrado/oculto das linhas de caixa de lista. Se você quiser restringir um cálculo para apenas linhas visíveis, você deve usar um cálculo personalizado.

Valores *null* não são levados em conta para quaisquer cálculos.

Se a coluna contiver diferentes tipos de valores (coluna baseada em coleção, por exemplo):

- Média e Soma só levam em consideração elementos numéricos (outros tipos de elementos são ignorados).
- Retorno mínimo e máximo um resultado de acordo com a ordem habitual de lista de tipos conforme definida na função [collection.sort()](API/CollectionClass.md#sort).

Usar cálculos automáticos nos rodapés das colunas com base nas expressões tem as seguintes limitações:

- es **soportado** con todos los tipos de list boxes cuando la expresión es "simple" (como `[table]field` o `this.attribute`),
- É **possível, mas não recomendado** por motivos de desempenho com caixas de listagem de seleção de coleção/entidade quando a expressão for "complexa" (diferente de `this.attribute`) e a caixa de listagem contiver um grande número de linhas,
- não é **suportado** com as caixas de lista de seleção de seleção atuais/nomeadas quando a expressão é "complexa". Precisa utilizar cálculos personalizados.

Quando **Personalizado** ("nenhum" em JSON) é definido, nenhum cálculo automático é realizado por 4D e você deve atribuir o valor da variável nesta área por programação.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                                                                                     |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string        | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objectos suportados

[Rodapé de Listbox](listbox_overview.md#list-box-footers)
