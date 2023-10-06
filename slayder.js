const dataInput = [
    {
        city: `Rostov-on-Don <br> LCD admiral`,
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
    },
    {
        city: `Sochi <br> Thieves`,
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request',
    },
    {
        city: `Rostov-on-Don <br> Patriotic`,
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request',
    }
];

const leftSlayd = document.querySelector('.left');
const rightSlayd = document.querySelector('.right');
const discription = document.querySelectorAll('.div_description_h3');
const discripArr = [...discription];
const svg = document.querySelectorAll('.forColor');
const svgArr = [...svg];
const headerImage = document.querySelectorAll('.image_cp');
const headerImageArr = [...headerImage];
const image = document.querySelectorAll('.image');
const imageArr = [...image];

let curentData = 0;
let curentDisc = 0;

function setData (index) {
    const obj = dataInput[index];
    for (let key in obj) {
        const newParagraf = document.createElement('p');
        newParagraf.classList.add('discripPar');
        newParagraf.innerHTML = `${obj[key]}`;
        discripArr[curentDisc].appendChild(newParagraf);
        curentDisc++     
    };
    curentDisc = 0;
    svgArr[curentData].style = 'fill: white;';
    headerImageArr[curentData].style = 'color: #E3B873; text-decoration: underline'
    imageArr[curentData].style.display = 'block'
};   
setData(curentData)

rightSlayd.addEventListener('click', () => {
    imageArr[curentData].style.display = 'none'
    headerImageArr[curentData].style = 'color: rgb(84, 84, 84); text-decoration: none;'
    svgArr[curentData].style = fill="rgb(84, 84, 84)"
    discripArr.forEach(x => {
        x.lastChild.remove()
    })
    curentData++
    if (curentData > 2) {
        curentData = 0
    }
    setData(curentData)
});
leftSlayd.addEventListener('click', () => {
    imageArr[curentData].style.display = 'none'
    headerImageArr[curentData].style = 'color: rgb(84, 84, 84); text-decoration: none;'
    svgArr[curentData].style = 'fill: rgb(84, 84, 84)';
    discripArr.forEach(x => {
        x.lastChild.remove()
    })
    curentData--
    if (curentData < 0) {
        curentData = 2
    }
    setData(curentData)
});
