---
title: The failures that don't page you
date: 2026-04-19
category: Competitive Intelligence
excerpt: A pipeline that errors is easy. The dangerous failure returns success and plausible-looking data that happens to be wrong.
published: true
---

The failures you build for are the loud ones: a job crashes, a request times out, a status code goes red. Those are fine. They page someone, someone fixes them, and the data was never used in the meantime.

The failures that hurt are quiet. Collection keeps running. The status is green. The output looks like output. And it's wrong — empty where it should be full, stale where it should be fresh, or subtly corrupted in a way that only shows up three systems downstream in a decision no one traces back.

## Success is not health

The core mistake is trusting the status code. Status tells you the job ran. It says nothing about whether the result is correct. For a data pipeline, you need a signal for correctness, and correctness usually can't be checked against a ground truth you don't have.

## Watch something you already know the answer to

The move that works is to plant reference cases whose correct answer is known in advance and exercise the same path production uses. When the observed result drifts from the expected one, you've learned something status codes can't tell you: the pipeline is degrading, even though nothing errored.

The discipline is keeping these credible. A canary that fires on normal variation trains people to ignore it, and an ignored monitor is worse than none. Segment out the benign patterns — timing, environment — so that when it does fire, it means something.

Detection is a product decision, not just an engineering one. What counts as "wrong enough to alert," and who owns the response, are judgments about consequences. Those belong to whoever owns the data, not to whoever wrote the cron job.
