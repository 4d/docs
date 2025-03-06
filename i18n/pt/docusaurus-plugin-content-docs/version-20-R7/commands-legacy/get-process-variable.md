---
id: get-process-variable
title: GET PROCESS VARIABLE
slug: /commands/get-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.GET PROCESS VARIABLE.Syntax-->**GET PROCESS VARIABLE** ( *processo* ; *srcVar* ; *dstVar* {; *srcVar2* ; *dstVar2* ; ... ; *srcVarN* ; *dstVarN*} )<!-- END REF-->
<!--REF #_command_.GET PROCESS VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo da fonte |
| srcVar | Variable | &#8594;  | Variável fonte |
| dstVar | Variable | &#8592; | Variável destino |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PROCESS VARIABLE.Summary-->O comando GET PROCESS VARIABLE lê o valor de as variáveis processo *srcVar* (*srvVar2*, etc.) desde o processo fonte cujo número se passa em *processo* e devolve seus valores atuais nas variáveis *dstVar* (*dstVar2*, etc.) do processo atual.<!-- END REF-->  
  
 Cada variável fonte pode ser una variável, um array ou um elemento de array. Entretanto, tenha em conta as restrições listadas mais adiante nesta seção.  
  
 Em cada dupla de variáveis *srcVar;dstVar*, as duas variáveis devem ser de tipos compatíveis, do contrário os valores que você obtém poderiam não ser significativos.

O processo atual “espia” as variáveis do processo fonte, o processo fonte não for advertido de nenhuma maneira de que outro processo está lendo a instância de suas variáveis.  
  
**4D Server**: utilizando 4D Client, pode ler as variáveis num processo de destino executado na máquina servidor (procedimento armazenado). Para fazer isto, coloque um sinal menos antes do número de identificação do processo no parâmetro *processo*.  
  
 A comunicação processo “Intermachine”, oferecida pelos comandos GET PROCESS VARIABLE, [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") e [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"), é possível unicamente desde o cliente ao servidor. Sempre é um processo cliente o que lê ou escreve as variáveis de um procedimento armazenado.

**Dica**: se não conhece o número de identificação do processo servidor, ainda pode utilizar as variáveis inter-processo do servidor. Para fazer isto, pode utilizar qualquer valor negativo em *processo*. Em outras palavras, não é necessário conhecer o número de identificação do processo para poder utilizar o comando GET PROCESS VARIABLE com as variáveis inter-processo do servidor. Esta possibilidade é muito útil particularmente quando um procedimento armazenado é lançado utilizando o método base On server startup. Como as máquinas cliente não conhecem automaticamente o número de identificação desse processo, todo valor negativo pode ser passado no parâmetro *processo*.

##### Restrições 

GET PROCESS VARIABLE não aceita variáveis locais como variáveis fonte. 

Por outra parte, as variáveis de destino podem ser interprocesso, processo ou locais. Os valores são “recebidos” unicamente nas variáveis, não nos campos.

GET PROCESS VARIABLE aceita todo tipo de variável fonte, processo ou interprocesso, exceto:

* Ponteiros
* Array de ponteiros
* Arrays de duas dimensões

O processo fonte deve ser um processo usuário; não pode ser um processo kernel. Se o processo fonte não existe, este comando não tem efeito.

**Nota:** em modo interpretado, se uma variável fonte não existe, são devolvidos o valor indefinido. Pode detectar isto utilizando a função [Type](type.md "Type") para provar a variável de destino correspondente. 

#### Exemplo 1 

Esta linha de código lê o valor da variável texto *vtEstadoActual* no processo cujo número for *$vlProcesso* e devolve o resultado na variável processo *vtInfo* do processo atual: 

```4d
 GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;vtInfo)
```

#### Exemplo 2 

Esta linha de código faz o mesmo, mas devolve o valor na variável local *$vtInfo* de método que está sendo executando no processo atual: 

```4d
 GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;$vtInfo)
```

#### Exemplo 3 

Esta linha de código faz o mesmo mas devolve o valor na variável *vtEstadoAtual* do processo atual: 

```4d
 GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;vtEstadoAtual)
```

**Nota:** o primeiro *vtCurStatus* designa a instância da variável no processo fonte, o segundo *vtCurStatus* designa a instância da variável no processo atual.

#### Exemplo 4 

Este exemplo lê sequencialmente os elementos de um array processo desde o processo indicado por *$vlProceso*: 

```4d
 GET PROCESS VARIABLE($vlProcesso;vl_IPCom_Array;$vlTam)
 For($vlElem;1;$vlTam)
    GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array{$vlElem};$vtElem)
  // Fazer algo com $vtElem
 End for
```

**Nota:** neste exemplo, a variável processo *vl\_IPCom\_Array* contém o tamanho do Array *at\_IPCom\_Array*, e deve ser mantida pelo processo fonte.

#### Exemplo 5 

Este exemplo faz o mesmo que o anterior, mas lê o array como um todo, ao invés de ler os elementos de maneira sequencial: 

```4d
 GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
  // Fazer algo com $anArray{$vlElem}
 End for
```

#### Exemplo 6 

Este exemplo lê as instâncias das variáveis *v1*,*v2*,*v3* no processo fonte e devolve seus valores na instância das mesmas variáveis do processo atual: 

```4d
 GET PROCESS VARIABLE($vlProcesso;v1;v1;v2;v2;v3;v3)
```

#### Exemplo 7 

Ver o exemplo do comando DRAG AND DROP PROPERTIES.

#### Ver também 

*Arrastar e Soltar*  
[POST OUTSIDE CALL](post-outside-call.md)  
*Processos*  
[SET PROCESS VARIABLE](set-process-variable.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 371 |
| Thread-seguro | &cross; |


