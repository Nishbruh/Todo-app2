let users = [];
const userinput = document.querySelector('#userinput');
const buttonadd = document.querySelector('#add')
const userlist = document.querySelector('#users');
const errortxt = document.querySelector('#errortxt');
const style = document.createElement('style');
window.addEventListener('load', () => {
    add_users();
    //delete_users();
})
const add_users = () => {
    buttonadd.addEventListener('click', () => {
        validate();
        clearafterenter();
    })
    userinput.addEventListener('click', clear);

}
const validate = () => {
    if (userinput.value === '') {
        errortxt.innerText = 'plz fill all the fields';
        const style = document.createElement('style');
        const head = document.querySelector('head');
        style.innerHTML = `#errortxt{
            color: red;
            font-weight: none;
            font-size: 12px;
            background-color: white;
        }`;
        head.appendChild(style);
        userinput.classList.add('error');
        userinput.focus();
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
    const style = document.createElement('style');
    const head = document.querySelector('head');
    style.innerHTML = `#errortxt{
        color: white ;
        background-color: ${bg_color};
    }`;
    head.appendChild(style);
    errortxt.innerText = message;
}

const clear = () => {
    const style = document.createElement('style');
    errortxt.innerHTML = '';
    userinput.classList.remove('error');
    console.log(style);
    console.log(userinput);
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
        return `<li class='people' >${usr.name}<div class='x' data_id='${usr.id}'>x</div></li>
        `;
    })
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