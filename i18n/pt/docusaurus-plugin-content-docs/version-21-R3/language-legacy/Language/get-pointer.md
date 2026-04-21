---
id: get-pointer
title: Get pointer
slug: /commands/get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Get pointer.Syntax-->**Get pointer** ( *nomeVar* : Text ) : Pointer<!-- END REF-->
<!--REF #_command_.Get pointer.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeVar | Text | &#8594; | Nome da variável processo ou interprocesso |
| Resultado | Pointer | &#8592; | Ponteiro a variável processo ou interprocesso |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15|Modificado|
|2004|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.Get pointer.Summary-->O comando **Get pointer** devolve um ponteiro até uma variável processo ou interprocesso cujo nome se passa em *nomVar*.<!-- END REF-->

Para levar um ponteiro até um campo, utilize [Field](../commands/field). Para levar um ponteiro até uma tabela, utilize [Table](../commands/table).

**Nota:** pode passar expressões como, por exemplo, *NomArr+"{3}"*, assim como elementos de array 2D *(NomArr+"{3}{5}")* para **Get pointer**.  
Entretanto, não pode passar elementos de variável *(NomArr+"{miVar}")*. 

## Exemplo 1 

Em um formulário, você constrói uma matriz de 5 x 10 de variáveis editáveis chamadas v1, v2... v50\. Para inicializar todas estas variáveis, você escreve:

```4d
  // ...
 For($vlVar;1;50)
    $vpVar:=Get pointer("v"+String($vlVar))
    $vpVar->:=""
 End for
```

## Exemplo 2 

Usando ponteiros para elementos de arrays bi-dimensionais:

```4d
 $pt:=Get pointer("a{1}{2}")
  //$pt=->a{1}{2}
 $pt2:=Get pointer("atCities"+"{2}{6}")
  //$pt2=->atCities{2}{6}
```

## Ver também 

[Field](../commands/field)  
[Table](../commands/table)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 304 |
| Thread-seguro | yes |


