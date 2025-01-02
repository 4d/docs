---
id: mail-convert-to-mime
title: MAIL Convert to MIME
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R4   | Ajout         |
| 17 R5   | Modifié       |

</details>

<!-- REF #_command_.MAIL Convert to MIME.Syntax -->**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text<!-- END REF -->

<!-- REF #_command_.MAIL Convert to MIME.Params -->

| Paramètres | Type   |     | Description                              |
| ---------- | ------ | :-: | ---------------------------------------- |
| mail       | Object |  →  | Objet email                              |
| options    | Object |  →  | Options d'encodage et de charset du mail |
| Résultat   | Text   |  ←  | Objet email converti en MIME             |

<!-- END REF -->

#### Description

La commande `MAIL Convert to MIME` <!-- REF #_command_.MAIL Convert to MIME.Summary -->convertit un objet email en texte MIME<!-- END REF -->. Cette commande est appelée en interne par [SMTP_transporter.send()](../API/SMTPTransporterClass.md#send) pour formater l'objet courriel avant de l'envoyer. Elle peut être utilisée pour analyser le format MIME de l'objet.

Dans *mail*, passez les éléments du contenu et de la structure de l'email à convertir. Cela inclut des informations telles que les adresses e-mail (expéditeur et destinataire(s)), le contenu de l'e-mail lui-même et son type d'affichage.

> Le format des objets Email de 4D suit la [spécification JMAP](https://jmap.io/spec-mail.html).

Dans *options*, vous pouvez configurer l'encodage et le charset du mail. Les propriétés suivantes sont disponibles :

| Propriété     | Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headerCharset | Text | Charset et encodage utilisés pour les parties de mail suivantes : le sujet, les noms de fichiers joints et le nom du mail. Valeurs possibles :<table><tr><th>Constante</th><th>Valeur</th><th>Commentaire</th></tr><tr><td>Mode courrier ISO2022JP</td><td>US-ASCII_ISO-2022-JP_UTF8_QP</td><td><ul><li><i>headerCharset</i>: US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable</li><li><i>bodyCharset</i>: US-ASCII si possible, japonais (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable</li></ul></td></tr><tr><td>mode courrier ISO88591</td><td>ISO-8859-1</td><td><ul><li><i>headerCharset</i>: ISO-8859-1 & Quoted-printable</li><li><i>bodyCharset</i>: ISO-8859-1 & 8-bit</li></ul></td></tr><tr><td>mode courrier UTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si possible, sinon UTF-8 & Quoted-printable (**valeur par défaut**)</td></tr><tr><td>mode courrier UTF8 en base64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII si possible, sinon UTF-8 & base64</td></tr></table> |
| bodyCharset   | Text | Charset et encodage utilisés pour le contenu html et le texte du body du mail. Valeurs possibles : Identiques à celles de headerCharset (voir ci-dessus)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Si le paramètre *options* est omis, la configuration mail mode UTF8 est utilisée pour les parties en-tête et corps.

#### Exemple

```4d
var $mail: Object
var $mime: Text
$mail:=New object

// Creation of a mail
$mail.from:="tsales@massmarket.com"
$mail.subject:="Terrific Sale! This week only!"
$mail.textBody:="Text format email"
$mail.htmlBody:="<html><body>HTML format email</body></html>"
$mail.to:=New collection
$mail.to.push(New object ("email";"noreply@4d.com"))
$mail.to.push(New object ("email";"test@4d.com"))

// transform the mail object in MIME
$mime:=MAIL Convert to MIME($mail)

// Contents of $mime:
// MIME-Version: 1.0
// Date: Thu, 11 Oct 2018 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@4d.com
// To: test@4d.com
// Content-Type: multipart/alternative; boundary="E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/plain; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// Text format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: text/html; charset="UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```
