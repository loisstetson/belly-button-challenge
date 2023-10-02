function init() {

    d3.json("samples.json").then(function (data) {
        dataSet = data;

        console.log(dataSet);

        displayMetaData(940, dataSet);
        displayHBarChart(940, dataSet);
        displayBubbleChart(940, dataSet);

        var optionMenu = d3.select("#selDataset");

        data.names.forEach(function (name) {
            optionMenu.append("option").text(name);
        });
    });
}
