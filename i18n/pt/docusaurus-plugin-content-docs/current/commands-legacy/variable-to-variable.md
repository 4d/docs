---
id: variable-to-variable
title: VARIABLE TO VARIABLE
slug: /commands/variable-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO VARIABLE.Syntax-->**VARIABLE TO VARIABLE** ( *processo* ; *dstVar* ; *srcVar* {; *dstVar2* ; *srcVar2* ; ... ; *dstVarN* ; *srcVarN*} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo de destino |
| dstVar | Variable | &#8594;  | Variável de destino |
| srcVar | Variable | &#8594;  | Variável fonte |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.VARIABLE TO VARIABLE.Summary-->O comando VARIABLE TO VARIABLE escreve as variáveis processo *dstVar* (*dstVar2*, etc.) do processo de destino cujo número se passa em processo utilizando os valores das variáveis *srcVar1 srcVar2*, etc.<!-- END REF-->. 

VARIABLE TO VARIABLE tem a mesma ação de [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE"), com as seguintes diferenças:

* Você passa expressões fonte a [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") e portanto não pode passar um array como um todo. Deve passar exclusivamente variáveis fonte a VARIABLE TO VARIABLE e portanto pode passar um array como um todo.
* Cada variável de destino pode ser uma variável ou um elemento de um array, mas não pode ser um array como um todo. Cada variável de destino de VARIABLE TO VARIABLE pode ser uma variável, um array ou um elemento de array.

  
**4D Server**: a comunicação processo “Intermachine”, oferecida pelos comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE"), [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") e VARIABLE TO VARIABLE, é possível unicamente desde o cliente ao servidor. Sempre é um processo cliente o que lê ou escreve as variáveis de um procedimento armazenado.  
  
Para cada par de variáveis *dstVar;expr*, a variável fonte deve ser de tipo compatível com a variável de destino, do contrário pode terminar com um valor na variável que não tenha significado. Em modo interpretado, se uma variável de destino não existe, é criada e atribui com o tipo e valor da variável fonte.  
  
O processo atual escreve as variáveis do processo de destino, o processo de destino não é avisado de nenhuma maneira de que outro processo está escrevendo a instância de suas variáveis.

##### Restrições 

VARIABLE TO VARIABLE não aceita variáveis locais como variáveis de destino. 

VARIABLE TO VARIABLE aceita todo tipo de variável processo ou interprocesso de destino, a exceção das variáveis de tipo:

* Ponteiros
* Arrays de ponteiros
* Arrays de duas dimensões

O processo de destino deve ser um processo usuário; não pode ser um processo kernel. Se o processo de destino não existe, é gerado um erro. Você pode encontrar este erro utilizando um método de gestão de erros instalado com [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Exemplo 

O exemplo a seguir lê um array processo desde o processo indicado por *$vlProcesso*, sequencialmente converte os elementos para maiúsculas e depois escreve completamente o array: 

```4d
 GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
    $anArray{$vlElem}:=Uppercase($anArray{$vlElem})
 End for
 VARIABLE TO VARIABLE($vlProcesso;at_IPCom_Array;$anArray)
```

#### Ver também 

[GET PROCESS VARIABLE](get-process-variable.md)  
*Processos*  
[SET PROCESS VARIABLE](set-process-variable.md)  