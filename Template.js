/*
const example;
------Important JavaScript functions------

example = document.getElementById("...");
example.innerHTML = "..."; //sets the content.
example.innerHTML += "..."; //adds to the content.
example.src = "..."; //assuming the element is an image.

const example2;
example2 = createElement('HTML tag type'); //creates HTML element.
example2.classList.add("..."); //adds class to element.
example2.id = ...; //adds id to element.

example.appendChild(example2); //example2 gets amended to example.

------How to integrate database------

const appName = require('appName');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) {
    console.error('Error connecting to database:', err);
    return;
    }
    console.log('Connected to database!');
});

------Example usage------
function something() {

const sql = `
        SELECT name, id, age 
        FROM person
        WHERE person LIKE ?;
    `;

connection.query(sql, [`%${example}%`], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        console.log('Query results:', results);

        results.forEach(data => {
        const y = createElement('h1');

        y.innerHTML = "<h1>Name: ${data.name}</h1>";
      )};
   });
}

------How to integrate API (JSON)------

--Immediately--

(async() => { //JSON is integrated upon function call.
    const url = '...';
    const options = {method: 'GET'}; //POST and DELETE are also possible.

    const response = await fetch(url, options);
    const result = await response.text();
    const myObj = JSON.parse(result); 

    //do anything with the JSON contents here.
})();

--When a function is called--

const function = async() => {
    const url = '...';
    const options = {method: 'GET'}; //POST and DELETE are also possible.

    const response = await fetch(url, options);
    const result = await response.text();
    const myObj = JSON.parse(result); 

    //function definition here...
    }
*/
