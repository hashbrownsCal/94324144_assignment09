/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
//async function getAllPosts() {
const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    return jsonData;
};

//testing function
const test = {
    data: [],
};
//async function assign() {
const assign = async () => {
    const data = await getAllPosts();
    test.data = data;
    console.log(test.data);
};
assign();

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
const getAllUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    return jsonData;
};

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.
const getComments = async (postID) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
    const jsonData = await response.json();
    return jsonData;
};

//testing function
const test2 = {
    data: [],
};
//async function assign() {
const assign2 = async (postID) => {
    const data = await getComments(postID);
    test2.data = data;
    console.log(test2.data);
};
assign2(1);

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.
const getUser = async (userID) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userID}`);
    const jsonData = await response.json();
    return jsonData;
};

//testing function
const test3 = {
    data: [],
};
//async function assign() {
const assign3 = async (userID) => {
    const data = await getUser(userID);
    test3.data = data;
    console.log(test3.data);
};
assign3(1);

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.
const getTodosForUser = async (userID) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
    const jsonData = await response.json();
    return jsonData;
};