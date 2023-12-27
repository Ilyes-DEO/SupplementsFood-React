import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, useMediaQuery, List, ListItem, ListItemText } from "@mui/material";
import Supplements from "./SupplementsCards";
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  interface Category {
    id: number;
    name: string;
    supplements: Supplement[];
  }

  interface Supplement {
    id: number;
    name: string;
    maker: string;
    price: number;
    img_supplements: string;
  }

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8741/api/login_check",
        { email: "ilyes@email.com", password: "1234" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => res.data.token)
      .then((token) => fetchCategoryList(token));
  }, []);

  const fetchCategoryList = (token: string) => {
    axios
      .get("http://127.0.0.1:8741/api/category", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => res.data)
      .then((categories) => setCategories(categories));
  };

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
        // Centrer la liste pour les petits écrans
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
        // Affichage pour les écrans plus larges
        <div className="buttonContainer">
          <Button
            key={0}
            className='buttonCat'
            variant="outlined"
            style={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: selectedCategory === null ? 'grey' : 'transparent',
            }}
            onClick={() => handleShowAllClick()}
          >
            Toutes les cat
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              className='buttonCat'
              variant="outlined"
              style={{
                color: 'white',
                borderColor: 'white',
                backgroundColor: selectedCategory === category.id ? 'grey' : 'transparent',
              }}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}
      <br />
      {selectedCategory === null ? (
        <Supplements categories={categories} />
      ) : (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories
            .find((category) => category.id === selectedCategory)
            ?.supplements.map((supplement) => (
              <RouterLink key={supplement.id} to={`/supplements/${supplement.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ width: 250, bgcolor: '#FFFFF', maxWidth: '100%', boxShadow: 'lg' }}>
                <AspectRatio minHeight="230px" sx={{ minWidth: 200 }}>
                <img src={supplement.img_supplements} />
              </AspectRatio>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography level="title-lg">{supplement.name}</Typography>
                    <Typography variant="body2">{supplement.maker}</Typography>
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold', color: 'red' }}>
                      {supplement.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </Typography>
                  </CardContent>
                </Card>
              </RouterLink>
            ))}
        </div>
      )}
    </div>
  );
  
};

export default CategoryFilter;
