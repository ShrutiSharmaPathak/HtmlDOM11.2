var count=0;
function addRow()
{
    var table = document.getElementById("dynamic_table"); //getting the table by id
    var row = table.insertRow(-1);       //insert row in a table
    for (let i=0 ;i<2;i++) //for loop to add two cells in a row
        {  
            count++;    //cell counter
            var cell=row.insertCell(-1); // insert a cell in the row
            cell.innerText="Cell"+count; // setting the text into the cell
        }
}














