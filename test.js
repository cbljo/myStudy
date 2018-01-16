//初始化变量
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// 请把你的代码写在这条注释以下
    var infirst = 0;
    var innum = 0;
    for(i=0;i<contacts.length;i++){
        if(firstName == contacts[i][0]){
            infirst = 1;
            innum = i;
        }
    }
    if (infirst == 1){
        if(prop in contacts[innum]){
            return contacts[innum][prop]
        }
        else{
            return "No such property"
        }
    }
    else{
        return "No such contact"

// 请把你的代码写在这条注释以上
    }
}
// 你可以修改这一行来测试你的代码
lookUp("Akira", "likes");
