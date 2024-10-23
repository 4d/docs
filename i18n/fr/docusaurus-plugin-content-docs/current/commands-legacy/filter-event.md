---
id: filter-event
title: FILTER EVENT
slug: /commands/filter-event
displayed_sidebar: docs
---

<!--REF #_command_.FILTER EVENT.Syntax-->**FILTER EVENT**<!-- END REF-->
<!--REF #_command_.FILTER EVENT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FILTER EVENT.Summary-->**FILTER EVENT** doit être appelée à l'intérieur d'une méthode de gestion d'événements installée par [ON EVENT CALL](on-event-call.md).<!-- END REF-->

Lorsqu'une méthode de gestion d'événements appelle la commande **FILTER EVENT**, l'événement courant n'est pas passé à 4D.

Cette commande vous permet d'effacer l'événement courant (i.e. clic, frappe clavier) de la séquence d'événements, de manière à ce que 4D n'effectue pas de traitement sur l'événement que vous provoquez dans la méthode de gestion d'événements.

**ATTENTION :** Evitez de créer une méthode de gestion d'événement appelant uniquement **FILTER EVENT** car TOUS les événements vont être ignorés par 4D. Si vous vous retrouvez dans un tel cas, vous pouvez sortir de la méthode en tapant **Ctrl**+**Maj**+**Retour Arrière** (sous Windows) ou **Commande**+**Option**+**Maj**+**Contrôle**+**Retour Arrière** (sous Mac OS). Dans ce cas, le process de gestion d'événement est converti en process normal n'interceptant plus aucun événement.

**Cas particulier :** La commande **FILTER EVENT** peut également être utilisée au sein d’une méthode de formulaire sortie standard, lorsque le formulaire est affiché par l'intermédiaire des commandes [DISPLAY SELECTION](display-selection.md) ou [MODIFY SELECTION](modify-selection.md). Dans ce cas précis, la commande **FILTER EVENT** permet de filtrer les double-clics sur les enregistrements (et ainsi, exécuter d'autres actions que l'ouverture des enregistrements en mode page).  
Pour cela, il vous suffit de placer dans la méthode du formulaire sortie les lignes suivantes :

```4d
 If(Form event code=Sur double clic souris)
    FILTER EVENT
    ... //Traiter le double-clic
 End if
```

#### Exemple 

Référez-vous à l'exemple d'[ON EVENT CALL](on-event-call.md).

#### Voir aussi 

[ON EVENT CALL](on-event-call.md)  