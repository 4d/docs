---
id: qr-on-command
title: QR ON COMMAND
slug: /commands/qr-on-command
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *area* ; *nomeMetodo* )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| nomeMetodo | Text | &#8594;  | Nome do método a ser chamado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR ON COMMAND.Summary-->O comando QR ON COMMAND executa o método de projeto 4D passado no parâmetro *nomMetodo* quando um comando do editor de relatórios rápidos for chamado pelo usuário, selecionando um comando de menu ou clicando em um botão.<!-- END REF-->

Se *area* for igual a zero, *nomMetodo* se aplicará a todas as áreas do editor de relatórios rápidos até que se feche o banco ou se execute a seguinte instrução QR ON COMMAND(0;"").

*nomMetodo* recebe dois parâmetros:

* *$1* é a referência da área (Inteiro longo).
* *$2* é o número do comando selecionado (Inteiro longo). Pode comparar este valor com as constantes do tema *QR Comandos*.  
| Constante            | Tipo          | Valor | Comentário                                     |  
| -------------------- | ------------- | ----- | ---------------------------------------------- |  
| qr cmd generate      | Inteiro longo | 2008  | uso do comando [QR RUN](qr-run.md) recomendado |  
| qr cmd page setup    | Inteiro longo | 2006  |                                                |  
| qr cmd print preview | Inteiro longo | 2007  |                                                |

**Nota**: Se planeja compilar o banco, é necessário declarar explicitamente os parâmetros *$1* e *$2* como Inteiros longos, inclusive se não os utilizar.  
  
Se deseja que o comando inicial seja executado, deve incluir a seguinte instrução no método: [QR EXECUTE COMMAND](qr-execute-command.md)($1;$2).  
  
Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

*QR Comandos*  
[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR Get command status](qr-get-command-status.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 790 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Proibido no servidor ||


