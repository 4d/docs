---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( pontCampo|numTabela {; *numCampo*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Field name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pontCampo&#124;numTabela | Ponteiro, Inteiro longo | &#x1F852; | Ponteiro Campo ou número da tabela |
| numCampo | Inteiro longo | &#x1F852; | Número do campo se a o número da tabela foi passado no primeiro parâmetro |
| Resultado | String | &#x1F850; | Nome do campo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Field name.Summary-->O comando Field name retorna o nome do campo cujo ponteiro se passa en *pontCampo* ou cujos números de tabela e de campos se passan en *numTabela e numCampo*.<!-- END REF-->

#### Exemplo 1 

Este exemplo atribui o segundo elemento do array *campArray{1}* ao nome do segundo campo na primeira tabela. *campArray* é um array de duas dimensões:   

```4d
 campArray{1}{2}:=Field name(1;2)
```

#### Exemplo 2 

Este exemplo atribui o segundo elemento do array *campArray*{1} ao nome do campo \[*MinhaTabela\]MeuCampo*. campArray é um array de duas dimensões:   
  
```4d
 campArray{1}{2}:=Field name(->[MinhaTabela]MeuCampo)
```

#### Exemplo 3 

Este exemplo mostra um alerta. Este método passa um ponteiro a um campo:   
  
```4d
 ALERT("O número do campo "+Field name($1)+" da tabela "
 +Table name(Table($1))+" deve ser de mais de cinco caracteres.")
```

#### Ver também 

[Field](field.md)  
[Get last field number](get-last-field-number.md)  
[Table name](table-name.md)  