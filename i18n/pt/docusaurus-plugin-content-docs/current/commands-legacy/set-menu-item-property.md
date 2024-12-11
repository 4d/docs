---
id: set-menu-item-property
title: SET MENU ITEM PROPERTY
slug: /commands/set-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PROPERTY.Syntax-->**SET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *propriedade* ; *valor* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PROPERTY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| propriedade | Text | &#8594;  | Tipo de propriedade |
| valor | Text, Number, Boolean | &#8594;  | Valor da propriedade |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM PROPERTY.Summary-->O comando SET MENU ITEM PROPERTY permite fixar o *valor* da *propriedade* para a linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF-->

Pode passar -1 em *menuItem* para especificar a última linha adicionada a *menu*.

Em *menu*, pode passar uma referencia de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passa uma referência de menu, o comando se aplicará a todas as instâncias do menu em todos os processos Neste caso, se passar o parâmetro *processo,* ele será ignorado. Se passa um número de menu, o comando se aplicará ao menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

No parâmetro *propriedade*, passe a propriedade cujo valor quer modificar e passe o novo valor em *valor*. Para o parâmetro *propriedade*, pode utilizar uma propriedade padrão (uma das constantes de tema “*Propriedades de item de menu*”) ou uma propriedade personalizada:

* Propriedade padrão: as constantes do tema “*Propriedades de item de menu* assim como suas possíveis valores são descritos a continuação.  
| Constante                  | Tipo   | Valor                            | Comentário                                                                                                                                                                                                                      |  
| -------------------------- | ------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Access privileges          | Cadeia | 4D\_access\_group                | Ativar a opção "Iniciar um novo processo"<br/>0 = Não, 1 = Sim                                                                                                                                                          |  
| Associated standard action | Cadeia | 4D\_standard\_action             | Associar uma ação padrão à linha de menu<br/>Ver as constantes de tema "*Ação estandarte*"                                                                                                                              |  
| n/a                        | Cadeia | 4D\_execute\_without\_validating | Ativar a opção **[Execute without validating](https://developer.4d.com/docs/Menus/properties#execute-without-validating)** (para itens de menu associados à ações padrão). <br/>True=ativado, False (padrão)=desativado |  
| Start a new process        | Cadeia | 4D\_start\_new\_process          | Ativar a opção "Start New Process"<br/>0 = Não, 1 = Sim                                                                                                                                                                 |  
    
Considere que no caso da propriedade Associated Standard Action, pode passar no parâmetro valor um nome de ação padrão.

 No caso da propriedade Associated standard action, pode passar no parâmetro valor um nome de ação padrão. Para obtener uma lista completa das ações disponíveis, consulte a seção *Ações padrões* do manual de Desenho. As ações mais comuns também estão disponíveis como constantes no tema *Ação estandarte*.  
  
 Nota de compatibilidade: em versões anteriores, as constantes de tema *Valores para ação padrão associada* se utilizaram no parâmetro valor (Inteiro longo). A partir de 4D v16 R3, são obsoletas, mas ainda são suportadas por compatibilidade.  
  
Note: ISe o item menu corresponder ao título do submenu hierárquico, a ação padrão não será chamada quando o item menu for selecionado

Proprierdade personalizada - Nesta propriedade pode passar qualquer texto personalizado e associar um valor do texto, núemro ou tipo Booleano. Este valor será armazenado com o item e pode ser recuperado usando o comando [GET MENU ITEM PROPERTY](get-menu-item-property.md). Pode usar qualquer string personalziada na propriedade parâmetro, simplesmente tenha certeza de não usar um título usado por 4D (por convenção, propriedades estabelecidas por 4D começam com “4D\_”).

#### Ver também 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[GET MENU ITEM PROPERTY](get-menu-item-property.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 973 |
| Thread-seguro | &check; |
| Proibido no servidor ||


