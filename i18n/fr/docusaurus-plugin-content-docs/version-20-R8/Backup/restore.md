---
id: restore
title: Restitution
---

4D vous permet de récupérer l’intégralité des données d’une application en cas d’incident, quelles que soient ses causes. Deux catégories principales d’incidents peuvent se produire :

- L’arrêt inopiné de l'application pendant son exploitation. Cet incident peut se produire à cause d’une coupure de courant, la panne d’un élément du système, etc. Dans ce cas, en fonction de l’état courant du cache de données au moment de l’incident, la récupération de l'application peut nécessiter différentes opérations :
  - Si le cache était vide, l'application s’ouvre normalement. Toutes les modifications apportées à l'application ont été enregistrées. Ce cas ne nécessite aucune opération particulière.
  - Si le cache contenait des opérations, le fichier de données est intact mais il est nécessaire d’intégrer le fichier d’historique courant.
  - Si le cache était en cours d’écriture, le fichier de données est probablement endommagé. Il est nécessaire de restituer la dernière sauvegarde et d’intégrer le fichier d’historique courant.

- La perte de fichier(s) de l'application. Cet incident peut être causé par des secteurs défectueux sur le disque contenant l'application, un virus, une erreur de manipulation, etc. Il est nécessaire de restituer la dernière sauvegarde puis d’intégrer éventuellement l’historique courant. Pour savoir si une application a été endommagée à la suite d’un incident, il suffit de la relancer avec 4D. Le programme effectue un auto-diagnostic et précise les opérations de réparation à effectuer. En mode automatique, ces opérations sont effectuées directement, sans intervention de l’utilisateur. Si une stratégie de sauvegarde régulière a été mise en place, les outils de récupération de 4D vous permettront (dans la plupart des cas) de retrouver l'application dans l’état exact où elle se trouvait avant l’incident.

> 4D peut lancer automatiquement des procédures de récupération des applications après incident. Ces mécanismes sont gérés à l’aide de deux options accessibles dans la Page **Sauvegarde/Sauvegarde & et Restitution** de la fenêtre des Propriétés. Pour plus d'informations, reportez-vous au paragraphe [Restitution automatique](settings.md#restitution-automatique).\
> Si l'incident résulte d'une opération inappropriée effectuée sur les données (suppression d'un enregistrement par exemple), vous pouvez tenter de réparer le fichier de données à l'aide de la fonction "rollback" du fichier d'historique. Cette fonction est accessible dans la Page [Retour arrière](MSC/rollback.md) du CSM.

## Restitution manuelle d’une sauvegarde (dialogue standard)

Vous pouvez restituer manuellement le contenu d’une archive générée par le module de sauvegarde. Une restitution manuelle peut être nécessaire par exemple pour restituer la totalité du contenu d’une archive (fichiers de structure et/ou fichiers joints inclus) ou à des fins de recherche sur des archives. La restitution manuelle peut éventuellement s’accompagner de l’intégration de l’historique courant.

La restitution manuelle des sauvegardes peut être réalisée soit via une boîte de dialogue standard d’ouverture de document, soit via la page [“Restitution”](../MSC/restore.md) du Centre de sécurité et de maintenance (CSM). La restitution via une boîte de dialogue standard permet de restituer n’importe quelle archive. En revanche, seules les archives associées à l'application ouverte peuvent être restituées.

Pour restituer manuellement une application via une boîte de dialogue standard :

1. Lancez l’application 4D et choisissez la commande **Restituer...** dans le menu **Fichier**.
   Il n'est pas obligatoire qu'un projet d'application soit ouvert.
   OR Execute the `RESTORE` command from a 4D method.
   Une boîte de dialogue standard d’ouverture de fichiers apparaît.
2. Désignez le fichier de sauvegarde (.4bk) ou le fichier de sauvegarde de l’historique (.4bl) à restituer et cliquez sur **Ouvrir**.
   Un boîte de dialogue apparaît, vous permettant de désigner l’emplacement auquel vous souhaitez que les fichiers soient restitués . Par défaut, 4D restitue les fichiers dans un dossier nommé _“Nomarchive”_ (sans extension) placé à côté de l’archive. Vous pouvez afficher le chemin :

![](../assets/en/Backup/backup07.png)

Vous pouvez également cliquer sur le bouton **[...]** et indiquer un autre emplacement.
3. Cliquez sur le bouton **Restituer**.
4D extrait tous les fichiers de la sauvegarde à l’emplacement défini.
Si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme propose de l’intégrer. L’intégration est effectuée automatiquement si l’option **d’intégration automatique de l’historique** est cochée (cf. paragraphe [Restitution automatique](settings.md#automatic-restore)).

(Facultatif) Cliquez sur **OK** pour intégrer le fichier d’historique dans l'application restituée.
Si la restitution et l’intégration se sont déroulées correctement, 4D affiche une boîte de dialogue indiquant que l’opération a réussi.
5. Cliquez sur **OK**.

Le dossier d’arrivée est affiché. Lors de la restitution, 4D place tous les fichiers sauvegardés dans ce dossier, quelle que soit la position des fichiers originaux sur le disque au moment de la sauvegarde. De cette façon, vous retrouverez plus facilement vos fichiers.

> Tout contenu lié au fichier de données (dossier files et `Settings`) est automatiquement restauré dans un sous-dossier `Data`du dossier de destination.

## Restitution manuelle d’une sauvegarde (CSM)

La [page Restitution](MSC/restore.md) du Centre de sécurité et de maintenance (CSM) vous permet de restituer manuellement une archive de l'application courante.

## Intégration manuelle de l’historique

Si vous n’avez pas coché l’option d’intégration automatique du fichier d’historique dans la page Restitution du CSM (cf. [Intégration successive de plusieurs fichiers d’historique](MSC/restore.md#successive-intergration-of-several-data-log-files)), une boîte de dialogue d’alerte apparaît à l’ouverture de l'application lorsque 4D constate que le fichier d’historique contient plus d’opérations qu’il n’en a été effectué dans le fichier de données.

![](../assets/en/Backup/backup08.png)

> Pour que ce mécanisme fonctionne, 4D doit être en mesure d’accéder au fichier d’historique à son emplacement courant.

Vous pouvez choisir d’intégrer ou non les données de l’historique courant. Ne pas intégrer l’historique courant permet notamment d’éviter de reproduire des erreurs effectuées sur les données.
