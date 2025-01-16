---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *tabela* ; *regArray* {; *temp*} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela da qual criar a seleção |
| regArray | Integer, Boolean array | &#8594;  | Array de números de registros, ou Array de booleanos (True = o registro está na seleção, False = o registro não está na seleção) |
| temp | Text | &#8594;  | Nome da seleção temporal a criar, ou Aplicar o comando a seleção atual se o parâmetro se omite |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->O comando **CREATE SELECTION FROM ARRAY** cria a seleção selectionName a partir de:

* um array de números de registros absolutos *regArray* de *tabela*,
* ou de um array de booleanos.<!-- END REF--> Neste caso, os valores do array indicam a associação ([True](true.md "True")) ou não ([False](false.md "False")) de cada registro de *tabela* à seleção selectionName.

**Cuidado:** Uma seleção nomeada é criada e carregada na memória. Portanto, tenha certeza de ter memória suficiente antes de executar o comando.

Se não passar selectionName ou se passar uma string vazia, o comando será aplicado a seleção atual, a qual será então atualizada.

Quando você utiliza um array de inteiros longos com este comando, todos os números do array representam a lista de números dos registros em selectionName. Se um número for incorreto (registro não criado), é gerado o erro -10503.

**Nota:** atenção, deve ter certeza de que o array não contenha linhas que tenham o mesmo valor, do contrário a seleção resultante será incorreta.

Quando usa um array booleano com este comando, o elemento X do array indica se o registro número X é ([True](true.md "True")) ou não ([False](false.md "False")) em selectionName. O número de elementos em *regArray* deve ser igual ao número de registros em *tabela*. Se o array é menor que o número de registros, só os registros definidos pelo array podem fazer parte da seleção.

**Nota:** com um array de booleanos, o comando utiliza elementos do número 0 al X-1.

**Aviso:** Lembre que um número de registro pode ser reutilisado se o registro for apagado e outro registro for criado (ver *Sobre Números de Registros*). 

#### Gestão de erros 

Se um número de registro não é válido (registro não criado), é gerado o erro -10503\. Pode interceptar este erro com a ajuda de um método instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CREATE SET FROM ARRAY](create-set-from-array.md)  
[LONGINT ARRAY FROM SELECTION](longint-array-from-selection.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 640 |
| Thread-seguro | &check; |
| Modificar variáveis | error |
| Modificar a seleção atual ||


