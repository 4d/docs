---
id: Mail
title: Mail
---
||
|---|
|[**IMAP New transporter**( *server* : Object ) : 4D.IMAPTransporter](../../commands/imap-new-transporter)<br/>configures a new IMAP connection|
|[**MAIL Convert from MIME**( *mime* : Blob ) : Object<br/>**MAIL Convert from MIME**( *mime* : Text ) : Object](../../commands/mail-convert-from-mime)<br/>converts a MIME document into a valid email object|
|[**MAIL Convert to MIME**( *mail* : Object { ; *options* : Object } ) : Text](../../commands/mail-convert-to-mime)<br/>converts an email object into MIME text|
|[**MAIL New attachment**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**MAIL New attachment**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment](../../commands/mail-new-attachment)<br/>allows you to create an attachment object that you can add to an [Email object](../API/EmailObjectClass.md#email-object)|
|[**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter](../../commands/pop3-new-transporter)<br/>configures a new POP3 connection|
|[**SMTP New transporter**( *server* : Object ) : 4D.SMTPTransporter](../../commands/smtp-new-transporter)<br/>configures a new SMTP connection|
