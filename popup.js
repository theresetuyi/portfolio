const projectdata = [
    {
    id: 0,
    title:'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    image: 'Images/Snapshoot1.png',
    imageDesk: 'Images/Desktop1.png',
    class: 'section-label',
    para1:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    },
    {
    id: 1,
    title:'Multi-Post',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    image: 'Images/Snapshoot2.png',
    imageDesk: 'Images/Desktop2.png',
    class: 'section-label desk-content',
    para1:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    },
    {
    id: 2,
    title:'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015','Facebook'],
    image: 'Images/Snapshoot3.png',
    imageDesk: 'Images/Desktop3.png',
    class: 'section-label',
    para1:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript'],
    live: '#',
    source: '#', 
    },
    {
    id: 3,
    title:'Multi-Post ',
    canopy: ['Uber Navigation','CANOPY', 'Back End Dev', '2015'],
    image: 'Images/Snapshoot4.png',
    imageDesk: 'Images/Desktop4.png',
    class: 'section-label d',
    para1:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
     tech: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
    }
    ]
const parent = document.queryselector('.section-text'),
btn = document.querySelector('button'),
x = document.querySelector('X'),
section = document.querySelector('section'),
btn.addEventListener('click',appear),

fonction appear(){
    parent.style.display= 'block',
    section.style.filter ='blur(10px)',
}
x.addEventListener('click',disappear X),
function disappear X (){
    parent.style.display= 'none',
    section.style.filter = 'blur(0px)',
}
parent.addEventListener('click'disappear parents),
function disappear parent(e) {
    if (e.target.className='module-parent'){
        parent.style.display='none',
        section.style.filter ='blur(0px)',
    }
    }