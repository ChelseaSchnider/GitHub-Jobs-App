# GitHub-Jobs-App
Full-stack JavaScript app
A job portal filled with vacancies that gets updated daily. Key words for more senior positions where filtered out as the application is mainly aimed at junior developers
Tutorial followed created by Code Drip (https://www.youtube.com/watch?time_continue=153&v=lauywdXKEXI&feature=emb_title)

The video covered the following
* React front end w/ Hooks -running on localhost:3000
* Simple Node-Express API  -running on localhost:5000
* Cron worker to fetch data
* Simple filtering algorithm
* Redis + node-redis

Material-ui was used for styling as well as CSS

Hpw to run the app:

I am running Windows 10 but have Ubuntu on my system too

Open Ubuntu terminal and type "redis-server" to start the server.
Close that terminal and re-open it and type "redis-cli" and the following should appear 127.0.0.1:6379>

Open a new terminal in VS Code if you are using that program.
cd into the worker folder -> cd into tasks folder -> type "node fetch-github and the following should appear
fetching github jobs
fetching github jobs
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 47 jobs total
got 47 jobs total
got 0 jobs total
filtered down to (a number will appear here)
{ success: 'OK' }
got 0 jobs total
filtered down to (a number will appear here)
{ success: 'OK' }

Open a new terminal cd into the worker folder -> type "node index.js" and the following should appear 
fetching github jobs
fetching github jobs
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 50 jobs total
got 47 jobs total
got 47 jobs total
got 0 jobs total
filtered down to (a number will appear here)
{ success: 'OK' }
got 0 jobs total
filtered down to (a number will appear here)
{ success: 'OK' }

Open a new terminal cd into api folder -> type "node index.js"
The following should appear 
    "listening on port 5000"
Numbers will start appearing under this, it is just the number of jobs found

Open the Ubuntu terminal again, following should still be there 127.0.0.1:6379> -> type "get github"
Lots of words should appear - these are all the jobs! Your app works!

Final step in a new terminal cd into client folder -> type "npm start" and wait for "localhost:3000" to open in your internet browser

Your app should now appear! With all the jobs from around the world available

