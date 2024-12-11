---
id: set-process-variable
title: SET PROCESS VARIABLE
slug: /commands/set-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET PROCESS VARIABLE.Syntax-->**SET PROCESS VARIABLE** ( *processo* ; *dstVar* ; *expr* {; *dstVar2* ; *expr2* ; ... ; *dstVarN* ; *exprN*} )<!-- END REF-->
<!--REF #_command_.SET PROCESS VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número do processo de destino |
| dstVar | Variable | &#8594;  | Variável de destino |
| expr | Variable | &#8594;  | Fonte da expressão (ou variável fonte) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PROCESS VARIABLE.Summary-->O comando SET PROCESS VARIABLE escreve as variáveis processo *dstVar* (*dstVar2*, etc.) do processo de destino cujo número se passa em *processo* utilizando os valores passados em *expr1* (*expr2*, etc.).<!-- END REF-->  

Cada variável de destino pode ser uma variável ou um elemento de array. Entretanto, veja as restrições listadas mais adiante nesta seção.  
  
Para cada par de variáveis *dstVar;expr*, a expressão deve ser compatível com a variável de destino, do contrário você pode terminar com um valor na variável que não tenha significado. Em modo interpretado, se uma variável de destino não existe, é criada e atribuída com a expressão.  
  
O processo atual escreve as variáveis do processo de destino, o processo de destino não é advertido de nenhuma maneira de que outro processo está escrevendo a instância de suas variáveis.  
  
**4D Server:** utilizando 4D Client, pode escrever variáveis em um processo de destino executado na máquina servidor (procedimento armazenado). Para fazer isto, coloque um sinal de menos antes do número de identificação do processo no parâmetro *processo*.  
A comunicação processo “Intermachine”, oferecida pelos comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE"), SET PROCESS VARIABLE e [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"), é possível unicamente desde o cliente ao servidor. Sempre é um processo cliente o que lê ou escreve as variáveis de um procedimento armazenado.  
  
**Dica**: em outras palavras, não é necessário conhecer o número de identificação do processo para poder utilizar o comando SET PROCESS VARIABLE com as variáveis inter-processo do servidor. Esta possibilidade é muito útil particularmente quando um procedimento armazenado se lança utilizando o método base On server startup. Como as máquinas cliente não conhecem automaticamente o número de identificação desse processo, todo valor negativo pode ser passado no parâmetro *processo*.

##### Restrições 

SET PROCESS VARIABLE não aceita variáveis locais como variáveis de destino. 

SET PROCESS VARIABLE aceita todo tipo de processo de variável processo ou inter-processo de destino, exceto:

* Ponteiros
* Arrays de todo tipo. Para escrever um array como um todo de um processo a outro, utilize o comando [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"). Note, entretanto, SET PROCESS VARIABLE lhe permite escrever o elemento de um array.
* Não é possível escrever o elemento de um array de ponteiros ou o elemento de um array de duas dimensões.

O processo de destino deve ser um processo usuário; não pode ser um processo kernel. Se o processo de destino não existe, é gerado um erro. Pode encontrar este erro utilizando um método de gestão de erros instalado com [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Exemplo 1 

A seguinte linha de código atribui (à cadeia vazia) o texto da variável *vtEstadoAtual* do processo cujo número é *$vlProcesso*: 

```4d
 SET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;"")
```

#### Exemplo 2 

Esta linha de código atribui a variável texto *vtEstadoAtual* do processo cujo número é *$vlProcesso* o valor da variável *$vtInfo* desde o método de execução no processo atual: 

```4d
 SET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;$vtInfo)
```

#### Exemplo 3 

Esta linha de código define o texto da variável *vtEstadoAtual* do processo cujo número for *$vlProcesso* ao valor da mesma variável no processo atual: 

```4d
 SET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;vtEstadoAtual)
```

**Nota:** o primeiro *vtEstadoAtual* atribui a instância da variável no processo de destino. O segundo *vtEstadoAtual* atribui a instância da variável no processo atual.

#### Exemplo 4 

Este exemplo transforma sequencialmente todos os elementos de um array processo em maiúsculas, desde o processo indicado por *$vlProceso*: 

```4d
 GET PROCESS VARIABLE($vlProcesso;vl_IPCom_Array;$vlTam)
 For($vlElem;1;$vlTam)
    GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array{$vlElem};$vtElem)
    SET PROCESS VARIABLE($vlProcesso;at_IPCom_Array{$vlElem};Uppercase($vtElem))
 End for
```

**Nota:** neste exemplo, a variável processo *vl\_IPCom\_Array* contém o tamanho do array *at\_IPCom\_Array* e deve ser mantida pelo processo fonte/destino.

#### Exemplo 5 

Este exemplo escreve a instância das variáveis *v1*, *v2* e *v3* utilizando a instância das mesmas variáveis desde o processo atual: 

```4d
 SET PROCESS VARIABLE($vlProcesso;v1;v1;v2;v2;v3;v3)
```

#### Ver também 

[GET PROCESS VARIABLE](get-process-variable.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
*Processos*  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 370 |
| Thread-seguro | &check; |


