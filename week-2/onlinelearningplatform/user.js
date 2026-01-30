// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
// function to get only active users
export function getActiveUsers() {  
    let activeuserlist=[]
    for(let user of users){
        if(user.active===true){
            activeuserlist.push(user)
        }
    }
    return activeuserlist;
}

// function to extract names of active users
export function getActiveUserNames() {
    let activeUsers = getActiveUsers();
    let activeuserlist=[]
    for(let user of activeUsers){
        activeuserlist.push(user.name)
    }
    return activeuserlist;
}

// function to check if any admin exists
export function isAdminExists() {
    for(let user of users){
        if(user.role==="admin"){
            return true
        }
    }
  return false
}

// function to find user by id
export function findUserById(id) {
    for(let user of users){
        if(user.id===id){
            return user
        }
    }
}

// function to deactivate a user immutably
export function deactivateUser(id) {
    let updatedUsers=[]   
    for(let user of users){ 
        if(user.id===id){
            let updatedUser={...user,active:false}
            updatedUsers.push(updatedUser)
        }   
        else{
            updatedUsers.push(user)
        }
    }
    return updatedUsers;
}