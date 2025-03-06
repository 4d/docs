---
id: create-set-from-array
title: CREATE SET FROM ARRAY
slug: /commands/create-set-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET FROM ARRAY.Syntax-->**CREATE SET FROM ARRAY** ( *tabela* ; *arrayReg* {; *nomConjunto*} )<!-- END REF-->
<!--REF #_command_.CREATE SET FROM ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do conjunto |
| arrayReg | Integer, Boolean array | &#8594;  | Array de números de registrs, ou Array de booleanos (True = o registro está no conjunto, False = o registro não está no conjunto) |
| nomConjunto | Text | &#8594;  | Nome do conjunto a criar, ou Aplicar o comando ao UserSet se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE SET FROM ARRAY.Summary-->O comando CREATE SET FROM ARRAY cria *nomConj* a partir de:   

* seja um array de número de registros absolutos *arrayReg* da tabela *tabela*,
* ou um array de booleanos *arrayReg*.<!-- END REF--> Neste caso, os valores do array indicam se cada registro na tabela pertence (*True*) ou não (*False*) a *nomCon*.
Quando utilize este comando e passa um array inteiro longo em *arrayReg*, todos os números no array reapresentam a lista de números de registros que está em *nomConjunto*. Se um número for inválido (por exemplo, se um registro não tiver sido criado), se gera o erro -10503.  
  
 Quando utilizar este comando para passar um array inteiro longo em *arrayReg*, todos os números no array representam a lista de números de registros que estejam em *nomConjunto*. Se um número for inválido (por exemplo, se um registro não foi criado), o erro -10503 é gerado.  
  
 Quando utilizar este comando para passar um array booleano em *arrayReg*, um elemento N do array indica se o registro "N" está (**True**) ou não (**False**) em nomConjunto. No princípio, o número de elementos do array deve ser igual ao número de registros na tabela. Se o array é más pequeno que o número de registros, apenas os registros definidos pelo array estarão no conjunto.  
  
**Nota**: com um array de booleanos, o comando utiliza os elementos 0 a N-1.  
  
 Se não passar o parâmetro *nomConjunto* ou se passar uma string vazia, o comando é aplicado ao conjunto sistema Userset.

#### Gestão de erros 

Em um array de inteiros longos, se um número de registro não for válido (registro não criado), se gera o erro -10503.  

#### Ver também 

[BOOLEAN ARRAY FROM SET](boolean-array-from-set.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 641 |
| Thread-seguro | &check; |
| Modificar variáveis | error |


