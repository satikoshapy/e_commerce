import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';


const Review = ({ checkoutToken, order }) => {
    
    return (
        <>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: "10px 0"}} key={product.name}>
                         <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                         <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>

                    </ListItem>
                ))}
               {/*/this is to determine whether the shipment is domestic or int */}
               
               {checkoutToken.merchant.country === "US" ? 
                <ListItem style={{padding: "10px 0"}} key={checkoutToken.shipping_methods[0].description}>
                         <ListItemText primary={`Shipping: ${checkoutToken.shipping_methods[0].description}`} secondary={`Provider: ${checkoutToken.shipping_methods[0].provider}`}/>
                         <Typography variant="body2">{checkoutToken.shipping_methods[0].price.formatted_with_symbol}</Typography>

                </ListItem>

                :

                <ListItem style={{padding: "10px 0"}} key={checkoutToken.shipping_methods[1].description}>
                         <ListItemText primary={`Shipping: ${checkoutToken.shipping_methods[1].description}`} secondary={`Provider: ${checkoutToken.shipping_methods[1].provider}`}/>
                         <Typography variant="body2">{checkoutToken.shipping_methods[1].price.formatted_with_symbol}</Typography>

                </ListItem>
                
                }
                {/*Total */}

                <ListItem style={{padding: "10px 0"}}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {checkoutToken.merchant.country === "US" ?  `$ ${parseInt(checkoutToken.live.subtotal.formatted) + parseInt(checkoutToken.shipping_methods[0].price.formatted)}`
                            
                        
                        : `$ ${parseInt(checkoutToken.live.subtotal.formatted) + parseInt(checkoutToken.shipping_methods[1].price.formatted)}` }
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
