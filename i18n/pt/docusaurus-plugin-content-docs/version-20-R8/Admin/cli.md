---
id: cli
title: Interface de linha de comando
---

Você pode usar o Terminal do macOS ou o console do Windows para controlar seus aplicativos 4D (4D, 4D Server, aplicativo mesclado e [tool4d](#tool4d)) usando linhas de comando. Mais especificamente, essa funcionalidade permite que:

- lance um banco de dados remotamente, que pode ser útil especialmente para administrar servidores Web.
- roda automaticamente testes para suas aplicações.

## Informação básica

Pode executar linhas de comando para aplicações 4D usando o terminal macOS ou o console Windows.

- Em macOS, precisa usar o comando `open`.
- Em Windows pode passar os argumentos diretamente.

> Em macOS pode passar os argumentos diretamente indo à pasta onde está a aplicação dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo, se o pacote 4D está localizado na pasta `MyFolder`, você deve escrever a linha de comando da seguinte forma: `/MyFolder/4D.app/Contents/MacOS/4D`. Entretanto, recomendamos que você use o comando `open` sempre que não precisar acessar o fluxo stderr.

## Lançar uma aplicação 4D

Aqui está uma descrição das linhas de comando e os argumentos compatíveis com o lançamento de aplicações 4D.

Sintaxe:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

| Argumento                   | Valor                                                              | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Rota de 4D, Servidor 4D ou da aplicação fusionada. | Lança a aplicação. Mesmo que dar um clique duplo na aplicação. Quando chamado sem um argumento de arquivo estrutura, a aplicação é executada e a caixa de diálogo "selecionar banco de dados" aparece.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--version`                 |                                                                    | Exibe a versão da aplicação e termina                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--help`                    |                                                                    | Exibe ajuda e sai. Outros argumentos: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--project`                 | projectPath \| packagePath \| 4dlinkPath                           | Arquivo de projeto para abrir com o arquivo de dados atual. Não aparece nenhuma caixa de diálogo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--data`                    | dataPath                                                           | Arquivo de dados a abrir com o arquivo de projeto designado. Se não for especificado, 4D usa o último arquivo aberto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--opening-mode`            | interpreted \| compiled                                            | Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro é gerado se o modo pedido estiver indisponível.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--create-data`             |                                                                    | Cria automaticamente um novo arquivo de dados se nenhum arquivo válido for encontrado. Não aparece nenhuma caixa de diálogo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome já existir).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--user-param`              | String usuário personalizada                                       | Uma string que estará disponível na aplicação através do comando [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/pt/page643.html) (a string não deve começar com um caractere "-", que está reservado).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--headless`                |                                                                    | Lança 4D, Servidor 4D, ou a aplicação fusionada, sem uma interface (modo headless). Nesse modo:<li> O modo Design não está disponível, o banco de dados é iniciado no modo Aplicativo</li><li> Nenhuma barra de ferramentas, barra de menus, janela MDI ou tela inicial é exibidaNenhum</li><li>ícone é exibido no dock ou na barra de tarefasO</li><li>banco de dados aberto não está registrado no menu "Recent databases "O</li><li>log de diagnóstico é iniciado automaticamente (consulte [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), seletor 79)</li><li>Cada chamada a uma caixa de diálogo é interceptada e uma resposta automática é fornecida (por exemplo, OK para o comando [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort para uma caixa de diálogo de erro...). Todos os comandos interceptados(\*) são registrados no log de diagnóstico.</li><br/>Para necessidades de manutenção, você pode enviar qualquer texto para fluxos de saída padrão usando o comando [LOG EVENT](https://doc.4d.com/4dv19/help/command/pt/page667.html). Note que aplicações headless 4D só podem ser fechadas com uma chamada a [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou usando o gerente de tarefas do OS. |
| `--dataless`                |                                                                    | Lança 4D, 4D Server, aplicação fundida ou tool4d em modo dataless. O modo sem dados é útil quando 4D executa tarefas sem necessidade de dados (compilação de projetos, por exemplo). Nesse modo: <li>Nenhum arquivo contendo dados é aberto, mesmo se especificado na linha de comando ou no arquivo `.4DLink`, ou ao usar os comandos `CREATE DATA FILE` e `OPEN DATA FILE`.</li><li>Os comandos que manipulam dados geram um erro. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--webadmin-settings-file`  | Rota do arquivo                                                    | Rota do arquivo personalizado WebAdmin `.4DSettings` para o  [servidor WebAdmin](webAdmin.md) No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--webadmin-access-key`     | Text                                                               | Chave de acesso para o servidor web [WebAdmin](webAdmin.md) No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--webadmin-auto-start`     | Parâmetros                                                         | Estado do início automático para o servidor [WebAdmin](webAdmin.md) No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--webadmin-store-settings` |                                                                    | Armazene a chave de acesso e os parâmetros de inicialização automática no arquivo de configurações usado no momento (ou seja, o arquivo padrão [`WebAdmin.4DSettings`] (webAdmin.md#webadmin-settings) ou um arquivo personalizado designado com o parâmetro `--webadmin-settings-path`). Use o argumento `--webadmin-store-settings` para salvar essas configurações se necessário No disponible con [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--utility`                 |                                                                    | Apenas disponível com 4D Server. Inicia [4D Server no modo utilitário](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--skip-onstartup`          |                                                                    | Inicia o projecto sem executar quaisquer métodos "automáticos", incluindo os métodos de base de dados `On Startup` e `On Exit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--startup-method`          | Nome do método projecto (string)                | Método de projecto a executar imediatamente após o método de base `On Startup` (se não for ignorado com `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

(\*) Alguns diálogos são exibidos antes do banco de dados ser aberto, para que seja impossível escrever no arquivo Diagnóstico de log (alerta de licença, diálogo de conversão, seleção de banco de dados, seleção de arquivo de dados). Nesses casos, uma mensagem de erro é criada tanto no stream stderr e no arquivo de eventos do sistema, e então a aplicação fecha.

### Exemplos

> A pasta atual do usuário é alcançada usando o comando  "~ " em macOS e o comando "%HOMEPATH%" em Windows.

Lance uma aplicação 4D armazenada no desktop:

- macOS:

```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

- Windows:

```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```

Abrir um ficheiro de pacote em macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Abrir um ficheiro de projecto:

- macOS:

```bash
--args ~/Documentos/myProj/Projecto/myProj.4DProject
```

- Windows:

```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```

Abrir um ficheiro de projecto e um ficheiro de dados:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
ou:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Abrir um ficheiro .4DLink:

- macOS:

```bash
~/Desktop/MyDatabase.4DLink
```

- Windows:

```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Abrir em modo compilado e criar um arquivo de dados se não disponível:

- macOS:

```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

- Windows:

```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Abrir um ficheiro projeto e um arquivo de dados e passar uma “string” como parâmetro do usuário:

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Aberto sem interface (modo headless):

- macOS:

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

- Windows:

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```

## tool4d

**tool4d** é uma aplicação gratuita, leve e autónoma que permite abrir um projeto 4D em modo headless e executar algum código 4D utilizando o CLI.

tool4d está disponível em Windows e macOS e está sempre associado a uma versão 4D (mesma versão e número de compilação). Só é fornecido na localização em inglês.

tool4d é uma ferramenta perfeita para o fazer:

- implementar uma cadeia CI/CD para sua aplicação 4D,
- usar um executável 4D leve para executar scripts 4D, por exemplo, para executar testes unitários automáticos.

### Utilizar tool4d

Você pode obter o tool4d na [página de download do produto](https://product-download.4d.com/) do 4D.

Você usa o tool4d executando uma [linha de comando](#launch-a-4d-application) com um projeto 4D padrão. Você pode usar todos os argumentos descritos na tabela acima, exceto --`webadmin` já que este componente está [desativado no tool4d](#disabled-4d-features). Com tool4d, é lançada a seguinte sequência específica:

1. tool4d executa o método da base de dados `On Startup` (e todos os métodos "automáticos" como [método do usuário](../Users/handling_users_groups.md#user-properties)), exceto se o argumento `--skip-onstartup` for passado.
2. tool4d executa o método designado pelo argumento `--startup-method`, se houver.
3. tool4d executa o método `On Exit` do banco de dados, exceto se o argumento `--skip-onstartup` for passado.
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
- corrector ortográfico japonés (librería *mecab*),
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

:::tip Veja também

Veja [este post do blog](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) para exemplos de como usar tool4d e 4D Server no modo utilitário.

:::
