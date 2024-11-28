---
id: set-cursor
title: SET CURSOR
slug: /commands/set-cursor
displayed_sidebar: docs
---

<!--REF #_command_.SET CURSOR.Syntax-->**SET CURSOR** {( *cursor* )}<!-- END REF-->
<!--REF #_command_.SET CURSOR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| cursor | Integer | &#8594;  | Número de resource de cursor |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET CURSOR.Summary-->O comando SET CURSOR muda o cursor do mouse para o cursos do sistema cujo número de ID você passar em *cursor*.<!-- END REF-->

O comando deve ser chamado no contexto de On Mouse Move [Form event code](../commands/form-event-code.md). 

Para restaurar o cursor padrão do mouse, chame o comando sem parâmetros.

Aqui estão os cursores que podem ser passados no parameter 1 *cursor* ![](../assets/en/commands/pict14679.en.png)  
2![](../assets/en/commands/pict14680.en.png)  
3![](../assets/en/commands/pict14681.en.png)  
4![](../assets/en/commands/pict14682.en.png)

#### Exemplo 

Se quiser que o cursor seja exibido ![](../assets/en/commands/pict2478692.en.png) quando o mouse mover sobre uma área de variável no formulário. Pode escrever no método de objeto da variável:

```4d
 If(Form event code=On Mouse Move)
    SET CURSOR(9019)
 End if
```
