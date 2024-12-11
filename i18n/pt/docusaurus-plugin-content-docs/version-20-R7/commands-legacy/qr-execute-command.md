---
id: qr-execute-command
title: QR EXECUTE COMMAND
slug: /commands/qr-execute-command
displayed_sidebar: docs
---

<!--REF #_command_.QR EXECUTE COMMAND.Syntax-->**QR EXECUTE COMMAND** ( *area* ; *comando* )<!-- END REF-->
<!--REF #_command_.QR EXECUTE COMMAND.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| comando | Integer | &#8594;  | Comando de menu a ser executado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR EXECUTE COMMAND.Summary-->O comando **QR EXECUTE COMMAND** executa o comando de menu ou o botão da barra de ferramentas cuja referência se passa em *comando*.<!-- END REF--> Este comando é utilizado geralmente para executar um comando de menu selecionado pelo usuário e interceptado em seu código através do comando [QR ON COMMAND](qr-on-command.md)

Em *comando*, pode passar um valor ou uma das constantes do tema *QR Comandos*(só eventos listados são compatíveis):

| Constante            | Valor | Comentário                                     |
| -------------------- | ----- | ---------------------------------------------- |
| qr cmd generate      | 2008  | uso do comando [QR RUN](qr-run.md) recomendado |
| qr cmd open          | 2001  |                                                |
| qr cmd page setup    | 2006  |                                                |
| qr cmd print preview | 2007  |                                                |
| qr cmd save          | 2002  |                                                |
| qr cmd save as       | 2003  |                                                |

| Constante            | Valor | Comentário                                     |
| -------------------- | ----- | ---------------------------------------------- |
| qr cmd generate      | 2008  | uso do comando [QR RUN](qr-run.md) recomendado |
| qr cmd page setup    | 2006  |                                                |
| qr cmd print preview | 2007  |                                                |

Se passa um número de *area* inválido, se gera o erro -9850.  
Se passa um número de *comando* incorreto, se gera o erro -9852.

#### Ver também 

[QR Get command status](qr-get-command-status.md)  
[QR ON COMMAND](qr-on-command.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 791 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


