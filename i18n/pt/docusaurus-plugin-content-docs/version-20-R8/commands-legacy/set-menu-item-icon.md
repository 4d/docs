---
id: set-menu-item-icon
title: SET MENU ITEM ICON
slug: /commands/set-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM ICON.Syntax-->**SET MENU ITEM ICON** ( *menu* ; *menuItem* ; *iconeRef* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM ICON.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de referência ou Número de Menu |
| menuItem | Integer | &#8594;  | Número do item de menu ou -1 para o último item adicionado ao menu |
| iconeRef | Text, Integer | &#8594;  | Nome ou número de imagem a ser associado com o item de menu |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM ICON.Summary-->O comando **SET MENU ITEM ICON** permite modificar o ícone associado à linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF-->  
Pode passar -1 em *menuItem* para especificar o último elemento adicionado a *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passas uma referência de menu, o comando aplicará a todas as instâncias do menu em todos os processos. Neste caso, se passar o parâmetro *processo* é ignorado. Se passa um número de menu, o comando considerará o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

Em *iconeRef*, pode passar o nome ou o número da imagem da biblioteca a utilizar como ícone. Pode utilizar uma imagem da biblioteca ou uma referência de imagem.  
  
* Referência de arquivo de Imagem: dois padrões são compatíveis:  
   * **path:<filesystem>** (*recomendado*), por exemplo "path:/RESOURCES/icon.png". Para saber mais, veja o parágrafo *Nomes de rotas de Filesystem*.  
   * **file:<relativePathname>** (*obsoleto*), Pòr exemplo "file:icon.png". A imagem deve estar localizada na pasta **Recursos** do banco de dados.
* Biblioteca de imagem (apenas banco de dados binário): Pode passar ou o nome ou o número da imagem. É geralmente preferível usar o número já que números são identidades únicas, o que não é o caso com os nomes.

**Nota:** Uso de uma rota de arquivo de imagem é recomendado já que a Biblioteca de Imagem está obsoleta e não é compatível com projetos de banco de dados 4D. Além disso, o padrão *file:<relativePathname>* está obsoleto, usar o padrão *path:<filesystem>* é recomendado.

#### Exemplo 

Uso de uma imagem localizada na pasta Recursos do banco de dados:

```4d
 SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")
```

#### Ver também 

[GET MENU ITEM ICON](get-menu-item-icon.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 984 |
| Thread-seguro | &cross; |


