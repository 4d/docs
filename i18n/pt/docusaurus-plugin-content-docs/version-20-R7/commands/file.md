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

| Parâmetro    | Tipo                                           |                             | Descrição                                                         |
| ------------ | ---------------------------------------------- | :-------------------------: | ----------------------------------------------------------------- |
| path         | Text                                           | &#8594; | Rota do arquivo                                                   |
| fileConstant | Integer                                        | &#8594; | Constante de arquivo 4D                                           |
| pathType     | Integer                                        | &#8594; | `fk posix path` (padrão) ou `fk platform path` |
| \*           | operator                                       | &#8594; | \* para devolver o arquivo da base de dados anfitriã              |
| Resultados   | [4D.File](../API/FileClass.md) | &#8592; | Novo objeto arquivo                                               |

<!-- END REF -->

## Descrição

O comando `Arquivo` <!-- REF #_command_.File.Summary --> cria e retorna um novo objeto do tipo [`4D.File`](../API/FileClass.md) <!-- FIM REF -->. O comando aceita duas sintaxes:

**File ( path { ; pathType } { ; \* })**

No parâmetro *path*, passe um caminho do arquivo. Você pode usar uma cadeia de caracteres personalizada ou um [sistema de arquivos](../Concepts/paths.md#filesystem-pathnames) (por exemplo, "/DATA/myfile.txt").

> Apenas são compatíveis os nomes de caminho absolutos com o comando `File`.

Como padrão, 4D espera um caminho expresso com a sintaxe POSIX. Se trabalhar com pathnames de plataforma (Windows ou macOS), deve declará-lo usando o parâmetro *pathType*. Estão disponíveis as seguintes constantes:

| Parâmetros       | Valor | Comentário                                                                                                                  |
| ---------------- | ----- | --------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1     | Caminho expresso com uma sintaxe específica da plataforma (obrigatória em caso de caminho de plataforma) |
| fk posix path    | 0     | Caminho expresso com a sintaxe POSIX (por padrão)                                                        |

**File ( fileConstant { ; \* } )**

No parâmetro *fileConstant*, passe um arquivo embutido ou do sistema, usando uma das seguintes constantes:

| Parâmetros                        | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Backup history file               | 19    | Arquivo de histórico de cópias de segurança (ver Arquivos de configuração e rastreio). Armazenado na pasta de destino de cópia de segurança.                                                                                                                                                                                                                                                                                                                                                              |
| Backup log file                   | 13    | Arquivo atual do diário de backup. Armazenado na pasta Logs da aplicação.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Backup settings file              | 1     | Arquivo padrão backup.4DSettings (formato xml), armazenado na pasta Settings do projecto                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Backup settings file for data     | 17    | backup.4DSettings file (formato xml) para o arquivo de dados, armazenado na pasta Settings da pasta de dados                                                                                                                                                                                                                                                                                                                                                                                                              |
| Build application log file        | 14    | Arquivo de registo atual em formato xml do construtor da aplicação. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Build application settings file   | 20    | Arquivo de configurações padrão do construtor da aplicação ("buildApp.4DSettings"). Armazenado na pasta Settings do projecto.                                                                                                                                                                                                                                                                                                                                                             |
| Compacting log file               | 6     | Arquivo de registo da mais recente compactação feita com o comando Compact data file ou o centro de Manutenção e segurança. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                        |
| Current backup settings file      | 18    | arquivo backup.4DSettings utilizado actualmente pela aplicação. Pode ser o arquivo de definições de backup (predefinido) ou um arquivo personalizado de definições de backup do usuário definido para o arquivo de dados                                                                                                                                                                                                                                                                                  |
| Debug log file                    | 12    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(Debug log recording)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Diagnostic log file               | 11    | Arquivo de log criado pelo comando `SET DATABASE PARAMETER(gravação de log de diagnósticos)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Directory file                    | 16    | directório.json, contendo a descrição dos usuários e grupos (se houver) para a aplicação do projecto. Pode ser localizado ou na pasta de configurações do usuário (por padrão, global ao projecto), ou na pasta de definições de dados (específica a um arquivo de dados).                                                                                                                                                                          |
| HTTP Client log file              | 24    | Arquivo de registo criado pelo comando `HTTP SET OPTION(HTTP client log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| HTTP debug log file               | 9     | Arquivo de log criado pelo comando `WEB SET OPTION(Web debug log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HTTP log file                     | 8     | Arquivo de registo criado pelo comando `WEB SET OPTION(Web log recording)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| IMAP Log file                     | 23    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(IMAP Log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Last backup file                  | 2     | Último arquivo de backup, denominado `\<applicationName>[bkpNum].4BK`, armazenado em um local personalizado.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Last journal integration log file | 22    | Nome completo do último arquivo de registo de integração do diário (armazenado na pasta Logs da aplicação restaurada), se existir. Este arquivo é criado, em modo de auto-reparação, assim que ocorrer a integração de um arquivo de registo                                                                                                                                                                                                                                                                              |
| Repair log file                   | 7     | Arquivo de registo das reparações da base de dados efetuadas na base de dados no Centro de Manutenção e Segurança (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                        |
| Request log file                  | 10    | Arquivo de log de solicitação cliente padrão/servidor (excluindo requisições Web) criado pelos comandos `SET DATABASE PARAMETER(gravação 4D do log do servidor)` ou `SET DATABASE PARAMETER(gravação log do cliente)`. Se executado no servidor, o arquivo de log do servidor é retornado (armazenado na pasta Logs no servidor). Se executado no cliente, o arquivo de registo do cliente é devolvido (armazenado na pasta local Logs do cliente). |
| SMTP log file                     | 15    | Arquivo de registo criado pelo comando `SET DATABASE PARAMETER(SMTP Log)`. Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| User settings file                | 3     | settings.4DSettings arquivo para todos os arquivos de dados, guardados na pasta Preferências ao lado do arquivo de estrutura, se ativado.                                                                                                                                                                                                                                                                                                                                                                                    |
| User settings file for data       | 4     | arquivo settings.4DSettings para dados atual, guardado na pasta Preferências ao lado do arquivo de dados.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Verification log file             | 5     | Registre arquivos criados pelos comandos 'VERIFY CURRENT DATA FILE' e 'VERIFY DATA FILE' ou Centro de Manutenção e Segurança (MSC). Armazenado na pasta Logs.                                                                                                                                                                                                                                                                                                                                             |

Se o alvo *fileConstant* não existir, um objecto nulo é devolvido. Não se levantam erros.

Se o comando é chamado de um componente, passe o parâmetro opcional `*` para obter o caminho do banco de dados de host. Caso contrário, se omitir o parâmetro `*`, um objecto nulo é sempre devolvido.

## Veja também

[`4D.File` class](../API/FileClass.md)
[Folder](folder.md)
[Get 4D file](../commands-legacy/get-4d-file.md)\
[Object to path](../commands-legacy/object-to-path.md)\
[Path to object](../commands-legacy/path-to-object.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1566                        |
| Thread safe       | &check; |


