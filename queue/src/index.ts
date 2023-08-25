import { Queue, QueueEvents } from "bullmq";

// test という名前のキューを作成
const queue = new Queue("test");

// queue に job を追加
const add = async (a: string, b: string) => {
  const job1 = await queue.add("job1", a);
  const job2 = await queue.add("job2", { a, b });
  const jobFail = await queue.add("job2", "fail");
  console.log("job1, job2, jobFail queued", job1, job2, jobFail);
}

add("a", "b");