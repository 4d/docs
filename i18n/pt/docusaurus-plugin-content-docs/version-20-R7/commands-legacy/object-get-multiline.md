---
id: object-get-multiline
title: OBJECT Get multiline
slug: /commands/object-get-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get multiline.Syntax-->**OBJECT Get multiline** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get multiline.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| Resultado | Integer | &#8592; | Estado Multi linha do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT Get multiline.Summary-->O comando **OBJECT Get multiline** devolve o estado atual da opção "Multi linha" do objeto ou dos objetos designado(s) pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
Pode definir a opção "Multi linha" de um objeto utilizando a lista de propriedades ou utilizando o comando [OBJECT SET MULTILINE](object-set-multiline.md).  
  
Se passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passar uma referência de campo ou variável no lugar de uma cadeia (campo ou variável objeto unicamente).  
  
O valor devolvido corresponde a uma das seguintes constantes do tema "*Propriedades dos objetos* ":  
  
| Constante      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Multiline Auto | Inteiro longo | 0     | Nas áreas de uma só linha, as palavras situadas ao final das linhas se cortam e não há retornos de linha.<br/>Nas áreas de várias linhas, 4D realiza saltos de linha automáticos.                                                                                                                                            |
| Multiline No   | Inteiro longo | 2     | Nunca há volta da linha: o texto se mostra sempre em uma só linha. Se o campo ou a variável alfa ou texto contém retornos de carro, o texto situado depois do primeiro retorno de carro se elimina tão rápido como se modifica a área.                                                                                               |
| Multiline Yes  | Inteiro longo | 1     | Nas áreas de uma única linha, o texto é mostrado até o primeiro retorno de carro ou até a última palavra que possa ser mostrada por completo. 4D insere retornos de linha, é possível deslocar-se pelo conteúdo da área com a tecla de flecha para baixo. Nas áreas de várias linhas, 4D realiza os saltos de linha automaticamente. |
  
  
**Nota:** Se aplicar o comando **OBJECT Get multiline** a um objeto que não admite a opção "Multi linha", devolve o valor 0.

#### Ver também 

[OBJECT SET MULTILINE](object-set-multiline.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1254 |
| Thread-seguro | &check; |
| Proibido no servidor ||


