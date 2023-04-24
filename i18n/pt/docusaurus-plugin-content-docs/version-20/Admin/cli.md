---
id: cli
title: Interface de linha de comando
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and [tool4d](#tool4d)) using command lines. Mais especificamente, essa funcionalidade permite que:

- lance um banco de dados remotamente, que pode ser útil especialmente para administrar servidores Web.
- roda automaticamente testes para suas aplicações.

## Informação básica

Pode executar linhas de comando para aplicações 4D usando o terminal macOS ou o console Windows.

- Em macOS, precisa usar o comando `open`.
- Em Windows pode passar os argumentos diretamente.

> Em macOS pode passar os argumentos diretamente indo à pasta onde está a aplicação dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo se o pacote 4D estiver na pasta `MyFolder`,  deve escrever a linha de comando abaixo: `/MyFolder/4D.app/Contents/MacOS/4D`. Entretanto, recomandos usar o comando `open` sempre que não precisar acessar o stream stderr.

## Lançar uma aplicação 4D

Here is a description of command lines and arguments supported to launch 4D applications.

Sintaxe:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>] 
```

| Argumento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Value                                                | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                                                                                                                                                                             | Path of 4D, 4D Server, merged application, or tool4d | Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--version`                                                                                                                                                                                   |                                                      | Displays application version and exits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--help`                                                                                                                                                                                      |                                                      | Displays help and exits. Outros argumentos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--project`                                                                                                                                                                                   | projectPath &#124; packagePath &#124; 4dlinkPath     | Arquivo de projeto para abrir com o arquivo de dados atual. Não aparece nenhuma caixa de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--data`                                                                                                                                                                                      | dataPath                                             | Arquivo de dados a abrir com o arquivo de projeto designado. If not specified, the last opened data file is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--opening-mode`                                                                                                                                                                              | interpreted &#124; compiled                          | Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro é gerado se o modo pedido estiver indisponível.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--create-data`                                                                                                                                                                               |                                                      | Cria automaticamente um novo arquivo de dados se nenhum arquivo válido for encontrado. Não aparece nenhuma caixa de diálogo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome já existir).                                                                                                                                                                                                                                                                                                                                                                         |
| `--user-param`                                                                                                                                                                                | String usuário personalizada                         | A string that will be available within the application through the [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/en/page643.html) command (the string must not start with a "-" character, which is reserved).                                                                                                                                                                                                                                                                                                                                                                                              |
| `--headless`                                                                                                                                                                                  |                                                      | Lança 4D, Servidor 4D, ou a aplicação fusionada, sem uma interface (modo headless). Nesse modo:<li> O modo Design nãoe stá disponível, o banco começa em modo Aplicação</li><li> Sem barra de ferramentas, sem barra de menu, sem janela MDI ou tela de apresentação.</li><li>Nenhum ícone é exibido no dock ou na barra de tarefas.</li><li>O banco de dados aberto não é registrado no menu "Bancos recentes"</li><li>O histórico de diagnósticos é iniciado automaticamente (ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Toda chamada para uma caixa de diálogo é interceptada e uma resposta automaticamente é fornecida (por exemplo OK para o comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) , Abortar para um diálogo de erro...). Todos os comandos interceptados (*) são gravados no histórico de diagnóstico.</li><br/>Para questões de manutenção é possível enviar qualquer texto para streams normais de output usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). Note que aplicações headless 4D só podem ser fechadas com uma chamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou usando o gerente de tarefas do OS. |
| `--dataless`                                                                                                                                                                                  |                                                      | Launches 4D, 4D Server, merged application or tool4d in dataless mode. O modo sem dados é útil quando 4D rodar tarefas que não precisam de dados (por exemplo na compilação de projetos). Nesse modo: <li>Nenhum arquivo contendo dados é aberto, mesmo se especificado na linha de comando ou no arquivo `.4DLink`, ou se usar os comandos `CREATE DATA FILE` e `OPEN DATA FILE` </li><li>Comandos que manipulam dados vão causar um erro. Por exemplo , `CREATE RECORD` gera a mensagem “nenhuma tabela está disponível para aplicar este comando”.</li><br/>**Nota**:<li>Se passado na linha de comando, o modo sem dados se aplica a todos os bancos de dados abertos em 4D, desde que a aplicação seja fechada.</li><li>Se passado no arquivo `.4DLink`, modo dataless só se aplica aos bancos especificados no arquivo `.4DLink`. Para saber mais sobre arquivos `.4DLink` veja [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                   |
| `--webadmin-settings-file`                                                                                                                                                                    | Rota do arquivo                                      | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-access-key`                                                                                                                                                                       | String                                               | Access key for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--webadmin-auto-start`                                                                                                                                                                       | Booleano                                             | Status of the automatic startup for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--webadmin-store-settings`                                                                                                                                                                   |                                                      | Armazena a chave de acesso e inicia automaticamente os parâmetros nas configurações de arquivo utilizadas (ou seja, o arquivo padrão [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) ou um arquivo personalizado designado pelo parâmetro `--webadmin-settings-path`). Use the `--webadmin-store-settings` argument to save these settings if necessary. Not available with [tool4d](#tool4d).                                                                                                                                                                                                                           |
| `--utility`                                                                                                                                                                                   |                                                      | Only available with 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--skip-onstartup`                                                                                                                                                                            |                                                      | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--startup-method`                                                                                                                                                                            | Project method name (string)                         | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

[Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). Nesses casos, uma mensagem de erro é criada tanto no stream stderr e no arquivo de eventos do sistema, e então a aplicação fecha.

### Exemplos

> A pasta atual do usuário é alcançada usando o comando  "~ " em macOS e o comando "%HOMEPATH%" em Windows.

Lance uma aplicação 4D armazenada no desktop:

*   macOS:


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


Abrir um ficheiro de pacote em macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Abrir um ficheiro de projecto:

*   macOS:


```bash
--args ~/Documentos/myProj/Projecto/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Abrir um ficheiro de projecto e um ficheiro de dados:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
ou:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Abrir um ficheiro .4DLink:

*   macOS:


```bash
~/Desktop/MyDatabase.4DLink
```


*   Windows:


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Abrir em modo compilado e criar um arquivo de dados se não disponível:

*   macOS:


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Abrir um ficheiro projeto e um arquivo de dados e passar uma “string” como parâmetro do usuário:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Aberto sem interface (modo headless):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```



## tool4d


**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization.

tool4d is a perfect tool if you want to:

- implement a CI/CD chain for your 4D application,
- use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.



### Using tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). With tool4d, the following specific sequence is launched:

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quits.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).


:::note Notes

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::


### Disabled 4D features

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:

- application server, Web server, SQL server,
- backup scheduler,
- ODBC and SQL pass-through,
- all components such as 4D View Pro, 4D SVG, 4D NetKit...,
- hunspell spell checker,
- japanese spellchecker (*mecab* library),
- WebAdmin,
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).



## 4D Server in utility mode

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. In this case, the following workflow is triggered:

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server quits.

:::info

Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started.

:::


:::tip See also

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.

:::