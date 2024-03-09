import "./Recipes.css";
import imageOmelette from "../assets/images/image-omelette.jpeg";

const Recipe = () => {
  return (
    <>
      <main className="flex justify-center custom:pt-32">
        <article className="bg-recipeBgColor text-recipePColor custom:max-w-[46rem] custom:p-[2.6rem] custom:rounded-2xl">
          <header className="flex flex-col items-center">
            <img
              className="w-full custom:rounded-xl"
              src={imageOmelette}
              alt="Photo of an omelette dish in a plate"
              id="photo"
            />

            <section className="p-[1.9rem] custom:py-[1.9rem] custom:px-0">
              <h1 className="text-[2.2rem] custom:text-[2.4rem]">Simple Omelette Recipe</h1>

              <p className="pt-6 leading-6 custom:leading-[1.4rem]">
                An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
              </p>
            </section>

            <section className="px-8 py-4 custom:p-0 custom:w-full">
              <div className="bg-recipePreparationBackgroundColor rounded-lg px-7 py-4">
                <p className="text-recipePreparationTitleColor leading-[1.8rem] text-[1.2rem] font-bold">
                  Preparation time
                </p>

                <ul className="list-disc ml-4 custom:leading-[1.4rem]">
                  <li>
                    <span>
                      <strong>Total</strong>: Approximately 10 minutes
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Preparation</strong>: 5 minutes
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Cooking</strong>: 5 minutes
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </header>

          <section className="p-[1.9rem] custom:py-[1.9rem] custom:px-0 custom:w-full">
            <h2 className="text-[1.7rem]">Ingredients</h2>
            <ul className="list-disc ml-4 custom:leading-[1.4rem]">
              <li>
                <span>2-3 large eggs</span>
              </li>
              <li>
                <span>Salt, to taste</span>
              </li>
              <li>
                <span>Pepper, to taste</span>
              </li>
              <li>
                <span>1 tablespoon of butter or oil</span>
              </li>
              <li>
                <span>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </section>

          <hr className="bg-recipeLineColor w-full-minus-4rem mx-auto h-px border-none custom:w-full" />

          <section className="p-[1.9rem] custom:py-[1.9rem] custom:px-0 custom:w-full">
            <h2 className="text-[1.7rem]">Instructions</h2>
            <ol className=" text-recipeSubtitleColor font-bold ml-0 px-4 py-[0.3rem] list-decimal custom:leading-[1.4rem] pt-[0.4rem] pb-0 ">
              <li>
                <span>
                  <strong>Beat the eggs</strong>: In a bowl, beat the eggs with
                  a pinch of salt and pepper until they are well mixed. You can
                  add a tablespoon of water or milk for a fluffier texture.
                </span>
              </li>

              <li>
                <span>
                  <strong>Heat the pan</strong>: Place a non-stick frying pan
                  over medium heat and add butter or oil.
                </span>
              </li>

              <li>
                <span>
                  <strong>Cook the omelette</strong>: Once the butter is melted
                  and bubbling, pour in the eggs. Tilt the pan to ensure the
                  eggs evenly coat the surface.
                </span>
              </li>

              <li>
                <span>
                  <strong>Add fillings (optional)</strong>: When the eggs begin
                  to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the
                  omelette.
                </span>
              </li>

              <li>
                <span>
                  <strong>Fold and serve</strong>: As the omelette continues to
                  cook, carefully lift one edge and fold it over the fillings.
                  Let it cook for another minute, then slide it onto a plate.
                </span>
              </li>

              <li>
                <span>
                  <strong>Enjoy</strong>: Serve hot, with additional salt and
                  pepper if needed.
                </span>
              </li>
            </ol>
          </section>

          <hr className="bg-recipeLineColor w-full-minus-4rem mx-auto h-px border-none custom:w-full" />

          <section className="p-[1.9rem] custom:py-[1.9rem] custom:p-0 custom:w-full">
            <h2 className="text-[1.7rem]">Nutrition</h2>

            <p className="py-4 custom:leading-[1.4rem]">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table className="w-full border-collapse">
              <tr className="border-b-recipeLineColor border-b border-solid">
                <td className="w-6/12 pl-8 py-[1.2rem] px-0 custom:py-[0.9rem]">Calories</td>
                <td className="text-recipeSubtitleColor font-bold w-6/12 py-[0.3rem] px-0 custom:py-[0.9rem]">277kcal</td>
              </tr>
              <tr className="border-b-recipeLineColor border-b border-solid">
                <td className="w-6/12 pl-8 py-[1.2rem] px-0 custom:py-[0.9rem]">Carbs</td>
                <td className="text-recipeSubtitleColor font-bold w-6/12 py-[0.3rem] px-0 custom:py-[0.9rem]">0g</td>
              </tr>
              <tr className="border-b-recipeLineColor border-b border-solid">
                <td className="w-6/12 pl-8 py-[1.2rem] px-0 custom:py-[0.9rem]">Protein</td>
                <td className="text-recipeSubtitleColor font-bold w-6/12 py-[0.3rem] px-0 custom:py-[0.9rem]">20g</td>
              </tr>
              <tr>
                <td className="w-6/12 pl-8 py-[1.2rem] px-0 custom:py-[0.9rem]">Fat</td>
                <td className="text-recipeSubtitleColor font-bold w-6/12 py-[0.3rem] px-0 custom:py-[0.9rem]">22g</td>
              </tr>
            </table>
          </section>
        </article>
      </main>
      
      <footer className="hidden custom:p-12 custom:block">
    <div className="text-base text-center">
      Challenge by <a className="text-footerColor underline" href="https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm" target="_blank">Frontend Mentor</a>,
      Coded by <a className="text-footerColor underline" href="https://github.com/MJZtein">MJZtein</a>.
    </div>
  </footer>
    </>
  );
};

export default Recipe;
