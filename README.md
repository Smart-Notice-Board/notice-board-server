# Smart-notice-board
Nodejs Server for the digital notice board

## Setup

### Prerequisites
* Install [node.js](https://nodejs.org/en/download/) and mysql
* Check that you have correct mysql config in config.js

### Installation
```sh
<<<<<<< HEAD
git clone -b prototype https://github.com/Smart-Notice-Board/notice-board-server
=======
git clone https://github.com/Smart-Notice-Board/notice-board-server
>>>>>>> github/master
cd notice-board-server
npm install
node bin/www
```

> ##College Details API (GET)=> /collegeDet

request => none


response =>
{"result":
[{
      "name": "rvce",
      "department": [
        {
          "name": "cse",
          "sem": [
            {
              "name": "Sem 2"
            },
            {
              "name": "Sem 6"
            }
          ]
        },
        {
          "name": "mech",
          "sem": [
            {
              "name": "Sem 4"
            }
          ]
        }
      ]
    }]}
    
    
    
    
    
    
    
    
    
    
    
> ##Notices API (POST) => /notices

request => {college,department,semester}

response => {"result": [
    {
      "Uid": 3,
      "Notice_Desc": "ejfaljekljlFK",
      "Type": "image",
      "notice_priority": 4,
      "username": "eyu",
      "Semester": "Sem 4",
      "path": "",
      "college_name": "rvce",
      "department": "cse",
      "stime": "10/07/2015 20:20",
      "etime": "10/07/2015 23:20",
      "notice_content": null
    }}







> ##Login API (POST) => /login

request => {username,password}


response =>  {success(true or false),token}





> ##Notice upload API (POST) => /noticesupload?token=

request   =>   if image or video:
                  {type,description,priority,semester,stime,etime,fil(file)}
                else
                   {{type,description,priority,semester,stime,etime}




response   =>   {msg}




> ##Board Details API (GET)  => /board_details

response   =>    {
  "boardInfo": [
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 4"
  ]
}
