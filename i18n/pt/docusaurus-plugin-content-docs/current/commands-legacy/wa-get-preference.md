---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( {* ;} *objeto* ; *seletor* ; *valor* )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &rarr; | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &rarr; | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| seletor | Integer | &rarr; | Preferência a obter |
| valor | Variable | &larr; | Valor atual da preferência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA GET PREFERENCE.Summary-->O comando WA GET PREFERENCE permite obter o valor atual de uma preferência na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> 

Passe no parâmetro *seletor* a preferência a ler. Pode passar uma das seguintes constantes, que se encontram no tema *Web Area*

| Constante                 | Valor | Comentário                                                                                                                                      |
| ------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Autoriza a visualização do menu contextual padrão na área web. Por padrão (qualquer motor) = False                                              |
| WA enable URL drop        | 101   | Muda o ícone drop e chama o evento *On Window Opening Denied* quando URLs ou arquivos são soltados na area Web. Padrão (qualquer motor) = False |
| WA enable Web inspector   | 100   | Permite a visualização do inspetor web na área. Padrão (qualquer motor) = False.                                                                |

  
Passe no parâmetro *valor* uma variável que receberá o valor atual da preferência. O tipo da variável depende da preferência. A variável *valor* sempre é de tipo Booleano: contém **True** se a preferência estiver ativa e se não **False**.

#### Ver também 

[WA SET PREFERENCE](wa-set-preference.md)  