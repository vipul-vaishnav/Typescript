"use strict";
const s1 = {
    name: "Mark",
    age: 17,
    likes_sports: false,
    marks: {
        marks_in_physics: 75,
        marks_in_maths: 61,
        marks_in_chemistry: 88,
    },
    eligible_for_next_class() {
        const total_marks = this.marks.marks_in_chemistry +
            this.marks.marks_in_maths +
            this.marks.marks_in_physics;
        if (total_marks < 90) {
            return false;
        }
        return true;
    },
    greeting(itr) {
        let str = "";
        for (let i = 0; i < itr; i++) {
            str += "Hello " + this.name + "\n";
        }
        return str;
    },
};
const s2 = {
    name: "Frizzy",
    age: 16,
    marks: {
        marks_in_physics: 31,
        marks_in_maths: 35,
        marks_in_chemistry: 19,
    },
    eligible_for_next_class() {
        const total_marks = this.marks.marks_in_chemistry +
            this.marks.marks_in_maths +
            this.marks.marks_in_physics;
        if (total_marks < 90) {
            return false;
        }
        return true;
    },
    greeting(itr) {
        let str = "";
        for (let i = 0; i < itr; i++) {
            str += "Hello " + this.name + "\n";
        }
        return str;
    },
};
console.log(s1.eligible_for_next_class());
console.log(s2.eligible_for_next_class());
console.log(s1.greeting(5));
console.log(s2.greeting(8));
//# sourceMappingURL=advancedTypes.js.map