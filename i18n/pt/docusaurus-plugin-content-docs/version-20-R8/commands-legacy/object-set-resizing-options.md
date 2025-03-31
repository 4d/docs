---
id: object-set-resizing-options
title: OBJECT SET RESIZING OPTIONS
slug: /commands/object-set-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Syntax-->**OBJECT SET RESIZING OPTIONS** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| horizontal | Integer | &#8594;  | Opção de redimensionamento horizontal |
| vertical | Integer | &#8594;  | Opção de redimensionamento vertical |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Summary-->O comando **OBJECT SET RESIZING OPTIONS** permite definir ou modificar dinamicamente as opções de redimensionamento do objeto ou dos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF--> Estas opções definem a visualização do objeto em caso de redimensionamento da janela do formulário.  
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
No parâmetro *horizontal*, passe um valor que indique a opção de redimensionamento horizontal a definir para o *objeto*. Pode passar uma das seguintes constantes, do tema *Propriedades dos objetos* :  
  
| Constante              | Tipo          | Valor | Comentário                                                                         |
| ---------------------- | ------------- | ----- | ---------------------------------------------------------------------------------- |
| Resize horizontal grow | Inteiro longo | 1     | Se a janela cresce um 50% de largura, o objeto cresce 50% à direita                |
| Resize horizontal move | Inteiro longo | 2     | Se a janela cresce 100 pixeles de largura, o objeto é movido 100 pixeles à direita |
| Resize horizontal none | Inteiro longo | 0     | Se a janela cresce de largo, nem o largo nem a posição do objeto variam            |
  
  
No parâmetro *vertical*, passe um valor que indique a opção de redimensionamento vertical a definir para o *objeto*. Pode passar uma das seguintes constantes, do tema *Propriedades dos objetos* :  
  
| Constante            | Tipo          | Valor | Comentário                                                                      |
| -------------------- | ------------- | ----- | ------------------------------------------------------------------------------- |
| Resize vertical grow | Inteiro longo | 1     | Se a janela cresce um 50% de alto, o objeto cresce 50% para abaixo              |
| Resize vertical move | Inteiro longo | 2     | Se a janela cresce 100 pixeles de alto, o objeto cresce 100 pixeles para abaixo |
| Resize vertical none | Inteiro longo | 0     | Se a janela cresce de altura, nem o largo nem a posição do objeto mudam         |

#### Ver também 

[OBJECT GET RESIZING OPTIONS](object-get-resizing-options.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1175 |
| Thread-seguro | &cross; |


