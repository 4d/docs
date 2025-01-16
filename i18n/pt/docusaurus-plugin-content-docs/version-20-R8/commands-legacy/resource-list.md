---
id: resource-list
title: RESOURCE LIST
slug: /commands/resource-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE LIST.Syntax-->**RESOURCE LIST** ( *resTipo* ; *resNum* ; *resNomes* {; *resArquivo*} )<!-- END REF-->
<!--REF #_command_.RESOURCE LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | Tipo de resource de 4 caracteres |
| resNum | Integer array | &#8592; | Nº de resources para recursos desse tipo |
| resNomes | Text array | &#8592; | Nomes de resouces para recursos desse tipo |
| resArquivo | Time | &#8594;  | Número de referência do arquivo Resource, ou todos os arquivos de referência abertos, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESOURCE LIST.Summary-->O comando RESOURCE LIST preenche os arrays *resNum* e *resNomes* com os números e os nomes dos recursos cujo tipo se passa em *resTipo*.<!-- END REF-->  
  
**Importante**: deve passar uma cadeia de 4 caracteres em *resTipo*.  
  
Se passa um número de referência de arquivo de recursos válido no parâmetro opcional *resArquivo*, apenas os recursos presentes nesse arquivo são listados. Se não passa *resArquivo*, todos os recursos dos arquivos de recursos abertos são listados.  
  
Se pré-declara os arrays antes de chamar a RESOURCE LIST, deve pré-declarar *resNum* como um array de tipo Inteiro longo e *resNomes* como um array de tipo Alfa ou Texto. Se não pré-declara os arrays, o comando cria *resNum* como um array de tipo Inteiro longo e *resNomes* como um array de tipo Texto.  
  
Depois da chamada, pode testar o número de recursos encontrados aplicando o comando [Size of Array](size-of-array.md "Size of Array") ao array *resNum* ou *resNomes*.

#### Exemplo 1 

O exemplo a seguir preenche os arrays *$alResNum* e *$atResNom* com os números e os nomes de recursos de tipo lista de cadeias presentes no arquivo de estrutura do banco: 

```4d
 If(On Windows)
    $vhEstruturaResArquivo:=Open resource file(Replace string(Structure file;".4DB";".RSR"))
 Else
    $vhEstruturaResArquivo:=Open resource file(Structure file)
 End if
 If(OK=1)
    RESOURCE LIST("STR#";$alResNum;$atResNom;$vhEstruturaResArquivo)
 End if
```

#### Exemplo 2 

O exemplo a seguir copia os recursos imagem presentes em todos os arquivos de recursos abertos na biblioteca de imagens do banco:

```4d
 RESOURCE LIST("PICT";$alResNum;$atResNom)
 Open window(50;50;550;120;5;"Cópia dos recursos PICT...")
 For($vlElem;1;Size of array($alResNum))
    GET PICTURE RESOURCE($alResNum{$vlElem};$vgImagem)
    If(OK=1)
       $vsNome:=$atResNom{$vlElem}
       If($vsNome="")
          $vsNome:="PICT resNum="+Cadeia($alResNum{$vlElem})
       End if
       ERASE WINDOW
       GOTO XY(2;1)
       MESSAGE("Adiciona a imagem “"+$vsNome+"”à biblioteca de imagens do banco.")
       SET PICTURE TO LIBRARY($vgImagem;$alResNum{$vlElem};$vsNome)
    End if
 End for
 CLOSE WINDOW
```

#### Ver também 

[RESOURCE TYPE LIST](resource-type-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 500 |
| Thread-seguro | &cross; |


