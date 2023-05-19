# WEB - Masai Jira Todo Board

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit Storing Data is LS - 2 marks.
 ✅ Check the LS Data after mutiple form submits - 2 marks.
 ✅ Visit the Board Page and Check the boards  - 4 marks.
 ✅ Check the flex value and the responsiveness of the board  - 2 marks.
 ✅ Check the board after changing the status  - 3 marks.
 ✅ Change the status a bunch more times and check the board - 2 mark.
 ✅ Check the Deleting Functionality - 2 marks.
 ✅ Check the Deleted page - 2 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- board.html
- deleted.html
- Scripts/index.js
- Scripts/deleted.js
- Scripts/board.js
- Styles(This is a Folder. Create all your CSS files inside this folder)
- Please ignore all the other files/folders except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Build a Todo board App where you can add all your daily tasks.
- Your application has a Navbar that contains 3 tabs (this is already in the template no need to build it).
  1. Home(index.html)
  2. Todo Board(board.html)
  3. Deleted(deleted.html)

### Home Page (index.html):-

- This page contains a form with 3 input boxes and one select tag and a textarea having the following fields (this is already in the template no need to build).

1. Name (Input-Type-text)
2. Description (Textarea)
3. Adding Date (Input-Type-date)
4. Deadline (Input-Type-date)
5. Priority (Select)

- On clicking on form submit (form submit event) you should store todo data in your local storage with key `todos`.
- While storing the data please add a new key there called `status` and the value should be `todo`.

`Hint : localStorage.setItem("todos",JSON.stringify)`

- Refer to this image for better understanding:- ![form.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-30/Screenshot%202022-12-30%20at%209.29.20%20AM_387014.png)
- Refer to this doc to understand how to take input values from date - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date).

- Refer to this doc to understand how to work with textarea - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

### Todo Board Page (board.html):-

- On this page all the data from the `todos` will be shown in a board.
- In your html file there is a div with a class `board`.
- Inside that div we have 4 divs with the following ids:-
  1. todo
  2. progress
  3. stuck
  4. completed
- In each board we will append the todos with status same as the board's id.
- Example:- the board with id of `todo` will have all the todos that have status `todo`, the board with id of `progress` will have all the todos that have status `progress`. Same for the other two as well.
- Append the todos in form of small cards. In each card show the todo name in a h3 tag. Rest show them in a p tag.
- Each card will also have a select tag with all the diff statuses as options a todo can have which are:-

  1. todo
  2. progress
  3. stuck
  4. completed

- User should be able to change the status of any todo using this select tag.
- When the status changes the todo should be deleted from the previous board and added in the board with new status.
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-30/Screenshot%202022-12-30%20at%209.29.46%20AM_272771.png)
- Here if you see in this image all the todos are the todo board because by default all todo have the status as todo.
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-30/Screenshot%202022-12-30%20at%209.30.18%20AM_362066.png)

- Use flex in the div with class `board` to create this layout. Also when the screensize is less than or equal to 900px the flex-direction should change to column.
- Now if you see this image you will notice that as the user chages the status of the todos using the select tag they change the board.
- Each todo card also has a button with the text `Delete`. Clicking on the button that perticular todo should be deleted both from DOM and from localStoarge.

- When user deletes any todo the todo data should be added in a new localStorage with key:- `deleted-todos`.

### Deleted Page(deleted.html):-

- Here take the data from the `deleted-todos` localStorage, and show them in form of a table.
- The table will have the following rows:-

  1. Name
  2. Description
  3. Add Date
  4. Deadline
  5. Priority
  6. Status

- In the table all the data will come from the localStorage.
  ![img.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-06/Screenshot%202023-01-06%20at%204.31.45%20PM_355872.png)

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
