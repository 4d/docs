---
id: equal-pictures
title: Equal pictures
slug: /commands/equal-pictures
displayed_sidebar: docs
---

<!--REF #_command_.Equal pictures.Syntax-->**Equal pictures** ( *imagem1* ; *imagem2* ; *mascara* ) : Boolean<!-- END REF-->
<!--REF #_command_.Equal pictures.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| imagem1 | Picture, Picture | &#8594;  | Imagem fonte original |
| imagem2 | Picture, Picture | &#8594;  | Imagem a comparar |
| mascara | Picture, Picture | &#8592; | Máscara resultante |
| resultado | Boolean | &#8592; | True se ambas imagens são idênticas; caso contrário, False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Equal pictures.Summary-->O comando **Equal pictures** compara precisamente dois imagens, tanto a nível de suas dimensões como de seu conteúdo.<!-- END REF-->  
  
Passe em *imagem1* a imagem fonte e em *imagem2* uma imagem comparar com a imagem fonte. 

* Se as imagens não são do mesmo dimensão, o comando devolve **False** e o parâmetro *mascara* contém uma imagem vazia.
* Se as duas imagens são do mesmo dimensão mas contém conteúdos diferentes, o comando devolve **False** e o parâmetro *mascara* contém a imagem máscara resultante da comparação das dois imagens. Esta comparação se realiza pixel por pixel. Cada pixel diferente aparece em branco sobre um fundo preto.
* Se as duas imagens são idênticas, o comando devolve **True** e o parâmetro *mascara* contém uma imagem completamente preta.

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se comparam as duas imagens. Em caso de anomalia, particularmente se uma das imagens não se inicializa (imagem vazia), a variável OK toma o valor 0.

#### Exemplo 

No seguinte exemplo, comparamos duas imagens (pict1 e pict2) e mostramos a máscara resultante:

![](../assets/en/commands/pict847365.fr.png)

Este é o código do botão **Compare**:

```4d
 $equal :=Equal pictures($pict1;$pict2;$mask)
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1196 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


