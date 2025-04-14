import { ReactNode } from 'react';

import { IBookMark, IDesserts, IEntree, ISalad, ISmile, IVegan } from '~/assets/icons/icons';

interface IContent {
    image: string;
    name: string;
    text: string;
    icon: ReactNode;
    category: string;
    iconSave?: ReactNode;
    save?: string;
    iconLikes?: ReactNode;
    likes?: string;
    id: number;
}

export const content: IContent[] = [
    {
        image: '../../src/assets/images/new_recipes/solyanka_with_mashrooms.png ',
        name: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icon: <IEntree />,
        category: 'Первые блюда',
        iconSave: <IBookMark />,
        save: '1',
        id: 1,
    },
    {
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icon: <IVegan />,
        category: 'Веганские блюда',
        iconSave: <IBookMark />,
        save: '2',
        iconLikes: <ISmile />,
        likes: '1',
        id: 2,
    },
    {
        image: '../../src/assets/images/new_recipes/pancake.png',
        name: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icon: <IDesserts />,
        category: 'Десерты, выпечка',
        iconLikes: <ISmile />,
        likes: '1',
        id: 3,
    },
    {
        image: '../../src/assets/images/new_recipes/salad_health.png',
        name: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        icon: <ISalad />,
        category: 'Салаты',
        id: 4,
    },
    {
        image: '../../src/assets/images/new_recipes/pancake.png',
        name: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icon: <IDesserts />,
        category: 'Десерты, выпечка',
        iconLikes: <ISmile />,
        likes: '1',
        id: 5,
    },
];
