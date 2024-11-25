---
id: split-string
title: Split string
slug: /commands/split-string
displayed_sidebar: docs
---

<!--REF #_command_.Split string.Syntax-->**Split string** ( *stringAseparar* ; *string* {; *opções*} ) : Collection<!-- END REF-->
<!--REF #_command_.Split string.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| stringAseparar | Text | &#8594;  | Valor string |
| string | Text | &#8594;  | String que stringAseparar separa. Se string vazia (""), cada caractere de stringAseparar é uma substring |
| opções | Integer | &#8594;  | Opções referentes a strings vazias e espaços |
| Resultado | Collection | &#8592; | Coleção de substrings |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Split string.Summary-->O comando **Split string** devolve uma coleção de strings, criada ao dividir string*Aseparar* em substrings nos limites especificados pelo parâmetro *separador*.<!-- END REF--> As substrings na coleção devolvida não incluem o *separador*.

Se não encontrar um *separador* em *stringAseparar*, **Split string** devolve uma coleção que contém um elemento único, *stringAseparar*. Se passar uma string vazia em *separador*, **Split string** devolve uma coleção de cada caractere de *stringAseparar*.

No parâmetro *opções*, pode passar uma combinação das constantes abaixo do tema *Strings*:

| Constante               | Tipo          | Valor | Comentário                                                  |
| ----------------------- | ------------- | ----- | ----------------------------------------------------------- |
| sk ignore empty strings | Inteiro longo | 1     | Remove strings vazias da coleção resultante (são ignorados) |
| sk trim spaces          | Inteiro longo | 2     | Retira os caracteres espaço no começo e fim das substrings  |

#### Exemplo 1 

```4d
 var $vt : Text
 var $col : Collection
 $col:=New collection
 
 $vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"
 $col:=Split string($vt;";") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 $col:=Split string($vt;";";sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
```

#### Exemplo 2 

O parâmetro *separador* pode ser uma string de múltiplos caracteres: 

```4d
 var $vt : Text
 var $col : Collection
 $vt:="NameSmithage40"
 $col:=Split string($vt;"")
  //$col=["Name","Smith","age","40"]
```

#### Ver também 

[TEXT TO ARRAY](text-to-array.md)  