//read api article from logrocket website 

//read fetch from mdn

// The global fetch() method starts the process of fetching a resource from the network, 
// returning a promise that is fulfilled once the response is available.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed 
// request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status
//  codes that indicate errors (404, 504, etc.). 
// Instead, a then() handler must check the Response.ok and/or Response.status properties.

//fetch has special queue for call stack 
//it is called - mico task queue/fetch queue/priority queue

//when fetch is run 
//it has 2 parts
    //1-data reserve -
        //1-onFullfield - response 
        //2-onRejection -reject 
        //we cannot access both have private access
    //2- web  browser /native node  
            //netwok request 
            //if request is sent than send to onFullfield any erroe after sending request like 404 not found will also go to onFullfield 
            //if request cannot be sent than it will go to onRejection
            //after request is sent it is data repsibltiy to form function and set reaspone to global memory 