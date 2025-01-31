---
id: properties
title: Propriedades dos menus
---

Pode definir várias propriedades para itens de menu tais como ação, estilo de fonte, linhas separadoras, atalhos de teclado ou ícones.

## Título

A propriedade **Title** contém a etiqueta de um menu ou item de menu, uma vez que será exibida na interface da aplicação.

No editor do Menu, pode introduzir directamente a etiqueta como "hard coded". Ou, pode introduzir uma referência para uma variável ou um elemento XLIFF, o que facilitará a manutenção e tradução das aplicações. Pode utilizar os seguintes tipos de referências:

- Uma referência de recurso XLIFF do tipo :xliff:MyLabel. Para mais informações sobre referências XLIFF, consulte *XLIFF Architecture* secção em *4D Design Reference*.
- Um nome de variável interprocesso seguido de um número, por exemplo:`<>vlang,3`. A alteração do conteúdo desta variável modificará a etiqueta do menu quando esta for exibida. Neste caso, a etiqueta chamará um recurso XLIFF. O valor contido na variável `<>vlang` corresponde ao atributo *id* do elemento *do grupo* . O segundo valor (3 neste exemplo) designa o atributo *id* do elemento *trans-unit* .

Usando a linguagem 4D, define a propriedade título através do parâmetro *itemText* dos comandos `APPEND MENU ITEM`, `INSERT MENU ITEM`, e `SET MENU ITEM`.

### Utilização de caracteres de controle

Pode definir algumas propriedades dos comandos do menu utilizando caracteres de controle (metacaracteres) directamente nas etiquetas dos comandos do menu. Por exemplo, pode atribuir o atalho de teclado Ctrl+G (Windows) ou Command+G (macOS) para um comando de menu, colocando os caracteres "/G" na etiqueta do item do menu.

Os caracteres de controle não aparecem nas etiquetas de comando do menu. Deve-se, portanto, evitar a sua utilização para não ter efeitos indesejáveis. Os caracteres de controle são os seguintes:

| Caracteres | Descrição                    | Utilização                                                                                    |
| ---------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| (          | abre parênteses              | Desactivar item                                                                               |
| <B         | menor que B                  | fonte itálica                                                                                 |
| <I         | maior que I                  | Itálico                                                                                       |
| <U         | menor que U                  | fonte sublinhada                                                                              |
| !+caracter | ponto de exclamação+caratere | Adiciona caractere como marca de verificação (macOS); adiciona marca de verificação (Windows) |
| /+caracter | barra+caractere              | Adicionar caractere como atalho                                                               |

## Parâmetro

É possível associar um parâmetro personalizado a cada item do menu. Um parâmetro de item de menu é uma string de caracteres cujo conteúdo pode ser livremente escolhido. Pode ser definido no editor do Menu, ou através do comando `SET MENU ITEM PARAMETER` .

Os parâmetros do item de menu são úteis com a gestão programada de menus, em particular quando se utilizar os comandos `Dynamic pop up menu`, `Get menu item parameter` e `Get selected menu item parameter`.

## Ação

Cada comando de menu pode ter um método de projeto ou uma ação padrão anexada a ele. Quando o comando do menu é escolhido, 4D executa a ação padrão associada ou o método de projecto. Por exemplo, um comando de menu **Monthly Report** pode chamar um método de projeto que prepara um relatório mensal a partir de uma tabela contendo dados financeiros. O comando do menu **Cut** chama geralmente a ação padrão `cut` a fim de mover a seleção para a área de transferência e apagá-la da janela em primeiro plano.

Se não atribuir um método ou uma ação padrão a um comando de menu, a escolha desse comando de menu faz com que 4D saia do ambiente Application e vá para o ambiente Design. Se apenas o ambiente de Aplicação estiver disponível, isto significa desistir do Ambiente de Trabalho.

Ações padrão podem ser usadas para executar várias operações cotidianas conectadas às funções de sistema (copiar, sair, etc) ou às funções do banco de dados 4D (adicionar registro, selecionar tudo, etc.).

Pode atribuir tanto uma acção padrão como um método de projecto a um comando de menu. Neste caso, a acção padrão nunca é executada; contudo, 4D utiliza esta acção para ativar/desativar o comando do menu de acordo com o contexto actual e para associar uma operação específica com ele de acordo com a plataforma. Quando um comando de menu for desativado, o método de projecto associado não pode ser executado.

A escolha entre associar uma ação padrão ou um método de projecto a um comando de menu depende do tipo de resultado desejado. Em princípio, é preferível escolher uma acção padrão sempre que possível, uma vez que implementam mecanismos otimizados, mais particularmente ativação/desativação de acordo com o contexto.

### Associar um método de projecto ou uma acção padrão

É possível atribuir um método de projecto e/ou uma acção padrão a um comando de menu seleccionado no editor de Menu:

- **Nome do método**: Seleccionar um nome de método de projecto existente na caixa de combinação. Se o método projecto não existir, introduzir o seu nome na caixa de combinação "Nome do método" e, em seguida, clicar no botão [...]. 4D exibe um diálogo de criação de método projeto usado para acessar o editor do Método.
- **Acção Padrão Associada**: Escolha ou escreva a acção que deseja atribuir na caixa combinada "Acção Padrão Associada". Pode introduzir qualquer acção apoiada e (opcionalmente) parâmetro que deseje na área. Para uma lista completa de acções padrão, consulte por favor a secção **Acções padrão** na *Design Reference*. **Nota para macOS:** Sob macOS, os comandos de menu personalizados associados à acção *Quit* são automaticamente colocados no menu de aplicação, em conformidade com as normas de interface da plataforma.

Usando a linguagem 4D, pode associar um método de projecto usando o comando `SET MENU ITEM METHOD` , e uma acção padrão usando o comando `SET MENU ITEM PROPERTY` .

### Iniciar um novo processo

A opção **Iniciar um Novo Processo** está disponível para comandos de menu associados a métodos. Pode ser definido através de uma caixa de verificação no editor do Menu, ou através *propriedade* parâmetro do comando `SET MENU ITEM PROPERTY` .

Quando a opção **Iniciar um Novo Processo** for activada, um novo processo é criado quando o comando do menu é escolhido. Normalmente, um método ligado a um comando de menu executa-se dentro do processo actual, a menos que chame explicitamente um novo processo no seu código. A opção **Iniciar um Novo Processo** facilita o início de um novo processo. Quando activado, 4D irá criar um novo processo quando o comando do menu for escolhido.

Na lista de processos, 4D atribui ao novo processo um nome padrão usando o formato "ML_ProcessNumber". Os nomes dos processos iniciados a partir de um menu são criados através da combinação do prefixo "ML_" com o número do processo.

### Executar sem validar

A opção **Executar sem validar** está disponível apenas para comandos de menu associados a acções padrão no editor de menus.

Quando esta opção é verificada, 4D não activa a "validação" do campo onde se encontra o cursor antes de executar a acção associada. Esta opção destina-se principalmente a **Editar** comandos de menu. Por padrão, 4D processa e "valida" o conteúdo de um campo antes de executar uma acção padrão (através de um comando de menu ou de um atalho), o que tem o efeito de gerar um evento de formulário `On Data Change` . Isto pode perturbar o funcionamento dos comandos do tipo copiar ou colar porque, quando são chamados, o evento do formulário `On Data Change` é gerado inesperadamente. Neste caso, é útil verificar a opção **Executar sem validar** .

## Privilégios de acesso remoto

Esta opção de menu editor permite definir um grupo para um comando de menu de modo a que apenas os utilizadores desse grupo possam utilizar o comando de menu de uma aplicação remota 4D (ver Utilizadores e grupos).

## Opções

### Linhas separadoras

Grupos de comandos de menu num menu podem ser divididos por uma linha separadora. Esta convenção é útil para agrupar comandos de menu associados por função.

![](../assets/en/Menus/separator.png)

Adiciona-se uma linha separadora através da criação de um comando de menu específico.

No editor do Menu, em vez de introduzir o texto do comando do menu na área do título, basta seleccionar a opção **Linha Separadora** . Em vez de texto, aparece uma linha na área actual da barra de menu. Quando esta opção é verificada, as outras propriedades não têm qualquer efeito. **Nota:** Sob macOS, se usar o traço "-" como primeiro caracter de um item do menu, aparecerá como uma linha separadora.

Na língua 4D, insere-se uma linha separadora introduzindo `-` ou `(-` como itemTexto para `APPEND MENU ITEM`, `INSERT MENU ITEM`, ou `SET MENU ITEM` comandos.

### Atalhos do teclado

Pode adicionar atalhos de teclado a qualquer comando de menu. Se um comando de menu tiver um destes atalhos de teclado, os utilizadores irão vê-lo ao lado do comando de menu. Por exemplo, "Ctrl+C" (Windows) ou "Command+C" (macOS) aparece ao lado do comando do menu **Copy** no menu **Edit** .

Também pode adicionar a tecla **Shift** bem como a tecla **Alt** (Windows) ou **Opção** (macOS) ao atalho associado a um comando de menu. Isto multiplica o número de atalhos que podem ser utilizados. Os seguintes tipos de atalhos de teclado podem, portanto, ser definidos:

- Em Windows:
  - Ctrl+caractere
  - Ctrl+Shift+caracter
  - Ctrl+Alt+caractere
  - Ctrl+Shift+Alt+caractere

- Em macOS:
  - Comando+caractere
  - Comando+Shift+caracter
  - Comando+Opção+característica
  - Comando+Shift+Option+character

> Recomendamos que mantenha os atalhos de teclado padrão que estão associados a acções padrão.

Pode utilizar qualquer tecla alfanumérica como atalho de teclado, excepto as teclas reservadas pelos comandos do menu padrão que aparecem nos menus **Edit** e **File** , e as teclas reservadas aos comandos do menu 4D.

Estas combinações chave reservadas estão listadas na tabela seguinte:

| Teclas (Windows) | Teclas (macOS)    | Operação      |
| ---------------- | ----------------- | ------------- |
| Ctrl+C           | Comando+C         | Copiar        |
| Ctrl+Q           | Comando+Q         | Salir         |
| Ctrl+V           | Comando+V         | Colar         |
| Ctrl+X           | Comando+X         | Cortar        |
| Ctrl+Z           | Comando+Z         | Deshacer      |
| Ctrl+. (ponto)   | Comando+. (ponto) | Parar a acção |

Atribuir um atalho de teclado no editor de menus:

Seleccione o item do menu ao qual pretende atribuir um atalho de teclado. Clique no botão [...] à direita da área de entrada "Atalho". Aparece a seguinte janela:

![](../assets/en/Menus/Shortcut.png)

Introduzir o carácter a utilizar depois (opcional) clicar na caixa de verificação **Shift** e/ou **Alt** (**Opção**) de acordo com a combinação desejada. Também pode pressionar directamente as teclas que compõem a combinação desejada (não pressionar a tecla **Ctrl/Command**).

> Não é possível desmarcar a tecla Ctrl/Command, que é obrigatória para atalhos de teclado para menus. Para recomeçar, clique em **Limpar**. Clique **OK** para validar as alterações. O atalho definido é mostrado na área de entrada "Atalho".

Para atribuir um atalho de teclado usando a linguagem 4D, usar o comando `SET ITEM SHORTCUT` .

> Um objecto activo pode também ter um atalho de teclado. Se as atribuições-chave **Ctrl/Command** entrarem em conflito, o objecto activo tem precedência.

### Item habilitado

No editor do menu, pode especificar se um item do menu aparecerá activado ou desactivado. Um comando de menu activado pode ser escolhido pelo utilizador; um comando de menu desactivado é diminuído e não pode ser escolhido. Quando a caixa de verificação **Enabled Item** é desmarcada, o comando do menu aparece com um sombreado, indicando que não pode ser escolhido.

A menos que especifique o contrário, 4D activa automaticamente cada item de menu que acrescenta a um menu personalizado. Pode desactivar um item, por exemplo, para o activar apenas usando programação com `ENABLE MENU ITEM` e `DISABLE MENU ITEM` comandos.

### Marca de verificação

Esta opção de menu editor pode ser usada para associar uma marca de verificação do sistema com um item de menu. Pode então gerir a exibição da marca de verificação usando comandos de língua (`SET MENU ITEM MARK` e `Obter a marca do item do menu`).

As marcas de verificação são geralmente utilizadas para itens do menu de acção contínua e indicam que a acção está actualmente em curso.

### Font-style

4D permite-lhe personalizar os menus aplicando diferentes estilos de fontes aos comandos do menu. Pode personalizar os seus menus com os estilos Bold, Italic ou Underline através de opções no editor de menus, ou usando o comando de linguagem `SET MENU ITEM STYLE` .

Como regra geral, aplique estilos de fonte moderadamente aos seus menus - demasiados estilos distrairão o utilizador e darão um aspecto desorganizado à sua aplicação.
> Também se pode aplicar estilos inserindo caracteres especiais no título do menu (ver [Utilizando caracteres de controlo](properties.md#using-control-characters) acima).

### Ícone do item

Pode associar um ícone a um item do menu. Será exibido directamente no menu, ao lado do item:

![](../assets/en/Menus/iconMenu.png)

Para definir o ícone no editor de Menu, clicar na área "Ícone de item" e seleccionar **Abrir** para abrir uma imagem do disco. Se selecionar um arquivo de imagem que não esteja já armazenado na pasta de recursos do banco de dados, é copiado automaticamente nessa pasta. Uma vez definido, o ícone do item aparece na área de pré-visualização:

![](../assets/en/Menus/iconpreview.png)

Para remover o ícone do item, escolher a opção **No Icon** da área "Item Icon".

Para definir ícones de itens usando a linguagem 4D, chamar o comando `SET MENU ITEM ICON` .
