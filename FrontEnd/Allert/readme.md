**File** -> AST -> **Interpreter** -> OS -> **CPU**

Browser Enger + JS Engine (v8) = **Interpreter**

    * Build-in JS from the Browser Engine
    * From <script>alert("here")</script>
    * From file downloaded <script src="/url/app.js"></script>
    * From inline attribute attached html(dom) elements
        <input onclick="alert('clicker')" />
        <a href=javascript:alert('link, it\'s me')">Link</a>
    * From ServiceWorker's


* Проста робота з DOM (Document Object Model)
    * jQuery


* Main: HTML -> Browser -> DOM
* On background: HTML -> Browser => JavaScript => v8 engine => Browser => DOM => JavaScript
