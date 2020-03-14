---
title: 'DOCKER: NOS for Software Engineers'
layout: post
date: 2020-01-10 10:10
categories: Software Engineering
author: Samarth
published: false
---

Most of you who are gaming enthusiast and at some point, in their gaming career, played NFS (Need for Speed) would definitely know what NOS aka Nitrous is. I will be referring N2O as NOS throughout this blog.

But for a person unaware of NOS, Nitrous Oxide System is used in racing to increase a car's performance for a short period of time.

If you belong to software development field and started to hear a lot about using Docker/Container, it is in fact a performance booster similar to NOS by increasing your development performance.


**WHY I SAY SO?**



I earlier was like why to use docker when I can install any application by going through “sometimes complex” process. As software engineer there can be times that require us to develop POCs (proof of concepts) around new technologies out there in the market to understand the capabilities for one’s use cases. This will require us to install and run multiple applications (databases, caches, servers) on our development machine. 

On our development machine we won’t be expecting any production system like load, we can run multiple applications in a sandboxed & scaled down environment. 

Let’s say we have an 8GB RAM machine for development, what we can do is use a container like docker and restrict resource utilization to 2GB and let other 6GB of RAM to be available to OS to use for other applications like IDEs, browser without being unresponsive.

Incident which motivated me to use docker was when we were required to use an in-house S3 like service to store files as object. We didn’t have S3 in place when we started development. Then after googling few projects, I found MinIO and installed it on a server running docker in hardly under 10 minutes. This instance changed my somewhat restrictive thinking towards using docker. 

Latest snapshot at the time of writing this blog 9 containers were running on my local machine.

Below is a screenshot of Portainer UI showing the numbers.

![Containers in Running](/assets/running_containers.png)