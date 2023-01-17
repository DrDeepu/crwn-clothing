import CategoryItem from "../category-item/category-item.component.jsx";
import categories from "./categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((categories) => {
        return <CategoryItem key={categories.id} category={categories} />;
      })}
    </div>
  );
};

export default Directory;
