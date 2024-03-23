import React, { useEffect, useState } from "react";
import { Button, useMediaQuery, List, ListItem, ListItemText } from "@mui/material";
import Supplements from "../Molecules/AllSupplementsCards";
import { Link as RouterLink } from 'react-router-dom';
import { Category } from '../../Services/Data/SupplementInterfaces'; 
import { loginAndGetToken, fetchCategoryList } from '../../Services/Data/apiServices';
import { AllProductButton } from "../Atomes/AllProductButton";
import { CardSupplements } from "../Molecules/CardSupplements";
import { CategoryProductButton } from "../Atomes/CategoryProductButton";
import { DivStyleSupplements } from "../Atomes/divStyleSupplements";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');


  useEffect(() => {
    loginAndGetToken().then((token) => {
      fetchCategoryList(token).then(setCategories);
    });
  }, []);

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  const handleShowAllClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <br />
      {isSmallScreen ? (
        <div style={{ margin: 'auto', maxWidth: '600px' }}>
          <List>
            <ListItem
              button
              selected={selectedCategory === null}
              onClick={() => handleShowAllClick()}
              style={{ color: 'white', borderColor: 'white' }}
            >
              <ListItemText primary="Toutes les cat" />
            </ListItem>
            {categories.map((category) => (
              <ListItem
                key={category.id}
                button
                selected={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                style={{ color: 'white', borderColor: 'white' }}
              >
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <div className="buttonContainer">
          <AllProductButton title="TOUS LES PRODUITS" onClick={handleShowAllClick} backgroundColor={selectedCategory === null ? 'grey' : 'transparent'}/>
          {categories.map((category) => (
            <CategoryProductButton
              name={category.name}
              onClick={() => handleCategoryClick(category.id)}
              backgroundColor={selectedCategory === category.id ? 'grey' : 'transparent'}
              key={category.id}
            />
          ))}
        </div>
      )}
      <br />
      {selectedCategory === null ? (
        <Supplements categories={categories} />
      ) : (
        <DivStyleSupplements>
          {categories
            .find((category) => category.id === selectedCategory)
            ?.supplements.map((supplement) => (
              <RouterLink key={supplement.id} to={`/supplements/${supplement.id}`} style={{ textDecoration: 'none' }}>
                <CardSupplements key={supplement.id} supplement={supplement} />
              </RouterLink>
            ))}
        </DivStyleSupplements>
      )}
    </div>
  );
  
};

export default CategoryFilter;
