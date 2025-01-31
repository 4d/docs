---
id: append-menu-item
title: APPEND MENU ITEM
slug: /commands/append-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.APPEND MENU ITEM.Syntax-->**APPEND MENU ITEM** ( *menu* ; *libelléLigne* {; *sousMenu* {; *process* {; *}}} )<!-- END REF-->
<!--REF #_command_.APPEND MENU ITEM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Numéro de menu ou Référence de menu |
| libelléLigne | Text | &#8594;  | Libellé du ou des nouvelle(s) ligne(s) de menu |
| sousMenu | Text | &#8594;  | Référence du sous-menu associé à la ligne |
| process | Integer | &#8594;  | Numéro de référence du process |
| * | Opérateur | &#8594;  | Si passé : considérer les métacaractères comme des caractères standard |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPEND MENU ITEM.Summary-->La commande **APPEND MENU ITEM**  ajoute une ou plusieurs ligne(s) au menu dont vous avez passé le numéro ou la référence dans *menu.<!-- END REF-->*  
  
Si vous omettez le paramètre *process*, **APPEND MENU ITEM** s'applique à la barre de menus du process courant. Sinon, **APPEND MENU ITEM** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

Si vous ne passez pas le paramètre *\**, **APPEND MENU ITEM** vous permet d'ajouter une ou plusieurs lignes de menu en un seul appel. Vous définissez les lignes à ajouter à l'aide du paramètre *libelléLigne*, de la manière suivante :

* Chaque ligne est séparée des autres par un point-virgule ";", *"ligne1;ligne2;ligne3".*
* Pour inactiver une ligne, placez une parenthèse ouvrante "*(*" dans son libellé.
* Pour définir une ligne de séparation, passez la valeur "-" ou *"*(-*"* en tant que libellé.
* Pour définir le style de caractères d'une ligne, placez dans son libellé le symbole inférieur à "*<*" suivi d'une lettre. Voici les différents codes :  

| <B | Gras     |  
| -- | -------- |  
| <I | Italique |  
| <U | Souligné |
* Pour associer une coche à une ligne, insérez dans son libellé un point d'exclamation "*!*" suivi du caractère que vous voulez utiliser comme coche. Sous Mac OS, le caractère est affiché ; sous Windows, une coche standard est affichée (quel que soit le caractère passé).
* Pour associer une icône à une ligne, insérez dans son libellé un accent circonflexe "^" suivi d'un caractère dont le code plus 208 représente un numéro de ressource d'icône Mac OS.
* Pour ajouter un raccourci clavier à une ligne, insérez dans son libellé une barre oblique "*/*" suivie du caractère de raccourci.
* (**A compter de 4D v16 R3**) Si l'élément est associé à une action standard, vous pouvez passer la constante ak standard action title dans le paramètre *libelléLigne* afin d'utiliser automatiquement le nom d'action localisé et les informations de contexte (s'il y en a), par exemple "Annuler <action précédente>".

**Note :** Utilisez les menus avec un nombre "raisonnable" de lignes. Si, par exemple, vous voulez afficher plus de 50 lignes, envisagez plutôt d'employer une zone de défilement dans un formulaire.

Si vous passez le paramètre *\**, les caractères "spéciaux" inclus dans les libellés des lignes (*; ( !*...) seront considérés comme des caractères standard et non comme des métacaractères. Ce principe vous permet de créer des lignes avec un libellé tel que "**Copier (spécial)...**" ou "**Chercher/Remplacer..."**. A noter que lorsque le paramètre *\** est passé, vous ne pouvez pas créer plusieurs lignes en un seul appel, le caractère ";" étant considéré comme un caractère standard. 

**Note :** Les commandes [GET MENU ITEMS](get-menu-items.md) et [Get menu item](get-menu-item.md) retourneront ou non les métacaractères d’un libellé en fonction de son mode de création : s’il a été créé avec l’option *\**, les métacaractères seront retournés en tant que caractères standard.

Le paramètre facultatif *sousMenu* vous permet de désigner un menu comme ligne ajoutée et donc de définir un sous-menu hiérarchique. Vous devez passer dans ce paramètre une référence de menu (chaîne de type [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) désignant un menu créé par exemple à l’aide de la commande [Create menu](create-menu.md). Si la commande ajoute plusieurs lignes de menus, le sous-menu est associé à la première ligne.

**Important :** Les nouvelles lignes n'ont pas de méthodes ou d'actions associées. Vous devez leur associer une action ou une méthode via les commandes [SET MENU ITEM PROPERTY](set-menu-item-property.md) ou [SET MENU ITEM METHOD](set-menu-item-method.md) ou encore les gérer à partir d'une méthode formulaire qui utilise la fonction [Menu selected](menu-selected.md).

#### Exemple 

L'exemple suivant ajoute les noms des polices de caractères disponibles dans un menu **Polices** qui, dans cet exemple, est le sixième menu de la barre de menus courante :

```4d
  // Dans la méthode base Sur ouverture
  // La liste des polices est chargée et les libellés construits
 FONT LIST(<>asPolicesDispo)
 <>atPoliceCmdMenus:=""
 For($vlPolice;1;Size of array(<>asPolicesDispo))
    <>atPoliceCmdMenus:=<>atPoliceCmdMenus+";"+<>asPolicesDispo{$vlPolice}
 End for
```

Ensuite, dans toute méthode formulaire ou projet, vous pouvez écrire :

```4d
 APPEND MENU ITEM(6;<>atPoliceCmdMenus)
```

#### Voir aussi 

[DELETE MENU ITEM](delete-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 411 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


