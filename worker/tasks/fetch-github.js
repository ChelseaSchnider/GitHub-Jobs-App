var fetch = require('node-fetch');
var redis = require("redis");
    client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);
  
const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {

    console.log('fetching github jobs')

    let resultCount = 1, onPage = 0;
    const allJobs = []

    //fetch all pages
    while(resultCount > 0) {
       const res = await fetch(`${baseURL}?page=${onPage}`);
       const jobs = await res.json();
       allJobs.push(...jobs);
       resultCount = jobs.length
       console.log('got', resultCount , 'jobs total');
       onPage ++;
    }

    //filter algo
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();       
        //algo logic
        if(
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect') ||
            jobTitle.includes('specialist') ||
            jobTitle.includes('lead')
        ) {  //few of the titles to be excluded as we are mainly focusing on Jnr jobs
            return false
        }
        return true
    })

    console.log('filtered down to', jrJobs.length);

    //set in redis
    const success = await setAsync('github', JSON.stringify(jrJobs))
    console.log({success})   
}
fetchGithub(); //call function

module.exports = fetchGithub();

