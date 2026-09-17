---
id: security
title: セキュリティページ
---

このページでは、データへのアクセスやデータベースの保護に関する設定をおこないます。

**注**: より一般的な 4D のセキュリティ機能については、[4D Security guide](https://blog.4d.com/4d-security-guide/) を参照ください。

## リモートユーザーアクセス

> これらの設定は、シングルユーザーモードで開かれたプロジェクトデータベースには適用されません。

#### Design and Runtime Explorer Access

Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer.

注:

- デザインモードへのアクセスグループを設定すると、データ読み込みダイアログの **テーブルを作成** オプションが無効となります。 このダイアログボックスに関する詳細は [ファイルからデータを読み込む](https://doc.4d.com/4Dv20/4D/20.2/Importing-data-from-files.300-6750325.ja.html) を参照ください。

- Designer とAdministrator は常にデザインモードとランタイムエクスプローラーにアクセスできます。 設定されるアクセスグループのメンバーに含められる必要はありません。 ユーザーおよびグループに関する詳細は [ユーザー＆グループ](../Users/handling_users_groups.md) の章をご参照ください。

#### Default User

When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. ユーザー名の入力が不要になるだけでなく、 ユーザー名の入力が不要になるだけでなく、 デフォルトユーザーにパスワードを割り当てていない場合、パスワードダイアログボックスは表示されず、データベースが直接開かれます。

このオプションを使用することで、完全なデータコントロールシステムを維持しつつ、データベースへのアクセスをシンプルにすることができます。

- デフォルトユーザーにパスワードを割り当てた場合、データベースが開かれるときにダイアログが表示され、パスワードの入力を求められます。
- デフォルトユーザーにパスワードを割り当てていない場合、パスワードダイアログボックスは表示されません。  
  **Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. これには、データベースを開いたり接続したりする際に **Shift**キーを押したままにします。

#### Display User List in Password Dialog Box

If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. オプションが選択されていない場合、ユーザーは名前とパスワードの両方を入力します。 パスワードダイアログボックスの 2つのバージョンに関する詳細は [アクセスシステムの概要](https://doc.4d.com/4Dv20/4D/20.2/Access-system-overview.300-6750353.ja.html) を参照ください。

#### User List in Alphabetical Order (only available if the previous option is checked)

When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order.

#### Users can change their password

When this option is checked, a **Change** button is displayed in the User Identification dialog box. このボタンを使用すると、パスワードを変更するためのダイアログボックスが表示されます (このダイアログに関する詳細は [パスワードアクセスシステムの保守](https://doc.4d.com/4Dv20/4D/20.2/Ensuring-system-maintenance.300-6750352.ja.html) の "ユーザーによるパスワードの変更" を参照ください)。 必要であれば **変更** ボタンを非表示にし、パスワードの変更を禁止することができます。 それには、このオプションの選択を外します。

## オプション

#### Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents

For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv20/4D/20.2/Formula-editor.200-6750079.en.html) in Application mode or added to multistyle areas (using [`ST INSERT EXPRESSION`](../commands/st-insert-expression)), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [`SET ALLOWED METHODS`](../commands/set-allowed-methods) command can be used. 以下のオプションを使用して、部分的あるいは全体的にこのフィルタリングを無効にできます。

- **すべてのユーザーを制限する** (デフォルトオプション): Designer と Administrator を含むすべてのユーザーに対し、コマンドや関数、プロジェクトメソッドへのアクセスを制限します。

- **DesignerとAdministratorは制限しない**: このオプションは Designer と Administrator のみに、4Dコマンドやメソッドへの完全なアクセスを与えます。 他のユーザーには制限をかけつつ、管理者に無制限のアクセスを与えたい場合に使用できます。 開発段階では、このモードを使用してすべてのフォーミュラやレポート等を自由にテストできます。 運用時には、一時的にコマンドやメソッドへのアクセスを与えるためなどに使用できます。 これを行うには、コマンドへのフルアクセスが必要なダイアログを呼び出したり印刷処理を開始したりする前に ([`CHANGE CURRENT USER`](../commands/change-current-user) コマンドを使用して) ユーザーを切り替えます。そしてその処理が終了したのちに元のユーザーに戻します。
  **注:** 前のオプションを使用してフルアクセスが有効にされると、このオプションは効果を失います。

- **誰も制限しない**: このオプションはフォーミュラの制御を無効にします。 このオプションが選択されると、ユーザーはすべての 4Dコマンドおよびプラグインコマンド、さらにはプロジェクトメソッドを使用できます (非表示のものを除く)。
  **注意:** このオプションは[`SET ALLOWED METHODS`](../commands/set-allowed-methods) コマンドよりも優先されます。 このオプションが選択されると、コマンドの効果はなくなります。

#### Enable User Settings

You need to check this option to be able to display separated dialog boxes for user settings. このオプションが選択されると、設定をおこなうダイアログが最大 3つになります: **ストラクチャー設定**、**ユーザー設定**、そして **データファイル用のユーザー設定** です。 詳細は [ユーザー設定](../settings/overview.md#ユーザー設定) を参照ください。

#### Execute "On Host Database Event" method of the components

The [On Host Database Event database method](../commands/on-host-database-event-database-method) facilitates the initialization and backup phases for 4D components. セキュリティ上の理由から、このメソッドの実行はそれぞれのホストデータベースにおいて明示的に許可されなければなりません。 そのためにはこのオプションをチェックします。 デフォルトでは、チェックされていません。

このオプションがチェックされていると:

- 4D コンポーネントがロードされます。
- コンポーネントそれぞれの [On Host Database Event データベースメソッド](../commands/on-host-database-event-database-method) (あれば) がホストデータベースによって呼び出されます。
- メソッドのコードが実行されます。

このオプションがチェックされていないと:

- 4D コンポーネントはロードはされるものの、初期化とバックアップフェーズはコンポーネントによって管理されなければなりません。
- コンポーネントの開発者は、これらのフェーズ (スタートアップとシャットダウン) 中にホストデータベースによって呼び出されなければならないコンポーネントメソッドを公開する必要がります。
- ホストデータベースの開発者は、コンポーネントの適切なメソッドを適切なタイミングで呼び出さなければなりません (コンポーネントのドキュメンテーションにて解説が必要です)。
