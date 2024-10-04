---
id: qr-get-command-status
title: QR Get command status
slug: /commands/qr-get-command-status
displayed_sidebar: docs
---

<!--REF #_command_.QR Get command status.Syntax-->**QR Get command status** ( *area* ; *comando* {; *valor*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.QR Get command status.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Inteiro longo | &#x1F852; | Referência da área |
| comando | Inteiro longo | &#x1F852; | Número de comando |
| valor | Inteiro longo, Texto | &#x1F858; | Valor do subelemento selecionado |
| Resultado | Inteiro longo | &#x1F850; | Estado do comando |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get command status.Summary-->O comando QR Get command status devolve 0 se o *comando* estiver inativo ou 1 se estiver ativo.<!-- END REF-->  
  
*valor* devolve o valor do subelemento selecionado, se houver. Por exemplo, se o comando que foi selecionado for o menu **Fonte** (1000) e a fonte selecionada é “Arial”, *valor* devolve “Arial”, ou se o comando selecionado for o menu de cores (1002, 1003 ou 1004), *valor* devolve o número da cor.  
  
Pode utilizar este comando em dois tipos de contextos:  
  
 \* Como uma instrução simples para determinar se um comando está ativo o no.  
 \* Em um método instalado por [QR ON COMMAND](qr-on-command.md "QR ON COMMAND"), para permitir-lhe conhecer o subelemento selecionado. Nesse método, *$1* é a referência da área e *$2* é o número do comando.  
  
Em *comando*, pode passar um valor o uma das constantes do tema *QR Comandos*.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *comando* for incorreto, se gera o erro -9852.

#### Ver também 

[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR ON COMMAND](qr-on-command.md)  