---
id: restore
title: Restitution
---

4D vous permet de récupérer l’intégralité des données d’une base en cas d’incident, quelles que soient ses causes. Deux catégories principales d’incidents peuvent se produire :

- L’arrêt inopiné de la base pendant son exploitation. Cet incident peut se produire à cause d’une coupure de courant, la panne d’un élément du système, etc. Dans ce cas, en fonction de l’état courant du cache de données au moment de l’incident, la récupération de la base peut nécessiter différentes opérations :
  - Si le cache était vide, la base s’ouvre normalement. Toutes les modifications apportées à la base ont été enregistrées. Ce cas ne nécessite aucune opération particulière.
  - Si le cache contenait des opérations, le fichier de données est intact mais il est nécessaire d’intégrer le fichier d’historique courant.
  - Si le cache était en cours d’écriture, le fichier de données est probablement endommagé. Il est nécessaire de restituer la dernière sauvegarde et d’intégrer le fichier d’historique courant.

- La perte d’un ou plusieurs fichier(s) de la base. Cet incident peut être causé par des secteurs défectueux sur le disque contenant la base, un virus, une erreur de manipulation, etc. Il est nécessaire de restituer la dernière sauvegarde puis d’intégrer éventuellement l’historique courant. Pour savoir si une base a été endommagée à la suite d’un incident, il suffit de la relancer avec 4D. Le programme effectue un auto-diagnostic et précise les opérations de réparation à effectuer. En mode automatique, ces opérations sont effectuées directement, sans intervention de l’utilisateur. Si une stratégie de sauvegarde régulière a été mise en place, les outils de récupération de 4D vous permettront (dans la plupart des cas) de retrouver la base dans l’état exact où elle se trouvait avant l’incident.

> 4D peut lancer automatiquement des procédures de récupération des bases après incident. Ces mécanismes sont gérés à l’aide de deux options accessibles dans la Page **Sauvegarde/Sauvegarde & et Restitution** de la fenêtre des Propriétés de la base. Pour plus d'informations, reportez-vous au paragraphe [Restitution automatique](settings.md#automatic-restore)  
> . Si l'incident résulte d'une opération inappropriée sur effectuée sur les données (suppression d'un enregistrement par exemple), vous pouvez tenter de réparer la base en utilisant la fonction de "retour arrière" dans le fichier d'historique. Cette fonction est accessible dans la Page [Retour arrière](MSC/rollback.md) du CSM.

## Restitution manuelle d’une sauvegarde (dialogue standard)

Vous pouvez restituer manuellement le contenu d’une archive générée par le module de sauvegarde. Une restitution manuelle peut être nécessaire par exemple pour restituer la totalité du contenu d’une archive (fichiers de structure et/ou fichiers joints inclus) ou à des fins de recherche sur des archives. La restitution manuelle peut éventuellement s’accompagner de l’intégration de l’historique courant.

La restitution manuelle des sauvegardes peut être réalisée soit via une boîte de dialogue standard d’ouverture de document, soit via la page [“Restitution”](MSC/restore) du Centre de sécurité et de maintenance (CSM). La restitution via une boîte de dialogue standard permet de restituer n’importe quelle archive. Restoring via the MSC provides more options and allows the archive contents to be previewed.

Pour restituer manuellement une sauvegarde via une boîte de dialogue standard :

1. Lancez l’application 4D et choisissez la commande **Restituer...** dans le menu **Fichier**. Il n’est pas obligatoire qu’une base de données soit ouverte. OR Execute the `RESTORE` command from a 4D method. Une boîte de dialogue standard d’ouverture de fichiers apparaît.
2. Désignez le fichier de sauvegarde (.4bk) ou le fichier de sauvegarde de l’historique (.4bl) à restituer et cliquez sur **Ouvrir**. Un boîte de dialogue apparaît, vous permettant de désigner l’emplacement auquel vous souhaitez que les fichiers soient restitués . Par défaut, 4D restitue les fichiers dans un dossier nommé *“Nomarchive”* (sans extension) placé à côté de l’archive. Vous pouvez afficher le chemin :

![](../assets/en/Backup/backup07.png)

Vous pouvez également cliquer sur le bouton **[...]** et indiquer un autre emplacement.
3. Cliquez sur le bouton **Restituer**. 4D extrait tous les fichiers de la sauvegarde à l’emplacement défini. Si le fichier d’historique courant ou un fichier de sauvegarde d’historique ayant le même numéro que le fichier de sauvegarde est stocké dans le même dossier, 4D examine son contenu. S’il contient des opérations non présentes dans le fichier de données, le programme propose de l’intégrer. L’intégration est effectuée automatiquement si l’option **d’intégration automatique de l’historique** est cochée (cf. paragraphe [Restitution automatique](settings.md#automatic-restore)). (Facultatif) Cliquez sur **OK** pour intégrer le fichier d’historique dans la base restituée. Si la restitution et l’intégration se sont déroulées correctement, 4D affiche une boîte de dialogue indiquant que l’opération a réussi.
5. Cliquez sur **OK**. Le dossier d’arrivée est affiché. Lors de la restitution, 4D place tous les fichiers sauvegardés dans ce dossier, quelle que soit la position des fichiers originaux sur le disque au moment de la sauvegarde. De cette façon, vous retrouverez plus facilement vos fichiers.

## Restitution manuelle d’une sauvegarde (CSM)

La [page Restitution](MSC/restore.md) du Centre de sécurité et de maintenance vous permet de restituer manuellement une archive de la base de données courante.

## Intégration manuelle de l’historique

Si vous n’avez pas coché l’option d’intégration automatique du fichier d’historique dans la page Restitution du CSM (cf. [Intégration successive de plusieurs fichiers d’historiques](MSC/restore.md#successive-intergration-of-several-data-log-files)), une boîte de dialogue d’alerte apparaît à l’ouverture de la base lorsque 4D constate que le fichier d’historique contient plus d’opérations qu’il n’en a été effectué dans la base.

![](../assets/en/Backup/backup08.png)

> Pour que ce mécanisme fonctionne, 4D doit être en mesure d’accéder au fichier d’historique à son emplacement courant.

Vous pouvez choisir d’intégrer ou non les données de l’historique courant. Ne pas intégrer l’historique courant permet notamment d’éviter de reproduire des erreurs effectuées sur les données.
