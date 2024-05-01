---
id: security
title: セキュリティページ
---

このページでは、データへのアクセスやデータベースの保護に関する設定をおこないます。

**Note**: For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## リモートユーザーアクセス

> これらの設定は、シングルユーザーモードで開かれたプロジェクトデータベースには適用されません。

- **Design and Runtime Explorer Access**: Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer.

  注:

  - Setting an access group in the Design environment also lets you deactivate the **Create table** option in the data import dialog box. For more information about this dialog box, refer to [Importing data from files](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Default User**: When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. ユーザー名の入力が不要になるだけでなく、 デフォルトユーザーにパスワードを割り当てていない場合、パスワードダイアログボックスは表示されず、データベースが直接開かれます。
  このオプションを使用することで、完全なデータコントロールシステムを維持しつつ、データベースへのアクセスをシンプルにすることができます。

  - デフォルトユーザーにパスワードを割り当てた場合、データベースが開かれるときにダイアログが表示され、パスワードの入力を求められます。
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the **Shift** key while opening the database or connecting to it.

- **Display User List in Password Dialog Box**: If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. オプションが選択されていない場合、ユーザーは名前とパスワードの両方を入力します。 For more information about the two versions of the password dialog box, see the section "Access system overview" in [Access system overview](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

  - **User List in Alphabetical Order** (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order.

- **Users can change their password**: When this option is checked, a **Change** button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). If desired, you can hide the **Change** button so that users cannot modify their passwords. それには、このオプションの選択を外します。

## オプション

- **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. 以下のオプションを使用して、部分的あるいは全体的にこのフィルタリングを無効にできます。
  - **Enabled for all** (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator.
  - **Disable for the Designer and the Administrator**: This option grants full access to 4D commands and to methods only for the Designer and Administrator. 他のユーザーには制限をかけつつ、管理者に無制限のアクセスを与えたい場合に使用できます。 開発段階では、このモードを使用してすべてのフォーミュラやレポート等を自由にテストできます。 運用時には、一時的にコマンドやメソッドへのアクセスを与えるためなどに使用できます。 This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Note:** If full access has been enabled using the previous option, this option will have no effect.
  - **Disabled for all**: This option disables control within formulas. このオプションが選択されると、ユーザーはすべての 4Dコマンドおよびプラグインコマンド、さらにはプロジェクトメソッドを使用できます (非表示のものを除く)。
    **Note:** This option takes priority over the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command. このオプションが選択されると、コマンドの効果はなくなります。

- **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. セキュリティ上の理由から、このメソッドの実行はそれぞれのホストデータベースにおいて明示的に許可されなければなりません。 そのためにはこのオプションをチェックします。 デフォルトでは、チェックされていません。

  このオプションがチェックされていると:

  - 4D コンポーネントがロードされます。
  - each [On Host Database Event database method](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) of the component (if any) is called by the host database,
  - メソッドのコードが実行されます。

  このオプションがチェックされていないと:

  - 4D コンポーネントはロードはされるものの、初期化とバックアップフェーズはコンポーネントによって管理されなければなりません。
  - コンポーネントの開発者は、これらのフェーズ (スタートアップとシャットダウン) 中にホストデータベースによって呼び出されなければならないコンポーネントメソッドを公開する必要がります。
  - ホストデータベースの開発者は、コンポーネントの適切なメソッドを適切なタイミングで呼び出さなければなりません (コンポーネントのドキュメンテーションにて解説が必要です)。
