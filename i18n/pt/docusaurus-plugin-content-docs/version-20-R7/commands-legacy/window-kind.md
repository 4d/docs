---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** {( *janela* )} : Integer<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |
| Resultado | Integer | &#8592; | Tipo de janela |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Window kind.Summary-->O comando Window kind devolve o tipo de janela 4D cujo número de referência for passado no parâmetro *janela*.<!-- END REF--> Se a janela não existir, Window kind devolve *0 (zero)*.  

Do contrário, Window kind devolve uma das seguintes constantes pré-definidas (tema *Janela*):  
  
| Constante       | Tipo          | Valor |
| --------------- | ------------- | ----- |
| External window | Inteiro longo | 5     |
| Floating window | Inteiro longo | 14    |
| Modal dialog    | Inteiro longo | 9     |
| Regular window  | Inteiro longo | 8     |
  
  
Se omitir o parâmetro *janela*, Window kind devolve o tipo da janela do primeiro plano do processo atual.

#### Exemplo 

Ver o exemplo do comando [WINDOW LIST](window-list.md).

#### Ver também 

[GET WINDOW RECT](get-window-rect.md)  
[Get window title](get-window-title.md)  
[Window process](window-process.md)  