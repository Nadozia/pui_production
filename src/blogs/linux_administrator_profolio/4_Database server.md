

Installation

```
apt install postgresql postgresql-contrib
```

Start postgresql

```
systemctl start postgresql.service
```

Login postgres user

```
sudo -i -u postgres
```

Enter the postgres terminal
```
psql
```


Some basics:
```
------------------------------------------------------------------
IN postgresql terminal:
\c                      # Show current database
\c mydb                 # Switch to mydb
\d                      # Show all tables in current database
\q                      # quit postgresql server

------------------------------------------------------------------

Postgres commands in linux:
psql                    # Enter postgres interactive terminal
psql -d my db           # Enter mydb
pg_dump                 # making backup of a database
createdb                # Create a database
psql mydb < backup.sql  # import backup to the database
------------------------------------------------------------------
```


Let's create a Employee table.

```
CREATE TABLE employees (

    id INTEGER PRIMARY KEY,

    name VARCHAR(50) NOT NULL

);


INSERT INTO employees (id, name)

VALUES 
(1, 'Employee1'),
(2, 'Employee2'),
(3, 'Employee3');

```

So, we have our databasa now.

![[Pasted image 20230218140049.png]]
We may want to have a seperate database to store the tables.
To do that, use \\q to go back to ubuntu terminal.

```
pg_dump employees postgres > employees.sql
createdb human_resource
psql human_resource < employees.sql
```


Lastly, lets grant these employee permission to use the database.

Enter the human_resouce database:
```
psql -d human_resource
```

create users:
```
CREATE USER employee1 WITH PASSWORD 'employee1';
CREATE USER employee2 WITH PASSWORD 'employee2';
CREATE USER employee3 WITH PASSWORD 'employee3';

```

Grant permission:

```
GRANT select, insert ON employees TO employee1;
GRANT insert, delete ON employees TO  employee2;
GRANT update ON employees TO  employee3;
```

ooops, employee1 should not be editing the table, let's deny his permission of insert:

```
REVOKE insert ON employees FROM employee1;
```

Now, lets use \\dp to see user permission of the table:

![[Pasted image 20230218160524.png]]

