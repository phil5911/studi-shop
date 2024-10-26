/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import CardArticle from './CardArticle'
import Grid from '@mui/material/Grid2'


function ListArticles(props) {
  if (!props.articles || props.articles.length === 0) {
    return <div><h1>Pas d'article</h1></div>
  } else {
    const articlesListing = props.articles.map((article, index) =>
    (<Grid item justifyContent="center"
    alignItems="center" xs={12} md={3}>
      <CardArticle key={index} name={article.name} price={article.price} img={article.img} />
    </Grid>)
    )
    console.log(articlesListing)

    return (
      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{background: 'grey', color: 'white', height: '100%'}}
      >

        <Grid item xs={12} md={12}>
          <h1>Les pizzas di Mario</h1>
          <h2>Let's go!!!!!</h2>
        </Grid>
        {articlesListing}

        <Grid item xs={12} md={12}>
          <h2>On en vendra plus que Luigi</h2>
        </Grid>
      </Grid>
    )
  }
}

export default ListArticles
          








