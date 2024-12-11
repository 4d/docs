---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( {* ;} *objeto* ; *seletor* ; *valor* )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| seletor | Integer | &#8594;  | Preferência a ser modificada |
| valor | Boolean | &#8594;  | Valor de preferência (True=permitido; False = não permitido) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA SET PREFERENCE.Summary-->O comando WA SET PREFERENCE permite fixar diferentes preferências para o área web designada pelos parâmetros *\** e *objeto*.<!-- END REF-->  
  
Passe no parâmetro *seletor* a preferência a modificar e em *valor* o valor a atribuir. Pode passar em *seletor*, uma das seguintes constantes, que se encontram no tema "*Web Area*":  
  
| Constante                 | Valor | Comentário                                                                                                                                      |
| ------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Autoriza a visualização do menu contextual padrão na área web. Por padrão (qualquer motor) = False                                              |
| WA enable URL drop        | 101   | Muda o ícone drop e chama o evento *On Window Opening Denied* quando URLs ou arquivos são soltados na area Web. Padrão (qualquer motor) = False |
| WA enable Web inspector   | 100   | Permite a visualização do inspetor web na área. Padrão (qualquer motor) = False.                                                                |

Para cada preferência, passe **True** em valor para ativá-la e **False** para desativá-la.

#### Exemplo 

Para ativar o URL solte-a na área web 'myarea':

```4d
  //no método formulário 

WA SET PREFERENCE( *;"myarea"; WA enable URL drop ; True)


```

```4d
  //no método objeto web area
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

#### Ver também 

[WA GET PREFERENCE](wa-get-preference.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1041 |
| Thread-seguro | &check; |
| Proibido no servidor ||


