---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Peut être appelé par                            | Définition                       |
| ---- | ----------------------------------------------- | -------------------------------- |
| 53   | [Zones Web](../FormObjects/webArea_overview.md) | Une fenêtre pop-up a été bloquée |

<details><summary>Historique</summary>

| Version | Modifications     |
| ------- | ----------------- |
| v19 R5  | Triggered on drop |
</details>

## Description

Cet événement est généré lorsque l'ouverture d'une fenêtre pop-up est bloquée par la zone Web. Les zones Web de 4D ne permettent pas l'ouverture de fenêtres contextuelles.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.

Cet événement est également déclenché après une opération de déposer dans la zone Web (avec des [moteurs](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) système Windows et intégrés) si l'option [Glisser Déposer](../FormObjects/webArea_overview.md#user-interface) est également activée pour la zone. Vous pouvez accepter l'action de déposer en appelant :

```4d
//méthode objet zone web
If (FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  
    // ou UrlVariable:=WA Get last filtered URL(*; "WebArea")  
    // où UrlVariable est la variable URL associé à la zone web
End if 
```


### Voir également
[`On Open External Link`](onOpenExternalLink.md)