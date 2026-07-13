---
title: For data products, trust is the feature
date: 2026-06-15
category: Data Products
excerpt: You can ship the best pipeline in the company and have no one use it. The bottleneck is rarely the model or the UI — it's whether people believe the number.
published: true
---

Most internal data products don't fail on capability. They fail on belief.

You can build a pipeline that is faster, more complete, and more correct than the manual process it replaces, and still watch analysts keep their spreadsheet open next to it. The reason is simple and easy to miss: they don't yet trust your number more than they trust their own.

## Correctness and trust are different problems

Correctness is an engineering property. Trust is a relationship. A number can be correct and untrusted, and a correct-but-untrusted number has roughly the same value as a wrong one — nobody acts on it.

The mistake is to treat trust as something that arrives automatically once the system is correct. It doesn't. Trust is earned through exposure, and exposure takes time you have to design for.

## Run in parallel longer than feels necessary

The cheapest trust-building mechanism I know is boring: run the automated system next to the manual one and let people verify parity themselves. Not once, in a demo. For weeks, on their own cases, until they stop checking because checking keeps confirming.

This feels wasteful. You built the thing; you want to cut over. But the parallel period is not overhead — it is the product doing its most important job, which is convincing the people who will decide whether it lives.

## Sequence the boring part first

The corollary: ship the trusted core before the exciting layers. Alerting, self-serve, and automation are only valuable on top of a signal people believe. Build them first and you've built features on sand.

Decide what the one number is that everything depends on. Make that number trustworthy. Then, and only then, build the interesting things on top of it.
