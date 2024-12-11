---
id: font-list
title: FONT LIST
slug: /commands/font-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT LIST.Syntax-->**FONT LIST** ( *fontes* {; listType | *} )<!-- END REF-->
<!--REF #_command_.FONT LIST.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| fontes | Text array | &#8592; | Array de nomes de fontes disponíveis |
| listType &#124; * | Inteiro longo, Operador | &#8594;  | Tipo de lista de fonte a devolver ou * para devolver os nomes de fonte em OS X |

<!-- END REF-->

#### Description 

<!--REF #_command_.FONT LIST.Summary-->O comando FONT LIST enche o array *fontes*, de tipo alfa ou texto, com os nomes das fontes disponíveis em seu sistema.<!-- END REF-->

O parâmetro *tipoLista* permite designar o tipo da lista de fonte a obter. Para fazer isso, pode passar uma das seguintes constantes no parâmetro *tipoLista*, disponível no tema "*Tipo de lista das fontes*":

| Constante      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Favorite fonts | Inteiro longo | 1     | *fontes* contém a lista de fontes favoritas<br/>- Em Windows: lista de nomes de famílias de fontes ativas no painel de controle de Windows.<br/>- Em OS X: lista de nomes de famílias de fontes da coleção "com.apple.Favorites" que se encontra no painel de controle, chamada "Favorites" em Inglês, "Favoris" em francês, "Favoriten" em alemão, etc. Esta coleção pode estar em branco se o usuário não adicionou fontes favoritas. |
| Recent fonts   | Inteiro longo | 2     | *fontes* contém a lista de fontes recentes (lista de fontes utilizadas durante a sessão 4D). Esta lista é utilizada particularmente pelas áreas de texto multiestilo                                                                                                                                                                                                                                                                                    |
| System fonts   | Inteiro longo | 0     | *fontes* contém a lista de todas as fontes do sistema. Opção por padrão se omitido *tipoLista*.                                                                                                                                                                                                                                                                                                                                                         |

Sob Mac OS X, quando passar o parâmetro opcional *\**, o comando enche o array *fontes* com os nomes das fontes e não com os nomes das famílias de fontes. A operação por padrão simplifica a gestão programada de áreas de texto enriquecidas, que utilizam famílias de fonte. Se passar o parâmetro *\**, os nomes de fonte, por exemplo "Arial bold", "Arial italic", "Arial narrow italic," são devolvidos em lugar das famílias, tais como "Arial", "Arial black" ou "Arial narrow".

Sob Windows, o parâmetro *\** não tem efeito. O comando devolve sempre as famílias de fontes.

**Nota:** Sob Mac OS, se utiliza o resultado deste comando com o comando [ST SET ATTRIBUTES](st-set-attributes.md), em uma área de texto multiestilo, não deve passar o parâmetro *\** (só famílias de fonte são compatíveis como Attribute font name). Essa limitação não aplica a áreas 4D Write Pro, que aceita tanto fontes quanto nomes de famílias de fonte. 

##### Sobre fontes escaláveis 

Este comando devolve só as fontes escaláveis. Não se recomenda o uso de fontes não vetoriais (ou seja, fontes de mapa de bits) para o desenho de interfaces, já que se baseiam em uma tecnologia obsoleta e sofrem de limitações em quanto as variações de tamanho. Não são compatíveis com as funcionalidades mais recentes de 4D como as áreas 4D Write Pro.

Em OS X, este principio aplica desde OS X 10.4 (as fontes de mapa de bits QuickDraw são obsoletas a partir desta versão).

Em Windows, este principio se aplica começando com 4D v15 R4\. Com o fim de ajudar aos desenvolvedores a selecionar só fontes modernas para suas interfaces, só as fontes vetoriais "TrueType" ou "OpenType" são listados. Por exemplo, "ASI\_Mono", "MS Sans Serif" e "Syistem" já não estão disponíveis. Além disso, também são ignorados os nomes GDI; só os nomes de familias de fonte DirectWrite são suportados. Por exemplo, as fontes "Arial Black" ou "Segoe UI Black" não estão na lista; Só "Arial" e "Segoe" são devolvidos.

  
**Notas de compatibilidade para Windows:**

* As fontes de mapa de bits podem ser seguidas utilizando em seus formulários 4D (exceto nas áreas 4D Write Pro). Simplesmente se eliminam da lista devolvida por este comando. Entretanto, para assegurar a compatibilidade com futuras versões de 4D e Windows, se recomenda utilizar só as famílias de fontes DirectWrite.
* Dado que as fontes de mapa de bits se filtran desde o parâmetro *fontes* em Windows, a lista resultante é diferente em aplicações 4D v15 R4 e superiores, em comparação com versões anteriores. Lembre de adaptar seu código se usar este comando para selecionar um tipo de letra não vetorial.

#### Exemplo 1 

Em um formulário, você quer obter uma lista para baixo que mostre as fontes disponíveis no sistema. O método da lista para baixo é a seguinte:  

```4d
 Case of
    :(FORM Event=On Load)
       ARRAY TEXT(asFonte;0)
       FONT LIST(asFonte)
  // ...
 
 End case
```

#### Exemplo 2 

Você quer obter uma lista de fontes recentes:

```4d
 FONT LIST($arrFonts;Recent fonts)
```

#### Ver também 

[FONT STYLE LIST](font-style-list.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET RECENT FONTS](set-recent-fonts.md)  
[ST SET ATTRIBUTES](st-set-attributes.md)  
*Tipo de lista das fontes*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 460 |
| Thread-seguro | &check; |
| Proibido no servidor ||


