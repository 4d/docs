---
id: file
title: File
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                              |
| ------- | ------------------------------------- |
| 19 R4   | Nova constante `HTTP Client log file` |
| 17 R5   | Adicionado                            |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Parâmetro    | Tipo                     |     | Descrição                                                         |
| ------------ | ------------------------ | :-: | ----------------------------------------------------------------- |
| path         | Text                     |  →  | Rota do arquivo                                                   |
| fileConstant | Integer                  |  →  | Constante de arquivo 4D                                           |
| pathType     | Integer                  |  →  | `fk posix path` (padrão) ou `fk platform path` |
| \*           | operator                 |  →  | \* para devolver o arquivo da base de dados anfitriã              |
| Resultados   | 4D. File |  ←  | Novo objeto arquivo                                               |

<!-- END REF -->

#### Descrição

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. O comando aceita duas sintaxes:

**File ( path { ; pathType } { ; \* })**

No parâmetro *path*, passe um caminho do arquivo. You can use a custom string or a [filesystem](../Concepts/paths.md#filesystem-pathnames) (e.g., "/DATA/myfile.txt").

> Apenas são compatíveis os nomes de caminho absolutos com o comando `File`.

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the *pathType* parameter. Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                                                  |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**File ( fileConstant { ; \* } )**

In the *fileConstant* parameter, pass a 4D built-in or system file, using one of the following constants:

| Parâmetros                        | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19    | Arquivo de histórico de cópias de segurança (ver Arquivos de configuração e rastreio). Armazenado na pasta de destino de cópia de segurança.                                                                                                                                                                                                                                                                                                                                          |
| Backup log file                   | 13    | Arquivo atual do diário de backup. Armazenado na pasta Logs da aplicação.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Backup settings file              | 1     | Arquivo padrão backup.4DSettings (formato xml), armazenado na pasta Settings do projecto                                                                                                                                                                                                                                                                                                                                                                                                              |
| Backup settings file for data     | 17    | backup.4DSettings file (formato xml) para o arquivo de dados, armazenado na pasta Settings da pasta de dados                                                                                                                                                                                                                                                                                                                                                                                          |
| Build application log file        | 14    | Arquivo de registo atual em formato xml do construtor da aplicação. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Build application settings file   | 20    | Arquivo de configurações padrão do construtor da aplicação ("buildApp.4DSettings"). Armazenado na pasta Settings do projecto.                                                                                                                                                                                                                                                                                                                                         |
| Compacting log file               | 6     | Arquivo de registo da mais recente compactação feita com o comando Compact data file ou o centro de Manutenção e segurança. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                    |
| Current backup settings file      | 18    | arquivo backup.4DSettings utilizado actualmente pela aplicação. Pode ser o arquivo de definições de backup (predefinido) ou um arquivo personalizado de definições de backup do usuário definido para o arquivo de dados                                                                                                                                                                                                                                                              |
| Debug log file                    | 12    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(Debug log recording)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                          |
| Diagnostic log file               | 11    | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                            |
| Directory file                    | 16    | directório.json, contendo a descrição dos usuários e grupos (se houver) para a aplicação do projecto. Pode ser localizado ou na pasta de configurações do usuário (por padrão, global ao projecto), ou na pasta de definições de dados (específica a um arquivo de dados).                                                                                                                                                      |
| HTTP Client log file              | 24    | Arquivo de registo criado pelo comando `HTTP SET OPTION(HTTP client log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                     |
| HTTP debug log file               | 9     | Log file created by the `WEB SET OPTION(Web debug log)` command. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                               |
| HTTP log file                     | 8     | Arquivo de registo criado pelo comando `WEB SET OPTION(Web log recording)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                    |
| IMAP Log file                     | 23    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(IMAP Log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                     |
| Last backup file                  | 2     | Último arquivo de backup, denominado `\<applicationName>[bkpNum].4BK`, armazenado em um local personalizado.                                                                                                                                                                                                                                                                                                                                                                                                            |
| Last journal integration log file | 22    | Nome completo do último arquivo de registo de integração do diário (armazenado na pasta Logs da aplicação restaurada), se existir. Este arquivo é criado, em modo de auto-reparação, assim que ocorrer a integração de um arquivo de registo                                                                                                                                                                                                                                                          |
| Repair log file                   | 7     | Arquivo de registo das reparações da base de dados efetuadas na base de dados no Centro de Manutenção e Segurança (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                    |
| Request log file                  | 10    | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. Se executado no servidor, o ficheiro de registo do servidor é devolvido (armazenado na pasta Logs do servidor). Se executado no cliente, o arquivo de registo do cliente é devolvido (armazenado na pasta local Logs do cliente). |
| SMTP log file                     | 15    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(SMTP Log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                     |
| User settings file                | 3     | settings.4DSettings arquivo para todos os arquivos de dados, guardados na pasta Preferências ao lado do arquivo de estrutura, se ativado.                                                                                                                                                                                                                                                                                                                                                                |
| User settings file for data       | 4     | arquivo settings.4DSettings para dados atual, guardado na pasta Preferências ao lado do arquivo de dados.                                                                                                                                                                                                                                                                                                                                                                                                |
| Verification log file             | 5     | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                           |

Se o alvo *fileConstant* não existir, um objecto nulo é devolvido. Não se levantam erros.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Caso contrário, se omitir o parâmetro `*`, um objecto nulo é sempre devolvido.

#### Veja também

[Folder](folder.md)\
[Get 4D file](../commands-legacy/get-4d-file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1566                            |
| Thread safe    | &amp;check; |
