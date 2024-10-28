---
id: set-menu-bar
title: SET MENU BAR
slug: /commands/set-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU BAR.Syntax-->**SET MENU BAR** ( *barra* {; *processo*}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU BAR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| barra | Integer, Text, Text | &#8594;  | Número ou nome da barra de menu ou referência de Menu |
| processo | Integer | &#8594;  | Número de referência de processo |
| * | Operador | &#8594;  | Guardar estado da barra de menu |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET MENU BAR.Summary-->MENU BAR substitui a barra de menus atual com a especificada por *barra* no processo atual unicamente.<!-- END REF--> No parâmetro *barra*, pode passar o número ou nome da nova barra. Igualmente pode passar uma referência única de menu (tipo [MenuRef](# "Unique ID (16-character alphanumeric) of a menu"), string de 16 caracteres). Quando trabalha com referências, os menus podem ser utilizados como barras de menu e vice-versa (ver a seção *Gestão de Menus*). 

**Nota:** o nome de uma barra de menus pode conter até 31 caracteres e deve ser único.

Se passa o parâmetro opcional *processo* modifica a barra de menus do processo especificado por *barra*.

**Nota:** se passa um parâmetro MenuRef em *barra*, o parâmetro *processo* é inútil e é ignorada.

O parâmetro opcional *\** lhe permite conservar o estado da barra de menus. Se este parâmetro é omitido, MENU BAR reinicializa a barra de menus quando o comando é executado.

Por exemplo, imagine que SET MENU BAR(1) é executado. Depois, vários comandos de menu são desativados utilizando o comando [DISABLE MENU ITEM](disable-menu-item.md "DISABLE MENU ITEM").

Se SET MENU BAR(1) é executado uma segunda vez, desde o mesmo processo ou desde um processo diferente, todos os comandos de menu regressarão a seu estado de ativação inicial.

Se SET MENU BAR(1;\*) é executado, a barra de menus conservará seu estado anterior, e os comandos de menu que estavam inativos permanecerão inativos.

**Nota:** se passa um parâmetro MenuRef em *barra*, o parâmetro *\** é inútil e será ignorada.

Quando um usuário entra ao ambiente Aplicação, é mostrada a primeira barra de menus (Barra #1). Pode mudar esta barra de menus por padrão abrindo o banco e especificando a barra de menus desejada no  ou no método de início associado a um usuário individual.

#### Exemplo 1 

O exemplo a seguir modifica a barra de menus atual pela barra de menus #3 e restabelece o estado dos comandos de menu a seus estados originais: 

```4d
 SET MENU BAR(3)
```

#### Exemplo 2 

O exemplo a seguir modifica a barra de menus atual pela barra de menus chamada “BarraForm1” e salva o estado dos comandos de menus. Comandos de menus que foram desativados previamente aparecerão inativos. 

```4d
 SET MENU BAR("BarraForm1";*)
```

#### Exemplo 3 

O exemplo a seguir substitui a barra de menus atual pela barra de menus #3 enquanto os registros são modificados. Uma vez os registros sejam modificados, a barra de menus #2 é restaurada. O estado dos comandos de menu é conservado: 

```4d
 SET MENU BAR(3)
 ALL RECORDS([Clientes])
 MODIFY SELECTION([Clientes])
 SET MENU BAR(2;*)
```

#### Exemplo 4 

Neste exemplo, criaremos por programação, uma barra de menus incluindo os seguintes menus Arquivo e Edição: 

![](../assets/en/commands/pict17860.en.png)

```4d
  //Método de criação menu Arquivo
 C_STRING(16;MenuArquivo) // MenuArquivo conterá a referência de menu Arquivo
 MenuArquivo:=Create menu
 INSERT MENU ITEM(MenuArquivo;-1;"Meu banco de dados "+Get indexed string(131;29))
 SET MENU ITEM MARK(MenuArquivo;1;Char(18))
 INSERT MENU ITEM(MenuArquivo;-1;"(-")
 INSERT MENU ITEM(MenuArquivo;-1;"Sair do modo Test Application mode/Y")+++
 SET MENU ITEM PROPERTY(MenuArquivo;3;Associated standard action;ak return to design mode)
 INSERT MENU ITEM(MenuArquivo;-1;"(-")
 INSERT MENU ITEM(MenuArquivo;-1;"Preferences")
 SET MENU ITEM PROPERTY(MenuArquivo;5;Associated standard action;ak database settings) //Preferências
 INSERT MENU ITEM(MenuArquivo;-1;"(-")
 INSERT MENU ITEM(MenuArquivo;-1;Get indexed string(131;30))
 SET MENU ITEM PROPERTY(MenuArquivo;7;Associated standard action;ak quit) //Sair
 SET MENU ITEM SHORTCUT(MenuArquivo;7;Character code("Q"))
 
  //Método de criação do menu Procurar e substituir
 C_STRING(16;MenuProcurareSubstituir) //MenuProcurareSubstituir conterá a referência do menu Procurar e substituir
 MenuProcurarSubstituir:=Create menu
 APPEND MENU ITEM(MenuProcurareSubstituir;"Procurar;Procurar Próximo;Procurar anterior;(-;Substituir;Substituir próximo;Substituir anterior")
 SET MENU ITEM SHORTCUT(MenuProcurareSubstituir;1;Character code("F"))
 SET MENU ITEM SHORTCUT(MenuProcurareSubstituir;5;Character code("R"))
 SET MENU ITEM METHOD(MenuProcurareSubstituir;1;"MeuMetodoProcurar")
 
  //Método de criação do menu Edição
 C_STRING(16;MenuEdição) //EditMenu conterá a referência do menu Edição
 MenuEdição:=Create menu
 APPEND MENU ITEM(MenuEdição;"Cortar;Copiar;Colar")
 SET MENU ITEM SHORTCUT(MenuEdição;1;Character code("X"))
 SET MENU ITEM PROPERTY(MenuEdição;1;Associated standard action;ak cut)
 SET MENU ITEM SHORTCUT(MenuEdição;2;Character code("C"))
 SET MENU ITEM PROPERTY(MenuEdição;2;Associated standard action;ak copy)
 SET MENU ITEM SHORTCUT(MenuEdição;3;Character code("V"))
 SET MENU ITEM PROPERTY(MenuEdição;3;Associated standard action;ak paste)
 INSERT MENU ITEM(MenuEdição;-1;"(-")
 INSERT MENU ITEM(MenuEdição;-1;"Procurar e substituir";MenuProcurareSubstituir) // línha que terá o submenu
 
 main_Bar:=Create menu // Criar a barra de menus com os outros menus
 INSERT MENU ITEM(main_Bar;-1;Get indexed string(79;1);MenuArquivo)
 APPEND MENU ITEM(main_Bar;"Edição";MenuEdição)
 
 SET MENU BAR(main_Bar)
```

#### Ver também 

*Gestão de Menus*  