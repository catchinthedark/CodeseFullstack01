var classGrade = [
    { ID: 20194849, grade: 9 },
    { ID: 20194648, grade: 8.75 },
    { ID: 20194750, grade: 9.5 }
]

//Find
var ID = classGrade.find(item => item.grade > 9);
console.log(ID);

//Sort 
var sort = classGrade.sort(function(a, b) { return a.grade - b.grade });
console.log(sort);

//Filter
var filter = classGrade.filter(element => element.grade >= 9);
console.log(filter);

//Sum
var sum = classGrade.reduce((a, b) => a + b.grade, 0);
console.log(sum);

//Paging
function paging(array, pageSize) {
    var result = [];
    while (array.length) {
        result.push(array.splice(0, pageSize));
    }
    return result;
}

var result = paging([1, 2, 3, 4, 5, 6, 7], 2);
console.log(result);