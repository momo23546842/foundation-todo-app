<input type="text" placeholder="Enter a task">
placeholder は 入力欄の中に表示されるヒントの文字です
<ul> → タスクを並べる

<li> → 1つのタスク

value の意味
inputに入力された文字

addEventListener = 「イベントが起きたら処理をする」

👉 基本ルール（かなり実務でも使う）

よく使うサイズ
4px
8px
12px
16px
24px
32px

👉 8の倍数ルール（8pxルール）

④ 具体例（あなたのアプリ）
container
padding: 24px;

👉 外側の大きな余白

inputとボタンの間
gap: 10px;

👉 要素同士の余白

タスク同士
margin-bottom: 10px;

👉 下にスペース

⑤ おすすめの感覚

初心者はこれ覚えるとOK👇

小さい余白 → 8px
普通 → 16px
大きい → 24px
⑥ 実務っぽい考え方

余白はこう考えます👇

どこを区切りたいか？

例えば

入力エリアとリスト → 大きく分けたい → 24px
タスク同士 → 少し分けたい → 8〜12px