---
id: clickcount
title: Clickcount
slug: /commands/clickcount
displayed_sidebar: docs
---

<!--REF #_command_.Clickcount.Syntax-->**Clickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Clickcount.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre de clics consécutifs |

<!-- END REF-->

#### Description 

<!--REF #_command_.Clickcount.Summary-->La commande **Clickcount** retourne, dans le contexte d'un événement clic, le nombre de fois que l'utilisateur a cliqué de manière répétée avec le même bouton de la souris.<!-- END REF--> Typiquement, la commande retourne 2 pour un double-clic. 

Cette commande vous permet notamment de détecter des double-clics dans les en-têtes ou les pieds des list box, et également de gérer des séquences de triple-clics ou plus.

Chaque clic avec un bouton de la souris génère un événement clic séparé. Par exemple, si un utilisateur effectue un double-clic, un événement est généré pour le premier clic, dans lequel **Clickcount** retourne 1 ; puis un autre événement est généré pour le second clic, dans lequel **Clickcount** retourne 2.

Cette commande peut uniquement être appelée dans le contexte de l'événement formulaire On Clicked, On Header Click ou On Footer Click . Par conséquent, il est nécessaire de vérifier en mode Développement que l'événement correspondant a bien été sélectionné dans les propriétés du formulaire et/ou pour l'objet concerné. 

Lorsque les deux événements formulaire On Clicked et On Double Clicked sont activés, la séquence suivante est retournée par **Clickcount** :

* 1 dans l'événement On Clicked
* 2 dans l'événement On Double Clicked
* 2+n dans l'événement On Clicked

#### Exemple 1 

La structure de code suivante peut être placée dans un en-tête de list box pour gérer les clics simples et les double-clics :

```4d
 Case of
    :(Form event code=Sur clic entête)
       Case of
          :(Clickcount=1)
             ... //simple clic
          :(Clickcount=2)
             ... //double clic
       End case
 End case
```

#### Exemple 2 

Les libellés ne sont pas saisissables mais ils peuvent le devenir après un triple-clic. Si vous souhaitez permettre aux utilisateurs de modifier les libellés, vous pouvez écrire la méthode objet suivante :

```4d
 If(Form event code=On Clicked)
    Case of
       :(Clickcount=3)
          OBJECT SET ENTERABLE(*;"Label";True)
          EDIT ITEM(*;"Label")
    End case
 End if
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1332 |
| Thread safe | &cross; |


