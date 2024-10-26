import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import defaultimg from './../img/calzone-pizza.webp'


function CardArticle(props) {
    return (
        <div>
            <Card sx={{ maxWidth: 345, opacity: '0.5'}}>
                <CardActionArea>
                <CardMedia
                    component='img'
                    height="140"
                    image={props.img ?props.img: defaultimg}
                    alt={props.name}
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pizza {props.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Prix: {props.price}€
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Ajouter au panier
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
            
export default CardArticle





