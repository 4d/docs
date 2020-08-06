---
id: analysis
title: Page Analyse d'activités
sidebar_label: Page Analyse d'activités
---

La page Analyse d'activités du CSM permet de visualiser le contenu du fichier d’historique courant. Cette fonction est utile pour analyser l’utilisation d’une base de données ou détecter la ou les opération(s) à l’origine d’erreurs ou de dysfonctionnements. Dans le cadre d’une base de données exploitée en client-serveur, elle permet de vérifier les opérations effectuées par chaque poste client.
> Il est également possible de revenir en arrière parmi les opérations effectuées sur les données de la base. Pour plus d’informations sur ce point, reportez-vous à la section [Page Retour](rollback.md) arrière.

![](assets/fr/MSC/MSC_analysis.png)

Chaque opération élémentaire enregistrée dans le fichier d’historique apparaît sous forme d’une ligne. Les colonnes fournissent diverses informations concernant l’opération. Vous pouvez réorganiser les colonnes comme vous le souhaitez en cliquant sur leur en-tête.

Les informations affichées permettent d’identifier la source et le contexte de chaque opération :

- **Operation**: Sequence number of operation in the log file.
- **Action**: Type of operation performed on the data. Cette colonne peut contenir les opérations suivantes :
    - Ouverture du fichier de données : ouverture d’un fichier de données.
    - Fermeture du fichier de données : fermeture du fichier de données ouvert.
    - Création d’un contexte : création d’un process définissant un contexte d’exécution.
    - Fermeture d’un contexte : fermeture d’un process.
    - Ajout : création et stockage d’un enregistrement.
    - Ajout d’un BLOB : stockage d’un BLOB dans un champ BLOB.
    - Suppression : suppression d’un enregistrement.
    - Modification : modification d’un enregistrement.
    - Début de transaction : transaction démarrée.
    - Validation de transaction : transaction validée.
    - Annulation de transaction : transaction annulée.
    - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. Taille : taille en octets des données traitées par l’opération.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **System User**: System name of the user that performed the operation. En version client-serveur, il s’agit du nom de la machine du poste client. En version monoposte, le nom de session de l’utilisateur s'affiche.
- **4D User**: 4D user name of the user that performed the operation. Si un alias est défini pour l'utilisateur, l'alias s'affiche à la place du nom d'utilisateur 4D.
- **Values**: Values of fields for the record in the case of addition or modification. Les valeurs sont séparées par des “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected database (named by default dataname.journal). Le bouton **Parcourir...** vous permet de sélectionner et d’ouvrir un autre fichier d’historique de la base. The **Export...** button can be used to export the contents of the file as text.


