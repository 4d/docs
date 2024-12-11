---
id: get-field-properties
title: GET FIELD PROPERTIES
slug: /commands/get-field-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD PROPERTIES.Syntax-->**GET FIELD PROPERTIES** ( pontCampo|numTabela {; *numCampo*}; *tipoCampo* {; *tamanhoCampo* {; *indexado* {; *unico* {; *invisivel*}}}} )<!-- END REF-->
<!--REF #_command_.GET FIELD PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pontCampo&#124;numTabela | Ponteiro, Inteiro longo | &#8594;  | Número de tabela ou ponteiro do campo |
| numCampo | Integer | &#8594;  | Número do campo se número de tabela for passado |
| tipoCampo | Integer | &#8592; | Tipo de Campo |
| tamanhoCampo | Integer | &#8592; | Comprimento do campo, se alfanumérico |
| indexado | Boolean | &#8592; | True = indexado, False = não indexado |
| unico | Boolean | &#8592; | True = único, False = não único |
| invisivel | Boolean | &#8592; | True = invisível, False = visível |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET FIELD PROPERTIES.Summary-->O comando GET FIELD PROPERTIES retorna informação sobre o campo designado por *pontCampo* ou por *numTabela* e *campoNum*.<!-- END REF-->  
  
Pode passar:

* os números de tabela e de campo em *tabelaNum* e *campoNum*, ou
* um ponteiro ao campo em *pontCampo*.

Depois da chamada:

* *campoTipo* retorna o tipo do campo. O parâmetro variável *campoTipo* recebe um dos valores predefinidos pelas constantes de 4D:  
    
| Constante          | Tipo          | Valor |  
| ------------------ | ------------- | ----- |  
| Is alpha field     | Inteiro longo | 0     |  
| Is BLOB            | Inteiro longo | 30    |  
| Is Boolean         | Inteiro longo | 6     |  
| Is date            | Inteiro longo | 4     |  
| Is float           | Inteiro longo | 35    |  
| Is integer         | Inteiro longo | 8     |  
| Is integer 64 bits | Inteiro longo | 25    |  
| Is longint         | Inteiro longo | 9     |  
| Is picture         | Inteiro longo | 3     |  
| Is real            | Inteiro longo | 1     |  
| Is subtable        | Inteiro longo | 7     |  
| Is text            | Inteiro longo | 2     |  
| Is time            | Inteiro longo | 11    |
* O parâmetro *tamanhoCampo* retorna o comprimento do campo, se o campo for alfanumérico (ou seja, *tipoCampo=Is Alpha Field*). O valor de *tamanhoCampo* não é significativo para os outros tipos de campo.
* O parâmetro *indexado* retorna True se o campo está indexado, do contrário False. O valor de *indexado* é significativo unicamente para campos de tipo Alfanumérico, Inteiro, Inteiro longo, Real, Data, Hora e Booleano.
* O parâmetro *único* retorna True se o campo estiver definido como “único”, do contrário False.
* O parâmetro *invisível* retorna True se o campo estiver definido como “Invisible”, do contrário False. O atributo invisível pode ser utilizado para ocultar um campo no editor padrão de 4D (etiquetas, gráficos...).

#### Exemplo 1 

Neste exemplo, as variáveis *vTipo*, *vTamanho*, *vIndice*, *vUnico* e *vInvisivel* assumem as propriedades do terceiro campo da primeira tabela: 

```4d
 GET FIELD PROPERTIES(1;3;vTipo;vTamanho;vIndice;vUnico;vInvisivel)
```

#### Exemplo 2 

Este exemplo recupera nas variáveis *vTipo*, *vTamanho*, *vIndice*, *vUnico* e *vInvisivel* as propriedades do campo \[Tabela3\]Campo2: 

```4d
 GET FIELD PROPERTIES(->[Tabela3]Campo2;vTipo;vTamanho;vIndice;vUnico;vInvisivel)
```

#### Ver também 

[Field](field.md)  
[Field name](field-name.md)  
[SET INDEX](set-index.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 258 |
| Thread-seguro | &check; |
| Proibido no servidor ||


