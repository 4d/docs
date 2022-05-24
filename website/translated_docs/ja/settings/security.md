---
id: security
title: セキュリティページ
---

このページでは、データへのアクセスやデータベースの保護に関する設定をおこないます。

**注**: より一般的な 4D のセキュリティ機能については、[4D Security guide](https://blog.4d.com/4d-security-guide/) を参照ください。

## Remote Users Access

> これらの設定は、シングルユーザーモードで開かれたプロジェクトデータベースには適用されません。

-   **デザインおよびランタイムエクスプローラーアクセス権**: データベースのデザインモードにアクセスし、ランタイムエクスプローラーを表示する権利を特定のグループに付与します。

    注:
    -   デザインモードへのアクセスグループを設定すると、データ読み込みダイアログの **テーブルを作成** オプションが無効となります。 このダイアログボックスに関する詳細は [ファイルからデータを読み込む](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.ja.html) を参照ください。

    -   The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group. For more information about users and user groups, refer to the [Managing 4D users and groups](../Users/handling_users_groups.md) chapter.

-   **デフォルトユーザー**: デフォルトユーザーが設定されると、データベースを開く、あるいはデータベースにログインするすべてのユーザーは、このデフォルトユーザーに定義されたアクセス権と同じ制限を持つことになります。 ユーザー名の入力が不要になるだけでなく、 ユーザー名の入力が不要になるだけでなく、 デフォルトユーザーにパスワードを割り当てていない場合、パスワードダイアログボックスは表示されず、データベースが直接開かれます。 このオプションを使用することで、完全なデータコントロールシステムを維持しつつ、データベースへのアクセスをシンプルにすることができます。

    -   If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password.\
    -   If you haven't associated a password with the Default User, the User Identification dialog box will not appear.

> You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. これには、データベースを開いたり接続したりする際に **Shift**キーを押したままにします。

-   **パスワードダイアログにユーザーリストを表示する**: このオプションが選択されていると、ユーザー認証ダイアログにユーザーリストが表示され、ユーザーはその中から名前を選択し、パスワードを入力することになります。 オプションが選択されていない場合、ユーザーは名前とパスワードの両方を入力します。 パスワードダイアログボックスの 2つのバージョンに関する詳細は [アクセスシステムの概要](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.ja.html) を参照ください。

    -   **ユーザーリストをABC順で表示する** (上記オプションが選択されているときのみ有効です): このオプションが選択されていると、ユーザー認証ダイアログボックスのユーザーリストは名前の ABC順に表示されます。

-   **ユーザーは自分のパスワードを変更可能**: このオプションが選択されていると、ユーザー認証ダイアログに **変更** ボタンが表示されます。 このボタンを使用すると、パスワードを変更するためのダイアログボックスが表示されます (このダイアログに関する詳細は [パスワードアクセスシステムの保守](https://doc.4d.com/4Dv19/4D/19/Ensuring-system-maintenance.300-5416895.ja.html) の "ユーザーによるパスワードの変更" を参照ください)。 必要であれば **変更** ボタンを非表示にし、パスワードの変更を禁止することができます。 それには、このオプションの選択を外します。

## オプション

-   **Filtering of commands and project methods in the formula editor and 4D Write Pro documents** For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to multistyle areas or 4D Write Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19/help/command/en/page805.html) command can be used. 以下のオプションを使用して、部分的あるいは全体的にこのフィルタリングを無効にできます。
    -   **すべてのユーザーを制限する** (デフォルトオプション): Designer と Administrator を含むすべてのユーザーに対し、コマンドや関数、プロジェクトメソッドへのアクセスを制限します。
    -   **DesignerとAdministratorは制限しない**: このオプションは Designer と Administrator のみに、4Dコマンドやメソッドへの完全なアクセスを与えます。 他のユーザーには制限をかけつつ、管理者に無制限のアクセスを与えたい場合に使用できます。 開発段階では、このモードを使用してすべてのフォーミュラやレポート等を自由にテストできます。 運用時には、一時的にコマンドやメソッドへのアクセスを与えるためなどに使用できます。 これをおこなうには、コマンドへのフルアクセスが必要なダイアログを呼び出したり印刷処理を開始したりする前に ([CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/ja/page289.html) コマンドを使用して) ユーザーを切り替えます。 そしてその処理が終了したのちに元のユーザーに戻します。 **注:** 前のオプションを使用してフルアクセスが有効にされると、このオプションは効果を失います。
    -   **誰も制限しない**: このオプションはフォーミュラの制御を無効にします。 このオプションが選択されると、ユーザーはすべての 4Dコマンドおよびプラグインコマンド、さらにはプロジェクトメソッドを使用できます (非表示のものを除く)。 **注:** このオプションは [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/ja/page805.html) コマンドより優先されます。 このオプションが選択されると、コマンドの効果はなくなります。

-   **外部ファイルのユーザー設定を有効にする**: 外部ファイル化したユーザー設定を使用するにはこのオプションを選択します。 このオプションが選択されると、設定をおこなうダイアログが最大 3つになります: **ストラクチャー設定**、**ユーザー設定**、そして **データファイル用のユーザー設定** です。 For more information, refer to [User settings](../Desktop/user-settings.md).

-   **コンポーネントの "On Host Database Event" メソッドを実行**: [On Host Database Event データベースメソッド](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.ja.html) は 4Dコンポーネントの初期化とバックアップフェーズを容易にします。 セキュリティ上の理由から、このメソッドの実行はそれぞれのホストデータベースにおいて明示的に許可されなければなりません。 そのためにはこのオプションをチェックします。 デフォルトでは、チェックされていません。

    このオプションがチェックされていると:
    * 4D コンポーネントがロードされます。
    * コンポーネントそれぞれの [On Host Database Event データベースメソッド](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.ja.html) がホストデータベースによって呼び出されます。
    * メソッドのコードが実行されます。

    このオプションがチェックされていないと:
    * 4D コンポーネントはロードはされるものの、初期化とバックアップフェーズはコンポーネントによって管理されなければなりません。
    * コンポーネントの開発者は、これらのフェーズ (スタートアップとシャットダウン) 中にホストデータベースによって呼び出されなければならないコンポーネントメソッドを公開する必要がります。
    * ホストデータベースの開発者は、コンポーネントの適切なメソッドを適切なタイミングで呼び出さなければなりません (コンポーネントのドキュメンテーションにて解説が必要です)。