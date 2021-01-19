// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function to build table I worked with my tutor on this
function buildTable(data){
    // First, clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event that calls a function name is handleClick and use d3 to prevent form for refreshing
function handleClick(){
    d3.event.preventDefault() // prevent the form from refreshing the page
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if (date){
// Filter data to select by using identity operator to verify both dates are the same
        filterData = filterData.filter((row) => row.datetime === date);
    }

// build the table based on the dates selected 
// THIS PART DOESN'T WORK not sure why
    buildTable(filterData);
}

//select all the elements that match
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
