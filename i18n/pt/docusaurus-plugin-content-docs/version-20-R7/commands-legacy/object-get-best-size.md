---
id: object-get-best-size
title: OBJECT GET BEST SIZE
slug: /commands/object-get-best-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET BEST SIZE.Syntax-->**OBJECT GET BEST SIZE** ( {* ;} *objeto* ; *largIdeal* ; *alturaIdeal* {; *larguraMax*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET BEST SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| largIdeal | Integer | &#8592; | Largura ideal do objeto |
| alturaIdeal | Integer | &#8592; | Altura ideal do objeto |
| larguraMax | Integer | &#8594;  | Altura máxima do objeto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT GET BEST SIZE.Summary-->O comando **OBJECT GET BEST SIZE** devolve nos parâmetros *largOpt* e *altOpt*, a largo e alto “ótimo” do objeto de formulário designado pelos parâmetros *\** e *objeto*.<!-- END REF--> Estes valores se expressan em píxeles. Este comando é particularmente útil para a visualização ou impressão de relatórios complexos, associados ao comando [OBJECT MOVE](object-move.md).

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma string de caracteres). Se não passa o parâmetro \*, indica que *objeto* é um campo ou uma variável. Neste caso, você não passa uma string mas uma referência de um campo ou de uma variável (de tipo objeto unicamente).

Os valores ótimos devolvidos indicam o tamanho mínimo do objeto de maneira que seu conteúdo atual seja incluído completamente nos limites. Em geral estes valores só são significativos para objetos que contenham texto. Este cálculo considera a fonte, seu tamanho, estilo e conteúdo do objeto. Também considera a incorporação de hífens e de retornos de carro. 

Note que no caso dos botões 3D, ele funciona igual se o botão contém unicamente um ícone. 

Se o objeto especificado está vazio, ou *largOtima* devolvido é 0\. 

O tamanho devolvido não considera bordas de gráficos aplicados ao redor do objeto, nem barras de rolagem. Para obter o tamanho real de um objeto em tela, é necessário adicionar a largura destes elementos. 

O parâmetro opcional *largMax* lhe permite atribuir uma largura máximo ao objeto. Se a largura ótima do objeto é superior a este valor, **OBJECT GET BEST SIZE** devolve *largoMax* no parâmetro *largOtima* e aumenta o alto ótimo em consequência.

Os objetos a seguir são manejados por este comando:

* Áreas de texto estáticas
* Textos inseridos em forma de referências
* Campos variáveis dos seguintes tipos: Alfa, Texto, Real, Inteiro, Inteiro longo, Data, Hora, Booleano (caixas de seleção e botões de opção)
* Botões.
* Colunas List box em contexto display (só as linhas visíveis são levadas em consideração).

Para todos os outros tipos de objetos de formulário (áreas de grupos, abas, retângulos, linhas retas, círculos/óvais, áreas externas, etc.), o comando **OBJECT GET BEST SIZE** devolve o tamanho do objeto atual (definido no editor de formulários e eventualmente utilizando o comando [OBJECT MOVE](object-move.md)).

#### Exemplo 

Consulte o exemplo no comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

#### Ver também 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  