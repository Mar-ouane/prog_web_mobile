document.addEventListener("DOMContentLoaded", function() {
    fetch('students.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const persons = xmlDoc.getElementsByTagName("person");
            const demoDiv = document.getElementById("demo");
            // creating the table
            const table = document.createElement("table");
            table.innerHTML = `
                <tr>
                    <th>Full Name</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Email</th>
                    
                <tr>
                    `
            demoDiv.appendChild(table);
            

            for (let i = 0; i < persons.length; i++) {
                const person = persons[i];
                const personTr = document.createElement("tr");
                const gender = person.getAttribute("gender").charAt(0).toUpperCase();
                personTr.innerHTML = `
                    <td>${person.getElementsByTagName("firstName")[0].textContent} ${person.getElementsByTagName("lastName")[0].textContent}</td>
                    <td>${person.getElementsByTagName("address")[0].textContent}</td>
                    <td>${gender}</td>
                    <td>${person.getElementsByTagName("email")[0].textContent}</td>
                `;
                table.appendChild(personTr);
            }

            // Add another person just before the last one
            const newPersonTr = document.createElement("tr");
            newPersonTr.innerHTML = `
                <td>ahmed something</td>
                <td>14 , --,Rabat</td>
                <td>M</td>
                <td>ahmed@gmail.com</td>
            `;
            table.insertBefore(newPersonTr, table.lastChild);

            // Modify the content of the second person
            if (table.children.length > 1) {
                const secondPersonTr = table.children[2];
                secondPersonTr.innerHTML = `
                    <td>amine kola</td>
                    <td>456 street, Benguerir, Morocco</td>
                    <td>M</td>
                    <td>new-email@mail.com</td>
                `;
            }
        })
        .catch(error => console.error('Error fetching the XML file:', error));
});