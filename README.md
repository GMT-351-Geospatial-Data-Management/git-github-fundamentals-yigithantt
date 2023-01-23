# Team-C University Communities Project
## GMT351 SPATIAL DATA MANAGEMENT
###  Technologies - Backend

- [PostgreSQL v15](https://www.postgresql.org/) - to manage database
- [Express.js middleware v4](https://expressjs.com/)- to build RESTful APIs with Node.js
- [Node.js v18](https://nodejs.org/en/)- to create the server side

### Installation

- download or clone this repository
- change directory to repository and run `npm install` on terminal
- you need to write environment variables to `.env` file
- you need to start postgresql server on `5432` port
- you can run server with `node index.js`

### Database
You can create tables with this query:

    create  table  communities (id SERIAL  PRIMARY KEY, name  varchar(100));
    create  table  events (id SERIAL  PRIMARY KEY, commID integer, description  varchar(140), eventTime TIMESTAMP);

### Endpoints

    # Browser index
    GET / -> index root (html renderers)

	# API list
    GET /events/ -> list items
    GET /communities/ -> list communities
    POST /events/ -> create event
    POST /communities/ -> create community
    DELETE /events/{id} -> delete event
    DELETE /communities/{id} -> delete community
    PATCH /events/{id} -> update event
    PATCH /communities/{id} -> update community

### Example Screenshot and usage
![service](/github/unicom.jpg)

### References
* <a href="https://www.youtube.com/watch?v=ldYcgPKEZC8" target="_blank">PERN Stack Course - Postgres, Express, React, and Node</a>
* <a href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify" target="_blank">JS-beautify for VS Code</a>
* <a href="https://github.com" target="_blank">Github</a>
* <a href="https://stackedit.io/app#" target="_blank">Stackedit for markdown editor</a>

## Contact

* <a href="https://github.com/uzayden" target="_blank">Uzay Ayden</a> - [Gmail](mailto:uzayayden@gmail.com)
* <a href="https://github.com/yigithantt" target="_blank">Yiğithan Tuncer</a> - [Gmail](mailto:yigithant17@outlook.com)
* <a href="https://github.com/zonchi" target="_blank">Batuhan Yılmaz</a> - [Gmail](mailto:batuhan1881@outlook.com.tr)