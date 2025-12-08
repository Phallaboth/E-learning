$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        50:{
            items:3
        },
        100:{
            items:5
        }
    }
})

const course = [
    {
        id:1,
        title:"Learn HTML",
        teacher:"John Doe",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
        discription:"Learn the basics of HTML and build your first web page.",
    },
    {
        id:2,
        title:"Learn CSS",
        teacher:"Jason Williams",
        image:"https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png",
        discription:"CSS is the art of turning structure into style—where code meets creativity."
    },
    {
        id:3,
        title:"Learn JavaScript",
        teacher:"Rosita Julia",
        image:"https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-640x400.png",
        discription:"JavaScript is the programming language of the Web. It makes web pages interactive and dynamic.",
    },
];
