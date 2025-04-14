import Intro from '~/components/Intro/Intro';
import NewRecipes from '~/components/NewRecipes/NewRecipes';

export const HomePage = () => (
    <>
        <Intro titleText='Приятного аппетита!' />
        <NewRecipes />
    </>
);
