---
id: ai
title: AIページ
---

AI ページでは、AI プロバイダーを追加、削除、あるいはその一覧をレビューしたり、また関連したモデルエイリアスを見ることができます。これはローカルソースのものでもインターネットベースのサービスのものでも変わりません。 するとプロバイダーとモデルエイリアスは4D アプリケーション全体においてコード内で使用することができます。特に [**モデルエイリアス**](../aikit/provider-model-aliases.md) 機能を使用した [**4D-AIKit コンポーネント**](../aikit/overview.md) において役立ちます。

:::tip 関連したblog 記事

[Centralizing AI Providers and Model Aliases in 4D](https://blog.4d.com/centralizing-ai-providers-and-model-aliases-in-4d)

:::

## プロバイダーの管理

4D はOpenAI のようなAPI を持った [様々なAI プロバイダー](../aikit/compatible-openai.md) をサポートし、それぞれがデータベースの用途に合わせた固有のモデルや機能を提供しています。

デフォルトでは、プロバイダーのリストは空です。

### プロバイダーの追加

AI プロバイダーを追加するには:

1. プロバイダーリストの下部にある **+** ボタンをクリックします。
2. 資格情報を含めた、必要な [プロバイダーの設定フィールド](#プロバイダーのプロパティ) を入力します。
3. (オプション) 入力されたURL と資格情報が有効であることを確認するために **接続をテストする** ボタンをクリックします。

正常に接続できた場合には、ボタンの右側に利用可能なモデル数が表示されます:

![](../assets/en/settings/ai-connection-ok.png)

接続テストが失敗した場合、エラーメッセージが表示されます(例: "Request failed: Not found" あるいは "Request failed: Unauthorized" など)。

4. 新しいプロバイダーを保存するには **OK** を、あるいは変更を全て元に戻すためには **キャンセル** をクリックします。

### プロバイダーの編集

プロバイダーを編集または削除するには:

1. リスト内に登録されたプロバイダーを選択します。
2. プロバイダーの情報を編集するか、または、プロバイダーリストの下部にある **-** ボタンをクリックしてプロバイダーを削除します。
3. 変更を保存するには **OK** を、あるいは変更を全て元に戻すためには **キャンセル** をクリックします。

## プロバイダーのプロパティ

プロバイダーのリストからプロバイダーを選択すると、複数のプロパティが利用できるようになります。 プロパティの名前が **太字** のものは、プロバイダーを作成するのには必須のプロパティです。

### 名称

コード内でプロバイダーを識別するために使用されるローカルの名前。例: "claude"。 名前は、プロバイダーをコード内で参照するためにアプリケーション内で使用されるため、 [プロパティ名に準拠している](../Concepts/identifiers.md) 必要があります。

### ベースURL

プロバイダーのAPI のエンドポイント。例えば、 `https://api.openai.com/v1` あるいは `http://localhost:11434/v1` など。

コンボボックスはメインのプロバイダーがリストとして表示されるので、プロバイダーのエンドポイントを入力するのそこから値を選択することができます:

![](../assets/en/settings/ai-base-url.png)

### APIキー

(オプション) プロバイダーのAPI キー。 API キーを生成するための手順については、そのAI プロバイダーの公式ドキュメンテーションを参照して下さい。 一部のAI プロバイダーでは追加の特定の資格情報をが必要になる場合もあります。

### 組織

(オプション、OpenAI 特有) OpenAI API が使用する組織 ID。

### Project

(オプション、OpenAI 特有) プロジェクトのID。 OpenAI の各API キーはプロジェクトに割り当てられています。

### AIProviders.json

プロバイダーの設定は *AIProviders.json* という名前のJSON ファイル内に保存されています。このファイルは[運用設定に応じて](./overview.md#enabling-user-settings)、[project フォルダ](../Project/architecture.md) 内の、アクティブな *settings.4DSettings ファイル* の隣に置かれています。

### APIキーを使用した運用

AI プロバイダーを設定しているときには、自分のAPI キーを提供する必要があります。 AI プロバイダーからAPI キー/資格情報を取得するためには外部登録が必要になります。

設定ダイアログボックスを使用することで、4D デベロッパーはカスタムの**プロバイダー名** (例えば"open-ai-v1" など)を定義し、そのカスタムの名前をコード内で使用することができます。 ここではAPI キーを使用してテストを行うこともできます。

When the 4D application is deployed with the [User settings enabled](../settings/overview.md#enabling-user-settings), the administrator can configure the User settings by using the **same AI provider name** ("open-ai-v1") and **customize the API key** to use the customer's key. Thanks to the [User settings priority rules](../settings/overview.md#priority-of-settings), the customer settings will automatically override the developer settings.

:::warning

When using 4D in client/server mode, it is **strongly recommended** to execute AI-related code on the server side to protect API keys and credentials from exposure to remote machines.

:::

## Model Aliases

The Model Aliases page allows you to list models from registered Providers that you want to use in your code and to name them with *aliases*. Thanks to model aliases, you avoid hardcoding model names, switch models without changing your code, and keep consistency across environments.

When using a model alias:

- The provider is automatically resolved (see [Model resolution](../aikit/Classes/OpenAIProviders.md#model-resolution) in the 4D-AIKit documentation).
- The model ID is applied.
- All credentials and endpoints are used.

### Adding a model alias

:::note

To be able to add a model alias, you must have entered at least one valid provider in the **Providers** tab.

:::

To add a model alias:

1. Click on the **+** button at the bottom of the model aliases list.
2. In the **Name** column, enter the name of the alias.
3. Click on the corresponding row in the **Provider** column to display the list of available providers ([provider names](#name) you entered in the Providers page), and select the name of the provider.
4. Click on the corresponding row in the **Model** column to display the list of available models exposed by the selected provider and select the model.
5. 変更を保存するには **OK** を、あるいは変更を全て元に戻すためには **キャンセル** をクリックします。

![](../assets/en/settings/model-alias.png)

### Editing a model alias

To edit or remove an alias:

1. Select a model alias in the list.
2. Edit the alias information OR to remove a alias, click on the **-** button at the bottom of the list.
3. 変更を保存するには **OK** を、あるいは変更を全て元に戻すためには **キャンセル** をクリックします。

### Using a model alias

You can directly use the model alias name wherever a model name is required (provided that model aliases are supported).

For example, in 4D-AIKit, you can reference a model with the syntax: *{model:"ModelName"}*, where *ModelName* is a valid model defined in the Model Aliases tab:

```4d
var $client:=cs.AIKit.OpenAI.new()
var $result := $client.chat.completions.create($messages; \
    {model: "Chat Model"})
```

### 参照

["Provider & Model Aliases"](../aikit/provider-model-aliases.md) in the 4D AIKit documentation.