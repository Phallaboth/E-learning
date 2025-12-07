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

const data = [
    {
        id:1,
        title:"Learn HTML",
        teacher:"John Doe",
        image:"",
        discription:"Learn the basics of HTML and build your first web page.",
    },
    {
        id:1,
        title:"Learn CSS",
        teacher:"Jason Williams",
        image:"",
        discription:"CSS is the art of turning structure into style—where code meets creativity."
    },
    {
        id:3,
        title:"Learn JavaScript",
        teacher:"Rose Simmons",
        image:"",
        discription:"JavaScript is the programming language of the Web. It makes web pages interactive and dynamic.",
    },
];