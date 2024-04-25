---
id: properties
title: Propriedades dos menus
---

Pode definir várias propriedades para itens de menu tais como ação, estilo de fonte, linhas separadoras, atalhos de teclado ou ícones.

## Título

The **Title** property contains the label of a menu or menu item as it will be displayed on the application interface.

No editor do Menu, pode introduzir directamente a etiqueta como "hard coded". Ou, pode introduzir uma referência para uma variável ou um elemento XLIFF, o que facilitará a manutenção e tradução das aplicações. Pode utilizar os seguintes tipos de referências:

- Uma referência de recurso XLIFF do tipo :xliff:MyLabel. For more information about XLIFF references, refer to _XLIFF Architecture_ section in _4D Design Reference_.
- An interprocess variable name followed by a number, for example: `:<>vlang,3`. A alteração do conteúdo desta variável modificará a etiqueta do menu quando esta for exibida. Neste caso, a etiqueta chamará um recurso XLIFF. The value contained in the `<>vlang` variable corresponds to the _id_ attribute of the _group_ element. The second value (3 in this example) designates the _id_ attribute of the _trans-unit_ element.

Using the 4D language, you set the title property through the _itemText_ parameter of the `APPEND MENU ITEM`, `INSERT MENU ITEM`, and `SET MENU ITEM` commands.

### Utilização de caracteres de controle

Pode definir algumas propriedades dos comandos do menu utilizando caracteres de controle (metacaracteres) directamente nas etiquetas dos comandos do menu. Por exemplo, pode atribuir o atalho de teclado Ctrl+G (Windows) ou Command+G (macOS) para um comando de menu, colocando os caracteres "/G" na etiqueta do item do menu.

Os caracteres de controle não aparecem nas etiquetas de comando do menu. Deve-se, portanto, evitar a sua utilização para não ter efeitos indesejáveis. Os caracteres de controle são os seguintes:

| Caracteres           | Descrição                    | Utilização                                                                                                                          |
| -------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ( | abre parênteses              | Desactivar item                                                                                                                     |
| \<B                  | menor que B                  | fonte itálica                                                                                                                       |
| \<I                  | maior que I                  | Itálico                                                                                                                             |
| \<U                  | menor que U                  | fonte sublinhada                                                                                                                    |
| !+caracter           | ponto de exclamação+caratere | Adiciona caractere como marca de verificação (macOS); adiciona marca de verificação (Windows) |
| /+caracter           | barra+caractere              | Adicionar caractere como atalho                                                                                                     |

## Parâmetro

É possível associar um parâmetro personalizado a cada item do menu. Um parâmetro de item de menu é uma string de caracteres cujo conteúdo pode ser livremente escolhido. It can be set in the Menu editor, or through the `SET MENU ITEM PARAMETER` command.

Menu item parameters are useful with programmed management of menus, in particular when using the `Dynamic pop up menu`, `Get menu item parameter` and `Get selected menu item parameter` commands.

## Ação

Cada comando de menu pode ter um método de projeto ou uma ação padrão anexada a ele. Quando o comando do menu é escolhido, 4D executa a ação padrão associada ou o método de projecto. For example, a **Monthly Report** menu command can call a project method that prepares a monthly report from a table containing financial data. The **Cut** menu command usually calls the `cut` standard action in order to move the selection to the clipboard and erase it from the window in the foreground.

Se não atribuir um método ou uma ação padrão a um comando de menu, a escolha desse comando de menu faz com que 4D saia do ambiente Application e vá para o ambiente Design. Se apenas o ambiente de Aplicação estiver disponível, isto significa desistir do Ambiente de Trabalho.

Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the database (add record, select all, etc.).

Pode atribuir tanto uma acção padrão como um método de projecto a um comando de menu. Neste caso, a acção padrão nunca é executada; contudo, 4D utiliza esta acção para ativar/desativar o comando do menu de acordo com o contexto actual e para associar uma operação específica com ele de acordo com a plataforma. Quando um comando de menu for desativado, o método de projecto associado não pode ser executado.

A escolha entre associar uma ação padrão ou um método de projecto a um comando de menu depende do tipo de resultado desejado. Em princípio, é preferível escolher uma acção padrão sempre que possível, uma vez que implementam mecanismos otimizados, mais particularmente ativação/desativação de acordo com o contexto.

### Associar um método de projecto ou uma acção padrão

É possível atribuir um método de projecto e/ou uma acção padrão a um comando de menu seleccionado no editor de Menu:

- **Method Name**: Select an existing project method name in the combo box. If the project method does not exist, enter its name in the "Method Name" combo box then click on the [...] button. 4D exibe um diálogo de criação de métodos de projecto que é utilizado para aceder ao editor de métodos.
- **Associated Standard Action**: Choose or write the action you want to assign in the "Associated Standard Action" combo box. Pode introduzir qualquer acção apoiada e (opcionalmente) parâmetro que deseje na área. For a comprehensive list of standard actions, please refer to the **Standard actions** section in the _Design Reference_.
  **Note for macOS:** Under macOS, the custom menu commands associated with the _Quit_ action are automatically placed in the application menu, in compliance with the platform interface standards.

Using the 4D language, you can associate a project method using the `SET MENU ITEM METHOD` command, and a standard action using the `SET MENU ITEM PROPERTY` command.

### Iniciar um novo processo

The **Start a New Process** option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the _property_ parameter of the `SET MENU ITEM PROPERTY` command.

When the **Start a New Process** option is enabled, a new process is created when the menu command is chosen.
Normalmente, um método ligado a um comando de menu executa-se dentro do processo actual, a menos que chame explicitamente um novo processo no seu código. The **Start a New Process** option makes it easier to start a new process. Quando activado, 4D irá criar um novo processo quando o comando do menu for escolhido.

Na lista de processos, 4D atribui ao novo processo um nome padrão usando o formato "ML_ProcessNumber".
Os nomes dos processos iniciados a partir de um menu são criados através da combinação do prefixo "ML_" com o número do processo.

### Executar sem validar

The **Execute without validating** option is available for menu commands associated to standard actions in the Menu editor only.

Quando esta opção é verificada, 4D não activa a "validação" do campo onde se encontra o cursor antes de executar a acção associada.
This option is mainly intended for **Edit** menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `On Data Change` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `On Data Change` form event is generated unexpectedly. In this case, it is useful to check the **Execute without validating** option.

## Privilégios de acesso remoto

Esta opção de menu editor permite definir um grupo para um comando de menu de modo a que apenas os utilizadores desse grupo possam utilizar o comando de menu de uma aplicação remota 4D (ver Utilizadores e grupos).

## Opções

### Linhas separadoras

Grupos de comandos de menu num menu podem ser divididos por uma linha separadora. Esta convenção é útil para agrupar comandos de menu associados por função.

![](../assets/en/Menus/separator.png)

Adiciona-se uma linha separadora através da criação de um comando de menu específico.

In the Menu editor, instead of entering the menu command’s text in the title area, you simply select the **Separator Line** option. Em vez de texto, aparece uma linha na área actual da barra de menu. Quando esta opção é verificada, as outras propriedades não têm qualquer efeito.
**Note:** Under macOS, if you use the dash “-” as the first character of a menu item, it will appear as a separator line.

In the 4D language, you insert a separator line by entering `-` or `(-` as itemText for `APPEND MENU ITEM`, `INSERT MENU ITEM`, or `SET MENU ITEM` commands.

### Atalhos do teclado

Pode adicionar atalhos de teclado a qualquer comando de menu. Se um comando de menu tiver um destes atalhos de teclado, os utilizadores irão vê-lo ao lado do comando de menu. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the **Copy** menu command in the **Edit** menu.

You can also add the **Shift** key as well as the **Alt** key (Windows) or **Option** key (macOS) to the shortcut associated with a menu command. Isto multiplica o número de atalhos que podem ser utilizados. Os seguintes tipos de atalhos de teclado podem, portanto, ser definidos:

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

You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the **Edit** and **File** menus, and the keys reserved for 4D menu commands.

Estas combinações chave reservadas estão listadas na tabela seguinte:

| Teclas (Windows)               | Teclas (macOS)                    | Operação      |
| ------------------------------------------------- | ---------------------------------------------------- | ------------- |
| Ctrl+C                                            | Comando+C                                            | Copiar        |
| Ctrl+Q                                            | Comando+Q                                            | Salir         |
| Ctrl+V                                            | Comando+V                                            | Colar         |
| Ctrl+X                                            | Comando+X                                            | Cortar        |
| Ctrl+Z                                            | Comando+Z                                            | Deshacer      |
| Ctrl+. (ponto) | Comando+. (ponto) | Parar a acção |

Atribuir um atalho de teclado no editor de menus:

Seleccione o item do menu ao qual pretende atribuir um atalho de teclado.
Click on the [...] button to the right of the "Shortcut" entry area. Aparece a seguinte janela:

![](../assets/en/Menus/Shortcut.png)

Enter the character to use then (optional) click the **Shift** and/or **Alt** (**Option**) checkboxes according to the combination desired.
You can also directly press the keys that make up the desired combination (do not press the **Ctrl/Command** key).

> Não é possível desmarcar a tecla Ctrl/Command, que é obrigatória para atalhos de teclado para menus.
> To start over, click on **Clear**. Click **OK** to validate the changes. O atalho definido é mostrado na área de entrada "Atalho".

To assign a keyboard shortcut using the 4D language, use the `SET ITEM SHORTCUT` command.

> Um objecto activo pode também ter um atalho de teclado. If the **Ctrl/Command** key assignments conflict, the active object takes precedence.

### Item habilitado

No editor do menu, pode especificar se um item do menu aparecerá activado ou desactivado. Um comando de menu activado pode ser escolhido pelo utilizador; um comando de menu desactivado é diminuído e não pode ser escolhido. When the **Enabled Item** check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.

A menos que especifique o contrário, 4D activa automaticamente cada item de menu que acrescenta a um menu personalizado. You can disable an item in order, for example, to enable it only using programming with `ENABLE MENU ITEM` and `DISABLE MENU ITEM` commands.

### Marca de verificação

Esta opção de menu editor pode ser usada para associar uma marca de verificação do sistema com um item de menu. You can then manage the display of the check mark using language commands (`SET MENU ITEM MARK` and `Get menu item mark`).

As marcas de verificação são geralmente utilizadas para itens do menu de acção contínua e indicam que a acção está actualmente em curso.

### Font-style

4D permite-lhe personalizar os menus aplicando diferentes estilos de fontes aos comandos do menu. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `SET MENU ITEM STYLE` language command.

Como regra geral, aplique estilos de fonte moderadamente aos seus menus - demasiados estilos distrairão o utilizador e darão um aspecto desorganizado à sua aplicação.

> You can also apply styles by inserting special characters in the menu title (see [Using control characters](properties.md#using-control-characters) above).

### Ícone do item

Pode associar um ícone a um item do menu. Será exibido directamente no menu, ao lado do item:

![](../assets/en/Menus/iconMenu.png)

To define the icon in the Menu editor, click on the "Item icon" area and select **Open** to open a picture from the disk. Se selecionar um arquivo de imagem que não esteja já armazenado na pasta de recursos do banco de dados, é copiado automaticamente nessa pasta. Uma vez definido, o ícone do item aparece na área de pré-visualização:

![](../assets/en/Menus/iconpreview.png)

To remove the icon from the item, choose the **No Icon** option from the "Item Icon" area.

To define item icons using the 4D language, call the `SET MENU ITEM ICON` command.
