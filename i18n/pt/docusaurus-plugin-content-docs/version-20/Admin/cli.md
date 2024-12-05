---
id: cli
title: Interface de linha de comando
---

É possível usar o Terminal macOS ou o console do Windows para pilotar suas aplicações 4D (4D e 4D Servidor) com linhas de comando. Mais especificamente, essa funcionalidade permite que:

- lance um banco de dados remotamente, que pode ser útil especialmente para administrar servidores Web.
- roda automaticamente testes para suas aplicações.

## Informação básica

Pode executar linhas de comando para aplicações 4D usando o terminal macOS ou o console Windows.

- Em macOS, precisa usar o comando `open`.
- Em Windows pode passar os argumentos diretamente.

> Em macOS pode passar os argumentos diretamente indo à pasta onde está a aplicação dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo se o pacote 4D estiver na pasta `MyFolder`,  deve escrever a linha de comando abaixo: `/MyFolder/4D.app/Contents/MacOS/4D`. Entretanto, recomandos usar o comando `open` sempre que não precisar acessar o stream stderr.

## Lançar uma aplicação 4D

Aqui está uma descrição das linhas de comando e os argumentos compatíveis com o lançamento de aplicações 4D.

Sintaxe:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

| Argumento                   | Valor                                              | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:--------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Rota de 4D, Servidor 4D ou da aplicação fusionada. | Lança a aplicação. Mesmo que dar um clique duplo na aplicação. Quando chamado sem um argumento de arquivo estrutura, a aplicação é executada e a caixa de diálogo "selecionar banco de dados" aparece.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--version`                 |                                                    | Exibe a versão da aplicação e termina                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--help`                    |                                                    | Exibe ajuda e sai. Outros argumentos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--project`                 | projectPath &#124; packagePath &#124; 4dlinkPath   | Arquivo de projeto para abrir com o arquivo de dados atual. Não aparece nenhuma caixa de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--data`                    | dataPath                                           | Arquivo de dados a abrir com o arquivo de projeto designado. Se não for especificado, 4D usa o último arquivo aberto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--opening-mode`            | interpreted &#124; compiled                        | Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro é gerado se o modo pedido estiver indisponível.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--create-data`             |                                                    | Cria automaticamente um novo arquivo de dados se nenhum arquivo válido for encontrado. Não aparece nenhuma caixa de diálogo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome já existir).                                                                                                                                                                                                                                                                                                                                                                         |
| `--user-param`              | String usuário personalizada                       | Uma string que ficará disponível dentro da aplicação 4D através do comando Get database parameter (a string não deve começar com o caractere "-" que é reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--headless`                |                                                    | Lança 4D, Servidor 4D, ou a aplicação fusionada, sem uma interface (modo headless). Nesse modo:<li> O modo Design nãoe stá disponível, o banco começa em modo Aplicação</li><li> Sem barra de ferramentas, sem barra de menu, sem janela MDI ou tela de apresentação.</li><li>Nenhum ícone é exibido no dock ou na barra de tarefas.</li><li>O banco de dados aberto não é registrado no menu "Bancos recentes"</li><li>O histórico de diagnósticos é iniciado automaticamente (ver [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Toda chamada para uma caixa de diálogo é interceptada e uma resposta automaticamente é fornecida (por exemplo OK para o comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) , Abortar para um diálogo de erro...). Todos os comandos interceptados (*) são gravados no histórico de diagnóstico.</li><br/>Para questões de manutenção é possível enviar qualquer texto para streams normais de output usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). Note que aplicações headless 4D só podem ser fechadas com uma chamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou usando o gerente de tarefas do OS. |
| `--dataless`                |                                                    | Lança 4D, 4D Server, aplicação fundida ou tool4d em modo dataless. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). Nesse modo: <li>Nenhum arquivo contendo dados é aberto, mesmo se especificado na linha de comando ou no arquivo `.4DLink`, ou se usar os comandos `CREATE DATA FILE` e `OPEN DATA FILE`</li><li>Comandos que manipulam dados vão causar um erro. Por exemplo , `CREATE RECORD` gera a mensagem “nenhuma tabela está disponível para aplicar este comando”.</li><br/>**Nota**:<li>Se passado na linha de comando, o modo sem dados se aplica a todos os bancos de dados abertos em 4D, desde que a aplicação seja fechada.</li><li>Se passado no arquivo `.4DLink`, modo dataless só se aplica aos bancos especificados no arquivo `.4DLink`. Para saber mais sobre arquivos `.4DLink` veja [Project opening shortcuts](../Project/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                      |
| `--webadmin-settings-file`  | Rota do arquivo                                    | Rota do arquivo personalizado WebAdmin `.4DSettings` para o  [servidor WebAdmin](webAdmin.md) Não disponível com [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-access-key`     | Text                                               | Chave de acesso para o servidor web [WebAdmin](webAdmin.md) Não disponível com [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--webadmin-auto-start`     | Parâmetros                                         | Estado do início automático para o servidor [WebAdmin](webAdmin.md) Não disponível com [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--webadmin-store-settings` |                                                    | Armazena a chave de acesso e inicia automaticamente os parâmetros nas configurações de arquivo utilizadas (ou seja, o arquivo padrão [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) ou um arquivo personalizado designado pelo parâmetro `--webadmin-settings-path`). Use o argumento `--webadmin-store-settings` para salvar essas configurações se necessário Não disponível com [tool4d](#tool4d).                                                                                                                                                                                                                   |
| `--utility`                 |                                                    | Apenas disponível com 4D Server. Inicia [4D Server no modo utilitário](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--skip-onstartup`          |                                                    | Inicia o projecto sem executar quaisquer métodos "automáticos", incluindo os métodos de base de dados `On Startup` e `On Exit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--startup-method`          | Nome do método projecto (string)                   | Método de projecto a executar imediatamente após o método de base `On Startup` (se não for ignorado com `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

[Diagnostic log file](debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). Nesses casos, uma mensagem de erro é criada tanto no stream stderr e no arquivo de eventos do sistema, e então a aplicação fecha.

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


**tool4d** é uma aplicação gratuita, leve e autónoma que permite abrir um projecto 4D em modo headless e executar algum código 4D utilizando o CLI.

tool4d está disponível em Windows e macOS e está sempre associado a uma versão 4D (mesma versão e número de compilação). Só é fornecido na localização em inglês.

tool4d é uma ferramenta perfeita para o fazer:

- implementar uma cadeia CI/CD para sua aplicação 4D,
- usar um executável 4D leve para executar scripts 4D, por exemplo, para executar testes unitários automáticos.



### Utilizar tool4d

Pode obter tool4d na[página de transferência do produto 4D](https://product-download.4d.com/).

Utiliza-se o tool4d executando uma [linha de comando](#launch-a-4d-application) com um projecto 4D padrão. Pode utilizar todos os argumentos descritos na tabela acima, excepto --`webadmin` uma vez que este componente está [desactivado no tool4d](#disabled-4d-features). Com tool4d, é lançada a seguinte sequência específica:

1. o tool4d executa o método de base `On Startup` (e todos os métodos "automáticos" como o [método utilizador](../Users/handling_users_groups.md#user-properties)), excepto se for passado o argumento `--skip-onstartup`.
2. tool4d executa o método designado pelo argumento `--startup-method`, se existir.
3. tool4d executa o método de base `On Exit`, excepto se for passado o argumento `--skip-onstartup`.
4. tool4d desiste.

No Windows, tool4d é uma aplicação de consola, pelo que o fluxo `stdout` é apresentado no terminal (cmd, powershell...).


:::note Notas

- tool4d é sempre executado sem ‘interface’ (a opção de linha de comando `headless` é inútil).
- O comando [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) devolve o valor 6 ("tool4d") quando chamado a partir da aplicação tool4d.
- o [ficheiro de registo de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) tem o prefixo "4DDiagnosticLogTool".

:::


### Funcionalidades 4D desativadas

Tenha em mente que tool4d roda automaticamente em **modo headless** (veja `--headless` em [esta tabela](#launch-a-4d-application)), e não dá acesso ao IDE 4D nem a nenhum de seus servidores. Em particular, são desactivadas as seguintes funcionalidades:

- servidor de aplicações, servidor Web, servidor SQL,
- programador de cópias de segurança,
- ODBC e SQL pass-through,
- todos os componentes tais como 4D View Pro, 4D SVG, 4D NetKit...,
- corrector ortográfico hunspell,
- corrector ortográfico japonês (library *mecab*),
- WebAdmin,
- CEF,
- PHP,
- depurador remoto (depurador local, o comando `TRACE` e os pontos de interrupção são ignorados em aplicações sem interface).



## 4D Server em modo utilitário

Pode lançar uma instância 4D Server em modo utilitário (sem interface) usando a opção CLI `--utility`. Neste caso, é accionado o seguinte fluxo de trabalho:

1. 4D Server executa o método base `On Startup` (e todos os métodos "automáticos" tais como [método usuário](../Users/handling_users_groups.md#user-properties)), excepto se o parâmetro `--skip-onstartup` for passado.
2. 4D Server executa o método designado pelo `--startup-method`, se houver.
3. 4D Server executa o método base `On Exit`, excepto se o parâmetro `--skip-onstartup` for passado.
4. 4D Server é encerrado.

:::info

Ao contrário de tool4d, 4D Server em modo utilitário tem todas as suas funcionalidades ativadas. No entanto, o servidor de aplicações e todos os outros servidores não são iniciados.

:::


:::tip Ver também

Veja [este post do blog](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) para exemplos de como usar tool4d e 4D Server no modo utilitário.

:::
