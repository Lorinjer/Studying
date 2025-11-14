let parent = document.querySelector('.parent');

const horses = [
    {
        name: "Russian Heavy",
        age: 2,
        price: "50 000 $",
        image: "https://web-zoopark.ru/loshadi/russkaya_tyazhelovoznaya.html"
    },


    {
        name: "Arabian",
        age: 3,
        price: "170 000 $",
        image: "https://kbpravda.ru/sites/kbpravda.ru/files/styles/700/public/field/image/Besscen..jpg?itok=nz9JsENX"
    },


    {
        name: "Australian Stock Horse",
        age: 2,
        price: "79 000 $",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGuoO4S70e1_qc5QDbvMdKdJ3ZM_7rDEEMw&s"
    },


    {
        name: "Chiniese",
        age: 2,
        price: "42 000 $",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUWmqiTw_WV2mddzClQqhN5hir7RAm7CTQw&s"
    }
];

horses.forEach((element) => {
    const horse = document.createElement('div');
    horse.classList.add('exampler');

    horse.innerHTML = `
        <img src="${element.image}" alt="{element.name}">
        <div class="horse-description">
            <h3>${horse.name}</h3>
            <p>Возраст: ${horse.age}</p>
            <p>Цена: ${horse.price}</p>
        </div>
    `

    parent.appendchild(horse);
});