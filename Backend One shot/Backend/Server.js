import express from 'express';
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is Ready');
// });
app.get('/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'This is joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'this is another joke'
        },
        {
            id:3,
            title:'third joke',
            content:'This is third joke'
        },
        {
            id:4,
            tilte:'Fourth',
            content:'this is Fourth joke'
        },
        {
            id:5,
            title:'fivth joke',
            content:'this is fifth joke'

        }
    ];
    res.json(jokes);

})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server Started Successfully at http://localhost:${port}`);
});