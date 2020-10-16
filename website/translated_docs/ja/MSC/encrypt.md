---
id: encrypt
title: 暗号化ページ
sidebar_label: 暗号化ページ
---

このページを使用して、データベースの各テーブルに対して定義された **暗号化可能** 属性に基づいて、データファイルを暗号化または *復号化* (つまりデータから暗号化を解除) することができます。 For detailed information about data encryption in 4D, please refer to the "Encrypting data" section in the *Design Reference* manual.

暗号化/復号化操作をおこなうたびに、新しいフォルダーが作成されます。 そのフォルダーは "Replaced Files (Encrypting) *yyyy-mm-dd hh-mm-ss*" あるいは "Replaced Files (Decrypting) *yyyy-mm-dd hh-mm-ss*" と名前が付けられます。
> 暗号化は [メンテナンスモード](overview.md#メンテナンスモードでの表示) でのみ利用可能です。 If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode

**警告:**
- Encrypting a data file is a lengthy operation. 実行中は (ユーザーによって割り込み可能な) 進捗インジケーターが表示されます。 Note also that an application encryption operation always includes a compacting step.
- 暗号化操作をおこなうたびに、その操作はデータファイルのコピーを作成し、その結果アプリケーションファイルのサイズは増大します。 アプリケーションのサイズが過剰に増加しな いよう、これを考慮することが大切です (とくに、4Dアプリケーションがパッケージとして表示される macOS の場合)。 パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除/移動することも役立ちます。

## データを初めて暗号化する場合
MSC でデータファイルを初めて暗号化する場合、以下のような手順を踏む必要があります:

1. ストラクチャーエディターにおいて、データを暗号化したいテーブルに対して **暗号化可能** 属性にチェックを入れます。 詳細は "テーブルプロパティ" の章を参照してください。
2. MSC の暗号化ページを開きます。 If you open the page without setting any tables as **Encryptable**, the following message is displayed in the page: ![](assets/en/MSC/MSC_encrypt1.png) Otherwise, the following message is displayed: ![](assets/en/MSC/MSC_encrypt2.png)<p> This means that the **Encryptable** status for at least one table has been modified and the data file still has not been encrypted. **注**: すでに暗号化されているデータファイル、または復号化されたデータファイルに対して、**暗号化可能** 属性のステータスが変更された場合にも同じメッセージが表示されます (以下参照)。
3. 暗号化ピクチャーボタンをクリックします。  
   ![](assets/en/MSC/MSC_encrypt3.png)  
   データファイル用のパスフレーズを入力するように聞かれます:  
   ![](assets/en/MSC/MSC_encrypt4.png)  
   パスフレーズはデータ暗号化キーを生成するのに使用されます。 パスフレーズはパスワードの強化版のようなもので、大量の文字を含めることができます。 たとえば、"We all came out to Montreux" あるいは "My 1st Great Passphrase!!" のようなパスフレーズを入力することが可能です。 パスフレーズの安全性は、セキュリティレベルインジケーターによって確認できます:![](assets/en/MSC/MSC_encrypt5.png) (濃い緑色がもっとも安全なレベルであることを示します)。
4. Enter を押して安全なパスフレーズの入力を確定します。

暗号化プロセスがスタートします。 If the MSC was opened in standard mode, the application is reopened in maintenance mode.

4D では暗号化キーを保存することができます (以下の [暗号化キーを保存する](#暗号化キーを保存する) の段落を参照してください)。 暗号化キーの保存は、このタイミングか、あるいは後でおこなうこともできます。 また暗号化ログファイルを開くこともできます。

暗号化プロセスが正常に完了した場合、暗号化ページは [暗号化メンテナンスオペレーション](#暗号化メンテナンスオペレーション) ボタンを表示します。

**警告**: 暗号化操作の最中、4D は新しい、空のデータファイルを作成したうえで、元のデータファイルからデータを注入します。 "暗号化可能" テーブルに属しているレコードは暗号化後にコピーされ、他のレコードは単にコピーされるだけです (圧縮オペレーションも実行されます)。 操作が正常に完了した場合、もとのデータファイルは "Replaced Files (Encrypting)" フォルダーへ移動されます。 If you intend to deliver an encrypted data file, make sure to move/remove any unencrypted data file from the application folder beforehand.

## 暗号化メンテナンスオペレーション
When an application is encrypted (see above), the Encrypt page provides several encryption maintenance operations, corresponding to standard scenarios. ![](assets/en/MSC/MSC_encrypt6.png)


### カレントの暗号化キーを入力する
セキュリティ上の理由から、すべての暗号化メンテナンスオペレーションはカレントのデータ暗号化キーの入力を要求します。

- データ暗号化キーが既に 4Dキーチェーン (1) に読み込まれている場合、そのキーは 4D によって自動的に再利用されます。
- データ暗号化キーが見つからない場合、それを入力する必要があります。 以下のようなダイアログが表示されます: ![](assets/en/MSC/MSC_encrypt7.png)

この段階では 2つの選択肢があります:
- カレントのパスフレーズ (2) を入力し、**OK** をクリックする。 OR
- USBキーなどのデバイスを接続して、**デバイスをスキャン** ボタンをクリックする。

(1) 4Dキーチェーンは、アプリケーションのセッション中に入力されたすべての有効なデータ暗号化キーを保管します。   
(2) カレントのパスフレーズとは、カレントのデータ暗号化キーを生成するのに使用されたパスフレーズです。

いずれの場合においても、有効なパスフレーズ/暗号化キーが提供されると、4D は (まだメンテナンスモードではなかった場合は) メンテナンスモードで再起動し、選択されたオペレーションを実行します。

### カレントの暗号化キーでデータを再暗号化する

この操作は、データを格納している 1つ以上のテーブルにおいて **暗号化可能** 属性が変更された場合に有用です。 この場合、データの整合性を保つために、4D はアプリケーション内のそのテーブルのレコードへの書き込みアクセスを禁止します。 有効な暗号化ステータスを得るために、データの再暗号化が必要になります。

1. **カレントの暗号化キーでデータを再暗号化** をクリックします。
2. カレントのデータ暗号化キーを入力します。

データファイルはカレントのデータ暗号化キーで正常に再暗号化され、確認メッセージが表示されます: ![](assets/en/MSC/MSC_encrypt8.png)

### パスフレーズを変更してデータを再暗号化する
この操作は、カレントの暗号化データキーを変更したい場合に有用です。 たとえば、セキュリティ上のルール (3ヶ月ごとにパスプレーズを変更する必要があるなど) を遵守するために変更をおこないたいケースが考えられます。

1. **パスフレーズを変更してデータを再暗号化する** をクリックします。
2. カレントのデータ暗号化キーを入力します。
3. 新しいパスフレーズを入力します (セキュリティのため、2度入力します): ![](assets/en/MSC/MSC_encrypt9.png) データファイルは新しいキーで暗号化され、確認メッセージが表示されます: ![](assets/en/MSC/MSC_encrypt8.png)

### 全データを復号化
この操作は、データファイルからすべての暗号化を取り除きます。 データを暗号化しておきたくない場合、以下の手順に従ってください:

1. **全データを復号化** をクリックします。
2. カレントのデータ暗号化キーを入力します ([カレントの暗号化キーを入力する](#カレントの暗号化キーを入力する) 参照)。

データは完全に復号化され、確認メッセージが表示されます: ![](assets/en/MSC/MSC_encrypt10.png)
> データファイルが復号化されると、テーブルの暗号化ステータスは暗号化可能属性と合致しなくなります。 ステータスを合致させるためには、データベースのストラクチャーレベルにおいてすべての **暗号化可能** 属性を選択解除しなければなりません。

## 暗号化キーを保存する

4D ではデータ暗号化キーを専用ファイルに保存しておくことができます。 Storing this file on an external device such a USB key will facilitate the use of an encrypted application, since the user would only need to connect the device to provide the key before opening the application in order to access encrypted data.

新しいパスフレーズが提供されるたびに暗号化キーを保存することができます:

- when the application is encrypted for the first time,
- when the application is re-encrypted with a new passphrase.

連続した暗号化キーを同じデバイスに保存することが可能です。

## ログファイル
After an encryption operation has been completed, 4D generates a file in the Logs folder of the application. It is created in XML format and named "*ApplicationName_Encrypt_Log_yyyy-mm-dd hh-mm-ss.xml*" or "*ApplicationName_Decrypt_Log_yyyy-mm-dd hh-mm-ss.xml*".

An Open log file button is displayed on the MSC page each time a new log file has been generated.

The log file lists all internal operations executed pertaining to the encryption/decryption process, as well as errors (if any).
