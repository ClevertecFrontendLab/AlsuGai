import { ReactNode } from 'react';

import {
    IDesserts,
    IDrinks,
    IEntree,
    IGrill,
    IHealth,
    IJar,
    IKids,
    INational,
    ISalad,
    ISause,
    ISecondDish,
    ISnacks,
    IVegan,
} from '~/assets/icons/icons';

interface IDescriptionItem {
    section: string;
    component: string;
}

interface IContent {
    icon: ReactNode;
    body: string;
    description: IDescriptionItem[];
    id: number;
}

export const content: IContent[] = [
    {
        icon: <ISalad />,
        body: 'Салаты',
        description: [
            {
                section: 'Мясные салаты',
                component: 'Компонент',
            },
            {
                section: 'Рыбные салаты',
                component: 'Компонент',
            },
            {
                section: 'Овощные салаты',
                component: 'Компонент',
            },
            {
                section: 'Теплые салаты',
                component: 'Компонент',
            },
        ],
        id: 1,
    },
    {
        icon: <ISnacks />,
        body: 'Закуски',
        description: [
            {
                section: 'Мясные закуски',
                component: 'Компонент',
            },
            {
                section: 'Рыбные закуски',
                component: 'Компонент',
            },
            {
                section: 'Овощные закуски',
                component: 'Компонент',
            },
            {
                section: 'Теплые закуски',
                component: 'Компонент',
            },
            {
                section: 'Бутерброды',
                component: 'Компонент',
            },
            {
                section: 'Фастфуд',
                component: 'Компонент',
            },
        ],
        id: 2,
    },
    {
        icon: <IEntree />,
        body: 'Первые блюда',
        description: [
            {
                section: 'Мясные супы',
                component: 'Компонент',
            },
            {
                section: 'Овощные супы',
                component: 'Компонент',
            },
            {
                section: 'Бульоны',
                component: 'Компонент',
            },
            {
                section: 'Холодные супы',
                component: 'Компонент',
            },
            {
                section: 'Диетические супы',
                component: 'Компонент',
            },
        ],
        id: 3,
    },
    {
        icon: <ISecondDish />,
        body: 'Вторые блюда',
        description: [
            {
                section: 'Мясные',
                component: 'Компонент',
            },
            {
                section: 'Рыбные',
                component: 'Компонент',
            },
            {
                section: 'Овощные',
                component: 'Компонент',
            },
            {
                section: 'Из птицы',
                component: 'Компонент',
            },
            {
                section: 'Из грибов',
                component: 'Компонент',
            },
            {
                section: 'Из субпродуктов',
                component: 'Компонент',
            },
            {
                section: 'На пару',
                component: 'Компонент',
            },
            {
                section: 'Пельмени, вареники',
                component: 'Компонент',
            },
            {
                section: 'Мучные гарниры',
                component: 'Компонент',
            },
            {
                section: 'Овощные гарниры ',
                component: 'Компонент',
            },
            {
                section: 'Пицца',
                component: 'Компонент',
            },
            {
                section: 'Суши',
                component: 'Компонент',
            },
        ],
        id: 4,
    },
    {
        icon: <IDesserts />,
        body: 'Десерты и выпечка',
        description: [
            {
                section: 'Блины и оладьи',
                component: 'Компонент',
            },
            {
                section: 'Пироги и пончики',
                component: 'Компонент',
            },
            {
                section: 'Торты',
                component: 'Компонент',
            },
            {
                section: 'Рулеты',
                component: 'Компонент',
            },
            {
                section: 'Кексы и маффины',
                component: 'Компонент',
            },
            {
                section: 'Сырники и ватрушки',
                component: 'Компонент',
            },
            {
                section: 'Из слоеного теста',
                component: 'Компонент',
            },
            {
                section: 'Из заварного теста',
                component: 'Компонент',
            },
            {
                section: 'Из дрожжевого теста',
                component: 'Компонент',
            },
            {
                section: 'Булочки и сдоба',
                component: 'Компонент',
            },
            {
                section: 'Хлеб',
                component: 'Компонент',
            },
            {
                section: 'Тесто на пиццу ',
                component: 'Компонент',
            },
            {
                section: 'Кремы',
                component: 'Компонент',
            },
        ],
        id: 5,
    },
    {
        icon: <IGrill />,
        body: 'Блюда на гриле',
        description: [
            {
                section: 'Говядина',
                component: 'Компонент',
            },
            {
                section: 'Свинина',
                component: 'Компонент',
            },
            {
                section: 'Птица',
                component: 'Компонент',
            },
            {
                section: 'Рыба',
                component: 'Компонент',
            },
            {
                section: 'Грибы',
                component: 'Компонент',
            },
            {
                section: 'Овощи',
                component: 'Компонент',
            },
        ],
        id: 6,
    },
    {
        icon: <IVegan />,
        body: 'Веганская кухня',
        description: [
            {
                section: 'Закуски',
                component: 'Компонент',
            },
            {
                section: 'Первые блюда',
                component: 'Компонент',
            },
            {
                section: 'Вторые блюда',
                component: 'Компонент',
            },
            {
                section: 'Гарниры',
                component: 'Компонент',
            },
            {
                section: 'Десерты',
                component: 'Компонент',
            },
            {
                section: 'Выпечка',
                component: 'Компонент',
            },
            {
                section: 'Сыроедческие блюда',
                component: 'Компонент',
            },
            {
                section: 'Напитки',
                component: 'Компонент',
            },
        ],
        id: 7,
    },
    {
        icon: <IKids />,
        body: 'Детские блюда',
        description: [
            {
                section: 'Первые блюда',
                component: 'Компонент',
            },
            {
                section: 'Вторые блюда',
                component: 'Компонент',
            },
            {
                section: 'Гарниры',
                component: 'Компонент',
            },
            {
                section: 'Выпечка',
                component: 'Компонент',
            },
            {
                section: 'Без глютена',
                component: 'Компонент',
            },
            {
                section: 'Без сахара',
                component: 'Компонент',
            },
            {
                section: 'Без аллергенов',
                component: 'Компонент',
            },
            {
                section: 'Блюда для прикорма',
                component: 'Компонент',
            },
        ],
        id: 8,
    },
    {
        icon: <IHealth />,
        body: 'Лечебное питание',
        description: [
            {
                section: 'Детская диета',
                component: 'Компонент',
            },
            {
                section: 'Диета №1',
                component: 'Компонент',
            },
            {
                section: 'Диета №2',
                component: 'Компонент',
            },
            {
                section: 'Диета №3',
                component: 'Компонент',
            },
            {
                section: 'Диета №5',
                component: 'Компонент',
            },
            {
                section: 'Диета №6',
                component: 'Компонент',
            },
            {
                section: 'Диета №7',
                component: 'Компонент',
            },
            {
                section: 'Диета №8',
                component: 'Компонент',
            },
            {
                section: 'Диета №9',
                component: 'Компонент',
            },
            {
                section: 'Диета №10',
                component: 'Компонент',
            },
            {
                section: 'Диета №11',
                component: 'Компонент',
            },
            {
                section: 'Диета №11',
                component: 'Компонент',
            },
            {
                section: 'Диета №12',
                component: 'Компонент',
            },
            {
                section: 'Диета №13',
                component: 'Компонент',
            },
            {
                section: 'Диета №14',
                component: 'Компонент',
            },
            {
                section: 'Без глютена',
                component: 'Компонент',
            },
            {
                section: 'Без аллергенов',
                component: 'Компонент',
            },
        ],
        id: 9,
    },
    {
        icon: <INational />,
        body: 'Национальные блюда',
        description: [
            {
                section: 'Американская кухня',
                component: 'Компонент',
            },
            {
                section: 'Армянская кухня',
                component: 'Компонент',
            },
            {
                section: 'Греческая кухня',
                component: 'Компонент',
            },
            {
                section: 'Грузинская кухня',
                component: 'Компонент',
            },
            {
                section: 'Итальянская кухня',
                component: 'Компонент',
            },
            {
                section: 'Испанская кухня',
                component: 'Компонент',
            },
            {
                section: 'Китайская кухня',
                component: 'Компонент',
            },
            {
                section: 'Мексиканская кухня',
                component: 'Компонент',
            },
            {
                section: 'Паназиатская кухня',
                component: 'Компонент',
            },
            {
                section: 'Русская кухня',
                component: 'Компонент',
            },
            {
                section: 'Турецкая кухня',
                component: 'Компонент',
            },
            {
                section: 'Французская кухня',
                component: 'Компонент',
            },
            {
                section: 'Шведская кухня',
                component: 'Компонент',
            },
            {
                section: 'Японская кухня',
                component: 'Компонент',
            },
        ],
        id: 10,
    },
    {
        icon: <ISause />,
        body: 'Соусы',
        description: [
            {
                section: 'Соусы мясные',
                component: 'Компонент',
            },
            {
                section: 'Соусы сырные',
                component: 'Компонент',
            },
            {
                section: 'Маринады',
                component: 'Компонент',
            },
        ],
        id: 11,
    },
    {
        icon: <IDrinks />,
        body: 'Напитки',
        description: [
            {
                section: 'Соки и фреши',
                component: 'Компонент',
            },
            {
                section: 'Смузи',
                component: 'Компонент',
            },
            {
                section: 'Компоты',
                component: 'Компонент',
            },
            {
                section: 'Кисели',
                component: 'Компонент',
            },
            {
                section: 'Кофе',
                component: 'Компонент',
            },
            {
                section: 'Лечебный чай',
                component: 'Компонент',
            },
            {
                section: 'Квас',
                component: 'Компонент',
            },
            {
                section: 'Коктейли',
                component: 'Компонент',
            },
            {
                section: 'Алкогольные',
                component: 'Компонент',
            },
        ],
        id: 12,
    },
    {
        icon: <IJar />,
        body: 'Заготовки',
        description: [
            {
                section: 'Мясные заготовки',
                component: 'Компонент',
            },
            {
                section: 'Рыбные заготовки',
                component: 'Компонент',
            },
            {
                section: 'Из огурцов',
                component: 'Компонент',
            },
            {
                section: 'Из томатов',
                component: 'Компонент',
            },
            {
                section: 'Из грибов',
                component: 'Компонент',
            },
            {
                section: 'Овощные заготовки',
                component: 'Компонент',
            },
            {
                section: 'Салаты, икра',
                component: 'Компонент',
            },
            {
                section: 'Из фруктов и ягод',
                component: 'Компонент',
            },
        ],
        id: 13,
    },
];
