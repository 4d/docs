---
id: picture-library-list
title: PICTURE LIBRARY LIST
slug: /commands/picture-library-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE LIBRARY LIST.Syntax-->**PICTURE LIBRARY LIST** ( *refsImagem* ; *nomsImagem* )<!-- END REF-->
<!--REF #_command_.PICTURE LIBRARY LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refsImagem | Integer array | &#8592; | Números de referência dos gráficos da biblioteca de Imagens |
| nomsImagem | Text array | &#8592; | Nomes dos gráficos da biblioteca de Imagens |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PICTURE LIBRARY LIST.Summary-->O comando PICTURE LIBRARY LIST devolve os números de referência e os nomes das imagens armazenadas na biblioteca de imagens do banco de dados.<!-- END REF--> 

Depois de chamá-lo, você recupera os números de referência no array *refsImagem* e os nomes no array *nomsImagem*. Os dois arrays estão sincronizados: o elemento n de *refsImagem* é o número de referência da imagem da biblioteca cujo nome é devolvido no elemento n de *nomsImagem*.

Se for necessário, o comando cria e dimensiona automaticamente os arrays *refsImagem* e *nomsImagem.*

A longitude máxima do nome de uma imagem da biblioteca é de 255 caracteres. 

Se a biblioteca de imagens estiver vazia, os dois arrays devolvidos estarão vazios. 

Para obter o número de imagens armazenadas atualmente na biblioteca de imagens, utilize o comando [Size of Array](size-of-array.md "Size of Array") para obter o tamanho de um dos dois arrays.

#### Exemplo 1 

O código a seguir devolve o catálogo da biblioteca de imagens nos arrays *alRefImag* e *asNomImag*: 

```4d
 PICTURE LIBRARY LIST(alRefImag;asNomImag)
```

#### Exemplo 2 

O exemplo a seguir prova se a biblioteca de imagens está vazia ou não: 

```4d
 PICTURE LIBRARY LIST(alRefImag;asNomImag)
 If(Size of array(alRefImag)=0)
    ALERT("A biblioteca de imagens está vazia.")
 Else
    ALERT("A biblioteca de imagens contém "+String(Size of array(alRefImag))+" imagens.")
 End if
```

#### Exemplo 3 

O exemplo a seguir exporta a biblioteca de imagens a um documento armazenado no disco:  

```4d
 PICTURE LIBRARY LIST($alRefImag ;$asNomImag)
 $vlNbImagens:=Size of array($alRefImag)
 If($vlNbImagens>0)
    SET CHANNEL(12;"")
    If(OK=1)
       $vsTag:="4DV6PICTURELIBRARYEXPORT"
       SEND VARIABLE($vsTag)
       SEND VARIABLE($vlNbImagens)
       gError:=0
       For($vlImagem;1;$vlNbImagens)
          $vlRefImag:=$alRefImag{$vlImagem}
          $vsNomImag:=$asNomImag{$vlImagem}
          GET PICTURE FROM LIBRARY($alRefImag{$vlimagem};$vgImagem)
          If(OK=1)
             SEND VARIABLE($vlRefImag)
             SEND VARIABLE($vsNomImag)
             SEND VARIABLE($vgImagem)
          Else
             $vlImagem:=$vlImagem+1
             gErro:=-108
          End if
       End for
       SET CHANNEL(11)
       If(gErro#0)
          ALERT("A biblioteca de imagens não pode ser exportada, trate novamente com mais memória.")
          DELETE DOCUMENT(Document)
       End if
    End if
 Else
    ALERT("A biblioteca de imagens está vazia.")
 End if
```

#### Ver também 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 564 |
| Thread-seguro | &cross; |


