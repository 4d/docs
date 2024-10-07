---
id: field
title: Field
slug: /commands/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *numTabela* ; *numCampo* ) -> pontCampo 
        
            Field ( *pontCampo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Field.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela | Integer | &#x1F852; | Número da tabela |
| numCampo | Integer | &#x1F852; | Nº do campo |
| pontCampo | Pointer | &#x1F850; | Ponteiro do campo |
| Field ( pontCampo ) -> Resultado |
| Parâmetro | Tipo | Descrição |
| pontCampo | Pointer | &#x1F852; | Ponteiro do campo |
| Resultado | Integer | &#x1F850; | Número do campo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Field.Summary-->O comando Field tem duas sintaxe: 

* Se passa um número de tabela en *numTabela* e um número de campo en *numCampo*, Field retorna um ponteiro ao campo.<!-- END REF-->
* Se passa um ponteiro a um campo en *pontCamp*, Field retorna o número do campo.

#### Exemplo 1 

O seguinte exemplo atribui a variável *pontCampo* a um ponteiro ao segundo campo na terceira tabela:   
  
```4d
 CampPtr:=Field(3;2)
```

#### Exemplo 2 

  
Se passa *pontCampo* (um ponteiro ao segundo campo de uma tabela) a Field retorna o valor 2\. A seguinte linha atribui o valor 2 a *numCampo*: campNum :=Field(campPtr )  
  
  
: 

```4d
 numCampo:=Field(pontCampo)
```

#### Exemplo 3 

No seguinte exemplo, a variável *numCampo* for igual ao número do campo de \[Tabela3\]Campo2: 

```4d
 campNum:=Field(->[Tabela3]Campo2)
```

#### Ver também 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Get last field number](get-last-field-number.md)  
[Table](table.md)  