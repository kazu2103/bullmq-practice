## bullMQ を使ってみた
### 起動手順
1. Redis の起動。`/bullmq-practice` 配下で以下のコマンドを実行。
`docker-compose up`
2. queue と worker の起動。それぞれのディレクトリで以下のコマンドを実行。
`npm run start`

起動すると、3件のジョブが queue に作成され、worker 側が2件正常に処理し、１件処理に失敗するように作っています。
