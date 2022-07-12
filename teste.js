/* const response = fetch('https://jsonplaceholder.typicode.com/users')
//console.log(response)
.then(response => {
    return response.json()
})
.then(data => {
    const users = data;
    var ol = document.querySelector('.lista ol');

    users.forEach(u => {
        var li = document.createElement('li');
        li.className = 'list-group-item'

        li.textContent = u.name
        ol.appendChild(li);
    });

//    users.map(u => {
 //       var listItem = document.createElement('li');
  //      listItem.className = 'list-group-item'
  //  })
  //  console.log(data)
}) */

const getUsers = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const users = data;
            var tbody = document.querySelector('#tbody');

            users.forEach(u => {
                var tr = document.createElement('tr');
                tbody.appendChild(tr);

                var th = document.createElement('th');
                tr.appendChild(th);
                th.textContent = u.id

                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = u.name

                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = u.username

                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = u.email

                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = u.address.street

                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = u.company.name

                //li.textContent = u.name
                //table.appendChild(li);
            });

            /* users.map(u => {
                var listItem = document.createElement('li');
                listItem.className = 'list-group-item'
            }) */
            console.log(data)
        });
}

getUsers();

const getuser = () => {
    const id = document.getElementById('idUser').value;
    console.log()

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        //console.log('user', response)
        .then(response => {
            return response.json()
        })
        .then(data => {

            console.log(data)
        });
}

const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            getUser(json.id)
        });
}

const getUser = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

addPost();