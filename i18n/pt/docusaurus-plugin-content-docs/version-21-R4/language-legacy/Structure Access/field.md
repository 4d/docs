---
id: field
title: Field
slug: /commands/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *numTabela* : Integer ; *numCampo* : Integer ) : Pointer<br/>**Field** ( *pontCampo* : Pointer ) : Integer<!-- END REF-->
<!--REF #_command_.Field.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela | Integer | &#8594; | Número da tabela |
| numCampo | Integer | &#8594; | Nº do campo |
| pontCampo | Pointer | &#8594; | Ponteiro do campo |
| Resultado | Pointer, Integer | &#8592; | Ponteiro do campo ou Nº do campo |
</div>
<!-- END REF-->

## Descrição 

O comando Field tem duas sintaxe: 

<!--REF #_command_.Field.Summary-->* Se passa um número de tabela en *numTabela* e um número de campo en *numCampo*, Field retorna um ponteiro ao campo.
* Se passa um ponteiro a um campo en *pontCamp*, Field retorna o número do campo.<!-- END REF-->

## Exemplo 1 

O seguinte exemplo atribui a variável *pontCampo* a um ponteiro ao segundo campo na terceira tabela:   
  
```4d
 CampPtr:=Field(3;2)
```

## Exemplo 2 

  
Se passa *pontCampo* (um ponteiro ao segundo campo de uma tabela) a Field retorna o valor 2\. A seguinte linha atribui o valor 2 a *numCampo*: campNum :=Field(campPtr )  
  
  
: 

```4d
 numCampo:=Field(pontCampo)
```

## Exemplo 3 

No seguinte exemplo, a variável *numCampo* for igual ao número do campo de \[Tabela3\]Campo2: 

```4d
 campNum:=Field(->[Tabela3]Campo2)
```

## Ver também 

[Field name](../commands/field-name)  
[GET FIELD PROPERTIES](../commands/get-field-properties)  
[Last field number](../commands/last-field-number)  
[Table](../commands/table)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 253 |
| Thread-seguro | yes |


