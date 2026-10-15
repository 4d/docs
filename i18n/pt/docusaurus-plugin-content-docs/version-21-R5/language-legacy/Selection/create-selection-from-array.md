---
id: create-selection-from-array
title: CREATE SELECTION FROM ARRAY
slug: /commands/create-selection-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Syntax-->**CREATE SELECTION FROM ARRAY** ( *tabela* : Table ; *regArray* : Integer, Boolean array {; *temp* : Text} )<!-- END REF-->
<!--REF #_command_.CREATE SELECTION FROM ARRAY.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela da qual criar a seleção |
| regArray | Integer, Boolean array | &#8594; | Array de números de registros, ou Array de booleanos (True = o registro está na seleção, False = o registro não está na seleção) |
| temp | Text | &#8594; | Nome da seleção temporal a criar, ou Aplicar o comando a seleção atual se o parâmetro se omite |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6.7|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.CREATE SELECTION FROM ARRAY.Summary-->O comando **CREATE SELECTION FROM ARRAY** cria a seleção selectionName<!-- END REF--> a partir de:

* um array de números de registros absolutos *regArray* de *tabela*,
* ou de um array de booleanos. Neste caso, os valores do array indicam a associação ([True](../commands/true)) ou não ([False](../commands/false)) de cada registro de *tabela* à seleção selectionName.

**Cuidado:** Uma seleção nomeada é criada e carregada na memória. Portanto, tenha certeza de ter memória suficiente antes de executar o comando.

Se não passar selectionName ou se passar uma string vazia, o comando será aplicado a seleção atual, a qual será então atualizada.

Quando você utiliza um array de inteiros longos com este comando, todos os números do array representam a lista de números dos registros em selectionName. Se um número for incorreto (registro não criado), é gerado o erro -10503.

**Nota:** atenção, deve ter certeza de que o array não contenha linhas que tenham o mesmo valor, do contrário a seleção resultante será incorreta.

Quando usa um array booleano com este comando, o elemento X do array indica se o registro número X é ([True](../commands/true)) ou não ([False](../commands/false)) em selectionName. O número de elementos em *regArray* deve ser igual ao número de registros em *tabela*. Se o array é menor que o número de registros, só os registros definidos pelo array podem fazer parte da seleção.

**Nota:** com um array de booleanos, o comando utiliza elementos do número 0 al X-1.

**Aviso:** Lembre que um número de registro pode ser reutilisado se o registro for apagado e outro registro for criado (ver *Sobre Números de Registros*). 

## Gestão de erros 

Se um número de registro não é válido (registro não criado), é gerado o erro -10503\. Pode interceptar este erro com a ajuda de um método instalado pelo comando [ON ERR CALL](../commands/on-err-call).

## Ver também 

[CLEAR NAMED SELECTION](../commands/clear-named-selection)  
[COPY NAMED SELECTION](../commands/copy-named-selection)  
[CREATE SET FROM ARRAY](../commands/create-set-from-array)  
[LONGINT ARRAY FROM SELECTION](../commands/longint-array-from-selection)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[USE NAMED SELECTION](../commands/use-named-selection)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 640 |
| Thread-seguro | yes |
| Modificar variáveis | error |
| Modificar a seleção atual ||


