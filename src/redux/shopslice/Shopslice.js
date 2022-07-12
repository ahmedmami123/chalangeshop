import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoplist: [
    {
      category: "Computer",
      brands: "Asus",
      Option: "Intel Core i3",
      description:
        "Ecran 15.6 HD LED - Processeur Intel Core i3-3217U 3é Génération , 1.8 Ghz , 3 Mo de mémoire cache - 4 Go de mémoire - Disque 500 Go - Carte graphique Intel HD Graphics - Graveur DVD - Lecteur de cartes - Wifi - Bluetooth - HDMI - 1xUSB 3.0 - Webcam avec micro - Garantie 2 ans",
        url:"https://www.wiki.tn/38843-thickbox_default/pc-portable-asus-x540ua-i3-7e-gen-4go-500go-noir-.jpg",
        price:"1200.000",
        raiting:4.5,
    },
    {
      category: "Computer",
      brands: "HP",
      Option: "Intel Core i5",
      description:
        "Ecran 15.6 HD LED - Processeur Intel Core i5-8250U, jusqu’à 3.4 GHz, 6 Mo de mémoire cache - 8 Go de mémoire DDR4-2400 - Disque 1 To, 5400 tr/min - Carte graphique NVIDIA GeForce MX110, 2 Go de mémoire DDR3 dédiée - Graveur DVD - Lecteur de cartes - Wifi - Bluetooth - 2x USB 3.1 - HDMI - Webcam avec Micro - Couleur Silver - Garantie 1 an",
        url:"https://www.wiki.tn/50009/pc-portable-hp-15-da1035nk-i5-8e-gen-8go-1to-win-10-blanc.jpg",
        price:"1600.000",
        raiting:4,
    },
    {
      category: "Computer",
      brands: "Lenovo",
      Option: "Intel Core i7",
      description:
        "Ecran 15.6 Full HD LED - Processeur Intel Core i7-8550U, up to 4 GHz, 8 Mo de mémoire cache - Mémoire 8 Go - Disque 1 To - Carte graphique Nvidia GeForce MX150, 2 Go de mémoire dédiée - Wifi - Bluetooth - HDMI - 1x USB 3.1 Type-C - 2x USB 3.0 - Lecteur de cartes - Couleur Gris  - Garantie 1 an + SIM Orange Offerte (50 Go)",
        url:"https://media.cdnws.com/_i/45353/37066/2993/66/materiels-informatique-pc-portable-lenovo-v15-g2-itl-82kb000nfr-infinytech-reunion-01.jpeg",
        price:"2200.000",
        raiting:3.5,
    },
    {
      category: "Computer",
      brands: "Msi",
      Option: "Intel Core i9",
      description:
        "PC Portable Gaming MSI Raider GE76 12UHS-601FR 17.3 Intel Core i9 64 Go RAM 2 To SSD Noir et Gris. PC Portable. Modèle du processeur : Intel Core i9 12900H.",
        url:"https://m.media-amazon.com/images/I/81-9uwGF0hL._AC_SY355_.jpg",
        price:"3299.000",
        raiting:3,
    },
    {
      category: "Phone & Tablet",
      brands: "Sumsung",
      Option: "Octa Core",
      description:
        "Smartphone TCL 205 en gris (Power gray) avec écran 6,22 HD +, 720 x 1520 pixels, Android, 4G, Dual SIM, CPU Octa-core jusqu'à 1,6 GHz, 2 Go de RAM + 32 Go de stockage interne, double caméra arrière 13MP et 5MP avant, batterie 4000 mAh et connecteur microUSB",
        url:"https://www.journaldugeek.com/content/uploads/2022/04/samsung-galaxy-m53-5g-vert.jpg",
        price:"800.000",
        raiting:4.5,
    },
    {
      category: "Phone & Tablet",
      brands: "Xiaomi",
      Option: "Octa Core",
      description:
        "Smartphone Xiaomi Redmi 10, 4G + 64 Go, 6,5 Pouces DotDisplay FHD +, MediaTek Helio G88 Octa-Core, Appareil Photo Quad AI 50 MP et Appareil Photo Frontal 8 MP, Dual Sim (Gris Carbone)",
        url:"https://www.notebookcheck.biz/uploads/tx_nbc2/Xiaomi12.JPG",
        price:"600.000",
        raiting:4,
    },
    {
      category: "Phone & Tablet",
      brands: "Infinix",
      Option: "Quad Core",
      description:
        "Écouteurs Bluetooth Sans Fil Infinix XE20 - Technologie de Connectivité: Bluetooth  - Autonomie : 4 heures - Temps de charge écouteurs : 2 heures - Boîtier de charge : 2,5 heures - Distance de transmission : 10 m - Pavée IPX4 Résistant à l'eau - Latence: 60ms - Couleur: Blanc - Garantie: 1 an ",
        url:"https://phonesdata.com/files/models/Infinix-Note-10-803.jpg",
        price:"460.000",
        raiting:4.5,
    },
    {
      category: "Phone & Tablet",
      brands: "Oppo",
      Option: "Quad Core",
      description:
        "Ecran: 6.43 Amoled, 90 Hz (1080 x 2400 Pixels) - Processeur: Qualcomm SM6225 Snapdragon 680 4G (6 nm) Octa-core (4x2,4 GHz Kryo 265 Gold & 4x1,9 GHz Kryo 265 Silver) - Système d’exploitation: Android 12, ColorOS 12.1 - Mémoire: 8Go - Stockage: 256Go - Appareil photo arrière: Trio 64MP + 2MP + 2MP Avant: 32MP - Batterie: Li-Po 4500 mAh - Charge rapide 33W avec  4G, Wifi et Bluetooth -  Double SIM - Reconnaissance faciale -  Capteur d'empreintes digitales - Étanche IPX4 - Couleur: Orange - Garantie: 1 an",
        url:"https://specs-tech.com/wp-content/uploads/2021/05/Oppo-A16-1.jpg",
        price:"700.000",
        raiting:2.5,
    },
  ],
};

export const Shopslice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = Shopslice.actions;

export default Shopslice.reducer;
