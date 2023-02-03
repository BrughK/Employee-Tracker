INSERT INTO department (id, department_name)
VALUES (001, "Sales"),
       (002, "Engineering"),
       (003, "Finance"),
       (004, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES  (001, 'Sales Lead', 100000, 1),
        (002, 'Salesperson', 80000, 1),
        (003, 'Lead Engineer', 150000, 2),
        (004, 'Software Engineer', 120000, 2),
        (005, 'Account Manager', 160000, 3),
        (006, 'Accountant', 125000, 3),
        (007, 'Legal Team Lead', 100000, 4),
        (008, 'Lawyer', 100000, 4);

INSERT INTO employee (first_name, last_name, job_title, role_id, manager_id)
VALUES  ('John', 'Doe', "Salesperson", 1, 5),
        ('Olive', 'Yew', "Lead Engineer", 2, 4),
        ('Grace', 'Allen', "Lead Engineer", 2, 4),
        ('Brian', 'Miller', "Salesperson", 1, 5),
        ('Lillian', 'Scott', "Account Manager", 3, 3),
        ('Carl', 'Churchill', "Lawyer", 4, 2),
        ('Jennifer', 'Vance', "Lawyer", 4, 2),
        ('Mike', 'Allen', "Salesperson", 1, 5);