let users = [];
const userinput = document.querySelector('#userinput');
const buttonadd = document.querySelector('#add')
const userlist = document.querySelector('#users');


window.addEventListener('load', () => {
    add_users();
    //delete_users();
});
userlist.addEventListener('click', (e) => {
    delete_users(e, parseInt(e.target.getAttribute('data_id')));
});

const add_users = () => {
    buttonadd.addEventListener('click', () => {
        validate();
        clearafterenter();
        console.log(users);
    });

}
const validate = () => {
    if (userinput.value === '') {
        const div = document.createElement('div');
        div.id = 'errortext';
        const container = document.querySelector('.container');
        const adduser = document.querySelector('#adduser');
        const style = document.createElement('style');
        const head = document.querySelector('head');
        style.innerHTML = `#errortext{
            color: red;
            font-weight: none;
            font-size: 12px;
            background-color: white;
        }`;
        head.appendChild(style);
        container.insertBefore(div, adduser);
        const errortext = document.querySelector('#errortext');

        errortext.innerText = 'plz fill all the fields';
        userinput.classList.add('error');
        userinput.focus();
        setTimeout(() => {
            errortext.remove();
            userinput.classList.remove('error');
        }, 3000);
        return;
    } else {
        let userid = {
            name: userinput.value,
            id: users.length
        };
        users = [...users, userid];
        generatelist(users);

        minorclearance();
    }
}
const actions = (bg_color, message) => {
    const div = document.createElement('div');
    div.id = 'errortxt';
    const container = document.querySelector('.container');
    const adduser = document.querySelector('#adduser');
    const style = document.createElement('style');
    const head = document.querySelector('head');
    style.innerHTML = `#errortxt{
        color: white ;
        background-color: ${bg_color};
    }`;
    head.appendChild(style);
    container.insertBefore(div, adduser);
    const errortxt = document.querySelector('#errortxt');
    errortxt.innerText = message;
    setTimeout(() => {
        errortxt.remove();
    }, 3000);
}
const clearafterenter = () => {
    userinput.value = '';
}
const minorclearance = () => {
    userinput.classList.remove('error');
}


const generatelist = (users) => {
    // users=[...users,userinput.value];
    //const u = users.join(' ');
    //console.log(u);
    //const a = u.split(' ');
    const list = users.map((usr) => {
        return `<li class='people'>${usr.name}<div class='x' data_id='${usr.id}'>x</div></li>
        `;
    });
    const joined = list.join('');
    userlist.innerHTML = joined;


    actions('green', 'Details Added');
    return;
    /*document.addEventListener('click', (e) => {

            if (e.target.classList.contains('x')) {
                let id = parseInt(e.target.getAttribute('data_id'));
                let filterlist = users.filter(x => x.id !== id);
                users = filterlist;
                generatelist();

        }
    })*/
}
/*const delete_users = () => {
    document.addEventListener('click', (e) => {

        if (e.target.classList.contains('x')) {
            let id = parseInt(e.target.getAttribute('data_id'));
            let filterlist = users.filter(x => x.id !== id);
            users = filterlist;
            generatelist(filterlist);
        }
    })
}
console.log('clicked');*/
/*const delete_users = () => {
    userlist.addEventListener('click', (e) => {
        if (e.target.classList.contains('x')) {

            terminate(e.target);

            return;
        } else {
            return;
        }
    });
}*/
const delete_users = (e, id) => {

    if (e.target.classList.contains('x')) {
        let filterlist = users.filter((x) => x.id !== id);
        users = filterlist;
        generatelist(users);
    }
}


/*const terminate = (id, e) => {
    if (id == parseInt(e.target.getAttribute('data_id'))) {
        console.log('clicked');
        e.target.parentElement.remove();
        return;
    } else {
        return;
    }
}*/
const terminate = (el) => {
    el.parentElement.remove();
    return;
}

//Storage