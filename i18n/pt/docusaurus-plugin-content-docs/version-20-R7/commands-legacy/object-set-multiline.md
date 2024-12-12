---
id: object-set-multiline
title: OBJECT SET MULTILINE
slug: /commands/object-set-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MULTILINE.Syntax-->**OBJECT SET MULTILINE** ( {* ;} *objeto* ; *multilinha* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MULTILINE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia) Se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se for especificado *) ou<br/>campo ou variável (se for omitido *) |
| multilinha | Integer | &#8594;  | Estado da propriedade multi linha |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OBJECT SET MULTILINE.Summary-->O comando **OBJECT SET MULTILINE** modifica a propriedade "Multilinha" do objeto(s) designada pelos parâmetros *objeto* e *\** .<!-- END REF-->  
  
A propriedade "Multi linha" controla dois parâmetros relacionados com a visualização e impressão das áreas de texto: visualização de palavras situadas ao final da linha nas áreas de uma só linha e a inserção automática dos retornos de linha. Para obter mais informação, consulte *Multilinha* no manual de Desenho. Se aplicar este comando a um objeto que não admite esta propriedade, o comando não faz nada.  
  
Ao passar o parâmetro opcional *\** indica que o parâmetro *objeto* é um nome de objeto (cadeia). Se não passar este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, se passa uma referência de campo ou variável em lugar de uma cadeia (campo ou variável de objeto unicamente).  
  
No parâmetro *multilinha*, passe o novo valor da opção que deseja ajustar. Pode utilizar as seguintes constantes, que se encontram no tema "*Propriedades dos objetos* ":  
  
| Constante      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Multiline Auto | Inteiro longo | 0     | Nas áreas de uma só linha, as palavras situadas ao final das linhas se cortam e não há retornos de linha.<br/>Nas áreas de várias linhas, 4D realiza saltos de linha automáticos.                                                                                                                                            |
| Multiline No   | Inteiro longo | 2     | Nunca há volta da linha: o texto se mostra sempre em uma só linha. Se o campo ou a variável alfa ou texto contém retornos de carro, o texto situado depois do primeiro retorno de carro se elimina tão rápido como se modifica a área.                                                                                               |
| Multiline Yes  | Inteiro longo | 1     | Nas áreas de uma única linha, o texto é mostrado até o primeiro retorno de carro ou até a última palavra que possa ser mostrada por completo. 4D insere retornos de linha, é possível deslocar-se pelo conteúdo da área com a tecla de flecha para baixo. Nas áreas de várias linhas, 4D realiza os saltos de linha automaticamente. |

#### Exemplo 

Você quer proibir várias linhas em uma área de entrada:

```4d
 OBJECT SET MULTILINE(*;"vEntry";Multiline No)
```

#### Ver também 

[OBJECT Get multiline](object-get-multiline.md)  