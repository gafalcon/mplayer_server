# Installation
## Java
- Arch Linux: lts version 11: jdk11-openjdk
- spring-boot-cli: Just download the gz extract and add file to /opt/. Follow the INSTALL instructions
## MySQL
- Latest
- Create Database first and Set configs on resources/application.properties
- Set aws data needed for resources/application.properties

## Build
- `mvn install` or `mvn clean install`
- run `mvn spring-boot:run`
- with jar `java -jar target/*.jar`
