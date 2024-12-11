---
id: font-style-list
title: FONT STYLE LIST
slug: /commands/font-style-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT STYLE LIST.Syntax-->**FONT STYLE LIST** ( *familiaFonte* ; *listaEstilosFonte* ; *listaNomesFonte* )<!-- END REF-->
<!--REF #_command_.FONT STYLE LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| familiaFonte | Text | &#8594;  | Nome da família da fonte |
| listaEstilosFonte | Text array | &#8592; | Lista de estilos de fonte suportados pela família da fonte |
| listaNomesFonte | Text array | &#8592; | Lista de nomes completos de fontes suportadas pela família de fonte |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FONT STYLE LIST.Summary-->O comando **FONT STYLE LIST** devolve a lista de estilos e a lista de nomes completos suportados pela familia de fonte designada pelo parámetro *familiaFonte*.<!-- END REF--> Este comando lhe permite criar interfaces de manejo de fontes e estilos, em particular no contexto das áreas 4D Write Pro (ver *Referência 4D Write Pro*).

Em *familiaFonte*, passe o nome da familia de fonte para a qual deseja conhecer os estilos e nomes de fontes suportados.

Em *listaEstilosFonte*, passe um array texto para ser preenchido com a lista de estilos de fonte suportados pela *familiaFonte*. Os estilos são devolvidos utilizando seus nomes localizados (ou seja, um elemento "cursiva" será devolvido como "Itálico" em um sistema espanhol), pelo que se pode construir um menu pop-up "Estilos" localizado, por exemplo.

Em *listaNomsFuente*, passe um array texto para ser preenchido com a lista completa de nomes de fontes suportadas pela *familiaFonte*. Diferente do array *listaEstilosFonte*, o array *listaNomsFonte* devolve os valores não localizados, ou seja, os nomes de fontes baseados na identificação do sistema. Portanto, os nomes de fontes serão independentes do idioma do sistema. Os elementos deste array são strings destinadas a ser utilizadas com o atributo wk font do comando 4D Write Pro   *WP SET ATTRIBUTES*. Ao utilizar esta funcionalidade, os documentos 4D Write Pro podem armazenar nomes de fonte e que depois serão abertas em máquinas utilizando qualquer linguagem do sistema sem problemas de fontes.

 Se a *familiaFonte* não são encontradas na máquina, os arrays são devolvidos vazios. Para obter a lista de familias de fontes disponíveis na máquina, utilize o comando [FONT LIST](font-list.md).

#### Exemplo 

Se quiser selecionar estilos da familia de fontes "Verdana" (se estiver disponível):

```4d
 ARRAY TEXT($aTfonts;0)
 ARRAY TEXT($aTStyles;0)
 ARRAY TEXT($aTnames;0)
 var $numStyle : Integer
 
 FONT LIST($aTfonts)
 $numStyle:=Find in array($aTfonts;"Verdana")
 If($numStyle#0)
    FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)
 End if
 
  //Por exemplo, os arrays resultantes são:
  //$aTStyles{1}="Normal"
  //$aTStyles{1}="Italic"
  //$aTStyles{1}="Bold"
  //$aTStyles{1}="Bold Italic"
 
  // $aTnames{1}="Verdana"
  // $aTnames{1}="Verdana Italic"
  // $aTnames{1}="Verdana Bold"
  // $aTnames{1}="Verdana Bold Italic"
```

#### Ver também 

[FONT LIST](font-list.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1362 |
| Thread-seguro | &check; |
| Proibido no servidor ||


