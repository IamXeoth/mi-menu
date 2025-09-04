import { MenuItem, MenuCategory } from '../types';

export const predefinedItems: Record<MenuCategory, MenuItem[]> = {
  entradas: [
    {
      id: 'entrada-1',
      name: 'Bruschetta Italiana',
      description: 'Pão italiano tostado com tomate fresco, manjericão e azeite extra virgem',
      price: 18.90,
      category: 'entradas',
      order: 1,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-2',
      name: 'Carpaccio de Salmão',
      description: 'Fatias finas de salmão fresco com alcaparras, rúcula e molho de mostarda',
      price: 32.90,
      category: 'entradas',
      order: 2,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-3',
      name: 'Coxinha Gourmet',
      description: 'Coxinha artesanal recheada com frango desfiado e catupiry',
      price: 8.90,
      category: 'entradas',
      order: 3,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-4',
      name: 'Tábua de Frios',
      description: 'Seleção de queijos, embutidos, azeitonas e geleias artesanais',
      price: 45.90,
      category: 'entradas',
      order: 4,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-5',
      name: 'Camarão Empanado',
      description: 'Camarões grandes empanados servidos com molho tártaro',
      price: 28.90,
      category: 'entradas',
      order: 5,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-6',
      name: 'Salada Caesar',
      description: 'Alface romana, croutons, parmesão e molho caesar tradicional',
      price: 22.90,
      category: 'entradas',
      order: 6,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-7',
      name: 'Bolinho de Bacalhau',
      description: 'Bolinhos tradicionais de bacalhau com batata e temperos especiais',
      price: 24.90,
      category: 'entradas',
      order: 7,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-8',
      name: 'Antipasto Misto',
      description: 'Mix de vegetais grelhados, queijos e azeitonas temperadas',
      price: 26.90,
      category: 'entradas',
      order: 8,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-9',
      name: 'Ostras Gratinadas',
      description: 'Ostras frescas gratinadas com queijo e ervas finas',
      price: 42.90,
      category: 'entradas',
      order: 9,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-10',
      name: 'Tartare de Atum',
      description: 'Atum fresco em cubos com abacate, gergelim e molho ponzu',
      price: 38.90,
      category: 'entradas',
      order: 10,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-11',
      name: 'Burrata com Tomate',
      description: 'Queijo burrata cremoso com tomates confitados e manjericão',
      price: 34.90,
      category: 'entradas',
      order: 11,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-12',
      name: 'Escargot',
      description: 'Caracóis franceses com manteiga de alho e salsa',
      price: 29.90,
      category: 'entradas',
      order: 12,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-13',
      name: 'Foie Gras',
      description: 'Foie gras grelhado com redução de vinho do porto',
      price: 68.90,
      category: 'entradas',
      order: 13,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-14',
      name: 'Carpaccio de Carne',
      description: 'Fatias finas de filé mignon com rúcula, parmesão e azeite trufado',
      price: 36.90,
      category: 'entradas',
      order: 14,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-15',
      name: 'Sashimi Misto',
      description: 'Seleção de peixes frescos cortados em fatias finas',
      price: 44.90,
      category: 'entradas',
      order: 15,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-16',
      name: 'Polvo Grelhado',
      description: 'Tentáculos de polvo grelhados com batatas e azeite de ervas',
      price: 39.90,
      category: 'entradas',
      order: 16,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-17',
      name: 'Vitello Tonnato',
      description: 'Vitela fatiada com molho de atum e alcaparras',
      price: 33.90,
      category: 'entradas',
      order: 17,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-18',
      name: 'Ceviche Peruano',
      description: 'Peixe branco marinado no limão com cebola roxa e pimenta',
      price: 31.90,
      category: 'entradas',
      order: 18,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-19',
      name: 'Pâté de Fígado',
      description: 'Pâté artesanal servido com torradas e geleia de cebola',
      price: 27.90,
      category: 'entradas',
      order: 19,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-20',
      name: 'Tempurá de Legumes',
      description: 'Legumes variados em massa tempurá crocante',
      price: 23.90,
      category: 'entradas',
      order: 20,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-21',
      name: 'Queijo de Cabra Assado',
      description: 'Queijo de cabra assado com mel e nozes',
      price: 28.90,
      category: 'entradas',
      order: 21,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-22',
      name: 'Lula à Dorê',
      description: 'Anéis de lula empanados servidos com molho aioli',
      price: 26.90,
      category: 'entradas',
      order: 22,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-23',
      name: 'Gravlax',
      description: 'Salmão curado com endro servido com mostarda doce',
      price: 35.90,
      category: 'entradas',
      order: 23,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-24',
      name: 'Arancini',
      description: 'Bolinhos de risotto recheados com queijo e empanados',
      price: 21.90,
      category: 'entradas',
      order: 24,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-25',
      name: 'Gazpacho',
      description: 'Sopa fria de tomate com pepino e pimentão',
      price: 19.90,
      category: 'entradas',
      order: 25,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-26',
      name: 'Tártaro de Salmão',
      description: 'Salmão fresco em cubos com abacate e molho cítrico',
      price: 37.90,
      category: 'entradas',
      order: 26,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-27',
      name: 'Prosciutto e Melão',
      description: 'Fatias de prosciutto di Parma com melão cantaloupe',
      price: 32.90,
      category: 'entradas',
      order: 27,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-28',
      name: 'Caprese',
      description: 'Tomate, mussarela de búfala, manjericão e azeite',
      price: 24.90,
      category: 'entradas',
      order: 28,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-29',
      name: 'Vieiras Grelhadas',
      description: 'Vieiras frescas grelhadas com purê de ervilha',
      price: 48.90,
      category: 'entradas',
      order: 29,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-30',
      name: 'Hummus',
      description: 'Pasta de grão-de-bico com tahine servida com pita',
      price: 18.90,
      category: 'entradas',
      order: 30,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-31',
      name: 'Baba Ganoush',
      description: 'Pasta de berinjela defumada com tahine e azeite',
      price: 19.90,
      category: 'entradas',
      order: 31,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-32',
      name: 'Gyoza',
      description: 'Dumplings japoneses grelhados recheados com porco',
      price: 22.90,
      category: 'entradas',
      order: 32,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-33',
      name: 'Spanakopita',
      description: 'Torta grega de espinafre com queijo feta em massa filo',
      price: 25.90,
      category: 'entradas',
      order: 33,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-34',
      name: 'Dolmades',
      description: 'Folhas de uva recheadas com arroz e ervas',
      price: 23.90,
      category: 'entradas',
      order: 34,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-35',
      name: 'Crostini',
      description: 'Torradas italianas com topping variados',
      price: 20.90,
      category: 'entradas',
      order: 35,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-36',
      name: 'Quiche Lorraine',
      description: 'Torta francesa com bacon, queijo e creme',
      price: 26.90,
      category: 'entradas',
      order: 36,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-37',
      name: 'Rillettes',
      description: 'Pasta francesa de carne desfiada servida com torradas',
      price: 29.90,
      category: 'entradas',
      order: 37,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-38',
      name: 'Tapenade',
      description: 'Pasta de azeitonas pretas com alcaparras e anchovas',
      price: 21.90,
      category: 'entradas',
      order: 38,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-39',
      name: 'Brandade',
      description: 'Purê de bacalhau com batata e azeite',
      price: 27.90,
      category: 'entradas',
      order: 39,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-40',
      name: 'Terrine',
      description: 'Terrine de campo com pistache e cranberry',
      price: 31.90,
      category: 'entradas',
      order: 40,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-41',
      name: 'Mousse de Salmão',
      description: 'Mousse cremoso de salmão defumado com endro',
      price: 28.90,
      category: 'entradas',
      order: 41,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-42',
      name: 'Carpaccio de Beterraba',
      description: 'Fatias finas de beterraba com queijo de cabra e nozes',
      price: 24.90,
      category: 'entradas',
      order: 42,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-43',
      name: 'Salada de Polvo',
      description: 'Polvo cozido com batatas, azeitonas e vinagrete',
      price: 33.90,
      category: 'entradas',
      order: 43,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-44',
      name: 'Focaccia',
      description: 'Pão italiano com ervas, tomate cereja e azeite',
      price: 17.90,
      category: 'entradas',
      order: 44,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-45',
      name: 'Salada Niçoise',
      description: 'Salada francesa com atum, ovos, azeitonas e anchovas',
      price: 29.90,
      category: 'entradas',
      order: 45,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-46',
      name: 'Panzanella',
      description: 'Salada italiana de pão com tomate e manjericão',
      price: 22.90,
      category: 'entradas',
      order: 46,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-47',
      name: 'Tabouleh',
      description: 'Salada libanesa de trigo com tomate, hortelã e limão',
      price: 20.90,
      category: 'entradas',
      order: 47,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-48',
      name: 'Fattoush',
      description: 'Salada árabe com pita tostada e sumac',
      price: 21.90,
      category: 'entradas',
      order: 48,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-49',
      name: 'Mezze Platter',
      description: 'Seleção de petiscos mediterrâneos variados',
      price: 42.90,
      category: 'entradas',
      order: 49,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'entrada-50',
      name: 'Charcuterie Board',
      description: 'Tábua de embutidos artesanais com acompanhamentos',
      price: 48.90,
      category: 'entradas',
      order: 50,
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    }
  ],
  'pratos-principais': [
    {
      id: 'prato-1',
      name: 'Filé Mignon Grelhado',
      description: 'Filé mignon grelhado ao ponto com batatas rústicas e legumes salteados',
      price: 68.90,
      category: 'pratos-principais',
      order: 1,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-2',
      name: 'Salmão Grelhado',
      description: 'Salmão fresco grelhado com risotto de limão siciliano e aspargos',
      price: 58.90,
      category: 'pratos-principais',
      order: 2,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-3',
      name: 'Feijoada Completa',
      description: 'Feijoada tradicional com linguiça, costela, paio e acompanhamentos',
      price: 42.90,
      category: 'pratos-principais',
      order: 3,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-4',
      name: 'Risotto de Camarão',
      description: 'Risotto cremoso com camarões grandes e finalizado com parmesão',
      price: 52.90,
      category: 'pratos-principais',
      order: 4,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-5',
      name: 'Frango à Parmegiana',
      description: 'Filé de frango empanado com molho de tomate e queijo derretido',
      price: 38.90,
      category: 'pratos-principais',
      order: 5,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-6',
      name: 'Lasanha Bolonhesa',
      description: 'Lasanha tradicional com molho bolonhesa e queijos especiais',
      price: 35.90,
      category: 'pratos-principais',
      order: 6,
      image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-7',
      name: 'Picanha na Brasa',
      description: 'Picanha grelhada na brasa com farofa, vinagrete e mandioca',
      price: 72.90,
      category: 'pratos-principais',
      order: 7,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-8',
      name: 'Moqueca de Peixe',
      description: 'Moqueca capixaba com peixe fresco, leite de coco e dendê',
      price: 48.90,
      category: 'pratos-principais',
      order: 8,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-9',
      name: 'Pizza Margherita',
      description: 'Pizza tradicional com molho de tomate, mussarela e manjericão',
      price: 32.90,
      category: 'pratos-principais',
      order: 9,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-10',
      name: 'Hambúrguer Artesanal',
      description: 'Hambúrguer 180g com queijo, bacon, alface e batata rústica',
      price: 28.90,
      category: 'pratos-principais',
      order: 10,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-11',
      name: 'Cordeiro Assado',
      description: 'Pernil de cordeiro assado com ervas e batatas ao murro',
      price: 78.90,
      category: 'pratos-principais',
      order: 11,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-12',
      name: 'Bacalhau à Brás',
      description: 'Bacalhau desfiado com batata palha, ovos e azeitonas',
      price: 54.90,
      category: 'pratos-principais',
      order: 12,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-13',
      name: 'Paella Valenciana',
      description: 'Paella tradicional com frango, coelho, feijão verde e açafrão',
      price: 62.90,
      category: 'pratos-principais',
      order: 13,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-14',
      name: 'Coq au Vin',
      description: 'Frango cozido no vinho tinto com cogumelos e bacon',
      price: 49.90,
      category: 'pratos-principais',
      order: 14,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-15',
      name: 'Osso Buco',
      description: 'Osso buco de vitela braseado com risotto alla milanese',
      price: 69.90,
      category: 'pratos-principais',
      order: 15,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-16',
      name: 'Bouillabaisse',
      description: 'Sopa de peixe francesa com frutos do mar e rouille',
      price: 64.90,
      category: 'pratos-principais',
      order: 16,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-17',
      name: 'Duck Confit',
      description: 'Pato confitado com batatas sarladaises e molho de laranja',
      price: 71.90,
      category: 'pratos-principais',
      order: 17,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-18',
      name: 'Beef Wellington',
      description: 'Filé mignon envolvido em massa folhada com duxelles',
      price: 89.90,
      category: 'pratos-principais',
      order: 18,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-19',
      name: 'Ratatouille',
      description: 'Guisado provençal de legumes com ervas de Provence',
      price: 34.90,
      category: 'pratos-principais',
      order: 19,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-20',
      name: 'Cassoulet',
      description: 'Guisado francês com feijão branco, linguiça e pato',
      price: 56.90,
      category: 'pratos-principais',
      order: 20,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-21',
      name: 'Moussaka',
      description: 'Lasanha grega com berinjela, carne moída e molho bechamel',
      price: 43.90,
      category: 'pratos-principais',
      order: 21,
      image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-22',
      name: 'Tagine de Cordeiro',
      description: 'Ensopado marroquino de cordeiro com damascos e especiarias',
      price: 59.90,
      category: 'pratos-principais',
      order: 22,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-23',
      name: 'Pad Thai',
      description: 'Macarrão de arroz tailandês com camarão e amendoim',
      price: 36.90,
      category: 'pratos-principais',
      order: 23,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-24',
      name: 'Curry de Frango',
      description: 'Curry indiano cremoso com frango e arroz basmati',
      price: 39.90,
      category: 'pratos-principais',
      order: 24,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-25',
      name: 'Sushi Combinado',
      description: 'Seleção de sushis e sashimis com wasabi e gengibre',
      price: 67.90,
      category: 'pratos-principais',
      order: 25,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-26',
      name: 'Ramen Tonkotsu',
      description: 'Sopa japonesa com caldo de osso de porco e macarrão',
      price: 32.90,
      category: 'pratos-principais',
      order: 26,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-27',
      name: 'Bibimbap',
      description: 'Prato coreano com arroz, legumes, carne e ovo frito',
      price: 34.90,
      category: 'pratos-principais',
      order: 27,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-28',
      name: 'Fish and Chips',
      description: 'Peixe empanado com batatas fritas e molho tártaro',
      price: 41.90,
      category: 'pratos-principais',
      order: 28,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-29',
      name: 'Shepherd\'s Pie',
      description: 'Torta inglesa de carne com purê de batata gratinado',
      price: 37.90,
      category: 'pratos-principais',
      order: 29,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-30',
      name: 'Wiener Schnitzel',
      description: 'Escalope de vitela empanado servido com batatas',
      price: 52.90,
      category: 'pratos-principais',
      order: 30,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-31',
      name: 'Goulash Húngaro',
      description: 'Ensopado húngaro de carne com páprica e batatas',
      price: 44.90,
      category: 'pratos-principais',
      order: 31,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-32',
      name: 'Pierogi',
      description: 'Dumplings poloneses recheados com batata e queijo',
      price: 29.90,
      category: 'pratos-principais',
      order: 32,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-33',
      name: 'Pastrami Sandwich',
      description: 'Sanduíche de pastrami com mostarda e picles',
      price: 26.90,
      category: 'pratos-principais',
      order: 33,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-34',
      name: 'Lobster Roll',
      description: 'Sanduíche de lagosta com maionese e aipo',
      price: 78.90,
      category: 'pratos-principais',
      order: 34,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-35',
      name: 'Jambalaya',
      description: 'Arroz crioulo com frango, linguiça e camarão',
      price: 46.90,
      category: 'pratos-principais',
      order: 35,
      image: 'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-36',
      name: 'Chili con Carne',
      description: 'Ensopado mexicano de carne com feijão e pimenta',
      price: 33.90,
      category: 'pratos-principais',
      order: 36,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-37',
      name: 'Tacos al Pastor',
      description: 'Tacos mexicanos com carne de porco marinada e abacaxi',
      price: 31.90,
      category: 'pratos-principais',
      order: 37,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-38',
      name: 'Enchiladas',
      description: 'Tortillas recheadas com frango e molho de pimenta',
      price: 35.90,
      category: 'pratos-principais',
      order: 38,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-39',
      name: 'Carne Asada',
      description: 'Carne grelhada mexicana com tortillas e guacamole',
      price: 48.90,
      category: 'pratos-principais',
      order: 39,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-40',
      name: 'Empanadas',
      description: 'Pastéis argentinos recheados com carne e temperos',
      price: 24.90,
      category: 'pratos-principais',
      order: 40,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-41',
      name: 'Bife de Chorizo',
      description: 'Corte argentino grelhado com chimichurri',
      price: 65.90,
      category: 'pratos-principais',
      order: 41,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-42',
      name: 'Ceviche Peruano',
      description: 'Peixe marinado no limão com batata doce e milho',
      price: 42.90,
      category: 'pratos-principais',
      order: 42,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-43',
      name: 'Lomo Saltado',
      description: 'Salteado peruano de carne com batatas e arroz',
      price: 39.90,
      category: 'pratos-principais',
      order: 43,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-44',
      name: 'Falafel',
      description: 'Bolinhos de grão-de-bico fritos com tahine e salada',
      price: 27.90,
      category: 'pratos-principais',
      order: 44,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-45',
      name: 'Shawarma',
      description: 'Carne assada no espeto servida em pita com molhos',
      price: 29.90,
      category: 'pratos-principais',
      order: 45,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-46',
      name: 'Kebab',
      description: 'Espetinhos de carne grelhada com arroz pilaf',
      price: 34.90,
      category: 'pratos-principais',
      order: 46,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-47',
      name: 'Biryani',
      description: 'Arroz indiano aromático com frango e especiarias',
      price: 37.90,
      category: 'pratos-principais',
      order: 47,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-48',
      name: 'Tandoori Chicken',
      description: 'Frango marinado em iogurte e especiarias, assado no tandoor',
      price: 41.90,
      category: 'pratos-principais',
      order: 48,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-49',
      name: 'Tom Yum Goong',
      description: 'Sopa tailandesa picante e azeda com camarão',
      price: 33.90,
      category: 'pratos-principais',
      order: 49,
      image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'prato-50',
      name: 'Pho Bo',
      description: 'Sopa vietnamita com macarrão de arroz e carne',
      price: 28.90,
      category: 'pratos-principais',
      order: 50,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    }
  ],
  sobremesas: [
    {
      id: 'sobremesa-1',
      name: 'Petit Gateau',
      description: 'Bolinho de chocolate quente com sorvete de baunilha',
      price: 18.90,
      category: 'sobremesas',
      order: 1,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-2',
      name: 'Tiramisu',
      description: 'Sobremesa italiana com café, mascarpone e cacau',
      price: 16.90,
      category: 'sobremesas',
      order: 2,
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-3',
      name: 'Pudim de Leite',
      description: 'Pudim tradicional com calda de caramelo',
      price: 12.90,
      category: 'sobremesas',
      order: 3,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-4',
      name: 'Cheesecake de Frutas Vermelhas',
      description: 'Cheesecake cremoso com calda de frutas vermelhas',
      price: 19.90,
      category: 'sobremesas',
      order: 4,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-5',
      name: 'Brownie com Sorvete',
      description: 'Brownie de chocolate com sorvete e calda quente',
      price: 15.90,
      category: 'sobremesas',
      order: 5,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-6',
      name: 'Mousse de Maracujá',
      description: 'Mousse cremoso de maracujá com biscoito',
      price: 13.90,
      category: 'sobremesas',
      order: 6,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-7',
      name: 'Sorvete Artesanal',
      description: 'Três bolas de sorvete artesanal com cobertura à escolha',
      price: 14.90,
      category: 'sobremesas',
      order: 7,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-8',
      name: 'Crème Brûlée',
      description: 'Creme francês com açúcar caramelizado na superfície',
      price: 17.90,
      category: 'sobremesas',
      order: 8,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-9',
      name: 'Panna Cotta',
      description: 'Sobremesa italiana cremosa com calda de frutas',
      price: 16.90,
      category: 'sobremesas',
      order: 9,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-10',
      name: 'Profiteroles',
      description: 'Massa choux recheada com creme e cobertura de chocolate',
      price: 18.90,
      category: 'sobremesas',
      order: 10,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-11',
      name: 'Tarte Tatin',
      description: 'Torta francesa de maçã caramelizada invertida',
      price: 19.90,
      category: 'sobremesas',
      order: 11,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-12',
      name: 'Mille-feuille',
      description: 'Folhado francês com creme de baunilha e glacê',
      price: 21.90,
      category: 'sobremesas',
      order: 12,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-13',
      name: 'Éclair',
      description: 'Massa choux alongada com creme e cobertura de chocolate',
      price: 14.90,
      category: 'sobremesas',
      order: 13,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-14',
      name: 'Macarons',
      description: 'Biscoitos franceses coloridos com recheio cremoso',
      price: 22.90,
      category: 'sobremesas',
      order: 14,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-15',
      name: 'Cannoli Siciliano',
      description: 'Massa crocante recheada com ricota doce e pistache',
      price: 16.90,
      category: 'sobremesas',
      order: 15,
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-16',
      name: 'Gelato',
      description: 'Sorvete italiano cremoso em sabores variados',
      price: 13.90,
      category: 'sobremesas',
      order: 16,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-17',
      name: 'Affogato',
      description: 'Sorvete de baunilha "afogado" em café expresso quente',
      price: 15.90,
      category: 'sobremesas',
      order: 17,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-18',
      name: 'Zabaglione',
      description: 'Creme italiano com gemas, açúcar e vinho Marsala',
      price: 17.90,
      category: 'sobremesas',
      order: 18,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-19',
      name: 'Baklava',
      description: 'Doce grego com massa filo, nozes e mel',
      price: 16.90,
      category: 'sobremesas',
      order: 19,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-20',
      name: 'Galaktoboureko',
      description: 'Sobremesa grega com creme de sêmola em massa filo',
      price: 18.90,
      category: 'sobremesas',
      order: 20,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-21',
      name: 'Tres Leches',
      description: 'Bolo latino embebido em três tipos de leite',
      price: 15.90,
      category: 'sobremesas',
      order: 21,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-22',
      name: 'Flan',
      description: 'Pudim espanhol com caramelo líquido',
      price: 13.90,
      category: 'sobremesas',
      order: 22,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-23',
      name: 'Churros',
      description: 'Massa frita espanhola com açúcar e canela',
      price: 12.90,
      category: 'sobremesas',
      order: 23,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-24',
      name: 'Crema Catalana',
      description: 'Creme espanhol com açúcar queimado, similar ao crème brûlée',
      price: 16.90,
      category: 'sobremesas',
      order: 24,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-25',
      name: 'Strudel de Maçã',
      description: 'Torta austríaca de maçã com massa filo',
      price: 17.90,
      category: 'sobremesas',
      order: 25,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-26',
      name: 'Sachertorte',
      description: 'Bolo austríaco de chocolate com geleia de damasco',
      price: 19.90,
      category: 'sobremesas',
      order: 26,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-27',
      name: 'Black Forest',
      description: 'Bolo alemão de chocolate com cerejas e chantilly',
      price: 18.90,
      category: 'sobremesas',
      order: 27,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-28',
      name: 'Banoffee Pie',
      description: 'Torta inglesa com banana, caramelo e chantilly',
      price: 17.90,
      category: 'sobremesas',
      order: 28,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-29',
      name: 'Sticky Toffee Pudding',
      description: 'Pudim inglês com tâmaras e molho de caramelo',
      price: 16.90,
      category: 'sobremesas',
      order: 29,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-30',
      name: 'Eton Mess',
      description: 'Sobremesa inglesa com merengue, morango e chantilly',
      price: 15.90,
      category: 'sobremesas',
      order: 30,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-31',
      name: 'Pavlova',
      description: 'Merengue australiano com frutas frescas e chantilly',
      price: 18.90,
      category: 'sobremesas',
      order: 31,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-32',
      name: 'Lamington',
      description: 'Bolo australiano coberto com chocolate e coco',
      price: 14.90,
      category: 'sobremesas',
      order: 32,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-33',
      name: 'Mochi',
      description: 'Doce japonês de arroz glutinoso com recheio doce',
      price: 16.90,
      category: 'sobremesas',
      order: 33,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-34',
      name: 'Dorayaki',
      description: 'Panqueca japonesa recheada com pasta de feijão doce',
      price: 13.90,
      category: 'sobremesas',
      order: 34,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-35',
      name: 'Taiyaki',
      description: 'Waffle japonês em formato de peixe com recheio doce',
      price: 15.90,
      category: 'sobremesas',
      order: 35,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-36',
      name: 'Kulfi',
      description: 'Sorvete indiano denso com pistache e cardamomo',
      price: 14.90,
      category: 'sobremesas',
      order: 36,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-37',
      name: 'Gulab Jamun',
      description: 'Doce indiano frito embebido em calda de açúcar',
      price: 13.90,
      category: 'sobremesas',
      order: 37,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-38',
      name: 'Rasmalai',
      description: 'Sobremesa indiana com queijo em leite aromatizado',
      price: 15.90,
      category: 'sobremesas',
      order: 38,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-39',
      name: 'Kheer',
      description: 'Pudim de arroz indiano com leite e especiarias',
      price: 12.90,
      category: 'sobremesas',
      order: 39,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-40',
      name: 'Baklava Turco',
      description: 'Versão turca do baklava com pistache e mel',
      price: 17.90,
      category: 'sobremesas',
      order: 40,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-41',
      name: 'Turkish Delight',
      description: 'Doce turco gelatinoso com sabores variados',
      price: 14.90,
      category: 'sobremesas',
      order: 41,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-42',
      name: 'Kunefe',
      description: 'Sobremesa turca com queijo e massa kadayif',
      price: 18.90,
      category: 'sobremesas',
      order: 42,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-43',
      name: 'Brigadeiro Gourmet',
      description: 'Doce brasileiro premium com chocolate belga',
      price: 11.90,
      category: 'sobremesas',
      order: 43,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-44',
      name: 'Beijinho',
      description: 'Doce brasileiro de coco com leite condensado',
      price: 10.90,
      category: 'sobremesas',
      order: 44,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-45',
      name: 'Quindim',
      description: 'Doce brasileiro de gema e coco',
      price: 12.90,
      category: 'sobremesas',
      order: 45,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-46',
      name: 'Bem-casado',
      description: 'Doce brasileiro com massa de pão de ló e doce de leite',
      price: 9.90,
      category: 'sobremesas',
      order: 46,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-47',
      name: 'Cocada',
      description: 'Doce brasileiro tradicional de coco',
      price: 8.90,
      category: 'sobremesas',
      order: 47,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-48',
      name: 'Romeu e Julieta',
      description: 'Queijo com goiabada, combinação clássica brasileira',
      price: 13.90,
      category: 'sobremesas',
      order: 48,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-49',
      name: 'Açaí na Tigela',
      description: 'Açaí cremoso com granola, frutas e mel',
      price: 16.90,
      category: 'sobremesas',
      order: 49,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'sobremesa-50',
      name: 'Pavê de Chocolate',
      description: 'Sobremesa brasileira em camadas com biscoito e creme',
      price: 14.90,
      category: 'sobremesas',
      order: 50,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    }
  ],
  bebidas: [
    {
      id: 'bebida-1',
      name: 'Caipirinha Tradicional',
      description: 'Cachaça, limão, açúcar e gelo',
      price: 12.90,
      category: 'bebidas',
      order: 1,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-2',
      name: 'Vinho Tinto Reserva',
      description: 'Vinho tinto seco, safra especial',
      price: 89.90,
      category: 'bebidas',
      order: 2,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-3',
      name: 'Cerveja Artesanal IPA',
      description: 'Cerveja artesanal India Pale Ale 500ml',
      price: 18.90,
      category: 'bebidas',
      order: 3,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-4',
      name: 'Suco Natural de Laranja',
      description: 'Suco de laranja natural 300ml',
      price: 8.90,
      category: 'bebidas',
      order: 4,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-5',
      name: 'Água com Gás',
      description: 'Água mineral com gás 500ml',
      price: 4.90,
      category: 'bebidas',
      order: 5,
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-6',
      name: 'Café Expresso',
      description: 'Café expresso tradicional',
      price: 5.90,
      category: 'bebidas',
      order: 6,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-7',
      name: 'Refrigerante Lata',
      description: 'Refrigerante gelado 350ml',
      price: 6.90,
      category: 'bebidas',
      order: 7,
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-8',
      name: 'Chá Gelado',
      description: 'Chá gelado de pêssego 400ml',
      price: 7.90,
      category: 'bebidas',
      order: 8,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-9',
      name: 'Mojito',
      description: 'Rum branco, hortelã, limão e água com gás',
      price: 15.90,
      category: 'bebidas',
      order: 9,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-10',
      name: 'Piña Colada',
      description: 'Rum, leite de coco, abacaxi e gelo',
      price: 17.90,
      category: 'bebidas',
      order: 10,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-11',
      name: 'Margarita',
      description: 'Tequila, triple sec, limão e sal na borda',
      price: 16.90,
      category: 'bebidas',
      order: 11,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-12',
      name: 'Cosmopolitan',
      description: 'Vodka, triple sec, cranberry e limão',
      price: 18.90,
      category: 'bebidas',
      order: 12,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-13',
      name: 'Manhattan',
      description: 'Whiskey, vermute doce e bitter',
      price: 22.90,
      category: 'bebidas',
      order: 13,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-14',
      name: 'Old Fashioned',
      description: 'Whiskey, açúcar, bitter e casca de laranja',
      price: 24.90,
      category: 'bebidas',
      order: 14,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-15',
      name: 'Negroni',
      description: 'Gin, Campari, vermute doce e laranja',
      price: 19.90,
      category: 'bebidas',
      order: 15,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-16',
      name: 'Gin Tônica',
      description: 'Gin premium com água tônica e limão',
      price: 16.90,
      category: 'bebidas',
      order: 16,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-17',
      name: 'Whiskey Sour',
      description: 'Whiskey, limão, açúcar e clara de ovo',
      price: 20.90,
      category: 'bebidas',
      order: 17,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-18',
      name: 'Daiquiri',
      description: 'Rum branco, limão e açúcar',
      price: 14.90,
      category: 'bebidas',
      order: 18,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-19',
      name: 'Bloody Mary',
      description: 'Vodka, suco de tomate, temperos e aipo',
      price: 17.90,
      category: 'bebidas',
      order: 19,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-20',
      name: 'Moscow Mule',
      description: 'Vodka, ginger beer, limão em caneca de cobre',
      price: 18.90,
      category: 'bebidas',
      order: 20,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-21',
      name: 'Aperol Spritz',
      description: 'Aperol, prosecco, água com gás e laranja',
      price: 19.90,
      category: 'bebidas',
      order: 21,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-22',
      name: 'Bellini',
      description: 'Prosecco com purê de pêssego',
      price: 16.90,
      category: 'bebidas',
      order: 22,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-23',
      name: 'Mimosa',
      description: 'Champagne com suco de laranja fresco',
      price: 18.90,
      category: 'bebidas',
      order: 23,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-24',
      name: 'Kir Royal',
      description: 'Champagne com licor de cassis',
      price: 21.90,
      category: 'bebidas',
      order: 24,
      image: 'https://images.pexels.com/photos/5946965/pexels-photo-5946965.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-25',
      name: 'Sangria',
      description: 'Vinho tinto com frutas e especiarias',
      price: 15.90,
      category: 'bebidas',
      order: 25,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-26',
      name: 'Vinho Branco Seco',
      description: 'Vinho branco seco gelado',
      price: 79.90,
      category: 'bebidas',
      order: 26,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-27',
      name: 'Vinho Rosé',
      description: 'Vinho rosé suave e refrescante',
      price: 69.90,
      category: 'bebidas',
      order: 27,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-28',
      name: 'Prosecco',
      description: 'Espumante italiano gelado',
      price: 85.90,
      category: 'bebidas',
      order: 28,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-29',
      name: 'Champagne',
      description: 'Champagne francês premium',
      price: 189.90,
      category: 'bebidas',
      order: 29,
      image: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-30',
      name: 'Cerveja Pilsen',
      description: 'Cerveja pilsen gelada 350ml',
      price: 8.90,
      category: 'bebidas',
      order: 30,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-31',
      name: 'Cerveja Weiss',
      description: 'Cerveja de trigo alemã 500ml',
      price: 14.90,
      category: 'bebidas',
      order: 31,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-32',
      name: 'Cerveja Stout',
      description: 'Cerveja escura cremosa 500ml',
      price: 16.90,
      category: 'bebidas',
      order: 32,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-33',
      name: 'Chopp Pilsen',
      description: 'Chopp pilsen gelado 300ml',
      price: 9.90,
      category: 'bebidas',
      order: 33,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-34',
      name: 'Chopp Escuro',
      description: 'Chopp escuro cremoso 300ml',
      price: 11.90,
      category: 'bebidas',
      order: 34,
      image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-35',
      name: 'Suco de Maracujá',
      description: 'Suco natural de maracujá 300ml',
      price: 9.90,
      category: 'bebidas',
      order: 35,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-36',
      name: 'Suco de Acerola',
      description: 'Suco natural de acerola 300ml',
      price: 9.90,
      category: 'bebidas',
      order: 36,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-37',
      name: 'Suco de Caju',
      description: 'Suco natural de caju 300ml',
      price: 10.90,
      category: 'bebidas',
      order: 37,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-38',
      name: 'Vitamina de Açaí',
      description: 'Vitamina de açaí com banana 400ml',
      price: 12.90,
      category: 'bebidas',
      order: 38,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-39',
      name: 'Smoothie de Frutas',
      description: 'Mix de frutas com iogurte 400ml',
      price: 13.90,
      category: 'bebidas',
      order: 39,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-40',
      name: 'Água de Coco',
      description: 'Água de coco natural gelada 300ml',
      price: 7.90,
      category: 'bebidas',
      order: 40,
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-41',
      name: 'Água Sem Gás',
      description: 'Água mineral sem gás 500ml',
      price: 3.90,
      category: 'bebidas',
      order: 41,
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-42',
      name: 'Cappuccino',
      description: 'Café com leite vaporizado e canela',
      price: 8.90,
      category: 'bebidas',
      order: 42,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-43',
      name: 'Café Americano',
      description: 'Café expresso diluído em água quente',
      price: 6.90,
      category: 'bebidas',
      order: 43,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-44',
      name: 'Latte',
      description: 'Café expresso com leite vaporizado',
      price: 9.90,
      category: 'bebidas',
      order: 44,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-45',
      name: 'Macchiato',
      description: 'Café expresso com uma colher de leite vaporizado',
      price: 7.90,
      category: 'bebidas',
      order: 45,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-46',
      name: 'Mocha',
      description: 'Café com chocolate e chantilly',
      price: 11.90,
      category: 'bebidas',
      order: 46,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-47',
      name: 'Chá Verde',
      description: 'Chá verde quente com mel',
      price: 6.90,
      category: 'bebidas',
      order: 47,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-48',
      name: 'Chá de Camomila',
      description: 'Chá calmante de camomila',
      price: 6.90,
      category: 'bebidas',
      order: 48,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-49',
      name: 'Chocolate Quente',
      description: 'Chocolate quente cremoso com marshmallow',
      price: 9.90,
      category: 'bebidas',
      order: 49,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    },
    {
      id: 'bebida-50',
      name: 'Limonada Suíça',
      description: 'Limonada cremosa com leite condensado',
      price: 8.90,
      category: 'bebidas',
      order: 50,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isPredefined: true
    }
  ]
};