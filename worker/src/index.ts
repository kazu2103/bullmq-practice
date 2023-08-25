import { Worker } from "bullmq";

// test キューのジョブを処理する worker を作成
const worker = new Worker("test", async job => {
  console.log(job.data);
  if (job.data === "fail") {
    throw new Error("fail");
  }
});

// 完了時の処理
worker.on("completed", job => {
  console.log(`completed: ${job.returnvalue}`);
});

// 失敗時の処理
worker.on("failed", (job, err) => {
  console.log(`failed: ${err.message}`);

  // close してあげないと、プロセスが終了しない
  worker.close();
});