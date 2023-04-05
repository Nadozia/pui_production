To Backup data, normally we have three tools to choose, eacho have there own strength and weaknesses.

Here are some strengths and weaknesses of `tar`, `rsync`, and `dd`:

`tar`:

-   Strengths:
    -   It is a simple and widely-used command-line tool for creating archives of files and directories.
    -   It can compress files and directories to reduce their size.
    -   It is available on most Unix-like systems, including Ubuntu.
-   Weaknesses:
    -   It does not support incremental backups, which means it has to back up all files every time it runs.
    -   It does not include any built-in encryption, so you would need to use another tool to encrypt your backups if you need to keep them secure.

`rsync`:

-   Strengths:
    -   It can copy files and directories efficiently by only transferring the differences between the source and destination.
    -   It can perform incremental backups, which means it only backs up changes since the last backup.
    -   It can preserve permissions, ownership, and timestamps of files and directories.
-   Weaknesses:
    -   It does not provide compression or encryption natively, so you would need to use other tools if you need those features.

`dd`:

-   Strengths:
    -   It is a powerful low-level tool that can create a bit-for-bit copy of a disk or partition.
    -   It can be used to create disk images that can be stored or transferred to other systems.
-   Weaknesses:
    -   It is a low-level tool and can be dangerous if used incorrectly. You could accidentally overwrite important data if you specify the wrong input or output device.
    -   It does not support compression or incremental backups.


Let's use different tools to backup our database.

## Tar

### Full Backup
A full backup for the whole system:
```
tar -cvpzf backup.tar.gz --exclude=/backup.tar.gz --one-file-system /
```

Creating full backup of system is too heavy for our little virtual machine. 
Let's only backup for the sql files.
It is located in /var/lib/postgresql 

```
tar cvjf /sql.backup.tar.bz2 /var/lib/postgresql/*.sql -g sql.snap
```

![[Pasted image 20230222145935.png]]

### Incremental Backup

Now make some changes to the table "employees" in the db "human_resource"
