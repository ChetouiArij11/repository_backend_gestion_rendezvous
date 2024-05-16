# Pipeline ci 
## Run with jest 
![alt text](image.png)

## stage push to docker 


![alt text](image-1.png)

![alt text](image-2.png)


------------------------------
### deploy docker-compose 

![alt text](image-10.png)

------------------------------

# kubernet deploy image docker 

![alt text](image-3.png)

## init k8s de bd image 
![alt text](image-4.png)

## start de k8s de bd image 
![alt text](image-5.png)

![alt text](image-6.png)

## use database medirendez 
![alt text](image-7.png)

![alt text](image-8.png)

## prb de connexion entre image de back et image le bd 

![alt text](image-9.png)

```
-.env :
# MySql Environment
#MYSQL_HOST=db
MYSQL_PORT=3306
MYSQL_DATABASE=
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=medirendez



-db.js:

 host: process.env.MYSQL_HOST || "db",
      port: parseInt(process.env.MYSQL_PORT) || 3306, // Convertir en entier
      username: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "root",
      database: process.env.MYSQL_DATABASE || "medirendez",
```




