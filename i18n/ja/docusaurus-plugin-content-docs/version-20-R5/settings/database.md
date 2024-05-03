---
id: database
title: データベースページ
---

## データストレージページ

このページでは、4Dデータベースが使用するデータストレージに関する設定をおこないます。

### 一般設定

#### 読み込みのみのデータファイルの使用を許可する

このオプションを使用すると、OSレベルでロックされているデータファイルをアプリケーションから開けるようになります。 4Dは、ロックされたデータファイルを開かないようにする自動的なメカニズムを実装しています。 データファイルがロックされていると、4D はデータベースを開かず、以下のような警告メッセージを表示します:

![](../assets/en/settings/data-locked.png)

このオプションを選択しないかぎり、ロックされたデータファイルを開くことはできません (4Dデータベースのデフォルト動作)。

#### ロックされたファイルについて

ロックされたファイルは読むことはできても内容を変更することはできません。 たとえば (DVDのような) 編集不可のメディアに格納されたファイルや、このようなメディアからコピーされたファイルは、ロックされていることがあります。 DVDに格納されたプロジェクトを使用するような場合、ロックされたデータファイルを使用できるようアプリケーションを設定することができます。 しかしこの場合、データの追加・編集が保存されないロックされているデータファイルを不注意に使用してしまうリスクがあります。 このような状況にならないよう、4D ではデフォルトでロックされたデータファイルを開くことを禁止しています。

### テンポラリフォルダーの場所

このエリアでは、4D 実行中に作成されるテンポラリーファイルの場所を設定できます。 テンポラリファイルのフォルダーは、一時的にメモリ中のデータをディスクに保存するために必要に応じてアプリケーションが使用します。

現在のフォルダーの場所は "現在:" エリアに表示されます。 このエリアをクリックするとパス名がスクロールダウンリスト形式で表示されます:

![](../assets/en/settings/temporary-file-location.png)

3つのオプションから選択できます:

- **System**: When this option is selected, the 4D temporary files are created in a folder placed at the location specified by Windows and/or macOS. You can find out the current location defined by your system using the [`Temporary folder`](https://doc.4d.com/4dv19R/help/command/en/page486.html) 4D command. ファイルは、データベース名とユニークな識別子からなるサブフォルダーに置かれます。
- **Data File Folder** (default option): When this option is selected, the 4D temporary files are created in a folder named "temporary files" located at the same level as the data file of the database.
- **User Defined**: This option is used to set a custom location. 場所のオプションを変更した場合、新しい設定を反映するにはデータベースを再起動する必要があります。 4D は選択されたフォルダーに書き込みアクセス権があるかを確認します。 アクセス権がなければ、使用できるフォルダーが見つかるまで 4D は他のオプションを試します。

> This option is stored in the "extra properties" of the structure that is available when the structure definition is exported in XML (see [Exporting and importing structure definitions](https://doc.4d.com/4Dv19/4D/19/Exporting-and-importing-structure-definitions.300-5416829.en.html)).

### テキスト比較

> これらのオプションのいずれかを変更した場合、新しい設定を反映するにはアプリケーションを終了し、再起動しなければなりません。 データベースが再び開かれると、すべてのインデックスが自動で再作成されます。

- **Consider @ as a wildcard only when at the beginning or end of text patterns**: Allows you to set how the at sign "@" will be interpreted when used in a query or a character string comparison, when it is located in a word.
  When this option is not checked (default value), the at sign is used as the wildcard character, in other words, it replaces any character (see [Wildcard character (@)](https://doc.4d.com/4Dv19/4D/19/Query-editor.300-5416813.en.html#463876)).

  このオプションが選択されている場合、単語内にある "@" は普通の文字として扱われます。 この設定は、"@" が文字列内で使用される電子メールアドレスの検索などに有効です。 このオプションは検索、並び替え、文字列比較、およびテーブルに格納されるデータや配列などメモリ中のデータに影響を与えます。 (インデックス付きか否かにかかわらず) 文字型やテキスト型のフィールドおよび変数が、検索や並び替え時に "@" 文字がどのように解釈されるかの影響を受けます。

  **注:**

  - 検索において、"@" が検索条件の先頭か最後にある場合、"@" はワイルドカードとして扱われます。 単語の中に "@" 文字がある場合のみ (例: bill@cgi.com)、4D は異なった扱いをします。
  - This option can also have an influence on the behavior of the commands in the [Objects (Forms)](https://doc.4d.com/4Dv19/4D/19/Objects-Forms.201-5391558.en.html) theme that accept the wildcard character ("@") in the object parameter.
  - セキュリティの理由で、データベースの Administrator または Designer のみがこのパラメーターを変更できます。

- **Current data language:** Used to configure the language used for character string processing and comparison. 言語の選択は、テキストの並べ替えや検索、文字の大小などの比較ルール等に直接影響を与えます。ただし、テキストの翻訳や日付・時刻・通貨のフォーマットはシステムの言語設定が使用され、この設定には影響されません。 デフォルトで 4D はシステム言語を使用します。

  つまり、4Dプロジェクトはシステム言語とは異なる言語で動作することができます。 プロジェクトが開かれるとき、4Dエンジンはデータファイルに使用されている言語を検知し、(インタープリターやコンパイルモードの) ランゲージに提供します。 データベースエンジン、あるいはランゲージのいずれがテキスト比較をおこなうかに関わらず、同じ言語が使用されます。

  > You can modify this setting in the application Preferences (see [General Page](../Preferences/general.md)). この場合、その設定は新規に作成されるデータベースに適用されます。

- **Consider only non-alphanumeric chars for keywords**: Modifies the algorithm used by 4D to identify keyword separators and hence build their indexes. このオプションが選択されていない場合、4D は言語上の特質を考慮する洗練されたアルゴリズムを使用します。

  このアルゴリズムは、文字列中をダブルクリックしたときに選択範囲を決定するためワープロソフトが使用するものと同じです。 For more information about this algorithm, refer to the following address: `http://userguide.icu-project.org/boundaryanalysis`.

  このオプションが選択されている場合、4D は簡易的なアルゴリズムを使用します。 この設定では、文字でも数字でもない文字がキーワード区切り文字として扱われます。 この設定は日本語など特定の言語の要求に沿うものです。

- **Sorting order appropriate for searching**: This option is only displayed when the Japanese language is selected. このオプションは "カタカナ-ひらがなでの長音記号" および、"ゝ" または "ゞ" などの繰り返し記号 (踊り字) などの文字の解釈を変更します。 一般的には、この設定が有効化されている方が日本語話者にとって望ましい結果が得られます。

#### MeCab のサポート (日本語版)

On Japanese systems, 4D supports the _MeCab_ library, with a indexing algorithm for keywords that is particularly suited for the Japanese language.

日本語版の 4D ではこのアルゴリズムがデフォルトで使用されています。 If needed, you can disable the use of the _MeCab_ algorithm and use the conventional _ICU_ library.

To disable _MeCab_, just check the **Consider only non-alphanumeric chars for keywords** option:

![](../assets/en/settings/non-alphanumeric-chars.png)

## メモリページ

このページでは、データベースのキャッシュメモリに関する設定をおこないます。

### データベースキャッシュ設定

- **Calculation of adaptive cache**: When this option is checked, management of the memory cache is done dynamically by the system --- respecting limits that you set. これにより、ほとんどのケースで高パフォーマンスのメモリ設定がおこなわれます。 キャッシュメモリのサイズは設定されたパラメーターに基づき動的に計算されます。 デフォルトで提案される値は標準の 4D の使用状況に対応します。

  - **Memory to be reserved for other applications and for the system**: Portion of the RAM memory to reserve for the System and other applications. 4D が実行されるマシン上で他のアプリケーションも実行する場合、必要に応じてこの値を増やします。
  - **Percentage of available memory used for cache**: Percentage of the remaining memory allocated to the cache by default.\
    To obtain the size allocated by default to the cache, simply perform the following calculation: (Physical memory -- Physical memory to be reserved) X Percentage of the memory used for the cache. 動的に計算するモードの場合、キャッシュメモリのサイズはアプリケーションやシステムのニーズに応じて動的に変化します。 以下のオプションを使用して上限と下限を設定できます:
  - **Minimum Size**: Minimum amount of memory that must be reserved for the cache. この値は 100MB以上でなければなりません。
  - **Maximum Size**: Maximum amount of memory that can be used by the cache. This value is virtually unlimited.\\
    Setting limits is particularly useful for databases that are distributed on machines for which you do not know the memory configuration a priori. この場合、制限を設定することで最低限のパフォーマンスを保証できます。 この動作を図示すると以下のようになります:

  Example for calculating cache memory:
  _Physical memory to reserve = 256 MB
  Percentage of the available memory used for the cache = 50%
  Maximum size = 1 GB Minimum size = 128 MB_

  ![](../assets/en/settings/memory-maximum-size.png)

- **Calculation of adaptive cache not checked**:  this mode, you set the size of the memory cache for the database yourself. 4D はキャッシュメモリを設定する入力エリアと、物理メモリに関する情報 (マシンに実装されたRAM)、現在のキャッシュ、そして再起動後のキャッシュサイズを表示します。

  入力されたキャッシュサイズは、マシンのリソース状況にかかわらず、4Dデータベース用に予約されます。 この設定は、メモリ搭載量が分かっているなど、特定の状況で使用できます。 ほとんどのケースで起動時計算モードのキャッシュで良いパフォーマンスが提供されます。

- **Flush Cache every ... Seconds/Minutes**: Specifies the time period between each automatic saving of the data cache, i.e., its writing to disk.
  4D はキャッシュ中のデータを定期的に保存します。 この間隔を 1秒から 500分の範囲で設定できます。 デフォルトの設定値は 20秒です。 この保存は、キャッシュがいっぱいになった場合や、アプリケーションを終了する際にもおこなわれます。 You can also call the [FLUSH CACHE](https://doc.4d.com/4dv19R/help/command/en/page297.html) command to trigger the flush at any moment.

  大量のデータ入力が予期される場合は、この間隔を短くすることを検討してください。 停電などの理由でマシンが停止すると、前回の保存以降に入力されたデータが失われてしまいます (データログファイルをとっていれば復旧可能です)。

  キャッシュがフラッシュされるたびにデータベースの動作が遅くなる場合、周期を調整する必要があります。 動作が遅くなるのは、大量のレコードがディスクにフラッシュされるためです。 フラッシュ周期を短くすることで、各フラッシュ時に保存されるレコード数を減らすことができ、動作も速くなります。

  デフォルトで 4D はキャッシュがフラッシュされていることを示す小さなウィンドウを表示します。 If you do not want this visual reminder, you can uncheck the **Flushing progress** option on the [Interface page](./interface.md).
