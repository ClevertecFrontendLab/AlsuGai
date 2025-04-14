import Intro from '~/components/Intro/Intro';
import NewRecipes from '~/components/NewRecipes/NewRecipes';
import TheJuiciestSection from '~/components/TheJuiciestSection/TheJuiciestSection';

export const HomePage = () => (
    <>
        <Intro titleText='Приятного аппетита!' />
        <NewRecipes />
        <TheJuiciestSection />
    </>
);
