import { ComponentWithAs, IconProps } from '@chakra-ui/icons';
import { JSX } from 'react';

import {
    BookmarkHeart,
    Desserts,
    EmojiHeartEyes,
    FirstCourses,
    Salads,
    Vegan,
} from '~/assets/icons/icons';

export type IconCounterType = {
    icon: () => JSX.Element;
    count: number;
    spacing: string;
    padding: string;
};

interface IContent {
    id: number;
    image: string;
    name: string;
    text: string;
    iconCounters: IconCounterType[];
    icon: ComponentWithAs<'svg', IconProps>;
    category: string;
    bgColorTag: string;
}

export const content: IContent[] = [
    {
        image: '../../src/assets/images/new_recipes/solyanka_with_mashrooms.png ',
        name: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' }],
        category: 'Первые блюда',
        icon: FirstCourses,
        bgColorTag: 'lime.150',
        id: 1,
    },
    {
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icon: Vegan,
        category: 'Веганские блюда',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        bgColorTag: 'lime.150',
        id: 2,
    },
    {
        image: '../../src/assets/images/new_recipes/pancake.png',
        name: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icon: Desserts,
        category: 'Десерты, выпечка',
        iconCounters: [{ icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' }],
        bgColorTag: 'lime.150',
        id: 3,
    },
    {
        id: 4,
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        icon: Salads,
        category: 'Салаты',
        bgColorTag: 'lime.150',
    },
    {
        id: 5,
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Салат "Здоровье"',
        text: 'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        iconCounters: [],
        icon: Salads,
        category: 'Салаты',
        bgColorTag: 'lime.150',
    },
    {
        id: 6,
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Капустные котлеты',
        text: 'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        iconCounters: [
            { icon: BookmarkHeart, count: 2, spacing: '6px', padding: '4px' },
            { icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' },
        ],
        icon: Vegan,
        category: 'Веганские блюда',
        bgColorTag: 'lime.150',
    },
    {
        id: 7,
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Оладьи на кефире "Пышные"',
        text: 'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        iconCounters: [{ icon: EmojiHeartEyes, count: 1, spacing: '6px', padding: '4px' }],
        icon: Desserts,
        category: 'Десерты, выпечка',
        bgColorTag: 'lime.150',
    },
    {
        id: 8,
        image: '../../src/assets/images/new_recipes/cabbage_patties.png',
        name: 'Солянка с грибами',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        iconCounters: [{ icon: BookmarkHeart, count: 1, spacing: '6px', padding: '4px' }],
        icon: FirstCourses,
        category: 'Первые блюда',
        bgColorTag: 'lime.150',
    },
];
