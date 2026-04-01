students = open("students.txt", "r")
courses = open("courses.txt", "r")

class Student:
    def __init__(self, id, name, surname, age, courses=None):
        self.id = id
        self.name = name
        self.surname = surname
        self.age = age

        if courses is None:
            courses = []

        self.courses = courses

    def printInfo(self):
        coursesString = ", ".join(self.courses)
        print(self.name + " " + self.surname + " (" + str(self.age) + " lat): " + coursesString)

    def saveFile(self):
        with open(f"{str(self.name).lower()}_{str(self.surname).lower()}.txt", "w", encoding="UTF-8") as file:
            coursesString = ",\n-".join(self.courses)
            file.write("Kursy: \n-" + coursesString)

class Course:
    def __init__(self, studentId, subjectName):
        self.studentId = studentId
        self.subjectName = subjectName
    def printInfo(self):
        print(self.studentId + " " + self.subjectName)

def connectStudentsToCourses(studentList, courseList):
    for student in studentList:
        for course in courseList:
            if student.id == course.studentId:
                student.courses.append(course.subjectName)
    for student in studentList:
        student.printInfo()

studentList = []
courseList = []

with open("students.txt", "r", encoding="UTF-8") as file:
    lines = file.readlines()
    for line in lines:
        properties = line.split(",")
        student = Student(properties[0], properties[1], properties[2], properties[3].strip())
        studentList.append(student)

with open("courses.txt", "r", encoding="UTF-8") as file:
    lines = file.readlines()
    for line in lines:
        properties = line.split(",")
        course = Course(properties[0], properties[1].strip())
        courseList.append(course)

connectStudentsToCourses(studentList, courseList)
for student in studentList:
    student.saveFile()

