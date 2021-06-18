---
id: whatsNew
title: 新着情報
---

このドキュメントで扱っている 4D の新機能・変更された機能のリストです。

## 4D v18 R6

- [EntitySelection クラス](API/entitySelectionClass.md): `.average()`, `.max()` および `.min()` 関数は、エンティティセレクションが空の場合には *undefined* を返すようになりました。
- [IMAP Mail](API/imapTransporterClass.md), [POP3 Mail](API/pop3TransporterClass.md) and [SMTP Mail](API/smtpTransporterClass.md): `authenticationMode` プロパティは OAuth 2.0 を有効化します。
- [IMAP Mail](API/imapTransporterClass.md): 新しい `.expunge()` および `.append()` 関数の追加。
- 新しい [Web管理](Admin/webAdmin.md) Webサーバーコンポーネント
- 新しい [データエクスプローラー](Admin/dataExplorer) インターフェース
- 新しい Web [ユーザーセッション](WebServer/sessions.md) および [その API](API/sessionClass.md)