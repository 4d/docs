---
id: remove-picture-from-library
title: REMOVE PICTURE FROM LIBRARY
slug: /commands/remove-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Syntax-->**REMOVE PICTURE FROM LIBRARY** ( refImag | nomImag )<!-- END REF-->
<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refImag &#124; nomImag | Inteiro longo, String | &#8594;  | Número de referência ou nome da imagem da biblioteca de imagens |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Summary-->O comando REMOVE PICTURE FROM LIBRARY elimina da biblioteca de imagens a imagem cujo número de referência se passa em *refImag* ou cujo nome se passa em *nomImag*.<!-- END REF--> 

Se o número de referência ou nome não correspondem a nenhuma imagem, o comando não faz nada.

**4D Server:** REMOVE PICTURE FROM LIBRARY não pode ser utilizado desde um método executado na máquina servidor (procedimento armazenado ou trigger). Se chamar REMOVE PICTURE FROM LIBRARY numa máquina servidor, não passa nada, se ignora a chamada.

**Advertência:** os objetos de desenho (elementos de lista hierárquica, linhas de menu, etc.) possam fazer referência a uma imagem da biblioteca. Seja prudente quando elimine por programação uma imagem da biblioteca de imagens. 

#### Exemplo 1 

O exemplo a seguir apaga a imagem #4444 da biblioteca de imagens. 

```4d
 REMOVE PICTURE FROM LIBRARY(4444)
```

#### Exemplo 2 

O exemplo a seguir apaga da biblioteca de imagens toda imagem cujo nome comece pelo símbolo dólar (*$*): 

```4d
 PICTURE LIBRARY LIST($alRefImag;$asNomImag)
 For($vlImag;1;Size of array($alRefImag))
    If($asNomImag{$vlImag}="$@")
       REMOVE PICTURE FROM LIBRARY($alRefImag{$vlImag})
    End if
 End for
```

#### Ver também 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  