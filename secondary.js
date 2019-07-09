const errortext = document.querySelector('#errortxt');
let items = [];
class User {
    constructor(name) {
        this.name = name;
        this.id = items.length;
    }

}
class store {
    static getitem() {

        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    static additem(item) {
        const items = this.getitem();
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }
    static removeitem(id) {
        const items = this.getitem();
        items.forEach((item, index) => {
            if (item.id === id) {
                items.splice(index, 1);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }
}
class UI {
    static displayitem() {
        let items = store.getitem();
        items.forEach((item) => this.additemtolist(item));
    }

    static additemtolist(item) {
        const list = document.querySelector('#users');
        const row = document.createElement('li');
        row.innerHTML = `
        <li class='people'>${item.name}<div class='x' data_id='${item.id}'>X</div></li>
        `;
        list.appendChild(row);
        console.log(row);
    }
    static actions(bg_color, message) {
        const style = document.createElement('style')
        const div = document.createElement('div');
        div.id = 'errortxt';
        const container = document.querySelector('.container');
        const adduser = document.querySelector('#adduser');
        const head = document.querySelector('head');
        const nameinput = document.querySelector('#userinput');
        style.innerHTML = `#errortxt{
            color: white ;
            background-color: ${bg_color};
        }`;
        head.appendChild(style);
        container.insertBefore(div, adduser);
        errortxt.innerText = message;
        setTimeout(() => {
            errortxt.remove();
            nameinput.classList.remove('error');
        }, 3000);
    }
    static delitem(el) {
        if (el.classList.contains('x')) {
            el.parentElement.remove();
        }
    }

    static clearance() {
        const nameinput = document.querySelector('#userinput');
        nameinput.value = '';
    }
}
window.addEventListener('load', () => {
    UI.displayitem();
    document.querySelector('#add').addEventListener('click', () => {
        const nameinput = document.querySelector('#userinput');
        if (nameinput.value === '') {
            UI.actions('red', 'plz fill all the fields');
            nameinput.classList.add('error');
            nameinput.focus();
            return;
        } else {
            const item1 = new User(nameinput.value);
            UI.additemtolist(item1);
            store.additem(item1);
            console.log(items);
            UI.actions('green', 'item added successfully');
            UI.clearance();
        }

    })
    document.querySelector('#users').addEventListener('click', (e) => {
        UI.delitem(e.target);
        store.removeitem(parseInt(e.target.getAttribute('data_id')));
    })
})