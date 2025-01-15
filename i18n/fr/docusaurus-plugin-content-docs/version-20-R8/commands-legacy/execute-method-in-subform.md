---
id: execute-method-in-subform
title: EXECUTE METHOD IN SUBFORM
slug: /commands/execute-method-in-subform
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Syntax-->**EXECUTE METHOD IN SUBFORM** ( *objetSousForm* ; *nomMéthode* {; *retour* {; *param*} {; *param2* ; ... ; *paramN*}} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objetSousForm | Text | &#8594;  | Nom de l’objet sous-formulaire |
| nomMéthode | Object, Text | &#8594;  | Nom de la méthode projet à exécuter |
| retour | *, Variable | &#8594;  | * si la méthode ne retourne pas de valeur |
| &#8592; | Valeur retournée par la méthode |
| param | Expression | &#8594;  | Paramètre(s) à passer à la méthode |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Summary-->La commande **EXECUTE METHOD IN SUBFORM** permet d’exécuter le code désigné dans *formule* dans le contexte de l’objet de sous-formulaire *objetSousForm*.<!-- END REF--> 

Le code appelé peut recevoir de 1 à N paramètres dans *param* et retourner une valeur dans *retour*. Passez \* dans le paramètre *retour* si le code ne retourne pas de paramètres. 

Dans *formule*, le code 4D à exécuter dans le contexte de *subformObject* doit être désigné. Vous pouvez passer soit :

* un objet **formula** (voir *Objets Formula*). Les objets formula peuvent encapsuler toute expression exécutable, y compris les fonctions et les méthodes projet ;
* une **chaîne** contenant le nom d'une méthode projet.

Le contexte d’exécution est préservé dans le code appelé, ce qui signifie que le formulaire courant et l’événement formulaire courant restent définis. Si le sous-formulaire provient d’un composant, une méthode ou fonction appelée doit appartenir au composant et disposer de la propriété "Partagée entre les composants et la base hôte".

Cette commande doit être appelée dans le contexte du formulaire parent (contenant l’objet *objetSousForm*), par exemple via sa méthode formulaire.

**Note :** Le code n'est pas exécuté si *objetSousForm* ne se trouve pas dans la page courante ou n'est pas encore instancié.

#### Exemple 1 

Soit le formulaire "ContactDétail" utilisé comme sous-formulaire dans le formulaire parent "Société". L’objet sous-formulaire qui contient le formulaire ContactDétail est nommé "ContactSousForm". Imaginons que nous souhaitions modifier l’apparence de certains éléments du sous-formulaire en fonction de la valeur de champ(s) de la société (par exemple, "nomcontact" doit passer en rouge lorsque \[Société\]Ville="New York" et en bleu lorsque \[Société\]Ville="San Diego"). Ce mécanisme est mis en oeuvre via la méthode SetToColor. Pour pouvoir obtenir ce résultat, la méthode SetToColor ne peut pas être appelée directement depuis le process de l’événement formulaire "Sur chargement" du formulaire parent Société car l’objet "nomcontact" n’appartient pas au formulaire courant, mais au formulaire affiché dans l’objet sous-formulaire "ContactSousForm". La méthode doit donc être exécutée à l’aide de **EXECUTE METHOD IN SUBFORM** pour pouvoir fonctionner correctement.

```4d
 Case of
    :(Form event code=On Load)
       Case of
          :([Société]Ville="New York")
             $Color:=$Red
          :([Société]Ville="San Diego")
             $Color:=$Blue
          Else
             $Color:=$Black
       End case
       EXECUTE METHOD IN SUBFORM("ContactSousForm";Formula(SetToColor);*;$Color)
 End case
```

#### Exemple 2 

Vous développez une base de données qui sera utilisée comme composant. Elle comporte un formulaire projet partagé (nommé par exemple Calendrier) contenant des *variables dynamiques* ainsi qu’une méthode projet publique permettant de régler le calendrier : SetCalendarDate(varDate).   
Si cette méthode était utilisée directement dans la méthode du formulaire Calendrier, vous pourriez l’appeler directement dans l’événement "Sur chargement" : 

```4d
 SetCalendarDate(Current date)
```

 Mais, dans le contexte de la base hôte, imaginons qu’un formulaire projet contienne deux sous-formulaires "Calendrier", dans des objets sous-formulaire appelés "Cal1" et "Cal2". Vous devez régler la date de Cal1 au 01/01/10 et celle de Cal2 au 05/05/10\. Vous ne pouvez pas appeler directement SetCalendarDate car la méthode ne "saura" pas à quels formulaire et variables elle devra s’appliquer. Vous devez donc l’appeler via le code suivant : 

```4d
 EXECUTE METHOD IN SUBFORM("Cal1";Formula(SetCalendarDate);*;!01/01/20!)
 EXECUTE METHOD IN SUBFORM(SetCalendarDate);*;!05/05/20!)
```

#### Variables et ensembles système 

Si cette commande est exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0.


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1085 |
| Thread safe | &cross; |
| Modifie les variables | OK |


