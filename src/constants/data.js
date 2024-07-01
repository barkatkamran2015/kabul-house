import images from './images';

const wines = [
  {
    title: 'Bolani',
    price: '$5',
    tags: 'CAD | Pastry stuffed',
  },
  {
    title: 'Mantu',
    price: '$5.5',
    tags: 'CAD | Palate',
  },
  {
    title: 'Ashak',
    price: '$5',
    tags: 'CAD | Palate',
  },
  {
    title: 'Fries',
    price: '$5.5',
    tags: 'CAD | Small',
  },
  {
    title: 'Ferni',
    price: '$3',
    tags: 'CAD | Palate',
  },
  {
    title: 'Black & Green Chai',
    price: '$3',
    tags: 'CAD | Serve 1',
  },
  {
    title: 'Soft Drinks',
    price: '$2.99',
    tags: 'CAD | Can',
  },
  {
    title: 'Dough',
    price: '$2',
    tags: 'CAD | Glass',
  },
  {
    title: 'Sher Chai',
    price: '$2',
    tags: 'CAD | Cup',
  },
  {
    title: 'Apple Juice',
    price: '$5',
    tags: 'CAD | Glass',
  },
  {
    title: 'Carrot Juice',
    price: '$2',
    tags: 'CAD | Glass',
  },
];

const cocktails = [
  {
    title: 'Qabili Palau',
    price: '$17',
    tags: 'Tender pieces of beef shank beneath steamed basmati rice topped with carrots and raisins.',
  },
  {
    title: "Palau",
    price: '$16',
    tags: 'Tender pieces of beef shank beneath steamed basmati rice',
  },
  {
    title: 'Chopan Kabab',
    price: '$18',
    tags: 'Rack of fresh lamb chops grilled to perfection.',
  },
  {
    title: 'Tekka Kabab',
    price: '$17',
    tags: 'Three skewers of beef tenderloin chunks grilled to perfection. Marinated in herbs and spices',
  },
  {
    title: 'Chaplee Kabab',
    price: '$15',
    tags: 'Two tender round pieces of ground beef or chicken* patty fried to perfection',
  },
  {
    title: 'Chicken Kabab',
    price: '$15',
    tags: 'Three skewers of boneless chicken chunks Grilled to perfection. Marinated in herbs and spices.',
  },
  {
    title: 'Shami Kabab',
    price: '$15',
    tags: 'Three skewers of ground beef grilled to perfection',
  },
  {
    title: 'Chopan Combo',
    price: '$32',
    tags: 'Tender pieces of lamb chops grilled to perfection',
  },
  {
    title: 'Tekka Combo',
    price: '$32',
    tags: 'Two skewers of beef tenderloin chunks grilled to perfection',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Customer Reviews:',
    subtitle: 'High ratings and positive reviews on platforms like Google Reviews.',
  },
  {
    imgUrl: images.award01,
    title: 'Local Accolades:',
    subtitle: ' Awards or recognitions from local food festivals.',
  },
  {
    imgUrl: images.award05,
    title: 'Chef Achievements:',
    subtitle: 'Accolades or certifications earned by your chef.',
  },
  {
    imgUrl: images.award03,
    title: 'Community Involvement',
    subtitle: 'Recognition for involvement in community events, charity work.',
  },
];

export default { wines, cocktails, awards };
