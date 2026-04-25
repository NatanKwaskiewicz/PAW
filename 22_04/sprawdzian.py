__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Nataniel Kwaśkiewicz 4D"

from models.Teacher import Teacher
from models.Student import Student
from models.Subject import Subject
from models.Grades import Grades
from year_grade import year_grade
import datetime
import json

teachers : list[Teacher] = []
subjects : list [Subject] = []
students : list[Student] = []
grades : list[Grades] = []

with open('teachers.txt', 'r', encoding="UTF-8") as teachers_file:
    lines = teachers_file.readlines()
    for line in lines:
        props = line.strip().split(' ')
        teachers.append(Teacher(int(props[0]), props[1], props[2]))

with open('subjects.txt', 'r', encoding="UTF-8") as subjects_file:
    lines = subjects_file.readlines()
    for line in lines:
        props = line.strip().split(' ')
        for teacher in teachers:
            if teacher.id == int(props[2]):
                subjects.append(Subject(int(props[0]), props[1], teacher))
                break

with open('students.txt', 'r', encoding="UTF-8") as students_file:
    lines = students_file.readlines()
    for line in lines:
        props = line.strip().split(' ')
        birthdate = datetime.datetime.strptime(props[3],'%Y-%m-%d').date()
        students.append(Student(int(props[0]), props[1], props[2], birthdate))

with open('grades.txt', 'r', encoding="UTF-8") as grades_file:
    lines = grades_file.readlines()
    for line in lines:
        props : list[str] = line.strip().split(' ')
        grades_list : list[str] = props[2].split(',')
        for student in students:
            if student.id == int(props[0]):
                for subject in subjects:
                    if subject.id == int(props[1]):
                        subject_grades : Grades = Grades(student, subject)

                        for grade in grades_list:
                            subject_grades.add_grade(int(grade))

                        grades.append(subject_grades)
                        break
                break


print("Oceny i średnie poszczególnych uczniów")

for student in students:
    print(f'{student}:')

    for subject_grades in grades:
        if subject_grades.student == student:
            print(f"{"\t"} {subject_grades.subject.name}:")
            print(f"{"\t\t"}Oceny: {", ".join(map(str, subject_grades.get_grades()))}")
            print(f"{"\t\t"}Średnia: {str(round(subject_grades.get_average(), 2))}")
            print(f"{"\t\t"}Ocena końcowa: {str(year_grade(subject_grades.get_average()))}")
    print()

with open('students.json', 'w', encoding="UTF-8") as students_file:
    result : list[dict] = []
    for student in students:
        result_student : dict = {}
        result_subjects : dict = {}

        for subject_grades in grades:
            if subject_grades.student == student:
                result_subject : dict = {"Oceny": ", ".join(map(str, subject_grades.get_grades())),
                                         "Srednia": round(subject_grades.get_average(), 2),
                                         "Ocena roczna": year_grade(subject_grades.get_average())}

                result_subjects[subject_grades.subject.name] = result_subject

        result_student[str(student)] = result_subjects
        result.append(result_student)
    json.dump(result, students_file, indent=4, ensure_ascii=False)

print('='*50)
print()

for subject in subjects:
    print(f"{subject.name}:")
    print(f"{"\t"}Nauczyciel: {subject.teacher}")

    grades_to_print : list[int] = []
    for subject_grades in grades:
        if subject_grades.subject == subject:
            grades_to_print += subject_grades.get_grades()
    print(f"{"\t"}Oceny: {", ".join(map(str, grades_to_print))}")

    subject_grades_sum : int = 0
    for grade in grades_to_print:
        subject_grades_sum += grade
    print(f"{"\t"}Średnia: {str(round(subject_grades_sum/len(grades_to_print), 2))}")
    print()

with open('subjects.json', 'w', encoding="UTF-8") as subjects_file:
    result : list[dict] = []
    for subject in subjects:
        full_result_subject : dict = {}
        result_subject : dict = {"Nauczyciel": str(subject.teacher)}

        for subject_grades in grades:
            if subject_grades.subject == subject:
                grades_result : list[int] = []
                grades_result += subject_grades.get_grades()
        result_subject["Oceny"] = grades_result

        subject_grades_sum: int = 0
        for grade in grades_result:
            subject_grades_sum += grade
        result_subject["Srednia"] = round(subject_grades_sum/len(grades_result), 2)

        full_result_subject[subject.name] = result_subject
        result.append(full_result_subject)
    json.dump(result, subjects_file, indent=4, ensure_ascii=False)