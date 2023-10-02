# belly-button-challenge

Here's a step-by-step guide I used for completing the assignment:

Start by using the D3 library to fetch data from the following URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

After fetching the data, create a horizontal bar chart. This chart should have a dropdown menu allowing users to select an individual. The chart should display the top 10 Operational Taxonomic Units (OTUs) found in the selected individual.

For the bar chart:

Use the "sample_values" data as the values for the bars.
Utilize "otu_ids" as the labels for the bars.
Provide "otu_labels" as hovertext for the chart.
Next, create a bubble chart to visualize each sample:

Use "otu_ids" for the x-axis values.
Use "sample_values" for the y-axis values.
Adjust the marker size based on "sample_values."
Customize the marker colors using "otu_ids."
Display "otu_labels" as text values for the bubbles.
Display the sample metadata, which includes demographic information about the selected individual. You should show each key-value pair from the metadata JSON object somewhere on the page.

Implement functionality to update all the plots whenever a new sample is selected using the dropdown menu.

Feel free to design the layout of your dashboard as you prefer. You can create a user-friendly and visually appealing interface to present your charts and metadata.

Finally, deploy your web application to a free static page hosting service like GitHub Pages. After deploying, submit the links to your deployed app and your GitHub repository. Ensure that your repository contains regular commits and includes a detailed README.md file to guide users on how to interact with your dashboard and understand your code.

![image](https://github.com/loisstetson/belly-button-challenge/assets/127718619/cade50b4-1524-4a42-80b4-e360e7bace73)


![image](https://github.com/loisstetson/belly-button-challenge/assets/127718619/544d0dd0-71d2-4b0e-8afa-50617045ac9c)

![image](https://github.com/loisstetson/belly-button-challenge/assets/127718619/fcba848a-6c81-459a-99ff-a31d8f9ec93f)

![image](https://github.com/loisstetson/belly-button-challenge/assets/127718619/de3dabbe-3212-4a16-be88-88b322365077)


