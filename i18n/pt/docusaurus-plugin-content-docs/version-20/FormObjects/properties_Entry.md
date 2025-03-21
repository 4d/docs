---
id: propertiesEntry
title: Entrada
---

## Verificação automática da ortografia

4D inclui funcionalidades de verificação ortográfica integrado e personalizável. As [entradas](input_overview.md) de tipo de texto podem ser verificadas, assim como os documentos [4D Write Pro](writeProArea_overview.md).

A propriedade Auto Spellcheck ativa a verificação ortográfica para cada objeto. Quando usada, a verificação ortográfica é realizada automaticamente durante a entrada de dados. Você também pode executar o comando de linguagem 4D `SPELL CHECKING` para cada objeto a ser verificado.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| spellcheck | boolean       | true, false       |

#### Objectos suportados

[Área 4D Write Pro](writeProArea_overview.md) - [Entrada](input_overview.md)

---

## Menu de contexto

Permite ao usuário aceder a um menu de contexto padrão no objeto quando o formulário é executado.

Para uma [entrada](input_overview.md) imagem, além dos comandos de edição padrão (Recortar, Copiar, Colar e Limpar), o menu contém o comando **Importar...**, que pode ser usado para importar uma imagem armazenada em um arquivo, bem como o comando **Salvar como...**, que pode ser usado para salvar a imagem no disco. O menu também pode ser usado para modificar o formato de exibição da imagem: são oferecidas as opções **Truncado não centralizado**, **Escalonado para caber** e **Escalonado para caber na imagem centralizada**. A modificação do [formato de exibição](properties_Display.md#picture-format) usando esse menu é temporária; ela não é salva com o registro.

Para uma [entrada](input_overview.md) texto [multi-estilo](properties_Text.md#multi-style), além dos comandos de edição padrão, o menu de contexto fornece os seguintes comandos:

- **Fontes...**: exibe a caixa de diálogo do sistema de fontes
- **Fontes recentes**: exibe os nomes das fontes recentes selecionadas durante a sessão. A lista pode armazenar até 10 fontes (além disso, a última fonte usada substitui a mais antiga). Por defeito, esta lista está vazia e a opção não é apresentada. Você pode gerenciar essa lista usando os comandos `SET RECENT FONTS` e `FONT LIST`.
- comandos para as modificações de estilo suportadas: tipo de letra, tamanho, estilo, cor e cor de fundo. Quando o usuário modifica um atributo de estilo por meio desse menu pop-up, o 4D gera o evento de formulário `On After Edit`.

Em uma [área Web](webArea_overview.md), o conteúdo do menu depende do mecanismo de renderização da plataforma. É possível controlar o acesso ao menu de contexto através do comando `WA SET PREFERENCE`.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                   |
| ----------- | ------------- | --------------------------------------------------- |
| contextMenu | string        | "automatic" (utilizado se estiver em falta), "none" |

#### Objectos suportados

[Entrada](input_overview.md) - [Área Web](webArea_overview.md) - [Áreas 4D Write Pro](writeProArea_overview.md)

---

## Enterable

O atributo Enterable indica se os usuários podem inserir valores no objeto.

Os objectos são inseríveis por defeito. Se você quiser tornar um campo ou um objeto não digitável para esse formulário, poderá desativar a propriedade Enterable do objeto. Um objeto não inserível apenas exibe dados. Você controla os dados por meio de métodos que usam o nome do campo ou da variável. Pode ainda utilizar os eventos de formulário `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` e `On Losing Focus` com objetos não inseríveis. Isto facilita a gerenciamento de menus de contexto personalizados e permite-lhe conceber interfaces onde pode arrastar e largar e selecionar variáveis não introduzíveis.

Quando essa propriedade está desativada, todos os menus pop-up associados a uma coluna de list box por uma lista são desativados.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
| --------- | ------------- | ----------------- |
| enterable | boolean       | true, false       |

#### Objectos suportados

[4D Write Pro areas](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Progress Bar](progressIndicator.md) - [Ruler](ruler.md) - [Stepper](stepper.md)

---

## Filtro de entrada

Um filtro de entrada controla exatamente o que o usuário pode digitar durante a entrada de dados. Diferentemente das [listas obrigatórias](properties_RangeOfValues.md#required-list), por exemplo, os filtros de entrada operam em uma base de caractere por caractere. Por exemplo, se um número de parte sempre consiste em duas letras seguidas por três dígitos, você pode usar um filtro de postagens para restringir o usuário a esse padrão. Pode até controlar as letras e os números específicos.

Um filtro de entrada funciona apenas durante a introdução de dados. Não tem nenhum efeito na apresentação de dados após o usuário ter anulado a seleção do objeto. Em geral, você usa filtros de entrada e [formatos de exibição](properties_Display.md) juntos. O filtro restringe a entrada de dados e o formato garante a exibição adequada do valor após a entrada de dados.

Durante a entrada de dados, um filtro de entrada avalia cada caractere conforme é digitado. Se o usuário tentar digitar um caractere inválido (um número ao invés de uma carta, por exemplo), 4D simplesmente não aceita. O caractere null permanece inalterado até que o usuário digite um caractere válido.

Filtros de entrada também podem ser usados para exibir os caracteres de formatação necessários para que o usuário não precise inseri-los. Por exemplo, um número de telefone americano consiste em um código de área de três dígitos, seguido por um número de sete algarismos que se divide em dois grupos de três e quatro dígitos, respectivamente. Um formato de exibição pode ser usado para incluir o código de área entre parênteses e exibir um traço após o terceiro dígito do número de telefone. Quando esse formato é usado, o usuário não precisa digitar os parênteses ou os traços.

### Definição de um filtro de entrada

Na maioria das vezes, é possível usar um dos [filtros integrados](#default-entry-filters) do 4D para o que você precisa; no entanto, também é possível criar e usar filtros personalizados:

- pode introduzir diretamente uma cadeia de definição de filtro
- ou você pode digitar o nome de um filtro de entrada criado no editor de filtros na caixa de ferramentas. Os nomes dos filtros personalizados que criar começam com uma barra vertical (|).

Para obter informações sobre como criar filtros de entrada, consulte [Códigos de filtro e formato](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).

### Filtros de entrada predefinidos

Aqui está uma tabela que explica cada uma das opções de filtro de entrada na lista suspensa Filtro de entrada:

| Filtro de entrada             | Descrição                                                                                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                            | Permite quaisquer letras, mas converte-as em maiúsculas.                                                                                                              |
| &9                            | Permitir apenas números.                                                                                                                                              |
| &A                            | Permitir apenas letras maiúsculas.                                                                                                                                    |
| &a                            | Permitir apenas letras (maiúsculas e minúsculas).                                                                                                                     |
| &@                            | Permitir apenas caracteres alfanuméricos. Sem caracteres especiais.                                                                                                   |
| ~a##                          | Abreviatura do nome do estado (por exemplo, CA). Permite duas letras quaisquer, mas converte-as em maiúsculas.                                                        |
| !0&9##/##/##                  | Formato de entrada de data standard. Apresentar zeros nos espaços de entrada. Permitir quaisquer números.                                                             |
| !0&9 Dia: ## Mês: ## Ano: ##  | Formato do registo de horas. Apresentar zeros nos espaços de entrada. Permitir quaisquer números. Limitado a horas e minutos.                                         |
| !0&9##:##                     | Formato do registo de horas. Limitado a horas e minutos. Apresentar zeros nos espaços de entrada. São permitidos quatro números quaisquer, separados por dois pontos. |
| !0&9## Hrs ## Mins ## Secs    | Formato do registo de horas. Apresentar zeros nos espaços de entrada. Permitir dois números antes de cada palavra.                                                    |
| !0&9Hrs: ## Mins: ## Secs: ## | Formato do registo de horas. Apresentar zeros nos espaços de entrada. Permitir dois números quaisquer depois de cada palavra.                                         |
| !0&9##-##-##-##               | Formato do número de telefone local. Apresentar zeros nos espaços de entrada. Permitir qualquer número. Três entradas, hífen, quatro entradas.                        |
| !_&9(###)!0###-####           | Número de telefone interurbano. Mostrar sublinhados nos três primeiros espaços de entrada, zeros nos restantes.                                                       |
| !0&9###-###-###               | Número de telefone interurbano. Apresentar zeros nos espaços de entrada. Permitir qualquer número. Três entradas, hífen, três entradas, hífen, quatro entradas.       |
| !0&9###-##-####               | Número de segurança social. Apresentar zeros nos espaços de entrada. Permitir quaisquer números.                                                                      |
| ~"A-Z;0-9; ;,;.;-"            | Letras maiúsculas e pontuação. Permita apenas letras maiúsculas, números, espaços, vírgulas, pontos e hifens.                                                         |
| &"a-z;0-9; ;,;.;-"            | Letras maiúsculas e minúsculas e pontuação. Permitir letras minúsculas, números, espaços, vírgulas, pontos e hífens.                                                  |
| &"0-9;.;-"                    | Números. Só são permitidos números, pontos decimais e hífenes (sinal de menos).                                                                                       |

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                    |
| ----------- | ------------- | ---------------------------------------------------- |
| entryFilter | string        | <li>Código do filtro</li> ou <li>Entry filter code or Entry filter name (filter names start with &#124; )</li> |

#### Objectos suportados

[Caixa de seleção](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [Coluna List Box](listbox_overview.md#list-box-columns)

---

## Focável

Quando a propriedade **Focusable** está ativada para um objeto, o objeto pode ter o foco (portanto, pode ser ativado pelo teclado, por exemplo). Ele é delineado por uma linha pontilhada cinza quando é selecionada — exceto quando a opção [Ocultar o retângulo de foco](properties_Appearance.md#hide-focus-rectangle) também foi selecionada.

> Um [objeto de entrada](input_overview.md) é sempre focalizável se tiver a propriedade [Enterable](#enterable).

- ![](../assets/en/FormObjects/property_focusable1.png)<br/>A caixa de verificação mostra o foco quando selecionada

- ![](../assets/en/FormObjects/property_focusable2.png)<br/>A caixa de verificação está selecionada mas não pode mostrar o foco|

Quando a propriedade **Focusable** for selecionada para um objeto não inserível, o usuário pode selecionar, copiar ou até mesmo arrastar e soltar o conteúdo da área.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| focável | boolean       | true, false       |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List box](listbox_overview.md) - [Área de plug-in](pluginArea_overview.md) - [Botão rádio](radio_overview.md) - [Subformulário](subform_overview.md)

---

## Layout do teclado

Essa propriedade associa um layout de teclado específico a um [objeto de entrada](input_overview.md). Por exemplo, em uma aplicação internacional, se um formulário contém um campo cujo conteúdo deve ser inserido em caracteres gregos, você pode associar o layout de teclado "grego" a este campo. Desta forma, durante a entrada de dados, a configuração do teclado é automaticamente alterada quando este campo tem o foco.

Por padrão, o objeto utiliza a disposição atual do teclado.

> Você também pode definir e obter o teclado dinamicamente usando os comandos `OBJECT SET KEYBOARD LAYOUT` e `OBJECT Get keyboard layout`.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                                                |
| --------------- | ------------- | -------------------------------------------------------------------------------- |
| keyboardDialect | text          | Código da linguajem, por exemplo, "ar-ma" ou "cs". Ver RFC3066, ISO639 e ISO3166 |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Entrada](input_overview.md)

---

## Multilinha

Esta propriedade está disponível para [objetos de entrada](input_overview.md) contendo expressões do tipo Texto e campos do tipo Alpha e texto. Pode ter três valores diferentes: Sim, Não, Automático (padrão).

#### Automático

- Nas entradas de linha única, as palavras localizadas no final das linhas são truncadas e não há retornos de linha.
- Em entradas de várias linhas, 4D realiza retornos automáticos de linha:  
  ![](../assets/en/FormObjects/multilineAuto.png)

#### Não

- Nas entradas de linha única, as palavras localizadas no final das linhas são truncadas e não há retornos de linha.
- Nunca há retornos de linha: o texto é sempre exibido em uma única linha. Se o campo ou variável Alfa, ou Texto contiver retornos de carruagem, o texto localizado após o primeiro retorno de carruagem será removido assim que a área for modificada:  
  ![](../assets/en/FormObjects/multilineNo.png)

#### Sim

Quando esse valor é selecionado, a propriedade é gerenciada pela opção [Envolvimento de palavras](properties_Display.md#wordwrap).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                     |
| ---------- | ------------- | ----------------------------------------------------- |
| multilinha | text          | "yes", "no", "automatic" (padrão se não for definido) |

#### Objectos suportados

[Entrada](input_overview.md)

---

## Placeholder (valores provisórios)

4D pode exibir texto com marcador de posição nos campos de seus formulários.

O texto do espaço reservado aparece como texto de marca d'água em um campo, fornecendo uma dica de ajuda, indicação ou exemplo para os dados a serem inseridos. Esse texto desaparece assim que o usuário digita um caractere na área:

![](../assets/en/FormObjects/property_placeholder.png)

O texto do marcador de posição é apresentado novamente se o conteúdo do campo for apagado.

Pode ser apresentado um marcador de posição para os seguintes tipos de dados:

- string (text ou alpha)
- data e hora em que a propriedade **Blank if null** é ativada.

Você pode usar uma referência XLIFF no formulário ":xliff:resname" como um espaço reservado, por exemplo:

 :xliff:PH_Lastname

Você só passa a referência no campo "Placeholder"; não é possível combinar uma referência com um texto estático.
> Você também pode definir e obter o texto do espaço reservado programando usando os comandos `OBJETO SET PLACEHOLDER` e `OBJECT Get placeholder`.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------- |
| placeholder | string        | Texto a ser exibido (acinzentado) quando o objeto não contiver nenhum valor |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Entrada](input_overview.md)

#### Veja também

[Dica de ajuda](properties_Help.md)

---

## Selecção sempre visível

Essa propriedade mantém a seleção visível no objeto depois que ele perde o foco. Isso facilita a implementação de interfaces que permitem que o estilo de texto seja modificado (veja [Multiestilo](properties_Text.md#multi-style)).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| showSelection | boolean       | true, false       |

#### Objectos suportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Entrada](input_overview.md)

---

## Atalho

Essa propriedade permite definir teclas de significado especial (atalhos de teclado) para [botões](button_overview.md), [botões de rádio](radio_overview.md) e [caixas de seleção](checkbox_overview.md). Ele permite que o usuário use o controle usando o teclado em vez de ter que usar o mouse.

Você pode configurar esta opção clicando no botão [...] na propriedade Atalhos na Lista de Propriedades.

![](../assets/en/FormObjects/property_shortcut.png)
> Também é possível atribuir um atalho a um comando de menu personalizado. Se houver um conflito entre dois atalhos, o objeto ativo terá prioridade. Para obter mais informações sobre como associar atalhos a menus, consulte [Definição das propriedades do menu](../Menus/properties.md).

Para ver uma lista de todos os atalhos usados no ambiente 4D Design , consulte a [Página de atalhos](../Preferences/shortcuts.md) na caixa de diálogo de Preferências.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                                  |
| --------------- | ------------- | -------------------------------------------------- |
| shortcutAccel   | boolean       | true, false (Windows: Ctrl/macOS: Command)         |
| shortcutAlt     | boolean       | true, false                                        |
| shortcutControl | boolean       | true, false (macOS: Control)                       |
| shortcutShift   | boolean       | true, false                                        |
|                 |               |                                                    |
| shortcutKey     | string        | <li>qualquer tecla de carácter: "a", "b"...</li><li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"</li> |

#### Objectos suportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)

---

## Editar com um clique

Permite a passagem direta para o modo de edição em list boxes.

Quando essa opção está ativada, as células da caixa de listagem mudam para o modo de edição após um único clique do usuário, independentemente de essa área da caixa de listagem ter sido selecionada anteriormente. Observe que essa opção permite que as células sejam editadas mesmo quando o [modo de seleção](properties_ListBox.md#selection-mode) da caixa de listagem estiver definido como "Nenhum".

Quando esta opção não está habilitada, os usuários devem primeiro selecionar a linha da célula e, em seguida, clicar em uma célula para editar seu conteúdo.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis |
| --------------- | ------------- | ----------------- |
| singleClickEdit | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)
