-- add to department
INSERT INTO department (department_name) 
VALUES (newDepartment) 

-- add to role
INSERT INTO role (title, salary, department_id)
VALUES (newTitle, newSalary, newDepartmentId)

-- add into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (newFirst, newLast, newRoleId, newManagerId) 