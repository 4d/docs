---
id: general
title: Página Geral
---

Esta página contém várias opções para configurar o funcionamento geral da sua aplicação 4D.

## Opções

### Na inicialização

Esta opção permite configurar o ecrã 4D por padrão no arranque, quando o usuário inicia apenas a aplicação.

* **Não fazer nada**: só aparece a janela da aplicação, vazia.
* **Diálogo Abrir Projeto Local**: 4D apresenta uma caixa de diálogo padrão para abrir um documento, permitindo-lhe selecionar um projeto local.
* **Abrir o último projeto utilizado**: 4D abre diretamente o último projeto utilizado; não aparece nenhuma caixa de diálogo de abertura.
> To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.

* **Diálogo Abrir Projeto Remoto**: 4D mostra o diálogo de logon padrão do 4D Server, permitindo selecionar um projeto publicado na rede.
* **Abra a caixa de diálogo Welcome Wizard** (configuração de fábrica): O 4D exibe a caixa de diálogo Welcome Wizard (Assistente de boas-vindas).
> **4D Server**: O aplicativo 4D Server ignora essa opção. Nesse ambiente, o modo **Do nothing** é sempre usado.

### Criação de formulários automática

> Essa opção é usada somente em bancos de dados binários; ela é ignorada na arquitetura do projeto. Ver doc.4d.com.

#### Janela com guias (somente macOS)

A partir do macOS Sierra, os aplicativos Mac podem se beneficiar do recurso Automatic Window Tabbing, que ajuda a organizar várias janelas: as janelas de documentos são empilhadas em uma única janela principal e podem ser navegadas por meio de guias. Esse recurso é útil em telas pequenas e/ou ao usar um trackpad.

Você pode se beneficiar desse recurso nos seguintes ambientes (somente com versões 4D de 64 bits):

* Janelas do Editor de Métodos
* Janelas do editor de formulários

Todas as janelas destes editores podem ser colocadas no formulário de tabulação:

![](../assets/en/Preferences/general2.png)

Um conjunto de comandos no menu **Janela** permite gerenciar as abas:

![](../assets/en/Preferences/general3.png)

Na caixa de diálogo Preferências do 4D, a opção **Janela guia** permite controlar esse recurso:

![](../assets/en/Preferences/general4.png)

Estão disponíveis três opções:

* **De acordo com as Preferências do sistema** (padrão): As janelas 4D se comportarão como definido nas Preferências do sistema do macOS (Em tela cheia, Sempre ou Manualmente).
* **Never**: Opening a new document in 4D form editor or method editor will always result in creating a new window (tabs are never created).
* **Sempre**: Abrir um novo documento no editor de formulários 4D ou nos editores de métodos sempre resultará na criação de uma nova guia.

### Sair do modo Desenho ao passar para o modo Aplicação

Se essa opção estiver marcada, quando o usuário alternar para o ambiente do aplicativo usando o comando de menu **Test Application** , todas as janelas do ambiente de design serão fechadas. Se essa opção não estiver marcada (configuração padrão), as janelas do ambiente Design permanecerão visíveis no plano de fundo do ambiente Application.

### Ativar a criação de bases de dados binárias

Se você marcar essa opção, dois itens serão adicionados ao menu **File > New** e ao botão da barra de ferramentas **New** :

* **Base de dados...**
* **Base de dados a partir da definição da estrutura...**

![](../assets/en/Preferences/general5.png)

Esses itens permitem a criação de bancos de dados binários (consulte a seção [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html)). Eles não são mais propostos por padrão porque 4D recomenda o uso de arquitetura baseada em projeto para novos desenvolvimentos.

## Ao criar um novo projeto

### Usar arquivo de registo

Quando essa opção está marcada, um arquivo de registro é iniciado automaticamente e usado quando um novo banco de dados é criado. Para mais informações, consulte o arquivo [Log (.journal)](Backup/log.md).

### Criar pacote

Quando essa opção for marcada, os bancos de dados 4D são criados automaticamente em uma pasta com o sufixo .4dbase.

Graças a esse princípio, no macOS, as pastas do banco de dados aparecem como pacotes com propriedades específicas. No Windows, isto não tem qualquer impacto particular.

### Linguagem de comparação de texto

Esse parâmetro configura o idioma padrão usado para o processamento e a comparação de cadeias de caracteres em novos bancos de dados. A escolha do idioma influencia diretamente a classificação e a pesquisa de texto, bem como as letras maiúsculas e minúsculas, mas não afeta a tradução de textos nem os formatos de data, hora ou moeda, que permanecem no idioma do sistema. Por padrão (configuração de fábrica), 4D usa o idioma do usuário atual definido no sistema.

Um banco de dados 4D pode, portanto, operar em uma linguagem diferente da do sistema. Quando um banco de dados é aberto, o motor 4D detecta a linguagem usada pelo arquivo de dados e fornece a linguagem (modo interpretador ou compilado). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Localização da documentação

Esta área configura o acesso à documentação HTML 4D mostrada no navegador atual:

* When the user double-clicks on a command on the **Commands Page** of the Explorer;
* When the user clicks on a command name in the Method editor and hits the **F1** key.

You can choose to access the 4D online documentation site directly or to access a static version that is stored locally.

### Pasta local

Indica a localização da documentação HTML estática. Por padrão, esta é a subpasta \Help\Command\language. Pode ver a localização clicando no menu associado à zona. Se esta subpasta não estiver presente, a localização é apresentada a vermelho.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. To designate a different location, click on the **[...]** button next to the entry area and choose a documentation root folder (folder corresponding to the language: `fr`, `en`, `es`, `de` or `ja`). To designate a different location, click on the [...] button next to the entry area and choose a documentation root folder (folder corresponding to the language: fr, en, es, de or ja).

### Sítio Web

URL access to the on-line documentation for the version on 4D Doc Center. 4D builds calls to the pages of the documentation based on this URL. You can modify it, for example if you want to display documentation in a different language from the application language. The test button to the right of the area launches the default browser to go to the URL specified.

### Procurar primeiro na pasta local

This option (checked by default) sets where 4D will look for the documentation page called using the Explorer or the F1 key.

* When it is checked, 4D first looks for the page in the local folder. Se for encontrado, 4D mostra a página no navegador atual. If not, 4D will automatically look for it in the on-line documentation of the Web site. Desta forma, é possível aceder à documentação mesmo quando se está offline.
* When it is not checked, 4D looks for the desired page directly in the on-line documentation of the Web site and displays it in the current browser. Se não for encontrado, 4D mostra uma mensagem de erro no navegador.
