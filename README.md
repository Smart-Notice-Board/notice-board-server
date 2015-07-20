# Smart-notice-board
Nodejs Server for the digital notice board

1) College Details API (GET)=> /collegeDet

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
    
    
    
    
    
    
    
    
    
    
    
2) Notices API (POST) => /notices

request => {college,department,semester}

response => {"result": [
    {
      "Uid": 3,
      "Notice_Desc": "ejfaljekljlFK",
      "Type": "IMP",
      "notice_priority": 4,
      "username": "eyu",
      "Semester": "Sem 4",
      "path": "",
      "college_name": "rvce",
      "department": "cse",
      "stime": "10/07/2015 20:20",
      "etime": "10/07/2015 23:20"
    }}







3) Login API (POST) => /login

request => {username,password}


response =>  {success(true or false),token}
