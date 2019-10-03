---
title: Useful git commands with Sourcetree GUI
description: A list of git daily basis commands with Sourcetree GUI
date: '2019-09-29 20:16:26'
image: /assets/sourcetree.jpg
tags:
  - git
  - sourcetree
---
#### Log

Shows the commit logs.

Command: `git log`

#### Commit

`git commit -m <message>`

#### Diff between commits

`git diff <commit1> <commit2>`

#### Stash

Use `git stash` when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the `HEAD` commit.

`git stash push -m <message>`

#### Checkout

`git checkout -b <branch>`

#### Add Remote

Adds a remote named <name> for the repository at <url>.

`git remote add <name> <url>`

#### Merge

#### Squash

To Squash commits you should use rebase command in interactive mode. Rebasing interactively means that you have a chance to edit the commits which are rebased. You can reorder the commits, and you can remove them (weeding out bad or otherwise unwanted patches).

Start it with the last commit you want to retain as-is:

`git rebase -i <after-this-commit>`

An editor will be fired up with all the commits in your current branch (ignoring merge commits), which come after the given commit. You can reorder the commits in this list to your heart’s content, and you can remove them. The list looks more or less like this:

```
pick deadbee The oneline of this commit
pick fa1afe1 The oneline of the next commit
...
```

You can squash commits changing the word `pick` into `squash` (or just `s`) next to it. The result would be:

```
pick deadbee The oneline of this commit
squash fa1afe1 The oneline of the next commit
...



