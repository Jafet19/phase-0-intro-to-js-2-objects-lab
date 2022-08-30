// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "" }
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue[key] = value;
    return updateEmployeeWithKeyAndValue;    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const destructivelyUpdateEmployeeWithKeyAndValue = (employee);
    destructivelyUpdateEmployeeWithKeyAndValue[key] = value;
    return destructivelyUpdateEmployeeWithKeyAndValue;
}
function deleteFromEmployeeByKey(employee, key){
    const deleteFromEmployeeByKey = {...employee};
    delete deleteFromEmployeeByKey[key];
    return deleteFromEmployeeByKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}