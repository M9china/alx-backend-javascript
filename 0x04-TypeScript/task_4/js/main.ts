export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;

export const cTeacher:Subjects.Teacher = {
    experienceTeachingC: 10,
    firstName: "Nqobile",
    lastName: "Mvundlela"
}

export const cppSubject = new Subjects.Cpp;
cppSubject.setTeacher(cTeacher)

console.log('C++');
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());
