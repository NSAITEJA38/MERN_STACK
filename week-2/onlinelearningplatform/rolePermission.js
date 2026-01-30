// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


// function to get all role names
export function getAllRoleNames() {
    let rolenames=[]
    for(let role in roles){
        rolenames.push(role)
    }
    return rolenames
}


// function to check if student can delete
export function canStudent() {
    return roles.student.filter(ele=>ele==="delete")
}

// function to create a flat list of all unique permissions
export function allUnqPermissions(){
    let unqpermissions = new Set();
    for(let val of roles.admin){
        unqpermissions.add(val);
    }
    return unqpermissions;
}


// function to add new role moderator immutably
export function addModeratorRole() {
    let updatedRoles={...roles,moderator:["update","view"]}
    return updatedRoles;
}