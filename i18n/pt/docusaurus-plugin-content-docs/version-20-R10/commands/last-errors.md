---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors** : Collection<!-- END REF-->

<!--REF #_command_.Last errors.Params-->

| Parâmetro | Tipo       |                             | Descrição                   |
| --------- | ---------- | --------------------------- | --------------------------- |
| Resultado | Collection | &#8592; | Collection of error objects |

<!-- END REF-->

## Descrição

<!--REF #_command_.Last errors.Summary-->The **Last errors** command returns the current stack of errors of the 4D application as a collection of error objects, or **null** if no error occurred.<!-- END REF--> A pilha de erros inclui objetos enviados pelo comando [throw](../commands-legacy/throw.md), se houver. 

Este comando deve ser chamado de uma método de chamada de erro instalado pelo comando [ON ERR CALL](../commands-legacy/on-err-call.md) ou dentro de um contexto [Try ou Try/Catch](../Concepts/error-handling.md#tryexpression).

Each error object contains the following properties:

| **Propriedade**    | **Tipo** | **Description**                                                                             |
| ------------------ | -------- | ------------------------------------------------------------------------------------------- |
| errCode            | number   | Código de erro                                                                              |
| message            | text     | Descrição do erro                                                                           |
| componentSignature | text     | Signature of the internal component which returned the error (see below) |

#### Internal component signatures (4D)

| Assinatura do componente  | Componente                                                          |
| ------------------------- | ------------------------------------------------------------------- |
| 4DCM                      | 4D Compiler runtime                                                 |
| 4DRT                      | 4D runtime                                                          |
| bkrs                      | 4D backup & restore manager                     |
| brdg                      | SQL 4D bridge                                                       |
| cecm                      | 4D code Editor                                                      |
| CZip                      | zip 4D apis                                                         |
| dbmg                      | 4D database manager                                                 |
| FCGI                      | fast cgi 4D bridge                                                  |
| FiFo                      | 4D file objects                                                     |
| HTCL                      | http client 4D apis                                                 |
| HTTP                      | 4D http server                                                      |
| IMAP                      | IMAP 4D apis                                                        |
| JFEM                      | Form Macro apis                                                     |
| LD4D                      | LDAP 4D apis                                                        |
| lscm                      | 4D language syntax manager                                          |
| MIME                      | MIME 4D apis                                                        |
| mobi                      | 4D Mobile                                                           |
| pdf1                      | 4D pdf apis                                                         |
| PHP_ | php 4D bridge                                                       |
| POP3                      | POP3 4D apis                                                        |
| SMTP                      | SMTP 4D apis                                                        |
| SQLS                      | 4D SQL server                                                       |
| srvr                      | 4D network layer apis                                               |
| svg1                      | SVG 4D apis                                                         |
| ugmg                      | 4D users and groups manager                                         |
| UP4D                      | 4D updater                                                          |
| VSS                       | 4D VSS support (Windows Volume Snapshot Service) |
| webc                      | 4D Web view                                                         |
| xmlc                      | XML 4D apis                                                         |
| wri1                      | 4D Write Pro                                                        |

#### Internal component signatures (System)

| Assinatura do componente | Componente                                               |
| ------------------------ | -------------------------------------------------------- |
| CARB                     | Carbon subsystem                                         |
| COCO                     | Cocoa subsystem                                          |
| MACH                     | macOS Mach subsystem                                     |
| POSX                     | posix/bsd subsystem (mac, linux, win) |
| PW32                     | Pre-Win32 subsystem                                      |
| WI32                     | Win32 subsystem                                          |

## Veja também

[ON ERR CALL](../commands-legacy/on-err-call.md)
[throw](../commands-legacy/throw.md)\
[Error handling](../Concepts/error-handling.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1799                        |
| Thread safe       | &check; |


