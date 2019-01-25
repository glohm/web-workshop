var students = [
    {name: "John", score: 10, id: "A100"}, // 0 {Object} => students[0] => students[0].score => total  
    {name: "Larry", score: 60, id: "A101"}, // 1
    {name: "Joseph", score: 50, id: "A102"}, // 2
    {name: "Karla", score: 100, id: "A103"}, //3
];

//document.writeln(students.length);

document.write("<pre class= 'alert alert-secondary'>");
document.write(JSON.stringify(students));
document.write("</pre>");

var names = [];

students.forEach(student => {
    names.push(student.name);
});

document.writeln(names);

//document.write("<pre>");
//document.writeln("Average: " + calculateAverage());
//document.writeln(`Average: ${calculateAverage()}`);
//document.write("</pre>");

function calculateAverage(){

    var average = 0;
    students.forEach(student => {
        average = average + student.score;
    });
    average = average / students.length;

    return average;
}

function loadData(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
    while (i < students.length)
    {
        var listItem = document.createElement("li");
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1; // Alternatively, use i++;

        // Other ways:
        // i += 2;
        // i += 3;
    }
}

function displayAverage()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge");
    paragraph.classList.add("badge-pill");
    paragraph.classList.add("badge-secondary");
    paragraph.innerText = "Average: " + calculateAverage();

    resultSection.appendChild(paragraph);
}

function myReplacer(name, val) {
    if (typeof val === 'string') {
        return val.toString().toUpperCase();  
     } else {
        return val; // return as is
    }
};

function fillTable(){
    var table = document.getElementById("grid");

    students.forEach(student => {
        var row = document.createElement('section') 
        row.className = 'row'
        
        var column1 = document.createElement('section')
        var column2 = document.createElement('section')
        var column3 = document.createElement('section')
        column1.className = "col-sm"
        column2.className = "col-sm"
        column3.className = "col-sm"

        table.append(row);
        row.appendChild(column1);
        column1.innerText = student.name;
        row.appendChild(column2);
        column2.innerText = student.score;
        row.appendChild(column3);
        column3.innerText = student.id;

        if(student.score <60){
            column1.classList.add("badge");
            column1.classList.add("badge-pill");
            column1.classList.add("badge-danger");
            column2.classList.add("badge");
            column2.classList.add("badge-pill");
            column2.classList.add("badge-danger");
            column3.classList.add("badge");
            column3.classList.add("badge-pill");
            column3.classList.add("badge-danger");
        }
    });
}
