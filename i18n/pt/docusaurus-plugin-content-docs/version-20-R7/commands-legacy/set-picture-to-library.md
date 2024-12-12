---
id: set-picture-to-library
title: SET PICTURE TO LIBRARY
slug: /commands/set-picture-to-library
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO LIBRARY.Syntax-->**SET PICTURE TO LIBRARY** ( *imagem* ; *refImag* ; *nomeImagem* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO LIBRARY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem | Picture | &#8594;  | Nova Imagem |
| refImag | Integer | &#8594;  | Número de referência da Biblioteca de Imagens |
| nomeImagem | Text | &#8594;  | Novo nome da imagem |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET PICTURE TO LIBRARY.Summary-->O comando SET PICTURE TO LIBRARY cria uma nova imagem ou substitui uma imagem existente na biblioteca de imagens.<!-- END REF-->

Antes de chamar o comando, você passa:

* o número de referência da imagem em *refImag* (entre 1 e 32767 )
* a imagem mesma em *imagem*.
* o nome da imagem em *nomeImagem* (longitude máxima: 255 caracteres).

Se houver uma imagem na biblioteca de imagens com o mesmo número de referência, seu conteúdo será substituído e a imagem é renomeado com os valores passados em *imagem* e *nomeImagem.*  
  
Se não houver uma imagem na biblioteca de imagens com o número de referência passado em *refImag*, uma nova imagem se adiciona a biblioteca de imagens.

**4D Server:** SET PICTURE TO LIBRARY não pode ser utilizado dentro de um método executado na máquina servidor (procedimento armazenado ou trigger). Se chama SET PICTURE TO LIBRARY em uma máquina servidor, não acontece nada, a chamada é ignorada.

**Advertência:** os objetos de estrutura (elementos de listas hierárquicas, linhas de menu, etc.) podem ser referidas a uma imagem da biblioteca de imagens. Seja prudente quando modifique por programação uma imagem da biblioteca de imagens.

**Nota:** se passa uma imagem vazia em *imagem* ou um valor negativo ou nulo em *refImag*, o comando não faz nada.

#### Exemplo 1 

Sem importar o conteúdo atual da biblioteca de imagens, o exemplo a seguir adiciona uma nova imagem à biblioteca buscando primeiro um número de referência de uma imagem única: 

```4d
 PICTURE LIBRARY LIST($alRefImag;$asNomsImag)
 Repeat
    $vlRefImag:=1+Abs(Random)
 Until(Find in array($alRefImag;$vlRefImag)<0)
 SET PICTURE TO LIBRARY(vgImagem;$vlRefImag;"Nova Imagem")
```

#### Exemplo 2 

O exemplo a seguir importa na biblioteca de imagens as imagens (armazenadas em um documento em disco) criadas pelo terceiro exemplo do comando [PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST"): 

```4d
 SET CHANNEL(10;"")
 If(OK=1)
    RECEIVE VARIABLE($vsTag)
    If($vsTag="4DV6PICTURELIBRARYEXPORT")
       RECEIVE VARIABLE($vlNbImagens)
       If($vlNbImagens>0)
          For($vlImag;1;$vlNbImagens)
             RECEIVE VARIABLE($vlPicRef)
             If(OK=1)
                RECEIVE VARIABLE($vsNomImag)
             End if
             If(OK=1)
                RECEIVE VARIABLE($vgImag)
             End if
             If(OK=1)
                SET PICTURE TO LIBRARY($vgImag;$vlRefImag;$vsNomImag)
             Else
                $vlImag:=$vlNbImagens+1
                ALERT("Este arquivo parece estar danificado.")
             End if
          End for
       Else
          ALERT("Este arquivo parece estar danificado.")
       End if
    Else
       ALERT("O arquivo “"+Document+"” não é um arquivo de exportação da biblioteca de imagens.")
    End if
    SET CHANNEL(11)
 End if
```

#### Gestão de erros 

Se não houver suficiente memória para adicionar a imagem à biblioteca de imagens, se gera um erro -108\. Note que os erros E/S também podem ser gerados (se por exemplo o arquivo de estrutura está bloqueado). Pode interceptar estes erros com um método de gestão de erros.

#### Ver também 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  