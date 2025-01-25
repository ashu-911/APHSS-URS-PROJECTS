document.addEventListener("DOMContentLoaded", function () {
    const yearContainer = document.getElementById("year-container");

    // Sample Data (Replace with actual details)
    const projects = {
        2005: { title: "1st Urs stall", desc: "This was the first stall of our school.This started a wonderfull journey of our school", img: "images/sample1.jpg" },
        2006: { title: "Project of 2006", desc: "Description for 2006", img: "images/sample2.jpg" },
        2007: { title: "Project of 2007", desc: "Description for 2007", img: "images/sample3.jpg" },
        2008: { title: "Project of 2008", desc: "Description for 2008", img: "images/sample4.jpg" },
        2009: { title: "Project of 2009", desc: "Description for 2009", img: "images/sample5.jpg" },
        2010: { title: "Project of 2010", desc: "Description for 2010", img: "images/sample6.jpg" },
        2011: { title: "Project of 2011", desc: "Description for 2011", img: "images/sample7.jpg" },
        2012: { title: "Project of 2012", desc: "Description for 2012", img: "images/sample8.jpg" },
        2013: { title: "Project of 2013", desc: "Description for 2013", img: "images/sample9.jpg" },
        2014: { title: "Project of 2014", desc: "Description for 2014", img: "images/sample10.jpg" },
        2015: { title: "Project of 2015", desc: "Description for 2015", img: "images/sample11.jpg" },
        2016: { title: "Project of 2016", desc: "Description for 2016", img: "images/sample12.jpg" },
        2017: { title: "Project of 2017", desc: "Description for 2017", img: "images/sample13.jpg" },
        2018: { title: "Project of 2018", desc: "Description for 2018", img: "images/sample14.jpg" },
        2019: { title: "Project of 2019", desc: "Description for 2019", img: "images/sample15.jpg" },
        2020: { title: "Project of 2020", desc: "Description for 2020", img: "images/sample16.jpg" },
        2021: { title: "Project of 2021", desc: "Description for 2021", img: "images/sample16.jpg" },
        2022: { title: "Project of 2022", desc: "Description for 2022", img: "images/sample18.jpg" },
        2023: { title: "Project of 2023", desc: "Description for 2023", img: "images/sample19.jpg" },
        2024: { title: "Project of 2024", desc: "Description for 2024", img: "images/sample20.jpg" },
    };

    // Generate buttons dynamically
    for (let year = 2005; year <= 2024; year++) {
        let button = document.createElement("button");
        button.classList.add("year-button");
        button.textContent = year;

        // Add project details inside the button
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-details");
        projectDiv.innerHTML = `
            <h3>${projects[year]?.title || 'No Title'}</h3>
            <p class="project-description">${projects[year]?.desc || 'No Description'}</p>
            <img src="${projects[year]?.img || ''}" alt="Project Image" class="project-image">
        `;
        button.appendChild(projectDiv);

        // Toggle project details visibility on click
        button.onclick = () => toggleProjectDetails(projectDiv);

        yearContainer.appendChild(button);
    }

    function toggleProjectDetails(projectDiv) {
        // Toggle visibility
        if (projectDiv.style.display === "none" || !projectDiv.style.display) {
            projectDiv.style.display = "block";
        } else {
            projectDiv.style.display = "none";
        }
    }
});
