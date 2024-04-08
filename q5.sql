SELECT GROUP_CONCAT(DISTINCT firstname SEPARATOR ', ') AS distinctNames
FROM Student
ORDER BY distinctNames;