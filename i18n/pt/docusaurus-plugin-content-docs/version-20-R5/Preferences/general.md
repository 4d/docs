---
id: general
title: Página Geral
---

Esta página contém várias opções para configurar o funcionamento geral da sua aplicação 4D.

## Opções

### Na inicialização

Esta opção permite configurar o ecrã 4D por padrão no arranque, quando o usuário inicia apenas a aplicação.

- **Do nothing**: Only the application window appears, empty.
- **Open Local Project dialog**: 4D displays a standard open document dialog box, allowing you to select a local project.
- **Open last used project**: 4D directly opens the last project used; no opening dialog box appears.
  > To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.
- **Open Remote Project dialog**: 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network.
- **Open Welcome Wizard dialog** (factory setting): 4D displays the Welcome Wizard dialog box.

> **4D Server**: The 4D Server application ignores this option. In this environment, the **Do nothing** mode is always used.

### Criação de formulários automática

> Essa opção é usada somente em bancos de dados binários; ela é ignorada na arquitetura do projeto. Ver doc.4d.com.

### Janela com guias (somente macOS)

A partir do macOS Sierra, os aplicativos Mac podem se beneficiar do recurso Automatic Window Tabbing, que ajuda a organizar várias janelas: as janelas de documentos são empilhadas em uma única janela principal e podem ser navegadas por meio de guias. Esse recurso é útil em telas pequenas e/ou ao usar um trackpad.

Você pode se beneficiar desse recurso nos seguintes ambientes (somente com versões 4D de 64 bits):

- Method Editor windows
- Janelas do editor de formulários

Todas as janelas destes editores podem ser colocadas no formulário de tabulação:

![](../assets/en/Preferences/general2.png)

A set of commands in the **Window** menu allows managing the tabs:

![](../assets/en/Preferences/general3.png)

In the 4D's Preferences dialog box, the **Window tabbing** option allows you to control this feature:

![](../assets/en/Preferences/general4.png)

Estão disponíveis três opções:

- **According to System Preferences** (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).
- **Never**: Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created).
- **Always**: Opening a new document in 4D form editor or method editors will always result in creating a new tab.

### Aparência (somente macOS)

This menu lets you select the color scheme to use for the **4D development** environment. O esquema especificado será aplicado a todos os editores e janelas do modo Design.

> You can also set the color scheme to use in your **desktop applications** in the "Interface" page of the Settings dialog box.

Estão disponíveis três opções:

- **According to System Color Scheme Preferences** (default): Use the color scheme defined in the macOS System Preferences.
- **Light**: Use the Light Theme
- **Dark**: Use the Dark Theme

> Esta preferência só é suportada no macOS. No Windows, é sempre utilizado o esquema "Light".

### Sair do modo Desenho ao passar para o modo Aplicação

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. Se essa opção não estiver marcada (configuração padrão), as janelas do ambiente Design permanecerão visíveis no plano de fundo do ambiente Application.

### Ativar a criação de bases de dados binárias

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

- **Database...**
- **Base de dados a partir da definição da estrutura...**

![](../assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). Eles não são mais propostos por padrão porque 4D recomenda o uso de arquitetura baseada em projeto para novos desenvolvimentos.

## Ao criar um novo projeto

### Usar arquivo de registo

Quando essa opção está marcada, um arquivo de registro é iniciado automaticamente e usado quando um novo banco de dados é criado. For more information, please refer to [Log file (.journal)](Backup/log.md).

### Criar pacote

Quando essa opção for marcada, os bancos de dados 4D são criados automaticamente em uma pasta com o sufixo .4dbase.

Graças a esse princípio, no macOS, as pastas do banco de dados aparecem como pacotes com propriedades específicas. No Windows, isto não tem qualquer impacto particular.

### Incluir tokens no arquivo de origem do projeto

When this option is checked, saved [method source files](../Project/architecture.md#sources) in new 4D projects will contain **tokens** for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as `:C10` or `:5` inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see [Using tokens in formulas](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html)).

Se você pretende usar VCS ou editores de código externos em seus novos projetos, talvez queira desmarcar essa opção para melhorar a legibilidade do código com essas ferramentas.

> Essa opção só pode ser aplicada a projetos (os bancos de dados binários sempre incluem tokens).

> You can always get the code with tokens by calling [`METHOD GET CODE`](https://doc.4d.com/4dv19R/help/command/en/page1190.html) with 1 in the _option_ parameter.

#### Excluir tokens em projetos existentes

You can configure your existing projects to save code **without tokens** by inserting the following key in the [`<applicationName>.4DProject`](../Project/architecture.md#applicationname4dproject-file) file using a text editor:

```
"tokenizedText": false
```

> Este parâmetro só é tida em conta quando os métodos são guardados. Os métodos existentes em seus projetos não são modificados, a menos que você os salve novamente.

### Create `.gitignore` file

Talvez você precise ou queira que o git ignore alguns arquivos em seus novos projetos.

You can set this preference by checking the **Create .gitignore file**  option.

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. Isso abrirá o arquivo de configuração .gitignore em seu editor de texto. The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### Linguagem de comparação de texto

Esse parâmetro configura o idioma padrão usado para o processamento e a comparação de cadeias de caracteres em novos bancos de dados. A escolha do idioma influencia diretamente a classificação e a pesquisa de texto, bem como as letras maiúsculas e minúsculas, mas não afeta a tradução de textos nem os formatos de data, hora ou moeda, que permanecem no idioma do sistema. Por padrão (configuração de fábrica), 4D usa o idioma do usuário atual definido no sistema.

Um banco de dados 4D pode, portanto, operar em uma linguagem diferente da do sistema. Quando um banco de dados é aberto, o motor 4D detecta a linguagem usada pelo arquivo de dados e fornece a linguagem (modo interpretador ou compilado). As comparações de texto, independentemente de serem realizadas pelo mecanismo de banco de dados ou pelo idioma, são feitas no mesmo idioma.

Ao criar um novo arquivo de dados, o 4D usa o idioma previamente definido nesse menu. Ao abrir um arquivo de dados que não está no mesmo idioma que a estrutura, o idioma do arquivo de dados é usado e o código do idioma é copiado para a estrutura.

> You can modify this parameter for the open database using the Database Settings (see [Text comparison](../settings/database.md#text-comparison)).

## Localização da documentação

Esta área configura o acesso à documentação HTML 4D exibida no seu navegador atual:

- When you hit the **F1** key while the cursor is inserted in a 4D class function or command name in the Code Editor;
- When you double-click on a 4D command in the **Commands Page** of the Explorer.

### Língua da documentação

Linguaje da documentação HTML a apresentar. É possível selecionar uma documentação em um idioma diferente do idioma do aplicativo.

### Procurar primeiro na pasta local

> Esta opção só é tida em conta para o acesso à documentação de comandos (excluindo as funções de classe).

Define onde 4D irá procurar por páginas de documentação.

- Quando marcado (padrão), 4D primeiro procura a página na pasta local (veja abaixo). Se for encontrado, 4D mostra a página no navegador atual. Caso contrário, o 4D o procura automaticamente no site de documentação on-line. Desta forma, é possível aceder à documentação mesmo quando se está offline.
- Quando não marcada, 4D procura a página desejada diretamente no site de documentação on-line e a exibe no navegador atual. Se não for encontrado, 4D mostra uma mensagem de erro no navegador.

### Pasta local

> Esta opção só é tida em conta para o acesso à documentação de comandos (excluindo as funções de classe).

Indica a localização da documentação HTML estática. Por padrão, esta é a subpasta \Help\Command\language. Pode ver a localização clicando no menu associado à zona. Se esta subpasta não estiver presente, a localização é apresentada a vermelho.

Você pode modificar esse local conforme desejar, por exemplo, se quiser exibir a documentação em um idioma diferente do idioma do aplicativo. A documentação HTML estática pode estar localizada em outro volume, em um servidor da Web, etc. To designate a different location, click on the **[...]** button next to the entry area and choose a documentation root folder (folder corresponding to the language: `fr`, `en`, `es`, `de` or `ja`).
