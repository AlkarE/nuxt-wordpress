#!/bin/bash
docker exec wordpressdockerinstall_db_1 /usr/bin/mysqldump -u root --password=wordpress wordpress > backup/mysqldb.sql && gzip backup/mysqldb.sql