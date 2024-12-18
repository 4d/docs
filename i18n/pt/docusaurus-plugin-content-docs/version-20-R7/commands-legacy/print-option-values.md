---
id: print-option-values
title: PRINT OPTION VALUES
slug: /commands/print-option-values
displayed_sidebar: docs
---

<!--REF #_command_.PRINT OPTION VALUES.Syntax-->**PRINT OPTION VALUES** ( *opçao* ; *arrayNoms* {; *info1Array* {; *info2Array*}} )<!-- END REF-->
<!--REF #_command_.PRINT OPTION VALUES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Integer | &#8594;  | Número de opção |
| arrayNoms | Text array | &#8592; | Nomes dos valores |
| info1Array | Integer array | &#8592; | Valores (1) da opção |
| info2Array | Integer array | &#8592; | Valores (2) da opção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PRINT OPTION VALUES.Summary-->O comando PRINT OPTION VALUES \[#descv\]devolve em *nomesArray*,uma lista de nomes de valores disponíveis para a *opçao* de impressão definida.<!-- END REF-->Opcionalmente, pode recuperar a informação para cada valor em *info1Array* e *info2Array*. 

**Nota:** o comando **PRINT OPTION VALUES** só funciona com impressoras PostScript.

O parâmetro *opçao* lhe permite especificar la opção a obter. Deve passar uma das seguintes constantes do tema “*Opções de Impressão*” :

* Paper option
* Paper source option

***option* \= Paper option (1)**

Se passar Paper option no parâmetro *opçao*, o comando devolverá a seguinte informação:

* em *nomesArray*, os nomes dos formatos de papel disponíveis;
* em *info1Array*, as alturas de cada formato de papel;
* em *info2Array*, as larguras de cada formato de papel.

Para obter um formato de papel específico utilizando o comando [SET PRINT OPTION](set-print-option.md), pode passar um dos valores de *nomesArray*, os valores correspondentes de *info1Array* e *info2Array*.

***option* \= Paper source option (5)**

**Nota:** esta opção só pode ser utilizada em Windows.

Se passa Paper source option no parâmetro *opçao*, o comando devolve os nomes das diferentes bandejas disponíveis em *nomesArray* e seus números Windows ID internos em *info1Array* (*info2Array* permanece vazio). A ordem dos valores nos arrays está definido pelo driver de impressão. Para indicar uma bandeja utilizando o comando [SET PRINT OPTION](set-print-option.md), deve passar o índice do elemento que deseja no array *nomesArray* ou *info1Array*.

Para maior informação sobre as diferentes opções de impressão, consulte a descrição de [SET PRINT OPTION](set-print-option.md) e [GET PRINT OPTION](get-print-option.md).

Toda a informação devolvida por estes comandos é fornecida pelo sistema operativo. Consulte a documentação de seu sistema para mais detalhes sobre opções específicas. 

**Nota:** o comando PRINT OPTION VALUES só funciona com impressoras PostScript.

#### Ver também 

[GET PRINT OPTION](get-print-option.md)  
[SET PRINT OPTION](set-print-option.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 785 |
| Thread-seguro | &cross; |


