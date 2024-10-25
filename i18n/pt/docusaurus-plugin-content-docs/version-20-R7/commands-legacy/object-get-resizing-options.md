---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto(cadeia)Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável (se omitido *) |
| horizontal | Integer | &#8592; | Opção de redimensionar horizontalmente |
| vertical | Integer | &#8592; | Opção de redimensionar verticalmente |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->O comando **OBJECT GET RESIZING OPTIONS** devolve as opções de redimensionar atualmente os objetos designados pelos parâmetros *objeto* e *\**.<!-- END REF-->

Se passado o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se este parâmetro não passar, indica que *objeto* é uma variável. Neste caso, passe uma referencia no lugar de uma cadeia.

O comando devolve as opções de redimensiones atuais, como se definiram no modo Desenho o para o processo utilizando o comando [OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md). Estas opções definem a visualização do objeto em caso de redimensionamento da janela do formulário.

O parâmetro *horizontal* devolve um valor indicando a opção de redimensionamento horizontais definido para o objeto. Pode comparar o valor recebido com as seguintes constantes, do tema *Propriedades dos objetos* :

| Constante              | Tipo          | Valor | Comentário                                                                         |
| ---------------------- | ------------- | ----- | ---------------------------------------------------------------------------------- |
| Resize horizontal grow | Inteiro longo | 1     | Se a janela cresce um 50% de largura, o objeto cresce 50% à direita                |
| Resize horizontal move | Inteiro longo | 2     | Se a janela cresce 100 pixeles de largura, o objeto é movido 100 pixeles à direita |
| Resize horizontal none | Inteiro longo | 0     | Se a janela cresce de largo, nem o largo nem a posição do objeto variam            |

O parâmetro *vertical* devolve um valor indicando a opção de redimensionamento vertical definido para o objeto. Pode comparar o valor recebido com as seguintes constantes, do tema *Propriedades dos objetos* :

| Constante            | Tipo          | Valor | Comentário                                                                      |
| -------------------- | ------------- | ----- | ------------------------------------------------------------------------------- |
| Resize vertical grow | Inteiro longo | 1     | Se a janela cresce um 50% de alto, o objeto cresce 50% para abaixo              |
| Resize vertical move | Inteiro longo | 2     | Se a janela cresce 100 pixeles de alto, o objeto cresce 100 pixeles para abaixo |
| Resize vertical none | Inteiro longo | 0     | Se a janela cresce de altura, nem o largo nem a posição do objeto mudam         |

#### Ver também 

[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)  