const express = require('express');
const path = require('path');
const app = express();

//serve the html file
app.get('/',(req,res) => { res.sendFile(path.join(__dirname,'index.html'));

});

//listen on port 8000 
const PORT = 8000;
app.listen(PORT, () => { console.log('Server is running on http:/localhost:${PORT}');
});