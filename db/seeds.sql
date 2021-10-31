INSERT INTO department (name)
VALUES
    ( "SALES" ),
    ( "IT" ),
    ( "HR" );

INSERT INTO role (title, salary, department_id)
VALUES
    ( "Sales Manager", 80000, 1 ),
    ( "Assistant Sales Manager", 60000, 1),
    ( "Senior Software Engineer", 100000, 2),
    ( "Junior Software Engineer", 75000, 2),
    ( "HR Manager", 80000, 3),
    ( "Payroll Specialist", 100000, 3),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Randy", "Johnson", 1, NULL ),
    ( "Karl", "Malone", 2, 1 ),
    ( "Lisa", "Lesley", 3, NULL ),
    ( "Danny", "Devito", 4, 2 ),
    ( "Wade", "Boggs", 5, NULL ),
    ( "Jennifer", "Lopez", 6, 3 ),
    