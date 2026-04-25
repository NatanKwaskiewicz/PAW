__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Nataniel Kwaśkiewicz 4D"

from models.Student import Student
from models.Subject import Subject

class Grades:
    def __init__(self, student : Student, subject : Subject):
        self.grades = []
        self.student = student
        self.subject = subject

    def add_grade(self, grade : int):
        if grade < 1 or grade > 6:
            raise ValueError('Grade must be between 1 and 6.')
        else:
            self.grades.append(grade)

    def get_grades(self):
        return self.grades

    def get_average(self):
        grades_sum : int = 0
        for grade in self.grades:
            grades_sum += grade
        return grades_sum / len(self.grades)