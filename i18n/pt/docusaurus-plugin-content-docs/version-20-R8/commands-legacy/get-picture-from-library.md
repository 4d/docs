---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( refImag | nomImag ; *imagem* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refImag &#124; nomImag | Inteiro longo, String | &#8594;  | Número de referência ou Nome da imagem da biblioteca de imagens |
| imagem | Picture | &#8592; | Imagem da biblioteca de imagens |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->O comando GET PICTURE FROM LIBRARY devolve no parâmetro *imagem* a imagem da biblioteca de imagens cujo número de referência se passa em *refImag* ou cujo nome se passa em *nomImag*.<!-- END REF-->

Se não houver uma imagem com esse nome ou número de referência, GET PICTURE FROM LIBRARY não modifica *imagem*. 

#### Exemplo 1 

O exemplo a seguir devolve em *vgMiImagen* a imagem cujo número de referência se armazena na variável local *$vlRefImag*: 

```4d
 GET PICTURE FROM LIBRARY($vlRefImag;vgMinhaImagem)
```

#### Exemplo 2 

O exemplo a seguir devolve em *$DDcom\_Prot\_MiImagen* a imagem com o nome "DDcom\_Prot\_Boton1" armazenada na biblioteca de imagens: 

```4d
 GET PICTURE FROM LIBRARY("XP - Aceitar";$XP_Aceitar)
```

#### Exemplo 3 

Ver o terceiro exemplo para o comando [PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST").

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se a imagem existe na biblioteca de imagens. Do contrário, OK toma o valor zero.

#### Gestão de erros 

Se não houver suficiente memória para devolver a imagem, se gera o erro -108\. Pode interceptar este erro utilizando um método de gestão de erros.

#### Ver também 

[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 565 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK, error |


