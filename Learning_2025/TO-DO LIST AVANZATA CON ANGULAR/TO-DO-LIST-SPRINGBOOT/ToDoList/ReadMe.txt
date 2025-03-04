----- --- INSTALLARE H2 SQL DB --- -----

creiamo un db che si salva alla path presente in url ed è accessibile da console 
all'interno del file application.properties: 

spring.application.name=ToDoList
spring.datasource.url=jdbc:h2:file:C:/h2db/testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=s2pring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true



- Tasto destro su ToDoList e Run as -> Maven clear
- Run as -> Maven install
- Rus as -> Java Application 

navigare: http://localhost:8080/h2-console