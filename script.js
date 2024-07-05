function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData)

}

function readFormData(){
    var formData={};
    formData['fullName']=document.getElementById('fullName').value;
    formData['empcode']=document.getElementById('empcode').value;
    formData['salary']=document.getElementById('salary').value;
    formData['city']=document.getElementById('city').value;
    return formData;

}

function insertNewRecord(data){
    var table=document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.fullName;
    cell2=innerHTML.insertCell(1);
    cell2.innerHTML=data.empcode;
    cell3=innerHTML.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=innerHTML.insertCell(3);
    cell4.innerHTML=data.city;
    cell4=innerHTML.insertCell(4);
    cell4.innerHTML=`<a>Edit</a>
                     <a>Delete</a> `;

}