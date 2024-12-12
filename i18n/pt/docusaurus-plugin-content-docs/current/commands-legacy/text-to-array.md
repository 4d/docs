---
id: text-to-array
title: TEXT TO ARRAY
slug: /commands/text-to-array
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO ARRAY.Syntax-->**TEXT TO ARRAY** ( *varText* ; *arrText* ; *largo* ; *nomFonte* ; *tamFonte* {; *estiloFonte* {; *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO ARRAY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| varText | Text | &#8594;  | Texto original a dividir |
| arrText | Text array | &#8592; | Array que contém o texto dividido em palavras ou linhas |
| largo | Integer | &#8594;  | Largo máximo da cadeia(em pixeles) |
| nomFonte | Text | &#8594;  | Nome da fonte |
| tamFonte | Integer | &#8594;  | Tamanho da fonte |
| estiloFonte | Integer | &#8594;  | Estilo da fonte |
| * | Operador | &#8594;  | Se passado = interpretar o texto como multistyle |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.TEXT TO ARRAY.Summary-->O comando **TEXT TO ARRAY** transforma uma variável texto em um array texto.<!-- END REF--> El texto original (com estilo ou não) se divide e cada parte se converte em um elemento do array *arrText* que é devolvido pelo comando. Este comando se pode utilizar por exemplo para encher as páginas ou as colunas com texto de um tamanho fixo.  
  
O texto original se divide em "palavras", baseado em um tamanho de linha definido pelos parâmetros do comando e tendo em conta todos os estilos utilizados.  
  
No parâmetro *varText*, passe o texto a dividir em elementos de array. Este texto pode ser ou não multi-estilo. Alguns parâmetros se ignoram quando o texto é multi-estilo.  
  
Passe no parâmetro *arrText* o nome do array a encher com o texto dividido.  
  
No parâmetro *largo*, passe um tamanho em pixeles que indique a longitude máxima de linha a ser medida para dividir o texto. Para todo o texto, o comando avaliara o número máximo de palavras que podem "encaixar" neste largo em função dos atributos gráficos do texto (fonte, estilo).

* Se o texto é multi-estilo, os estilos do texto original se têm em conta e os seguintes parâmetros se ignoram se passam. Neste caso, as linhas de texto no array resultante conservam seu estilo original (de maneira que se podem imprimir uma por uma via uma variável texto ou alfa por exemplo).
* Se tratado de um texto plano (sem estilos), deve passar todos os parâmetros para que o comando possa calcular a longitude das linhas.

Cada elemento do array deve conter ao menos uma palavra. Se o largo passado é muito pequeno para que a regra de divisão se respeite estritamente, o array se enche o mais aproximadamente possível de acordo aos parâmetros e a variável OK toma o valor 0\. Por exemplo, se passa um largo de 3 pixeles, é provável que a maioria das palavras sejam mais grandes que esta longitude. Neste caso, a variável OK toma o valor 0.  
Isto também significa que o tamanho máximo teórico do array devolvido é igual ao número de palavras presentes em *varText*.  
  
Nos parâmetros *nomFonte* e *tamFonte*, passe o nome e o tamanho da fonte com a qual *varText* deve ser avaliado pelo comando para fazer a divisão. Estes parâmetros são obrigatórios no caso de texto sem formato.   
  
No parâmetro *estiloFonte*, passe uma ou mais constantes do tema *Estilos de fonte*.  
  
| Constante | Tipo          | Valor |
| --------- | ------------- | ----- |
| Bold      | Inteiro longo | 1     |
| Italic    | Inteiro longo | 2     |
| Plain     | Inteiro longo | 0     |
| Underline | Inteiro longo | 4     |
  
  
Este parâmetro é opcional; quando se omite, se utiliza o estilo Normal.   
  
O parâmetro opcional *\**, se passado, permite forçar quando se toma em conta os parâmetros *nomFuente*, *tamFuente* e o *estiloFuente* para os textos multi-estilos quando estes parâmetros não estão definidos no texto original. No entanto, se estes parâmetros estão definidos no texto original, os parâmetros passados ao comando se ignoram em todos os casos.

#### Exemplo 1 

Queremos dividir um texto multistyle em linhas com um tamanho máximo de 200 pixeles:

```4d
 TEXT TO ARRAY(theText;TextArray;200;"Arial";20;Normal;*)
  // os atributos Arial, 20 e Normal só são tomados em conta se não estão definidos no texto
```

#### Exemplo 2 

Queremos dividir um texto em linhas de um tamanho máximo de 350 pixeles em fonte Bodoni negrito 14\. Como o comando no funciona corretamente caso a fonte não está disponível, é útil verificar sua presença:

```4d
 ARRAY TEXT($FontList;0)
 FONT LIST($FontList)
 $Font:="Bodoni"
 $p:=Find in array($FontList;$Font)
 If($p>0)
    TEXT TO ARRAY(theText;TextArray;350;"Bodoni";14;Bold)
 Else
  // utilizar outra fonte
 End if
```

#### Exemplo 3 

Um texto multi-estilo deve imprimir-se sem estilo na fonte Arial normal 12 com um largo máximo de 600 pixeles:

```4d
  // transformamos o texto multi-estilo em texto bruto
 $RawText:=OBJECT Get plain text(vText)
  // enchemos o array
 TEXT TO ARRAY($RawText;TextArray;600;"Arial";12)
```

#### Exemplo 4 

Deve imprimir em uma área de 400 pixeles de largo um texto de um máximo de 80 linhas com a fonte mais grande possível (sem exceder os 24 pontos). Pode escrever:

```4d
 ARRAY TEXT(TextArray;0)
 $Size:=24
 Repeat
    TEXT TO ARRAY($RawText;TextArray;400;"Arial";$Size)
    $Size:=$Size-1
    $n:=Size of array(TextArray)
 Until($n<=80)
```

#### Ver também 

[Split string](split-string.md)  
[ST Get plain text](st-get-plain-text.md)  
[ST Get text](st-get-text.md)  