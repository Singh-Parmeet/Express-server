**How a request gets served**
**Clients and servers**

Computers connected to the web are called  *clients*  and  *servers*. A simplified diagram of how they interact might look like this:
![HTTP Requests with the HTTPCaller](https://community.safe.com/servlet/rtaImage?eid=ka14Q000000slxk&feoid=00N30000006n8wU&refid=0EM4Q000001LoaT)

-   Clients are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
-   Servers are computers that store web pages, sites, or apps. When a client device wants to access a web page, a copy of the web page is downloaded from the server onto the client machine to be displayed in the user's web browser.

**In addition to the client and the server, we also need to understand:**

-   *Our internet connection*: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
-   *TCP/IP*: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
-   *DNS*: Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
-   *HTTP*: Hypertext Transfer Protocol is an application  protocol  that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
-   *Component files*: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
-   *Code files*: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
-   *Assets*: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

## So what happens, exactly?

When we type a web address into our browser (for our analogy that's like walking to the shop):

1.  The browser goes to the DNS server, and finds the real address of the server that the website lives on (we find the address of the shop).

2.  The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (we go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across our internet connection using TCP/IP. The HTTPD (HTTP Daemon) server is the one handling the requests/responses on the server side. The most common HTTPD servers are Apache or nginx for Linux and IIS for Windows.

- The server breaks down the request to the following parameters:
    
-   HTTP Request Method (either GET, POST, HEAD, PUT and DELETE). In the case of a URL entered directly into the address bar, this will be GET.
   
-   Requested path/page, in this case - / (as no specific path/page was requested, / is the default path).
-   The server verifies that there is a Virtual Host configured on the server that corresponds with url.
-   The server verifies that url can accept GET requests.
    
-   The server verifies that the client is allowed to use this method (by IP, authentication, etc.).
    
-   If the server has a rewrite module installed (like mod_rewrite for Apache or URL Rewrite for IIS), it tries to match the request against one of the configured rules.
    
-   The server goes to pull the content that corresponds with the request, in our case it will fall back to the index file, as "/" is the main file.
    
-   The server parses the file according to the request handler. 
4.  If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives us our goods, and we bring them back to our house).

5.  The browser assembles the small chunks into a complete web page and displays it to you.