---
id: get-list-item-parameter-arrays
title: GET LIST ITEM PARAMETER ARRAYS
slug: /commands/get-list-item-parameter-arrays
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Syntax-->**GET LIST ITEM PARAMETER ARRAYS** ( {* ;} *list* ; *refElemento* ; *arrSeletores* {; *arrValores*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se for especificada, a lista é um nome de objeto (cadeia)<br/>Se for omitida, a lista é um número de referencia de lista |
| list | Integer, Text | &#8594;  | Número de referencia de lista ou<br/>Nome de objeto de tipo lista (se passado *) |
| refElemento | Integer, * | &#8594;  | Número de referencia do elemento ou<br/>0 para o último elemento agregado à lista ou<br/>* para o elemento atual da lista |
| arrSeletores | Text array | &#8592; | Array dos nomes dos parâmetros |
| arrValores | Text array | &#8592; | Array dos valores dos parâmetros |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Summary-->O comando **GET LIST ITEM PARAMETER ARRAYS** permite recuperar somente em uma chamada o conjunto dos parâmetros (também como, opcionalmente, seus valores) associados ao elemento *refElemento* da lista hierárquica cuja referencia ou nome de objeto se passou no parâmetro *lista*.<!-- END REF-->

O parâmetros associados aos elementos permitem armazenar informação adicional sobre cada elemento. Se definem com a ajuda do comando [SET LIST ITEM PARAMETER](set-list-item-parameter.md).

É passado o primeiro parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se passado este parâmetro, indica que o parâmetro *lista* é uma referencia de lista hierárquica (*RefList*). É utilizado somente uma representação de lista ou trabalha com os elementos estruturais (o segundo *\** é omitido), pode utilizar indiferentemente uma ou outra sintaxes. No entanto, varias representações são utilizadas de uma mesma lista e trabalha com o elemento atual (se passa o segundo \*), deve utilizar a sintaxes baseada no nome do objeto, porque cada representação pode ter seu próprio elemento atual.

**GET LIST ITEM PARAMETER ARRAYS** devolve os parâmetros definidos para o elemento *refElemento* no array texto *arrSeletores*. Quando se passa o array texto *arrValores*, o comando utiliza para devolver os valores associados com estes parâmetros.

*arrValores* deve ser um array de tipo texto. Se tem valores associados que não são textuais (tipo numérico ou Booleano), convertidos em cadeias (True="1", False="0").

#### Exemplo 

Dada a seguinte lista hierárquica: 

```4d
 <>HL:=New list
 $ID:=30
 APPEND TO LIST(<>HL;"Martin";$ID)
  //5 parâmetros
 SET LIST ITEM PARAMETER(<>HL;$ID;"Nome";"Phil")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Data de nascimento";"01/02/1978")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Homem";True) //Booleano
 SET LIST ITEM PARAMETER(<>HL;$ID;"Idade";33) //número
 SET LIST ITEM PARAMETER(<>HL;$ID;"Cidade";"Dallas")
```

Para maior simplicidade a lista se associou a uma lista objeto com o mesmo nome ("<>HL").  
  
Quando o elemento "Martin" é selecionado na lista, pode recuperar seus parâmetros executando o seguinte código:

```4d
 ARRAY TEXT(arrParamNames;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames)
  // arrParamNames{1} contém "Nome"
  // arrParamNames{2} contém "Data de nascimento"
  // arrParamNames{3} contém "Homem"
  // arrParamNames{4} contém "Idade"
  // arrParamNames{5} contém "Cidade"
```

Caso também queiras obter os valores dos parâmetros, escreva: 

```4d
 ARRAY TEXT(arrParamNames;0)
 ARRAY TEXT(arrParamValues;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames;arrParamValues)
  // arrParamValues{1} contém "Phil"
  // arrParamValues{2} contém "01/02/1978"
  // arrParamValues{3} contém "1"
  // arrParamValues{4} contém "33"
  // arrParamValues{5} contém "Dallas"
```

#### Ver também 

[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1195 |
| Thread-seguro | &check; |
| Proibido no servidor ||


