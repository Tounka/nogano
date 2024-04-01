const entradas = ['Entradas', [
    {
        producto: "Kushiages de Queso",
        descripcion: "5 piezas de brochetas de queso manchego.",
        precio: "$100.00",
        img: "ImgCKushiaguesDeQueso"
        
    },
    {
        producto: "Kushiages de Philadelphia",
        descripcion: "3 piezas de brochetas de queso philadelphia.",
        precio: "$100.00"
    },
    {
        producto: "Kushiages de Camarón",
        descripcion: "3 piezas de camarón relleno de queso philadelphia.",
        precio: "$105.00"
    },
    {
        producto: "Kushiages de Champiñón",
        descripcion: "5 piezas de champiñón, rellenas de philadelphia, con topping de tampico, bañadas en salsa de anguila.",
        precio: "$110.00"
    },
    {
        producto: "Kushiages de Sake",
        descripcion: "3 piezas de salmón, rellenas de queso philadelphia.",
        precio: "$110.00"
    },
    {
        producto: "Canapes",
        descripcion: "5 piezas de salmón o atún, rellenas de philadelphia, bañadas en salsa de cilantro, con un toque de salsa de la casa y furikake.",
        precio: "$115.00"
    },
    {
        producto: "Calamares Nagano",
        descripcion: "Calamares fritos a las hierbas finas con aderezo de la casa.",
        precio: "$125.00"
    },
    {
        producto: "Tostadas de Maguro",
        descripcion: "4 tostaditas con spicy de atún.",
        precio: "$125.00"
    },
    {
        producto: "Tampico Pops",
        descripcion: "cinco piezas de tampico empanizadas rellenas de philadelphia, bañadas con salsa de anguila con un toque de ajonjolí.",
        precio: "$115.00"
    },
    {
        producto: "Kushiages Mixtas",
        descripcion: "Dos kushiages de queso, dos kushiages de camarón y dos kushiages de champiñón.",
        precio: "$125.00"
    }
]];

const sopas = ['Sopas',[
    {
        producto: "Sopa Nagano",
        descripcion: "Camarón, salmón, kanikama, pescado del día, champiñón, brócoli y calabaza con un toque de spicy.",
        precio: "$120.00"
    },
    {
        producto: "Sopa Torisosui",
        descripcion: "Pollo, wakame, huevo, cebollín y champiñón.",
        precio: "$100.00"
    },
    {
        producto: "Sopa Obsushiru",
        descripcion: "Sopa de mariscos, piel de salmón frita y picante.",
        precio: "$115.00"
    },
    {
        producto: "Sopa Miso",
        descripcion: "Sopa tradicional japonesa (hongo, tofu, cebollín, wakame y ajonjolí).",
        precio: "$95.00"
    }
]];

const ensaladas = ['Ensaladas',[
    {
        producto: "Ensalada Ebi",
        descripcion: "Camarones al cilantro con aderezo de cítricos.",
        precio: "$150.00"
    },
    {
        producto: "Ensalada Nagano",
        descripcion: "Camarón, salmón, atún, pulpo con verduras mixtas y aderezo de cilantro.",
        precio: "$180.00"
    },
    {
        producto: "Ensalada Tataki",
        descripcion: "Atún y salmón con aderezo de cilantro y salsa de la casa.",
        precio: "$180.00"
    }
]];
const sashimis = ['Sashimis',[
    {
        producto: "Sashimi Natural",
        descripcion: "Ingrediente a elegir (atún o salmón), bañado con limón y soya.",
        precio: "$155.00"
    },
    {
        producto: "Sashimi Karai",
        descripcion: "Ingrediente a elegir (atún o salmón), con chile serrano y salsa de la casa.",
        precio: "$185.00"
    },
    {
        producto: "Sashimi Currican",
        descripcion: "Spicy Kanikama envuelto en láminas de atún bañado en salsa de cilantro con un toque de salsa de la casa.",
        precio: "$210.00"
    },
    {
        producto: "Sashimi Sellado",
        descripcion: "Laminas de atún, salmón o pescado del día, sellado a la plancha, bañado en salsa de cilantro, con un toque de salsa de la casa.",
        precio: "$180.00"
    },
    {
        producto: "Sashimi General",
        descripcion: "Laminas de atún sobre una cama de pepino, con hilos de cebolla, chile serrano, sal de grano, cebollin y un toque de limón.",
        precio: "$190.00"
    },
    {
        producto: "Sashimi Especial",
        descripcion: "Rollo 'General especial' montado sobre finas láminas de frutas y mariscos.",
        precio: "$280.00"
    }
]];

const nigiris = ['Nigiris', [
    {
        producto: "Nigiri Atún",
        precio: "$90.00"
    },
    {
        producto: "Nigiri Camarón",
        precio: "$85.00"
    },
    {
        producto: "Nigiri Kanikama",
        precio: "$95.00"
    },
    {
        producto: "Nigiri Masago",
        precio: "$100.00"
    },
    {
        producto: "Nigiri Pulpo",
        precio: "$100.00"
    },
    {
        producto: "Nigiri Salmón",
        precio: "$90.00"
    }
]];

const temakis = ['Temakis',[
    {
        producto: "Temaki Atún",
        descripcion: "Relleno de aguacate, pepino y philadelphia, con spicy.",
        precio: "$115.00"
    },
    {
        producto: "Temaki Camarón",
        descripcion: "Relleno de aguacate, pepino y philadelphia, con spicy.",
        precio: "$110.00"
    },
    {
        producto: "Temaki Kanikama",
        descripcion: "Relleno de aguacate, pepino y philadelphia, con spicy.",
        precio: "$115.00"
    },
    {
        producto: "Temaki Pulpo",
        descripcion: "Relleno de aguacate, pepino y philadelphia, con spicy.",
        precio: "$120.00"
    },
    {
        producto: "Temaki Salmón",
        descripcion: "Relleno de aguacate, pepino y philadelphia, con spicy.",
        precio: "$115.00"
    }
]];



const pastaUdon = [ 'Pasta Udon',
[    {
        producto: "Pasta Udon Camarón",
        descripcion: "Verduras salteadas en salsa tonkatsu.",
        precio: "$190.00"
    },
    {
        producto: "Pasta Udon Pollo",
        descripcion: "Verduras salteadas en salsa tonkatsu.",
        precio: "$180.00"
    },
    {
        producto: "Pasta Udon Arrachera",
        descripcion: "Verduras salteadas en salsa tonkatsu.",
        precio: "$170.00"
    }]
];

const teppanyaki = ['Teppanyaki',
[    {
        producto: "Teppanyaki Arrachera",
        descripcion: "Verduras salteadas acompañadas de arroz.",
        precio: "$185.00"
    },
    {
        producto: "Teppanyaki Atún",
        descripcion: "Verduras salteadas acompañadas de arroz.",
        precio: "$195.00"
    },
    {
        producto: "Teppanyaki Camarón",
        descripcion: "Verduras salteadas acompañadas de arroz.",
        precio: "$190.00"
    }]
];

const yakimeshi = ['Yakimeshi',
[    {
        producto: "Yakimeshi Especial de Camarón",
        descripcion: "Arroz frito de camaron ,verduras salteadas con tampico, philadelphia y aguacate.",
        precio: "$155.00",
        img: "ImgCYakimeshiEsp"
    },
    {
        producto: "Yakimeshi Arrachera",
        descripcion: "Arroz frito con verduras salteadas.",
        precio: "$120.00"
    },
    {
        producto: "Yakimeshi Camarón",
        descripcion: "Arroz frito con verduras salteadas.",
        precio: "$125.00"
    }]
];

const gohan = [ 'Gohan',
 [   {
        producto: "Gohan Horneado",
        descripcion: "Capa de aguacate, philadelphia y tampico, coronado con spicy de camarón. Arroz al vapor.",
        precio: "$185.00",
        img: "ImgCGohanHorneado"
    },
    {
        producto: "Gohan Especial",
        descripcion: "Arrachera, pollo, camarón, tampico, philadelphia y aguacate. Arroz al vapor.",
        precio: "$150.00",
        img: "ImgCGohanEspecial"
    },
    {
        producto: "Gohan Arrachera",
        descripcion: "Arroz al vapor.",
        precio: "$120.00"
    }]
];

const rollosSencillos = [ 'Rollos Sencillos',
[    {
        producto: "Rollo Pinky Roll",
        descripcion: "Por dentro: camarón empanizado y philadelphia. Por fuera: camarón y aguacate con topping de tampico, bañado en salsa de anguila.",
        precio: "$155.00",
        img: "ImgCRolloPinky"
    },
    {
        producto: "Rollo California",
        descripcion: "Por dentro: camarón o kanikama, philadelphia, pepino y aguacate.",
        precio: "$105.00"
    },
    {
        producto: "Rollo Philadelphia",
        descripcion: "Por dentro: salmón, pepino y aguacate. Por fuera: philadelphia.",
        precio: "$135.00"
    }]
];

const spicyRolls = [ 'Spicy Rolls',
[    {
        producto: "Spicy Roll Atún",
        descripcion: "Por dentro: philadelphia, pepino y aguacate. Por fuera: atún.",
        precio: "$175.00"
    },
    {
        producto: "Spicy Roll Camarón",
        descripcion: "Por dentro: philadelphia, pepino y aguacate. Por fuera: camarón.",
        precio: "$160.00"
    },
    {
        producto: "Spicy Roll Kanikama",
        descripcion: "Por dentro: philadelphia, pepino y aguacate. Por fuera: kanikama.",
        precio: "$185.00"
    }]
];

const rollosDeLaCasa = ['Rollos De La Casa',
[    {
        producto: "Rollo General Especial",
        descripcion: "Por dentro: camarón, kanikama, philadelphia y aguacate. Por fuera: forrado de atún, laminas de cebolla, serrano, sal de grano, con un toque de limón. Picante.",
        precio: "$175.00",
        img: "ImgCRolloGeneralEspecial"
    },
    {
        producto: "Nagano Roll",
        descripcion: "Por dentro: camarón empanizado y kanikama tempura. Por fuera: philadelphia, aguacate, mango y un toque de masago, bañado en salsa de mango, salsa de anguila y salsa spicy.",
        precio: "$190.00"
    },
    {
        producto: "Rollo Masago Especial",
        descripcion: "Por dentro: camarón capeado. philadelphia, pepino, aguacate y chiles toreados. Por fuera: forrado de masago y un toque de furikake. Picante.",
        precio: "$180.00"
    }]
];

const rollosEmpanizados = ['Rollos Empanizados', 
[    {
        producto: "Sakura Roll",
        descripcion: "Por dentro: camarón o surimi, philadelphia y aguacate. Por fuera: queso americano, philadelphia, manchego, con topping de tampico.",
        precio: "$145.00",
        img: "ImgCSakura"
    },
    {
        producto: "Rollo Tako inn",
        descripcion: "Por dentro: camarón, philadelphia y aguacate. Por fuera: spicy de camarón y pulpo.",
        precio: "$185.00",
        img: "ImgCRolloTacoInn"
    },
    {
        producto: "Miyagui Roll",
        descripcion: "Por dentro: camarón, philadelphia y aguacate. Por fuera: queso gratinado.",
        precio: "$125.00"
    }]
];

const rollosHorneados = ['Rollos Horneados',
[    {
        producto: "Chiny Especial",
        descripcion: "Por dentro: camarón, philadelphia y pepino. Por fuera: forrado de aguacate con topping de pulpo y kanikama. Picante.",
        precio: "$185.00",
        img: "ImgCChillyEspecial"
    },
    {
        producto: "Pily Roll",
        descripcion: "Por dentro: camarón, philadelphia y pepino. Por fuera: forrado de salmón con topping de salmón y camarón. Picante.",
        precio: "$205.00",
        img: "ImgCPillyRoll"
    },
    {
        producto: "Isa Hot",
        descripcion: "Por dentro: camarón, philadelphia y pepino. Por fuera: forrado de aguacate con topping de anguila y kanikama con spicy.",
        precio: "$210.00"
    }]
];

const postres = [ 'Postres',
[    {
        producto: "Dorayaki",
        descripcion: "Panqueque relleno de frijol rojo dulce, acompañado de helado de vainilla.",
        precio: "$70.00"
    },
    {
        producto: "Tempura de Helado",
        descripcion: "Helado envuelto en masa tempura, bañado en chocolate.",
        precio: "$75.00"
    },
    {
        producto: "Yakitori de Plátano",
        descripcion: "Plátano asado con miel y ajonjolí.",
        precio: "$60.00"
    },
    {
        producto: "Helado Frito",
        descripcion: "Helado de vainilla empanizado, con sirope de chocolate.",
        precio: "$65.00"
    }]
];

const bebidas = ['Bebidas', 
 [   {
        producto: "Agua Natural",
        descripcion: "Agua Natural",
        precio: "$25.00"
    },
    {
        producto: "Refresco de 355 ml",
        descripcion: "Refresco de 355 ml",
        precio: "$30.00"
    },
    {
        producto: "Refresco de 600 ml",
        descripcion: "Refresco de 600 ml",
        precio: "$40.00"
    },
    {
        producto: "Jugos Naturales",
        descripcion: "Jugos Naturales",
        precio: "$35.00"
    },
    {
        producto: "Cerveza Nacional",
        descripcion: "Cerveza Nacional",
        precio: "$45.00"
    },
    {
        producto: "Cerveza Importada",
        descripcion: "Cerveza Importada",
        precio: "$60.00"
    },
    {
        producto: "Sake",
        descripcion: "Sake",
        precio: "$85.00"
    },
    {
        producto: "Vino Tinto o Blanco",
        descripcion: "Vino Tinto o Blanco",
        precio: "$90.00"
    }]
];

export const menuCompleto = [
    entradas,
    sopas,
    ensaladas,
    sashimis,
    nigiris,
    temakis,
    pastaUdon,
    teppanyaki,
    yakimeshi,
    gohan,
    rollosSencillos,
    spicyRolls,
    rollosDeLaCasa,
    rollosEmpanizados,
    rollosHorneados,
    postres,
    bebidas
];


const funMenuConImg = (menu) => {
    let menuConImg = []; // Define un arreglo donde almacenarás el resultado
    
    const allPlatos = menu.flatMap(categoria => categoria[1]);
    const platosConImagen = allPlatos.filter(plato => plato.img);
    for (let i = platosConImagen.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [platosConImagen[i], platosConImagen[j]] = [platosConImagen[j], platosConImagen[i]];
    }
    
    menuConImg.push(...platosConImagen.slice(0, 9));
    
    return menuConImg; 
}

export const menuConImg = funMenuConImg(menuCompleto);



