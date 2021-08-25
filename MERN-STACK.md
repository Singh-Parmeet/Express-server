## MERN Stack

**MERN**  stack is a web development framework. It consists of MongoDB, ExpressJS, ReactJS, and NodeJS as its working components. Here are the details of what each of these components is used for in developing a web application when using MERN stack:

-   *MongoDB*: A document-oriented, No-SQL database used to store the application data.
    
-   *NodeJS*: The JavaScript runtime environment. It is used to run JavaScript on a machine rather than in a browser.
    
-   *ExpressJS*: A framework layered on top of NodeJS, used to build the backend of a site using NodeJS functions and structures. Since NodeJS was not developed to make websites but rather run JavaScript on a machine, ExpressJS was developed.
    
-   *ReactJS*: A library created by Facebook. It is used to build UI components that create the user interface of the single page web application.
    

![svg viewer](https://www.educative.io/api/edpresso/shot/5266982947520512/image/6392882854363136)

As shown in the illustration above, the user interacts with the  *ReactJS*  UI components at the application front-end residing in the browser. This frontend is served by the application backend residing in a server, through  *ExpressJS*  running on top of NodeJS.

Any interaction that causes a data change request is sent to the  *NodeJS*  based Express server, which grabs data from the  *MongoDB*  database if required, and returns the data to the frontend of the application, which is then presented to the user.

## Advantages of MERN Stack


Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called  BSON, and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.

MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications,  MongoDB Atlas makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.

Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a frontend JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server.

The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!

MERN is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.