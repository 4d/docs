---
id: object-get-pointer
title: OBJECT Get pointer
slug: /commands/object-get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get pointer.Syntax-->**OBJECT Get pointer** {( *sélecteur* {; *nomObjet* {; *nomSousFormulaire*}})} : Pointer<!-- END REF-->
<!--REF #_command_.OBJECT Get pointer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#8594;  | Catégorie d’objet |
| nomObjet | Text | &#8594;  | Nom d'objet |
| nomSousFormulaire | Text | &#8594;  | Nom d'objet sous-formulaire |
| Résultat | Pointer | &#8592; | Pointeur sur la variable de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get pointer.Summary-->La commande **OBJECT Get pointer** retourne un pointeur vers la variable d’un objet de formulaire.<!-- END REF--> 

Cette commande permet de désigner différents types d'objets en fonction du paramètre *sélecteur*. Vous pouvez passer dans ce paramètre l’une des constantes suivantes (placées dans le thème *Objets de formulaire (Accès)*) :

* Object current ou *sélecteur* omis : Si vous omettez le paramètre *sélecteur* ou passez ce sélecteur, la commande retourne un pointeur vers la variable associée à l’objet courant (objet dont la méthode est en cours d’exécution).  
**Note :** Ce fonctionnement équivaut strictement à celui de la commande historique [Self](self.md). La commande [Self](self.md) est conservée pour des raisons de compatibilité uniquement.
* Object with focus : Si vous passez ce sélecteur, la commande retourne un pointeur vers la variable associée à l’objet ayant le focus dans le formulaire. Les deux derniers paramètres optionnels sont ignorés s’ils sont passés.  
**Note :** Ce fonctionnement équivaut strictement à celui de la commande [Focus object](focus-object.md). La commande [Focus object](focus-object.md) est obsolète à compter de 4D v12\.
* Object subform container : Si vous passez ce sélecteur, la commande retourne un pointeur vers la variable liée au conteneur du sous-formulaire. Les deux derniers paramètres optionnels sont ignorés s’ils sont passés. Ce sélecteur ne peut donc être utilisé que dans le contexte d’un formulaire utilisé comme sous-formulaire, afin d’accéder à la variable liée à l’objet conteneur.
* Object named : Si vous passez ce sélecteur, vous devez également passer le deuxième paramètre, *nomObjet*. Dans ce cas, la commande retourne un pointeur vers la variable associée à l’objet dont vous avez passé le nom dans ce paramètre.  
**Note :** Si *nomObjet* correspond à un sous-formulaire et que l’option "Sous-formulaire liste" est cochée, la commande retourne un pointeur vers la table du sous-formulaire si une table source est définie et Nil dans le cas contraire.

Le paramètre optionnel *nomSousFormulaire* vous permet de récupérer un pointeur vers un objet *nomObjet* n’appartenant pas au contexte courant, c’est-à-dire au formulaire parent. Pour pouvoir utiliser ce paramètre, vous devez avoir passé le sélecteur Object named.   
 Lorsque le paramètre *nomSousFormulaire* est passé, la commande **OBJECT Get pointer** recherche dans un premier temps l’objet sous-formulaire nommé *nomSousFormulaire* dans le formulaire courant, puis recherche à l’intérieur de ce sous-formulaire un objet nommé *nomObjet*. Si cet objet est trouvé, elle retourne un pointeur vers la variable de cet objet.

#### Exemple 

Soit un formulaire "SF" utilisé deux fois comme sous-formulaire dans le même formulaire parent. Les objets sous-formulaires sont nommés "SF1" et "SF2". Le formulaire "SF" contient un objet nommé *ValeurCourante*. Dans l’événement "Sur chargement" de la méthode formulaire du formulaire parent, nous souhaitons initialiser l’objet *ValeurCourante* de SF1 à "Janvier" et celui de SF2 "Février" : 

```4d
 var $Ptr : Pointer
 $Ptr:=OBJECT Get pointer(Object named;"ValeurCourante";"SF1")
 $Ptr->:="Janvier"
 $Ptr:=OBJECT Get pointer(Object named;"ValeurCourante";"SF2")
 $Ptr->:="Février"
```

#### Voir aussi 

[Focus object](focus-object.md)  
[OBJECT Get name](object-get-name.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  
*Objets (Formulaires)*  
*Objets de formulaire (Accès)*  
[Self](self.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1124 |
| Thread safe | &check; |
| Interdite sur le serveur ||


